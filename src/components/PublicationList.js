import React from "react";
import { motion } from "framer-motion";
import { rise } from "../animation";

export default function PublicationList({ items }) {
  return (
    <motion.ol
      className="pub-list"
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08 } },
      }}
    >
      {items.map((paper) => (
        <motion.li className="pub" key={paper.id} variants={rise}>
          <h3>{paper.title}</h3>
          <p className="authors">{paper.authors}</p>
          <p className="venue">
            {paper.venue}, {paper.year}
          </p>
          {paper.links.length > 0 ? (
            <ul className="resource-links">
              {paper.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </motion.li>
      ))}
    </motion.ol>
  );
}
