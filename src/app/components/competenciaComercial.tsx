import React from "react";
import Image from "next/image";

const MarketingDigital: React.FC = () => {
  return (

    <div className=" flex-row p-5 md:flex bg-base justify-center items-center">

    <div className="  md:w-1/2">
      <h2 className="text-title text-5xl font-BebasNeue mb-4">
        Bienvenido a Tudigitalnegocio.com
      </h2>
      <p className="text-subtitle mb-4">
        Tu agencia de <strong>marketing digital</strong> en Barranquilla,
        especializada en soluciones creativas y efectivas para llevar tu negocio
        al siguiente nivel.
      </p>

      <h3 className="text-title text-2xl font-BebasNeue mt-6 mb-2">
        ¿Quiénes somos?
      </h3>
      <p className="text-subtitle mb-4">
        En Tudigitalnegocio.com, ofrecemos{" "}
        <strong>servicios de marketing digital</strong> que se adaptan a tus
        necesidades específicas. Nuestro enfoque innovador combina creatividad y
        tecnología para crear estrategias efectivas que impulsan el crecimiento
        de tu negocio.
      </p>

      <div className="bg-trend text-base p-5 md:w-2/3">  
      <h3 className="text-2xl font-BebasNeue mt-6 mb-2">Servicios</h3>
      <ul className="list-disc list-inside mb-4 ">
        <li>
          <strong>Desarrollo Web:</strong> Creamos sitios web personalizados y
          responsivos que reflejan la identidad de tu marca.
        </li>
        <li>
          <strong>Diseño Gráfico:</strong> Diseñamos imágenes y materiales
          gráficos que comunican eficazmente el mensaje de tu marca.
        </li>
        <li>
          <strong>Interiorismo y Diseño de Espacios:</strong> Transformamos
          espacios en entornos atractivos que mejoran la experiencia del
          cliente.
        </li>
        <li>
          <strong>Publicidad Digital:</strong> Campañas en redes sociales y
          Google Ads para aumentar tu visibilidad.
        </li>
        <li>
          <strong>Creación de Contenido:</strong> Generamos contenido relevante
          para redes sociales y blogs que capta la atención.
        </li>
        <li>
          <strong>Diseño 3D:</strong> Modelado y visualización 3D para proyectos
          arquitectónicos y de diseño.
        </li>
      </ul>
      </div>

      <h3 className="text-title text-2xl font-BebasNeue mt-6 mb-2">
        ¿Por qué elegirnos?
      </h3>
      <p className="text-subtitle mb-4">
        Nuestra misión es ayudar a las empresas a crecer con soluciones
        personalizadas. Nos diferenciamos por un enfoque centrado en el cliente
        y el uso de tecnología de vanguardia para resultados medibles y
        satisfactorios.
      </p>

      <h3 className="text-title text-2xl font-BebasNeue t-6 mb-2">
        Contáctanos
      </h3>
      <p className="text-subtitle mb-4">
        Estamos listos para ayudarte a alcanzar tus objetivos. Comunícate hoy
        mismo para descubrir cómo podemos colaborar.
      </p>

      <h2 className="text-title text-2xl font-BebasNeue mt-6 mb-2">
        Transformación Digital Empresarial
      </h2>
      <p className="text-subtitle mb-4">
        Generamos ventajas competitivas en tu industria a través de la
        experimentación constante. Las <strong>redes sociales</strong> son clave
        para atraer y convertir clientes.
      </p>

      <h3 className="text-title text-2xl font-BebasNeue mt-6 mb-2">
        Nuestro enfoque en Branding
      </h3>
      <p className="text-subtitle mb-4">
        El <strong>branding</strong> permite que tu marca se posicione en el
        mercado mediante una comunicación efectiva y precisa.
      </p>

<div className="bg-trend text-base p-5 md:w-2/3">  
      <h3 className=" text-2xl font-BebasNeue mt-6 mb-2">
        ¿A quiénes servimos?
      </h3>
      <ul className="list-disc  list-inside mb-4 ">
        <li>Constructora</li>
        <li>Startup para un público de bajo ingreso</li>
        <li>Empresa agrícola dedicada a la fabricación de arroz</li>
        <li>Laboratorio</li>
        <li>Inmobiliaria</li>
        <li>Pescadería</li>
        <li>Finanzas y seguros</li>
        <li>Industria e ingenierías</li>
        <li>Automotriz</li>
        <li>Servicios profesionales</li>
        <li>Consumo</li>
        <li>Energía y medio ambiente</li>
        <li>Tecnología y comunicación</li>
        <li>Agroindustria y construcción</li>
        <li>Cinematográfico</li>
        <li>Videojuegos</li>
        <li>Realidad virtual</li>
      </ul>

      </div>

      <h3 className="text-title text-2xl font-BebasNeue mt-6 mb-2">
        Cómo trabaja nuestra agencia de marketing digital
      </h3>
      <p className="text-subtitle mb-4">
        Trabajamos con empresas en las que creemos y ofrecemos servicios de{" "}
        <strong>Community Manager</strong>, <strong>Marketing Digital</strong>,
        anuncios en Google, diseño web, hosting, newsletters y videos
        corporativos.
      </p>

      <h3 className="text-title text-2xl font-BebasNeue mt-6 mb-2">
        Estrategias personalizadas basadas en datos
      </h3>
      <p className="text-subtitle mb-4">
        Analizamos tu industria y competencia para diseñar estrategias únicas
        que se adapten a tus necesidades. Cada proyecto es especial y no creemos
        en soluciones estándar.
      </p>
    </div>

    <div className=" h-auto w-full md:w-1/2 p-5">
    <Image
                  src="/DiseñoWeb/panel_02.jpg" 
                  alt="Descripción de la imagen"
                  width={500} // Ancho deseado en píxeles (equivalente a w-15 en Tailwind CSS)
                  height={500} // Alto deseado en píxeles (equivalente a h-15 en Tailwind CSS)
      />
    </div>

    </div>
  );
};

export default MarketingDigital;
