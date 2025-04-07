import React from 'react'

const Packages: React.FC = () => {
  return (
    <main className="container mx-auto p-6">
      {/* Título principal */}
      <h2 className="text-7xl font-BebasNeue text-green border-b-4 border-green p-3 mb-8 text-center">
        AVAILABLE PACKAGES
      </h2>

      <section className="flex flex-wrap justify-center gap-8">
        {/* Paquete 1: Piezas Modulares */}
        <article className="bg-green shadow-xl rounded-lg p-6 w-full md:w-1/3">
          <h3 className="text-3xl font-semibold text-subtitle mb-4">Modular Construction Pieces</h3>
          <p className="text-lg text-gray-700 mb-4">
            Create the base of your 3D environment with custom-built modular pieces. Perfect for quick prototyping or detailed designs.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Flexible modular pieces for versatile designs.</li>
            <li>Easy to integrate into existing 3D scenes.</li>
            <li>Ideal for fast development of environments.</li>
          </ul>
          <h2 className="text-xl font-semibold text-green-700 mb-4">
            Price: <span className="font-bold">Write to me</span>
          </h2>
          <button className="bg-trend text-white py-2 px-6 rounded-lg hover:bg-opacity-90 w-full">
            Get This Package
          </button>
        </article>

        {/* Paquete 2: Pack de Modelos 3D */}
        <article className="bg-green shadow-xl rounded-lg p-6 w-full md:w-1/3">
          <h3 className="text-3xl font-semibold text-colorBase mb-4">3D Models Pack</h3>
          <p className="text-lg text-gray-700 mb-4">
            Fill your 3D environment with a variety of models that feed into the story of the environment. Ideal for enhancing the narrative and adding depth to the world youre building.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Includes a variety of models that enhance the story of the environment.</li>
            <li>Custom textures to match your projects aesthetic.</li>
            <li>Optimized for performance without sacrificing detail.</li>
          </ul>
          <h2 className="text-xl font-semibold text-green-700 mb-4">
            Price: <span className="font-bold">Write to me</span>
          </h2>
          <button className="bg-colorBase text-trend py-2 px-6 rounded-lg hover:bg-opacity-90 w-full">
            Get This Package
          </button>
        </article>

        {/* Paquete 3: Análisis Arquitectónico */}
        <article className="bg-green shadow-xl rounded-lg p-6 w-full md:w-1/3">
          <h3 className="text-3xl font-semibold text-trend mb-4">Architectural Analysis</h3>
          <p className="text-lg text-gray-700 mb-4">
            Enhance the realism of your 3D environment with a detailed architectural analysis. This service focuses on circulation, logical systems, and functional zoning to significantly improve gameplay and make the virtual space feel more immersive and believable.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Improves realism by optimizing architectural flow.</li>
            <li>Enhances gameplay through logical and functional spatial planning.</li>
            <li>Creates a more immersive, believable environment for players.</li>
          </ul>
          <h2 className="text-xl font-semibold text-green-700 mb-4">
            Price: <span className="font-bold">Write to me</span>
          </h2>
          <button className="bg-trend text-white py-2 px-6 rounded-lg hover:bg-opacity-90 w-full">
            Get This Package
          </button>
        </article>
      </section>
    </main>
  )
}

export default Packages
