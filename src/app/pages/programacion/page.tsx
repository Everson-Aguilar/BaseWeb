"use client";
import React, { useState } from 'react';
import Taskbar from '../../components/Taskbar';
import Window from '../../components/Window';
import Terminal from '../../components/Terminal';
import ProjectExplorer from '../../components/ProjectExplorer';
import '../programacion/pr.css';

const Home: React.FC = () => {
  const [windows, setWindows] = useState<string[]>([]);

  const openWindow = (window: string) => {
    if (!windows.includes(window)) {
      setWindows([...windows, window]);
    }
  };

  const closeWindow = (window: string) => {
    setWindows(windows.filter((w) => w !== window));
  };

  return (
    <div className="desktop">
      <Taskbar openWindow={openWindow} />
      {windows.includes('terminal') && (
        <Window
          title="Terminal"
          onClose={() => closeWindow('terminal')}
          onMinimize={() => closeWindow('terminal')}
        >
          <Terminal />
        </Window>
      )}
      {windows.includes('projects') && (
        <Window
          title="Projects"
          onClose={() => closeWindow('projects')}
          onMinimize={() => closeWindow('projects')}
        >
          <ProjectExplorer />
        </Window>
      )}
    </div>
  );
};

export default Home;
