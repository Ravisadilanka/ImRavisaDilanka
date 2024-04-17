import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Raveesha Dilanka</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 4 years of experience using React and
          NodeJS. As an undergraduate student at Sabaragamuwa University studying Computing and Information Systems, I am passionately dedicated to learning and excelling in the dynamic realm of technology.
        </p>
        <a href="mailto:raveeshadilanka1999@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/hero.jpeg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
