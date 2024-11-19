// src/components/PanelesServicios.tsx
import React from "react";

const PanelesServicios: React.FC = () => {
  return (
    <div>
      <div className="p-3 m-5 text-7xl font-BebasNeue text-trend border-4 border-trend w-fit">
        PAQUETES DISPONIBLES
      </div>

      <div className="p-20">
        Ofrecemos un enfoque integral y estratégico para ayudar a tu negocio a
        destacarse en el mercado. Nuestros paquetes están diseñados para guiarte
        a través de cada etapa del desarrollo de tu marca, desde la creación de
        una identidad visual sólida hasta la producción de contenido audiovisual
        impactante. Cada mes, nos enfocaremos en aspectos clave que construirán
        la base de tu marca y potenciarán tu presencia en el entorno digital.
        Con un compromiso hacia la calidad y la creatividad, estamos aquí para
        convertir tus ideas en realidades visuales que conecten con tu
        audiencia.
      </div>

      <div className="p-8 flex flex-col md:flex-row gap-5">
        {/* Primer Mes: Activo (Azul) */}
        <div className="border border-blue-500 rounded-lg p-6 bg-blue-100 shadow-md max-w-md mx-auto my-6 text-left">
          <h2 className="text-2xl font-semibold mb-2 text-blue-900">
            Primer Mes: Identidad de Marca y Planificación
          </h2>
          <p className="text-lg font-bold text-blue-800 mb-4">
        
            <span className="text-green-600">Precio Internacional: $450 USD</span>
            <br /> * Paquete Opcional
          </p>
          <ul className="list-disc pl-5 text-blue-800">
            <li className="mb-2">Diseño de Logo e Identidad Visual</li>
            <li className="mb-2">
              Desarrollo de la Filosofía y Estilo Artístico del Negocio
            </li>
            <li className="mb-2">
              Creación de Imágenes, Iconografía y Simbolismo
            </li>
            <li className="mb-2">Definición del Manual de Marca</li>
            <li className="mb-2">
              Estrategia y Planificación de Contenido para el Mes Dos
            </li>
          </ul>
        </div>
        
        {/* Segundo Mes: Deshabilitado (Amarillo) */}
        <div className="border border-yellow-500 rounded-lg p-6 bg-yellow-100 shadow-md max-w-md mx-auto my-6 text-left opacity-50">
          <h2 className="text-2xl font-semibold mb-2 text-yellow-900">
            Segundo Mes: Diseño y Creación de Entornos 3D
          </h2>
          <p className="text-lg font-bold text-yellow-800 mb-4">
          
            <span className="text-green-600">Precio Internacional: $800 USD</span>
            <br /> * Paquete Opcional
          </p>
          <ul className="list-disc pl-5 text-yellow-800">
            <li className="mb-2">Diseño Conceptual del Entorno 3D</li>
            <li className="mb-2">
              Modelado y Texturización de Elementos en 3D
            </li>
            <li className="mb-2">Iluminación y Composición del Entorno</li>
            <li className="mb-2">
              Revisión y Ajustes de Diseño según la Identidad de Marca
            </li>
            <li className="mb-2">
              Preparación para la Producción Audiovisual del Mes Tres
            </li>
          </ul>
        </div>

        {/* Tercer Mes: Deshabilitado (Verde) */}
        <div className="border border-green-500 rounded-lg p-6 bg-green-100 shadow-md max-w-md mx-auto my-6 text-left opacity-50">
          <h2 className="text-2xl font-semibold mb-2 text-green-900">
            Tercer Mes: Producción de Contenido Audiovisual
          </h2>
          <p className="text-lg font-bold text-green-800 mb-4">
           
            <span className="text-green-600">Precio Internacional: $450 USD</span>
            <br /> * Paquete Opcional
          </p>
          <ul className="list-disc pl-5 text-green-800">
            <li className="mb-2">Creación de Animaciones y Secuencias en 3D</li>
            <li className="mb-2">
              Producción de Videos Promocionales y Material Gráfico
            </li>
            <li className="mb-2">
              Edición de Contenido Audiovisual para Publicidad
            </li>
            <li className="mb-2">
              Optimización de Contenido para Redes Sociales y Web
            </li>
            <li className="mb-2">Estrategias de Distribución de Contenidos</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PanelesServicios;
