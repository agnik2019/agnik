import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import portrait from "../img/man1.png";
import { bio, news, profile, publications } from "../content";
import PublicationList from "../components/PublicationList";
import Collaborators from "../components/Collaborators";
import Page from "../components/Page";
import Reveal from "../components/Reveal";
import { fade, heroPhoto, lineAnim, titleAnim } from "../animation";

export default function Home() {
  const { hash } = useLocation();
  const selected = publications.filter((paper) => paper.featured).slice(0, 4);

  useEffect(() => {
    if (!hash) {
      return;
    }
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView();
    }
  }, [hash]);

  return (
    <Page>
      <section className="hero">
        <div className="portrait-frame">
          <motion.img
            className="portrait"
            variants={heroPhoto}
            src={portrait}
            alt={profile.portraitAlt}
          />
        </div>
        <div>
          <div className="rise">
            <motion.h1 variants={titleAnim}>{profile.name}</motion.h1>
          </div>
          <motion.p className="role" variants={fade}>
            {profile.role}
            <br />
            {profile.affiliation}
          </motion.p>
          <motion.div className="rule" variants={lineAnim} />
          {bio.map((paragraph) => (
            <motion.p
              variants={fade}
              key={typeof paragraph === "string" ? paragraph.slice(0, 24) : "intro"}
            >
              {typeof paragraph === "string"
                ? paragraph
                : paragraph.map((part, index) =>
                    typeof part === "string" ? (
                      part
                    ) : (
                      <strong key={index}>{part.strong}</strong>
                    )
                  )}
            </motion.p>
          ))}
          <motion.ul className="profile-links" variants={fade}>
            {profile.links.map((link) => (
              <li key={link.label}>
                {link.internal ? (
                  <Link to={link.href}>{link.label}</Link>
                ) : (
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      <Reveal>
        <section className="section" aria-labelledby="selected-papers">
          <h2 id="selected-papers">Selected publications</h2>
          <PublicationList items={selected} />
          <Link className="more-link" to="/publications">
            All publications
          </Link>
        </section>
      </Reveal>

      <Reveal>
        <section className="section" aria-labelledby="news">
          <h2 id="news">News</h2>
          <ul className="news-list">
            {news.map((item) => (
              <li className="news-item" key={item.id}>
                <p className="meta">{item.date}</p>
                <p>
                  {item.text}{" "}
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.linkLabel}
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      <Collaborators />

      <Reveal>
        <section className="section" id="contact" aria-labelledby="contact-heading">
          <h2 id="contact-heading">Contact</h2>
          <p>
            {profile.role}, {profile.affiliation}. {profile.location}.
          </p>
          <p>
            <a href={"mailto:" + profile.email}>{profile.email}</a>
          </p>
          <p className="lede">
            Write to me about research collaboration, public-health communication, or online communities.
          </p>
        </section>
      </Reveal>
    </Page>
  );
}
