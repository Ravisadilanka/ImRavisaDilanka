import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl, getVideoUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source, video },
}) => {
  return (
    <div className={styles.container}>
      {imageSrc && (<img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />)}
      {video && (
        <video width="297" height="199" controls className={styles.video}>
          <source src={getVideoUrl(video)} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>
          Demo
        </a>
        <a href={source} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};
