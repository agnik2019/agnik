import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTheme } from "./Theme";

const links = [
  { to: "/", label: "Home", exact: true },
  { to: "/research", label: "Research", exact: true },
  { to: "/teaching", label: "Teaching", exact: true },
  { to: "/publications", label: "Publications", exact: true },
  { to: "/collaborators", label: "Collaborators", exact: true },
  { to: "/cv", label: "CV", exact: true },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const dark = theme === "dark";

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="nav">
      <div className="nav-inner">
        <NavLink exact to="/" className="nav-logo">
          Agnik Saha
        </NavLink>
        <div className="nav-actions">
          <button
            type="button"
            className={dark ? "theme-toggle is-dark" : "theme-toggle"}
            aria-pressed={dark}
            aria-label={dark ? "Use white background" : "Use black background"}
            onClick={toggleTheme}
          >
            <span className="theme-knob" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            Menu
          </button>
          <ul className={open ? "nav-links open" : "nav-links"}>
            {links.map((link) => (
              <li key={link.to}>
                <NavLink exact={link.exact} to={link.to} activeClassName="active">
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
