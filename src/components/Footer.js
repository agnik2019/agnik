import React from "react";
import { copyrightYear, lastUpdated } from "../siteMeta";
import VisitCount from "./VisitCount";
import "./footer.scss";

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>
        © {copyrightYear} Agnik Saha · Hosted on{" "}
        <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">
          GitHub Pages
        </a>
        {" · "}
        Last updated: {lastUpdated}
      </p>
      <VisitCount />
    </footer>
  );
}
