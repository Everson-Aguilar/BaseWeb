import React from 'react';

const SocialMediaFormats: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Formatos Comerciales en Redes Sociales y Webs</h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Comunes:</h3>
        <p className="text-gray-700 mb-2">
          <span className="font-bold">Descripción:</span> Contenido que sigue un enfoque tradicional, fácil de entender y ampliamente aceptado. Se centra en mostrar la funcionalidad y beneficios del producto.
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>Anuncios estáticos en redes sociales que destacan ofertas.</li>
          <li>Publicidad en webs con banners simples.</li>
          <li>Publicaciones de productos con imágenes y descripciones.</li>
          <li>Anuncios de video de 15-30 segundos en plataformas como Instagram y Facebook.</li>
          <li>Infografías informativas sobre productos o servicios.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Diferentes:</h3>
        <p className="text-gray-700 mb-2">
          <span className="font-bold">Descripción:</span> Formatos innovadores que buscan destacar entre la multitud. Utilizan creatividad y elementos visuales únicos para atraer al consumidor.
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>Campañas virales con storytelling en redes sociales.</li>
          <li>Publicidad interactiva que incorpora diseño 3D para experiencias visuales impactantes.</li>
          <li>Contenido generado por usuarios que invita a la participación activa.</li>
          <li>Videos de estilo documental que narran la historia detrás de la marca o producto.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-center">Reglas del Contenido de Redes Sociales</h2>
      <ul className="list-disc list-inside ml-4">
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
  );
};

export default SocialMediaFormats;
