import React from "react";
import { motion } from "framer-motion";
import { profile, publications } from "../content";
import PublicationList from "../components/PublicationList";
import Page from "../components/Page";
import { lineAnim, rise } from "../animation";

export default function Publications() {
  return (
    <Page>
      <div className="rise">
        <motion.h1 variants={rise}>Publications</motion.h1>
      </div>
      <motion.div className="rule" variants={lineAnim} />
      <motion.p className="lede" variants={rise}>
        Papers and abstracts on cancer communication, knowledge graphs, and model safety.{" "}
        <a
          href={profile.links.find(function (link) { return link.label === "Scholar"; }).href}
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Scholar
        </a>
        .
      </motion.p>
      <PublicationList items={publications} />
    </Page>
  );
}
