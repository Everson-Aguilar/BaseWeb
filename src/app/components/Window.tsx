import React, { useState } from 'react';
import styles from '../css/Window.module.css';

interface WindowProps {
  title: string;
  onClose: () => void;
  onMinimize: () => void;
  children: React.ReactNode;
}

const Window: React.FC<WindowProps> = ({ title, onClose, onMinimize, children }) => {
  return (
    <div className={styles.window}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>{title}</div>
        <div className={styles.buttons}>
          <button onClick={onClose} className={`${styles.button} ${styles.red}`}></button>
          <button onClick={onMinimize} className={`${styles.button} ${styles.yellow}`}></button>
          <button className={`${styles.button} ${styles.green}`}></button>
        </div>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Window;
