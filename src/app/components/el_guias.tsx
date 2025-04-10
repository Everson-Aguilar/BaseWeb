import React, { useState } from "react";
import Image from "next/image";

const Contact = () => {
  // Estado para manejar si el popup está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el estado del popup
  const togglePopup = () => {
    setIsOpen(!isOpen); // Cambia `isOpen` entre `true` y `false`
  };

  return (
    <nav className="p-5  z-30 flex  bottom-5 fixed right-0 ">
      {/* Botón para abrir el popup */}
      <a
        onClick={togglePopup} // Maneja el clic para abrir o cerrar el popup
        target="_blank"
        rel="noopener noreferrer"
        className="z-10 bg-green duration-500 hover:scale-150 hover:bg-orange-400 p-3 rounded-full shadow-2xl flex items-center justify-center cursor-pointer"
        aria-label="Abrir canales de redes sociales"
      >
        {/* Imagen del botón */}
        <Image
          src="/DiseñoWeb/redes sociales/contacto.svg"
          alt="Logo de contacto"
          width={40} // Ancho de la imagen
          height={40} // Alto de la imagen
        />
      </a>

      {/* Condicional que muestra el popup solo si `isOpen` es `true` */}
      {isOpen && (
        <nav
          className="fixed inset-0 flex items-center justify-end right-5 z-10 top-10"
          aria-live="assertive"
        >
          {/* Contenedor del popup */}
          <div className="bg-green -translate-y-32 p-5 w-fit rounded-lg shadow-lg relative">
            {/* Botón para cerrar el popup */}
            <button
              onClick={togglePopup} // Maneja el clic para cerrar el popup
              className="absolute top-2 right-2 text-message-600 hover:text-gray-800"
              aria-label="Cerrar el popup de redes sociales"
            >
              ✖ {/* Icono de cierre */}
            </button>
            {/* Contenido del popup */}

            {/* Sección de redes sociales */}
            <div className="flex flex-col items-center space-y-4">
              <p className="text-lg font-semibold mb-4 mt-5">channels</p>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61566448797288"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:scale-150"
              >
                <Image
                  src="/DiseñoWeb/redes sociales/facebook.svg"
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
                aria-label="Instagram"
                className="hover:scale-150"
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
                aria-label="WhatsApp"
                className="hover:scale-150"
              >
                <div className="flex items-center">
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
                aria-label="TikTok"
                className="hover:scale-150"
              >
                <Image
                  src="/DiseñoWeb/redes sociales/tiktok.svg"
                  alt="TikTok"
                  width={50}
                  height={50}
                />
              </a>
            </div>
          </div>
        </nav>
      )}
    </nav>
  );
};

export default Contact;
