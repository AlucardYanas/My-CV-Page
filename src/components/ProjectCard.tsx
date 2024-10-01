import { useState } from 'react';
import styles from '../styles/ProjectCard.module.scss'; // Подключение стилей CSS-модуля

interface Project {
  title: string;
  screenshots: string[];
  description: string;
  technologies: string[];
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className={styles['project-card']}> {/* Используем классы CSS-модуля */}
      <h2>{project.title}</h2>
      <div className={styles['image-container']}>
        <img
          src={project.screenshots[currentImage]}
          alt={`Screenshot of ${project.title}`}
          onClick={() => setCurrentImage((currentImage + 1) % project.screenshots.length)}
        />
      </div>
      <p>
        {project.description.split('\n').map((paragraph, index) => (
          <span key={index}>
            {paragraph}
            <br />
          </span>
        ))}
      </p>
      <ul className={styles.technologies}>
        {project.technologies.map((tech, i) => (
          <li key={i}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}
