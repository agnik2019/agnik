import React from "react";
import { motion } from "framer-motion";
import { researchProjects } from "../content";
import Page from "../components/Page";
import { lineAnim, rise } from "../animation";

export default function Research() {
  return (
    <Page>
      <div className="rise">
        <motion.h1 variants={rise}>Research</motion.h1>
      </div>
      <motion.div className="rule" variants={lineAnim} />
      <motion.p className="lede" variants={rise}>
        I evaluate language models for cancer communication, and I build knowledge graphs that connect marketing theory with consumer data.
      </motion.p>
      <motion.ul
        className="project-list"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08 } },
        }}
      >
        {researchProjects.map((project) => (
          <motion.li className="project" key={project.id} variants={rise}>
            <p className="status">{project.status}</p>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>
              <strong>Contribution. </strong>
              {project.contribution}
            </p>
            <ul className="resource-links">
              {project.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </motion.ul>
    </Page>
  );
}
