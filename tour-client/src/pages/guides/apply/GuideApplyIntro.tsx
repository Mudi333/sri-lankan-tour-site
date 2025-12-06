import React from "react";
import { Link } from "react-router-dom";
import styles from "../../GuideApply.module.css";
import { Section } from "@/components/Layout/Section";

function GuideApplyIntro() {
  return (
      <Section>
    <section className={styles.guideApply}>
      <div className={styles.guideApplyInner}>
        <h1 className={styles.tittle}>Become a Tour Guide</h1>
        <p className={styles.lead}>
          Share your knowledge of Sri Lanka, meet travelers from around the
          world, and earn by offering authentic local experiences.
        </p>
        <ul className={styles.benifitsList}>
          <li>✔ Work on your own schedule</li>
          <li>✔ Show your tours to international visitors</li>
          <li>✔ Receive a verified guide profile</li>
        </ul>

        <Link to="/guides/apply/form" className={styles.primaryBtn}>
          Start Application
        </Link>
      </div>
    </section>
    </Section>
  );
}

export default GuideApplyIntro;
