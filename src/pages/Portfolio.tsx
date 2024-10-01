import React from 'react';
import styles from '../styles/portfolio.module.scss'; // Подключение CSS-модуля
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard'; // Правильный импорт дочернего компонента

interface Project {
  title: string;
  screenshots: string[];
  description: string;
  technologies: string[];
}

export default function Portfolio() {
  const projects: Project[] = [
    {
      title: 'Проект Slavic Trash',
      screenshots: ['/images/project1-1.png', '/images/project1-2.png'],
      description: `Пет проект мемного видеохостинга. В проекте присутствует возможность зарегистрироваться, смотреть видео, загруженные другими участниками, лайкать и отбирать понравившееся видео и делиться ими по ссылке. 
Есть админская страница, с помощью которой он может одобрять или неодобрять поступившие видео.
В проекте реализована премодерация с помощью Google AI, также все видео хранятся на хостинге Google Cloud. 
Серверная часть реализована на Express, в качестве DB используется Sequelize. Запуск серверной части осуществляется командой npm run dev.
Клиентская часть реализована с помощью React, сборщик — Vite. В качестве стейт-менеджера использовались RTK Query и Redux Toolkit.`,
      technologies: [
        'TypeScript',
        'React',
        'Node.js',
        'CSS3',
        'REST API',
        'Google Cloud',
        'Express',
        'Sequelize',
        'Vite',
        'RTK Query',
        'Redux Toolkit',
      ],
    },
    {
      title: 'Проект Tribune',
      screenshots: ['/images/project2-1.png', '/images/project2-2.png'],
      description: `Мой основной рабочий проект — разработка web-приложения для управления удаленной командой. 
Мой вклад в разработку приложения описан на главной странице.`,
      technologies: [
        'TypeScript',
        'React',
        'RTK Query',
        'Bootstrap',
        'Express',
        'Sequelize',
        'Vite',
      ],
    },
    {
      title: 'Проект Data Vizualization',
      screenshots: ['/images/project3-1.png', '/images/project3-2.png'],
      description: `Для стороннего заказчика разработал компонент, который позволяет загружать Excel таблицы, менять их на лету и на их основании строить графики. 
Проект задеплоен с помощью Vercel.`,
      technologies: ['TypeScript', 'React', 'Next JS'],
    },
  ];

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h1 className={styles.heading}>Мое Портфолио</h1>
        <div className={styles.projects}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
