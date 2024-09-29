// components/RefundPolicy.tsx
"use client";

const RefundPolicy: React.FC = () => {
  return (
    <div className="mt-5 max-w-3xl mx-auto p-6 bg-white shadow-lg">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
        Cambié de Opinión: ¡Solicita Tu Devolución!
      </h2>
      <p className="text-gray-700 mb-4">
        En <strong>Tu Digital Negocio</strong>, entendemos que cada cliente es único y que sus necesidades pueden cambiar. Por eso, ofrecemos una opción de devolución flexible y justa para nuestros productos digitales 3D.
      </p>
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">¿Cómo Funciona?</h3>
      <p className="text-gray-700 mb-4">
        <strong>Devolución con Descuento:</strong> Si, por alguna razón, decides que nuestro diseño digital 3D no cumple con tus expectativas, puedes optar por devolverlo y recibir un reembolso del 80% de tu inversión inicial. Esta opción está disponible únicamente si el proyecto se encuentra en modo de desarrollo, casi terminado, y se confirma que deseas gestionar esta opción. 
        <span className="font-semibold"> Ten en cuenta que puede que no esté habilitada por cuestiones de temporada.</span>
      </p>
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">Ventajas para Ti:</h3>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Flexibilidad: Tú decides si deseas solicitar un reembolso.</li>
        <li>Menos Riesgo: Con nuestra política de devolución justa, puedes comprar con confianza, sabiendo que tienes un respaldo.</li>
      </ul>
      <p className="text-gray-700">
        En <strong>Tu Digital Negocio</strong>, estamos comprometidos a brindarte la mejor experiencia posible. Nuestra propuesta de devolución no solo refleja nuestra confianza en la calidad de nuestro trabajo, sino que también te permite tomar decisiones informadas y seguras.
      </p>
    </div>
  );
};

export default RefundPolicy;
