import React from 'react';
import '../styles/portfolio.scss';


export default function Portfolio() {
  const projects = [
    {
      title: 'Проект 1',
      screenshots: ['../public/images/project1-1.png', '../public/images/project1-2.png'],
      description: 'Описание проекта 1, в котором рассказывается о задачах и результатах.',
      technologies: ['JavaScript', 'React', 'Node.js', 'CSS3', 'REST API'],
    },
    {
      title: 'Проект 2',
      screenshots: ['../public/images/project2-1.png', '../public/images/project2-2.png'],
      description: 'Описание проекта 2, в котором рассказывается о задачах и результатах.',
      technologies: ['TypeScript', 'React', 'Zustand', 'RTK Query', 'Bootstrap'],
    },
    {
      title: 'Проект 3',
      screenshots: ['../public/images/project3-1.png', '../public/images/project3-2.png'],
      description: 'Описание проекта 3, в котором рассказывается о задачах и результатах.',
      technologies: ['HTML5', 'CSS3', 'Figma', 'Jest'],
    },
  ];

  return (
    <div className="portfolio">
      <h1>Мое Портфолио</h1>
      <div className="projects">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <div className="carousel">
              {project.screenshots.map((src, i) => (
                <img key={i} src={src} alt={`Screenshot of ${project.title} ${i + 1}`} />
              ))}
            </div>
            <p>{project.description}</p>
            <ul className="technologies">
              {project.technologies.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
