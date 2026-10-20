import React from "react";
import styles from "./Projects.module.css";

const Projectsimage = (props) => {
  const projects = [props.project1, props.project2];

  return (
    <>
      {projects.map((project) => (
        <article key={project.text} className={styles.projectCard}>
          <div className={`${styles.imgCard} ${styles.projectImage}`}>
            <img src={project.src} alt={`${project.text} project preview`} />
          </div>
          <div className={styles.projectDetails}>
            <h3 className={styles.projectTitle}>{project.text}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <ul className={styles.techStack} aria-label="Technology stack">
              {project.tech.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </>
  );
};

export default Projectsimage;
