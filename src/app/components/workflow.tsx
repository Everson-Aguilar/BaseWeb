import React, { useState } from "react";
import Image from "next/image";

// componente
import Game_of_luck from "./game_of_luck";

const ModelDescription: React.FC = () => {


    // Estado para manejar la visibilidad del contenedor


    const [isOpen, setIsOpen] = useState(false);


      // Función para alternar el estado de visibilidad
  const toggleContenedor = () => {
    setIsOpen(!isOpen);
  };



  // Array con las imágenes en orden cronológico
  const updateImages = [
    { src: "trabajos/Cliente_01/step02.jpg", alt: "Update 01" },
    { src: "trabajos/Cliente_01/step03.jpg", alt: "Update 02" },
    { src: "trabajos/Cliente_01/step04.jpg", alt: "Update 03" },
    { src: "trabajos/Cliente_01/step05.jpg", alt: "Update 04" },
    { src: "trabajos/Cliente_01/step06.jpg", alt: "Update 05" },
    // Agrega más imágenes según sea necesario
  ];

  return (
    <section className="container mx-auto p-4">
      {/* Título */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold p-5 text-orange-400 border-b-4">
          workflow (active project in development){" "}
          <span className="text-green-500 text-8xl animate-pulse">.</span>
        </h2>
      </section>

      {/* Contenido de la descripción */}
      <section className="flex flex-col md:flex-row gap-4">
        {/* Información a la izquierda */}
        <section className="space-y-4 border-4 border-orange-400 p-5 w-full md:w-2/3">
          <h3 className="text-lg font-semibold">Model Overview</h3>
          <p className="text-sm text-gray-700">
            The spine should be exaggerated in length to create tension. The
            crown should be visually unpleasant, uncomfortable to look at. The
            face should be clearly visible, with evident traces of blood, and
            the spear on the right side should be prominent, with large blood
            clots oozing. The face will be the focal point, while fine details
            of the crown will not be as visible. Blood traces should be clearly
            present. The model will be of full body, without the cross, just the
            body. Long nails are to be detailed for extra effect.
          </p>

          <h4 className="text-sm font-medium text-gray-600">
            Model Measurements:
          </h4>
          <ul className="list-disc pl-5 text-sm">
            <li>Human Total Size: 1.79 meters (5.87 feet)</li>
            <li>Human Chest Size: 0.4 meters (1.31 feet)</li>
            <li>Spear Head: Approximately 1.5 cm (square/oval)</li>
            <li>Spear Shaft: Approximately 1 cm thickness (square)</li>
          </ul>

          <h4 className="text-sm font-medium text-gray-600">
            Viewer Distance:
          </h4>
          <p className="text-sm">Approximately 6.1 meters (20 feet)</p>

          <h4 className="text-sm font-medium text-gray-600">Material:</h4>
          <p className="text-sm">
            Designed to be cast in aluminum. The final polishing decision will
            affect the appearance.
          </p>

          <figure>
            <Image
              src="trabajos/Cliente_01/step01.jpg"
              alt="Ref Illustration"
              width={300}
              height={300}
            />
          </figure>
        </section>

        {/* Espacio vacío a la derecha para imágenes */}

        <section className=" relative w-full flex-row bg-trend  ">



          
















          <figure className="absolute z-10 bg-neutral-700  border-8 border-trend right-0 opacity-50 hover:opacity-100 hover:scale-90">
            <p className=" absolute bottom-0 text-5xl font-BebasNeue text-orange-400">
              AGREEMENT
            </p>
            <Image
              src="/DiseñoWeb/WebRecursos/agreement.png"
              alt="agreement"
              width={300}
              height={300}
              onClick={toggleContenedor} 
              className="cursor-pointer"
            />
          </figure>


          {/* Contenedor que se muestra cuando isOpen es true */}
      {isOpen && (
        <section className="absolute bg-trend h-full w-full z-10 ">
          <button onClick={toggleContenedor}  className=" absolute bg-colorBase p-5  m-5 hover:scale-105  rounded-full right-0">X</button>
          
        </section>
      )}














          <h2 className=" flex text-3xl font-BebasNeue text-orange-400   p-5">
            UPDATES
          </h2>

          <section className=" relative h-[400px] md:h-[600px] overflow-scroll ">
            {/* Iterar sobre las imágenes del array */}
            {updateImages.map((image, index) => (
              <figure key={index} className="flex justify-center items-center ">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={600}
                />
              </figure>
            ))}
          </section>

          <p className="flex text-2xl p-5">
            {" "}
            <span className="text-3xl text-orange-400 font-BebasNeue">
              tudigitalnegocio.com
            </span>{" "}
            &nbsp; &nbsp; &nbsp;{" "}
            <span className=" border-2 text-colorBase p-2">
              {" "}
              price: <span className="text-orange-400">350$</span>{" "}
            </span>{" "}
          </p>

          <section className="flex gap-5 p-3">
            <strong className="text-colorBase">Tiempo:</strong>
            <div className="bg-orange-400 text-colorBase font-BebasNeue w-36 flex justify-center items-center">
              lunes
            </div>
            <div className="bg-orange-400 text-colorBase font-BebasNeue w-36 flex justify-center items-center">
              Martes
            </div>
            <div className="bg-orange-400 text-colorBase font-BebasNeue w-36 flex justify-center items-center">
              Miercoles
            </div>
            <div className="bg-neutral-700 text-colorBase font-BebasNeue w-36 flex justify-center items-center">
              Jueves
            </div>
            <div className="bg-neutral-700 text-colorBase font-BebasNeue w-36 flex justify-center items-center">
              Viernes
            </div>
          </section>

          <section className="border-t-2 border-trend bg-orange-400">
            <div>
              <p>
                <strong className="p-3 rounded-sm">Enviar Archivo a:</strong>
                admin@tudigitalnegocio.com
              </p>
            </div>
            <div>
              <p>
                <strong className="p-3 rounded-sm">Explicacion:</strong>A partir
                de un archivo base, crea una propuesta con las indicaciones
              </p>
            </div>
          </section>
        </section>
      </section>

      <section>
        <Game_of_luck />
      </section>
    </section>
  );
};

export default ModelDescription;
