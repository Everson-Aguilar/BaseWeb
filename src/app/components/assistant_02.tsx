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


  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('/api/message_02');
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
    let animationFrameId: number;

    const animateText = () => {
      setDisplayText(fullText.slice(0, index));
      index++;

      if (index <= fullText.length) {
        animationFrameId = requestAnimationFrame(animateText);
      } else {
        setTimeout(() => {
          setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
        }, 15000);
      }
    };

    animationFrameId = requestAnimationFrame(animateText);
    return () => cancelAnimationFrame(animationFrameId);
  }, [messages, currentMessageIndex]);

  return (
    <div className=" w-full border-l-4 border-colorBase md:w-60 flex items-center p-4">
      <div className="flex justify-center items-center text-5xl h-20 w-20 ">*</div>
      <div className="w-full text-lg whitespace-pre-wrap">
        <span dangerouslySetInnerHTML={{ __html: displayText || 'Cargando...' }} />
       
      </div>
    </div>
  );
};

export default Assistant;
