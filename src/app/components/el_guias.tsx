import React, { useState } from "react";
import Image from "next/image";
import "../css/animaciones.css";

const El_guias = () => {
  // Estado para manejar si el popup está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el estado del popup
  const togglePopup = () => {
    setIsOpen(!isOpen); // Cambia `isOpen` entre `true` y `false`
  };

  return (
    <div className="p-2 pr-10  z-30 flex justify-end bottom-0 fixed w-full">
      {/* Botón para abrir el popup */}
      <a
        onClick={togglePopup} // Maneja el clic para abrir o cerrar el popup
        target="_blank"
        rel="noopener noreferrer"
        className=" z-10 bg-trend duration-500  hover:bg-base  p-3 rounded-full shadow-2xl flex items-center justify-center cursor-pointer"
      >
        {/* Imagen del botón */}
        <Image
          src="/DiseñoWeb/redes sociales/contacto.svg"
          alt="Logo"
          width={65} // Ancho de la imagen
          height={65} // Alto de la imagen
        />
      </a>

      {/* Condicional que muestra el popup solo si `isOpen` es `true` */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-end right-9 translate-x-[0px] z-10 top-40">
          {/* Contenedor del popup */}
          <div className="bg-base translate-y--20 p-5   w-fit rounded-lg shadow-lg relative">
            {/* Botón para cerrar el popup */}
            <button
              onClick={togglePopup} // Maneja el clic para cerrar el popup
              className="absolute top-2 right-2 text-message-600 hover:text-gray-800"
            >
              ✖ {/* Icono de cierre */}
            </button >
            {/* Contenido del popup */}
            
            {/* Sección de redes sociales */}
            <div className="flex flex-col items-center space-y-4 ">
            <h2 className="text-lg font-semibold mb-4 mt-5 ">Canales</h2>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61566448797288"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image 
                  src="/DiseñoWeb/redes sociales/facebook.svg" // Asegúrate de tener esta imagen en tu carpeta `public/icons`
                  alt="Facebook"
                  width={45}
                  height={45}
                  
                />
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/tudigitalnegocio/profilecard/?igsh=ZWZudHA3dmNxbW5q"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/DiseñoWeb/redes sociales/instagram.svg"
                  alt="Instagram"
                  width={50}
                  height={50}
                />
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/573052158161"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center ">
                  <Image
                    src="/DiseñoWeb/redes sociales/whatsapp.svg"
                    alt="WhatsApp"
                    width={50}
                    height={50}
                  />
                  
                </div>
              </a>

               {/* TikTok */}

              <a
                href="http://tiktok.com/@tudigitalnegocio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/DiseñoWeb/redes sociales/tiktok.svg"
                  alt="tik tok"
                  width={50}
                  height={50}
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default El_guias;
