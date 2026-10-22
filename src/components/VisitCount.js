import React, { useEffect, useState } from "react";

// Abacus (https://abacus.jasoncameron.dev) stores the count. No API key is
// required for /hit and /get, so nothing secret is shipped to the browser.
// Development uses a separate counter from the production site.
const NAMESPACE = "agnik2019.github.io";
const COUNTER =
  process.env.NODE_ENV === "production" ? "site-visits" : "site-visits-dev";
const STORAGE_KEY = "agnik-site-visit:" + COUNTER;

function loadVisitCount() {
  if (loadVisitCount.promise) {
    return loadVisitCount.promise;
  }

  loadVisitCount.promise = (async () => {
    let alreadyCounted = false;
    try {
      alreadyCounted = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch (error) {
      alreadyCounted = false;
    }

    if (!alreadyCounted) {
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch (error) {
        // Private mode can block storage. The in-memory promise still
        // prevents a second increment during this page load.
      }
    }

    const action = alreadyCounted ? "get" : "hit";
    const response = await fetch(
      "https://abacus.jasoncameron.dev/" +
        action +
        "/" +
        NAMESPACE +
        "/" +
        COUNTER
    );
    if (!response.ok) {
      if (!alreadyCounted) {
        try {
          sessionStorage.removeItem(STORAGE_KEY);
        } catch (error) {
          // Ignore storage failures.
        }
      }
      throw new Error("Visit counter unavailable");
    }
    const data = await response.json();
    if (typeof data.value !== "number") {
      throw new Error("Visit counter unavailable");
    }
    return data.value;
  })().catch((error) => {
    loadVisitCount.promise = null;
    throw error;
  });

  return loadVisitCount.promise;
}

export default function VisitCount() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    let active = true;
    loadVisitCount()
      .then((value) => {
        if (active) {
          setCount(value);
        }
      })
      .catch(() => {
        if (active) {
          setCount(null);
        }
      });
    return () => {
      active = false;
    };
  }, []);

  if (count === null) {
    return null;
  }

  return (
    <p className="site-visits">
      Site visits: {count}
    </p>
  );
}
