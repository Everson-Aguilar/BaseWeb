import React from 'react';
import styles from '../css/ProjectExplorer.module.css';

const ProjectExplorer: React.FC = () => {
  return (
    <div className={styles.explorer}>
      <h2 className={styles.title}>Proyectos</h2>
      <ul className={styles.list}>
        <li className={styles['list-item']}>Proyecto 1</li>
        <li className={styles['list-item']}>Proyecto 2</li>
        <li className={styles['list-item']}>Proyecto 3</li>
      </ul>
    </div>
  );
};

export default ProjectExplorer;
