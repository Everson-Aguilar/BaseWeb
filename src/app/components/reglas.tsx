import React from 'react';

const SocialMediaFormats: React.FC = () => {
  return (
    <div className='flex flex-col md:flex-row'>  

      <div className="mx-auto p-6 bg-base w-full md:w-1/2 ">
        <h2 className="text-2xl font-bold mb-6 text-title text-center font-Acme">Formatos Comerciales en Redes Sociales y Webs</h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2 text-trend font-BebasNeue">Comunes:</h3>
          <p className="text-title mb-2">
            <span className="font-bold">Descripción:</span> Contenido que sigue un enfoque tradicional, fácil de entender y ampliamente aceptado. Se centra en mostrar la funcionalidad y beneficios del producto.
          </p>
          <ul className="list-disc list-inside ml-4 text-title">
            <li>Anuncios estáticos en redes sociales que destacan ofertas.</li>
            <li>Publicidad en webs con banners simples.</li>
            <li>Publicaciones de productos con imágenes y descripciones.</li>
            <li>Anuncios de video de 15-30 segundos en plataformas como Instagram y Facebook.</li>
            <li>Infografías informativas sobre productos o servicios.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2 text-trend font-BebasNeue">Diferentes:</h3>
          <p className="text-title mb-2">
            <span className="font-bold">Descripción:</span> Formatos innovadores que buscan destacar entre la multitud. Utilizan creatividad y elementos visuales únicos para atraer al consumidor.
          </p>
          <ul className="list-disc list-inside ml-4 text-title">
            <li>Campañas virales con storytelling en redes sociales.</li>
            <li>Publicidad interactiva que incorpora diseño 3D para experiencias visuales impactantes.</li>
            <li>Contenido generado por usuarios que invita a la participación activa.</li>
            <li>Videos de estilo documental que narran la historia detrás de la marca o producto.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-title text-center font-Acme">Reglas del Contenido de Redes Sociales</h2>
        <ul className="list-disc list-inside ml-4 text-title">
          <li>Educación</li>
          <li>Solución de Necesidades</li>
          <li>Tendencias</li>
          <li>Innovación</li>
          <li>Construcción de Comunidad</li>
          <li>Reutilización</li>
          <li>Experiencia del Usuario</li>
          <li>Diferenciación Comercial</li>
          <li>Viabilidad a Corto Plazo</li>
          <li>Calidad</li>
          <li>Análisis de Competencia</li>
          <li>Adaptabilidad</li>
          <li>Uso de Herramientas de Análisis</li>
          <li>Incorporación de Feedback</li>
          <li>Tendencias Culturales y Sociales</li>
          <li>Contenidos Basados en Datos</li>
        </ul>
      </div>

      {/* Diagramas */}
      <div className='w-full md:w-1/2 p-5 bg-base rounded-lg shadow-lg'>
        <h2 className="text-title text-2xl font-bold text-center mb-4 text-title font-Acme">Diagramas</h2>
        <div className="bg-message p-4 rounded-md shadow-md">
          [Aquí van los diagramas]
        </div>
      </div>
    </div>
  );
};

export default SocialMediaFormats;
