import React from 'react';
import Image from "next/image";

const ModelDescription: React.FC = () => {
  return (
    <section className="container mx-auto p-4">
      {/* Título */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold p-5 text-orange-400 border-b-4">
          workflow (active project in development) <span className="text-green-500 text-8xl animate-pulse">.</span>
        </h2>
      </section>

      {/* Contenido de la descripción */}
      <section className="flex flex-col md:flex-row gap-4">
        {/* Información a la izquierda */}
        <section className="space-y-4 border-4 border-orange-400 p-5 w-full md:w-2/3">
          <h3 className="text-lg font-semibold">Model Overview</h3>
          <p className="text-sm text-gray-700">
            The spine should be exaggerated in length to create tension. The crown should be visually unpleasant, uncomfortable to look at. The face should be clearly visible, with evident traces of blood, and the spear on the right side should be prominent, with large blood clots oozing. The face will be the focal point, while fine details of the crown will not be as visible. Blood traces should be clearly present. The model will be of full body, without the cross, just the body. Long nails are to be detailed for extra effect.
          </p>

          <h4 className="text-sm font-medium text-gray-600">Model Measurements:</h4>
          <ul className="list-disc pl-5 text-sm">
            <li>Human Total Size: 1.79 meters (5.87 feet)</li>
            <li>Human Chest Size: 0.4 meters (1.31 feet)</li>
            <li>Spear Head: Approximately 1.5 cm (square/oval)</li>
            <li>Spear Shaft: Approximately 1 cm thickness (square)</li>
          </ul>

          <h4 className="text-sm font-medium text-gray-600">Viewer Distance:</h4>
          <p className="text-sm">Approximately 6.1 meters (20 feet)</p>

          <h4 className="text-sm font-medium text-gray-600">Material:</h4>
          <p className="text-sm">Designed to be cast in aluminum. The final polishing decision will affect the appearance.</p>

          <figure>
            <Image
              src="trabajos/Cliente_01/ref_jesus.jpg"
              alt="Ref Ilustration"
              width={300}
              height={300}
            />
          </figure>
        </section>

        {/* Espacio vacío a la derecha para imágenes */}
        <section className="w-full md:w-full flex justify-center items-center bg-gray-100">
          <figure>
            <Image
              src="trabajos/Cliente_01/step01.jpg"
              alt="Ref Ilustration"
              width={600}
              height={600}
            />
          </figure>
        </section>
      </section>
    </section>
  );
};

export default ModelDescription;
