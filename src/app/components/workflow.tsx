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
    { src: "/trabajos/Cliente_01/step02.jpg", alt: "Update 02" },
    { src: "/trabajos/Cliente_01/step03.jpg", alt: "Update 03" },
    { src: "/trabajos/Cliente_01/step04.jpg", alt: "Update 04" },
    { src: "/trabajos/Cliente_01/step05.jpg", alt: "Update 05" },
    { src: "/trabajos/Cliente_01/step06.jpg", alt: "Update 06" },
    { src: "/trabajos/Cliente_01/step07.jpg", alt: "Update 07" },
    { src: "/trabajos/Cliente_01/step08.jpg", alt: "Update 08" },
    { src: "/trabajos/Cliente_01/step09.jpg", alt: "Update 09" },
    { src: "/trabajos/Cliente_01/step10.jpg", alt: "Update 10" },
    { src: "/trabajos/Cliente_01/step11.jpg", alt: "Update 11" },
    { src: "/trabajos/Cliente_01/step12.jpg", alt: "Update 12" },
    { src: "/trabajos/Cliente_01/step13.jpg", alt: "Update 13" },
    { src: "/trabajos/Cliente_01/step14.jpg", alt: "Update 14" },
    { src: "/trabajos/Cliente_01/step15.jpg", alt: "Update 15" },
    { src: "/trabajos/Cliente_01/step16.jpg", alt: "Update 16" },
    { src: "/trabajos/Cliente_01/step17.jpg", alt: "Update 17" },
    { src: "/trabajos/Cliente_01/step18.jpg", alt: "Update 18" },
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
      <section className="flex flex-col w-full md:flex-row gap-4">


        {/* Espacio vacío a la izquierda */}

      <section className=" relative flex-row p-5 ">

        {/* Información a la izquierda */}
        <section className="space-y-4 border-4 h-96 border-orange-400 p-5 w-full mb-5  overflow-scroll">

          <section>



          {/* COMIENZO texto */}


          
    <p>
      <strong>Project Overview:</strong> We are developing a large-scale overhaul mod for 
      <em>Mount & Blade II: Bannerlord</em> set in the <strong>Lord of the Rings</strong> universe. 
      This mod aims to immerse players in the rich lore of Middle-earth with a focus on visual fidelity and thematic accuracy. 
      As part of this, we need a talented 3D modeler to design custom icons representing towns, castles, and villages for the campaign map.
    </p>

    <p><strong>Deliverables:</strong></p>

    <p><strong>Towns (14)</strong></p>
    <p><em>300K polys max per model</em></p>
    <ul>
      <li><strong>1.Barad-Dur Tower:</strong> The dark fortress of Sauron, looming over Mordor.</li>
      <li><strong>2.The Tower of Cirith Ungol:</strong> A perilous watchtower guarding a key pass.</li>
      <li><strong>3.Minas Morgul:</strong> The haunted city of the Ringwraiths.</li>
      <li><strong>4.Durthang:</strong> A fortress overseeing Mordors northern borders.</li>
      <li><strong>5.Seregost:</strong> A fortress shrouded in secrecy and danger.</li>
      <li><strong>6.Thaurband (Nurn):</strong> A settlement vital to Mordors resources.</li>
      <li><strong>7.Lhingris:</strong> A location crawling with giant spiders and shadowy threats.</li>
      <li><strong>8.Nurn:</strong> (Creative Freedom) A region known for its farmlands and labor camps.</li>
      <li><strong>9.Lithlad:</strong> (Creative Freedom) A desolate area with volcanic landscapes.</li>
      <li><strong>10.Udun:</strong> (Creative Freedom) The primary entry point into Mordor.</li>
      <li><strong>11.Isengard:</strong> Sarumans industrial stronghold.</li>
      <li><strong>12.Dol Guldur:</strong> The ancient stronghold of the Necromancer.</li>
      <li><strong>13.Mount Gundabad:</strong> A key location for orcish armies in the north.</li>
      <li><strong>14.Haven of Umbar:</strong> A coastal fortress controlled by the Corsairs.</li>
    </ul>

    <p><strong>Castles (8)</strong></p>
    <p><em>100K polys max per model</em></p>
    <ul>
      <li><strong>15.Mount Doom:</strong> The volcano where the One Ring was forged and destroyed.</li>
      <li><strong>16.Isenmouthe (Carach Angren):</strong> A strategic pass into Mordor.</li>
      <li><strong>17.Dur-zagúr:</strong> (Creative Freedom) A fortress steeped in mystery.</li>
      <li><strong>18.Ghashgund:</strong> (Creative Freedom) A citadel forged from molten stone.</li>
      <li><strong>19.Nargroth:</strong> (Creative Freedom) A stronghold hidden deep in the mountains.</li>
      <li><strong>20.Goroth-hazâr:</strong> (Creative Freedom) A castle with ties to ancient wars.</li>
      <li><strong>21.Akûl-dûm:</strong> (Creative Freedom) A towering fortress of fearsome design.</li>
    </ul>

    <p><strong>Villages (1)</strong></p>
    <p><em>100 polys max per model</em></p>
    <p><strong>Creative freedom of a village in Mordor:</strong> A small settlement, embodying the harsh life in the shadow of Saurons domain.</p>

    <p><strong>Additional Requirements:</strong></p>
    <ul>
      <li>Only need 1 LOD</li>
      <li>Textures optimized for in-game performance</li>
      <li>Proper UV mapping</li>
      <li>Any necessary implementation guidance or notes</li>
    </ul>
  </section>

    {/* FIN texto */}




       

          


        </section>


        {/* Referencia Principal*/}

        <figure>
            <Image
              src="/trabajos/Cliente_01/step01.jpg"
              alt="Ref Illustration"
              width={360}
              height={360}
            />
          </figure>

          </section>



        {/* Espacio vacío a la derecha para imágenes */}

        <section className=" relative w-full flex-row bg-trend  ">



          
















          <figure className="absolute z-10 bg-neutral-700  border-8 border-trend right-0 md:translate-x-0 translate-x-16  opacity-50 hover:opacity-100 md:scale-75 scale-50 md:hover:scale-90 ">
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


          


{/* agreement */}

<section className="text-colorBase p-5 overflow-scroll h-full">
  <p className="text-orange-400 text-2xl font-BebasNeue">Task Scope</p>
  <ul>
    <li>
      <strong className="text-orange-400">Create Unique Icons:</strong>
      <ul>
        <li>* Design 3D icons for towns, castles, and villages that fit within the Lord of the Rings aesthetic for Mordor.</li>
        <li>* Each icon should be distinct and reflective of Mordor.</li>
      </ul>
    </li>
    <li>
      <strong className="text-orange-400">Level of Detail (LOD):</strong>
      <ul>
        <li>* Only need 1 LOD.</li>
      </ul>
    </li>
    <li>
      <strong className="text-orange-400">Artistic Style:</strong>
      <ul>
        <li>* The icons should be visually striking yet coherent with the Mount & Blade II: Bannerlord map style.</li>
        <li>* Use textures and materials that reflect the unique architecture and cultural traits of Mordor.</li>
      </ul>
    </li>
    <li>
      <strong className="text-orange-400">Technical Specifications:</strong>
      <ul>
        <li>* Compatible with Mount & Blade II: Bannerlords campaign map rendering system.</li>
        <li>* Exported in FBX format.</li>
        <li>* Texture maps diffuse, normal, specular should not exceed 4K resolution.</li>
        <li>* Materials should not exceed 2K resolution.</li>
        <li>* Only need 1 LOD.</li>
        <li>* Textures optimized for in-game performance.</li>
        <li>* Proper UV mapping.</li>
        <li>* Any necessary implementation guidance or notes.</li>
      </ul>
    </li>
    <li>
      <strong className="text-orange-400">References & Guidance:</strong>
      <ul>
        <li>* We will provide lore references, concept art, and style guides to ensure thematic accuracy.</li>
        <li>* Creative freedom is encouraged within the Lord of the Rings aesthetic framework.</li>
        <li>* Provided in the supporting files are 2 examples of Gondor Towns, Castles and Villages in an FBX file. These are currently in game and are the templates to be used.</li>
      </ul>
    </li>
    <li>
      <strong className="text-orange-400">Timeline:</strong>
      <ul>
        <li>* The expectation of delivery within 2 - 4 weeks from task commencement.</li>
      </ul>
    </li>
  </ul>
</section>



{/* FIN agreement */}






          
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
              price: <span className="text-orange-400">0</span>{" "}
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
