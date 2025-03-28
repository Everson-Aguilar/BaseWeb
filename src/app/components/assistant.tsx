import React, { useEffect, useState } from 'react';

// Definir el tipo de los datos esperados desde la API
interface Message {
  titulo: string;
  descripcion: string;
  links?: string[];
}

const Assistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [displayText, setDisplayText] = useState('');
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentLinks, setCurrentLinks] = useState<string[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('/api/message');
        if (!response.ok) throw new Error('Error al obtener los mensajes');

        const jsonResponse = await response.json();
        if (jsonResponse.success && Array.isArray(jsonResponse.data)) {
          setMessages(jsonResponse.data);
        } else {
          throw new Error('La API no devolvió los datos esperados');
        }
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  useEffect(() => {
    if (messages.length === 0) return;

    let index = 0;
    const { titulo, descripcion, links } = messages[currentMessageIndex];
    const fullText = `<strong>${titulo}</strong>\n\n${descripcion}`;

    setDisplayText('');
    setCurrentLinks(links || []); // Guardamos los links por separado
    let animationFrameId: number;

    const animateText = () => {
      setDisplayText(fullText.slice(0, index));
      index++;

      if (index <= fullText.length) {
        animationFrameId = requestAnimationFrame(animateText);
      } else {
        setTimeout(() => {
          setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
        }, 10000);
      }
    };

    animationFrameId = requestAnimationFrame(animateText);
    return () => cancelAnimationFrame(animationFrameId);
  }, [messages, currentMessageIndex]);

  return (
    <div className=" flex items-center p-4">
      <div className="flex justify-center items-center border-4 text-5xl h-20 w-20 border-colorBase rounded-full">!</div>
      <div className="w-full text-lg whitespace-pre-wrap">
        <span dangerouslySetInnerHTML={{ __html: displayText || 'Cargando...' }} />
        {currentLinks.length > 0 && (
          <div className="mt-2 text-blue-600 underline">
            Referencia:{" "}
            <a href={currentLinks[0]} target="_blank" rel="noopener noreferrer">
              navegar a esa web
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Assistant;
