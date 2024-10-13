import React from 'react';

const ComicStory: React.FC = () => {
  return (
    <div className='flex flex-col md:flex-row bg-base'>

      {/* Comic */}
      <div className="grid bg-base gap-6 p-5 w-full md:w-1/2">
        {/* Parte 1 */}
        <div className="p-4 text-center rounded-md shadow-lg bg-white">
          <p className="text-title text-lg mb-2 text-subtitle">
            Javier es un apasionado carpintero que ha dedicado su vida a crear muebles únicos y personalizados. Sin embargo, su negocio empieza a perder visibilidad.
          </p>
          <div className="h-40 bg-gray-300 flex items-center justify-center">
            [Imagen del taller]
          </div>
        </div>

        {/* Parte 2 */}
        <div className="p-4 text-center rounded-md shadow-lg bg-white">
          <p className="text-title text-lg mb-2 text-subtitle">
            Javier siente la presión de no poder mantener su sueño. Los pedidos han disminuido y se preocupa por el futuro de su taller.
          </p>
          <div className="h-40 bg-gray-300 flex items-center justify-center">
            [Imagen de Javier preocupado]
          </div>
        </div>

        {/* Parte 3 */}
        <div className="p-4 text-center rounded-md shadow-lg bg-white">
          <p className="text-title text-lg mb-2 text-subtitle">
            Un cliente le menciona la importancia de tener una presencia en línea. Javier siente una chispa de esperanza.
          </p>
          <div className="h-40 bg-gray-300 flex items-center justify-center">
            [Imagen del cliente hablando con Javier]
          </div>
        </div>

        {/* Parte 4 */}
        <div className="p-4 text-center rounded-md shadow-lg bg-white">
          <p className="text-title text-lg mb-2 text-subtitle">
            Decidido a cambiar, Javier transforma su negocio con un ID digital y ve cómo su taller comienza a crecer nuevamente.
          </p>
          <div className="h-40 bg-gray-300 flex items-center justify-center">
            [Imagen del taller en línea exitoso]
          </div>
        </div>

        {/* Parte 5 - Final gracioso */}
        <div className="p-4 text-center rounded-md shadow-lg bg-white">
          <p className="text-title text-lg mb-2 text-subtitle">
            Pero un día, mientras Javier estaba muy emocionado mostrando su nuevo sitio web, accidentalmente envió un correo a todos sus clientes con el asunto: ¡Muebles a mitad de precio si adivinas mi receta secreta de galletas!
          </p>
          <div className="h-40 bg-gray-300 flex items-center justify-center">
            [Imagen de galletas y muebles]
          </div>
          <p className="text-title text-lg mt-2 text-subtitle">
            Desde entonces, su taller no solo vende muebles, ¡sino también galletas irresistibles!
          </p>
        </div>
      </div>

      {/* Diagramas */}
      <div className='w-full md:w-1/2 p-5 bg-base'>
        {/* Aquí puedes agregar tus diagramas */}
        <h2 className="text-title text-2xl font-bold text-center mb-4 text-title">Diagramas</h2>
        <div className="bg-white p-4 rounded-md shadow-lg">
          [Aquí van los diagramas]
        </div>
      </div>

    </div>
  );
};

export default ComicStory;
