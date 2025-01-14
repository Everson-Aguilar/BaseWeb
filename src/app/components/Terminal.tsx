
import React, { useState, useEffect } from 'react';
import styles from '../css/Terminal.module.css';

const Terminal: React.FC = () => {
  const [text, setText] = useState('');
  const [showLinks, setShowLinks] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const terminalText = [
    "$Bienvenido a mi Portafolio",
    "$",
    "$Explora mis soluciones de programación inspiradas en un entorno Linux.",
  ];

  useEffect(() => {
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let currentText = "";

    const writeText = () => {
      const line = terminalText[currentTextIndex];

      if (currentCharIndex < line.length) {
        currentText += line[currentCharIndex]; // Agregamos el carácter actual
        setText(currentText); // Actualizamos el estado con el texto acumulado
        currentCharIndex++;

        const randomDelay = Math.floor(Math.random() * (120 - 60 + 1)) + 60;
        setTimeout(writeText, randomDelay);
      } else {
        currentText += "\n"; // Agregamos un salto de línea al final de cada línea
        setText(currentText);

        currentTextIndex++;
        currentCharIndex = 0;

        if (currentTextIndex < terminalText.length) {
          const randomDelay = Math.floor(Math.random() * (800 - 400 + 1)) + 400;
          setTimeout(writeText, randomDelay);
        } else {
          setShowLinks(true); // Mostramos los enlaces al terminar
        }
      }
    };

    writeText();

    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className={styles.terminal}>
      <div className={styles.terminal_header}>
        <div className={styles.terminal_title}>Terminal</div>
        <div className={styles.terminal_buttons}>
          <div className={`${styles.terminal_button} ${styles.terminal_red}`} />
          <div className={`${styles.terminal_button} ${styles.terminal_yellow}`} />
          <div className={`${styles.terminal_button} ${styles.terminal_green}`} />
        </div>
      </div>
      <div className={styles.terminal_content}>
        <p className="terminal-line">
          <span>{text}</span>
          <span className={`${styles.cursor} ${cursorVisible ? styles.visible : styles.hidden}`}>
            |
          </span>
        </p>

        {showLinks && (
          <div>
            <p>
              $ <a href="/projects" className="terminal-link">Ver Proyectos</a>
            </p>
            <p>
              $ <a href="/" className="terminal-link">3D Environment</a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Terminal;
