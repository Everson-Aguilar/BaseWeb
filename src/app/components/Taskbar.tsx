import React from 'react';
import styles from '../css/Taskbar.module.css';

interface TaskbarProps {
  openWindow: (windowName: string) => void;
}

const Taskbar: React.FC<TaskbarProps> = ({ openWindow }) => {
  return (
    <div className="taskbar">
    <button onClick={() => openWindow('terminal')}>Terminal</button>
    <button onClick={() => openWindow('projects')}>Projects</button>
  </div>
  );
};

export default Taskbar;
