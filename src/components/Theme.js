import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  theme: "light",
  toggleTheme: function () {},
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(function () {
    try {
      return localStorage.getItem("theme") === "dark" ? "dark" : "light";
    } catch (error) {
      return "light";
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch (error) {
      return undefined;
    }
  }, [theme]);

  function toggleTheme() {
    setTheme(function (current) {
      return current === "dark" ? "light" : "dark";
    });
  }

  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
