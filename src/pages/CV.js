import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  advisors,
  education,
  experience,
  profile,
  skills,
} from "../content";
import Page from "../components/Page";
import { lineAnim, rise } from "../animation";
import gsuLogo from "../img/logos/gsu.png";
import iitkgpLogo from "../img/logos/iitkgp.png";
import iemLogo from "../img/logos/iem.png";
import rpsuLogo from "../img/logos/rpsu.png";

const logos = {
  gsu: gsuLogo,
  iitkgp: iitkgpLogo,
  iem: iemLogo,
  rpsu: rpsuLogo,
};

function CvEntry({ logo, title, meta, children }) {
  return (
    <li className="cv-item">
      <div className={"cv-logo" + (logo === "iitkgp" ? " cv-logo-wide" : "")}>
        <img src={logos[logo]} alt="" />
      </div>
      <div className="cv-copy">
        {title}
        <p className="meta">{meta}</p>
        {children}
      </div>
    </li>
  );
}

export default function CV() {
  return (
    <Page>
      <div className="rise">
        <motion.h1 variants={rise}>CV</motion.h1>
      </div>
      <motion.div className="rule" variants={lineAnim} />
      <p className="role">
        {profile.name}
        <br />
        {profile.role}, {profile.affiliation}
      </p>
      <ul className="profile-links">
        <li>
          <a href={"mailto:" + profile.email}>{profile.email}</a>
        </li>
        {profile.links
          .filter((link) => link.label !== "CV" && link.label !== "Email")
          .map((link) => (
            <li key={link.label}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </li>
          ))}
      </ul>

      <section className="section" aria-labelledby="education">
        <h2 id="education">Education</h2>
        <ul className="cv-list">
          {education.map((item) => (
            <CvEntry
              key={item.id}
              logo={item.logo}
              title={<h3>{item.degree}</h3>}
              meta={item.school + " · " + item.dates}
            >
              <p>
                {item.detail}
                {item.thesis ? (
                  <>
                    {" "}
                    Thesis:{" "}
                    <a
                      href={item.thesis.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.thesis.title}
                    </a>
                    . {item.thesis.note}
                  </>
                ) : null}
              </p>
            </CvEntry>
          ))}
        </ul>
      </section>

      <section className="section" aria-labelledby="experience">
        <h2 id="experience">Experience</h2>
        <ul className="cv-list">
          {experience.map((item) => (
            <CvEntry
              key={item.id}
              logo={item.logo}
              title={<h3>{item.role}</h3>}
              meta={item.org + " · " + item.dates}
            >
              <p>{item.detail}</p>
            </CvEntry>
          ))}
        </ul>
      </section>

      <section className="section" aria-labelledby="advisors">
        <h2 id="advisors">Advisors</h2>
        <ul className="cv-list">
          {advisors.map((person) => (
            <CvEntry
              key={person.name}
              logo={person.logo}
              title={
                <h3>
                  <a href={person.href} target="_blank" rel="noopener noreferrer">
                    {person.name}
                  </a>
                </h3>
              }
              meta={person.role}
            />
          ))}
        </ul>
      </section>

      <section className="section" aria-labelledby="skills">
        <h2 id="skills">Skills</h2>
        <ul className="skill-list">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="section" aria-labelledby="papers">
        <h2 id="papers">Publications</h2>
        <p>
          A full list with venues and links is on the{" "}
          <Link to="/publications">publications page</Link>. Profiles for advisors
          and coauthors are in the{" "}
          <Link to={{ pathname: "/", hash: "#collaborators" }}>
            collaborators section
          </Link>
          .
        </p>
      </section>
    </Page>
  );
}
