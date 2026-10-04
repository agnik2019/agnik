import React from "react";
import { motion } from "framer-motion";
import { teaching } from "../content";
import Page from "../components/Page";
import { lineAnim, rise } from "../animation";

export default function Teaching() {
  return (
    <Page>
      <div className="rise">
        <motion.h1 variants={rise}>Teaching</motion.h1>
      </div>
      <motion.div className="rule" variants={lineAnim} />
      <motion.p className="lede" variants={rise}>
        Courses I have taught and assisted, with lecture notes from my time as a lecturer.
      </motion.p>
      <motion.ul
        className="project-list"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08 } },
        }}
      >
        {teaching.map((item) => (
          <motion.li className="project" key={item.id} variants={rise}>
            <p className="status">{item.term}</p>
            <h2>
              {item.role}
              <span className="teach-org"> · {item.org}</span>
            </h2>
            {item.courses ? (
              <ul className="course-list">
                {item.courses.map((course) => (
                  <li key={course.name}>{course.name}</li>
                ))}
              </ul>
            ) : null}
            {item.instructor ? (
              <p>
                Instructor:{" "}
                <a href={item.instructor.href} target="_blank" rel="noopener noreferrer">
                  {item.instructor.name}
                </a>
              </p>
            ) : null}
            {item.detail ? <p>{item.detail}</p> : null}
            {item.materials
              ? item.materials.map((group) => (
                  <div className="material-group" key={group.course}>
                    <h3>{group.course}</h3>
                    <ul className="resource-links">
                      {group.files.map((file) => (
                        <li key={file.href}>
                          <a href={file.href} target="_blank" rel="noopener noreferrer">
                            {file.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              : null}
            {item.repo || (item.links && item.links.length) ? (
              <ul className="resource-links">
                {item.repo ? (
                  <li>
                    <a href={item.repo} target="_blank" rel="noopener noreferrer">
                      All teaching materials
                    </a>
                  </li>
                ) : null}
                {item.links
                  ? item.links.map((link) => (
                      <li key={link.href}>
                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                          {link.label}
                        </a>
                      </li>
                    ))
                  : null}
              </ul>
            ) : null}
          </motion.li>
        ))}
      </motion.ul>
    </Page>
  );
}
