import React from "react";
import { motion } from "framer-motion";
import Collaborators from "../components/Collaborators";
import Page from "../components/Page";
import { lineAnim, rise } from "../animation";

export default function CollaboratorsPage() {
  return (
    <Page>
      <div className="rise">
        <motion.h1 id="collaborators-heading" variants={rise}>
          Collaborators
        </motion.h1>
      </div>
      <motion.div className="rule" variants={lineAnim} />
      <Collaborators />
    </Page>
  );
}
