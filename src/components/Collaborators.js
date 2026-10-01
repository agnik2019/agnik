import React from "react";
import { motion } from "framer-motion";
import { collaboratorGroups } from "../content";
import { rise } from "../animation";
import { useReveal } from "./useScroll";

function Group({ group }) {
  const [ref, controls] = useReveal();

  return (
    <div className="people-group">
      <h3 className="group-title">{group.title}</h3>
      <motion.div
        className="people"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08 } },
        }}
      >
        {group.people.map((person) => (
          <motion.article className="person" variants={rise} key={person.id}>
            <h3>{person.name}</h3>
            <p className="meta">
              {person.role}
              {" · "}
              {person.affiliation}
            </p>
            {person.interests ? <p>{person.interests}</p> : null}
            {person.citations ? (
              <p className="meta">
                {person.citations} citations · h-index {person.hIndex} · i10-index{" "}
                {person.i10}
              </p>
            ) : null}
            {person.note ? <p className="meta">{person.note}</p> : null}
            {person.shared ? (
              <p className="meta">Shared paper: {person.shared}</p>
            ) : null}
            <ul className="resource-links">
              {person.scholar ? (
                <li>
                  <a href={person.scholar} target="_blank" rel="noopener noreferrer">
                    Google Scholar
                  </a>
                </li>
              ) : null}
              {person.homepage ? (
                <li>
                  <a href={person.homepage} target="_blank" rel="noopener noreferrer">
                    Homepage
                  </a>
                </li>
              ) : null}
              {person.paper ? (
                <li>
                  <a href={person.paper} target="_blank" rel="noopener noreferrer">
                    Paper
                  </a>
                </li>
              ) : null}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}

export default function Collaborators() {
  return (
    <section className="section" id="collaborators" aria-labelledby="collaborators-heading">
      <h2 id="collaborators-heading">Collaborators</h2>
      <p className="lede">
        Advisors and coauthors, with affiliations and research areas taken from Google Scholar.
      </p>
      {collaboratorGroups.map((group) => (
        <Group group={group} key={group.id} />
      ))}
    </section>
  );
}
