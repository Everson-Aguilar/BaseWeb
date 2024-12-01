import React from "react";
import Image from "next/image"; // Importa el componente Image de Next.js

//componente

import Products from '../../components/products'

const SplitLayout: React.FC = () => {
  return (

    <div>

    <main className=" h-screen flex flex-col bg-colorBase p-5">
      {/* Parte superior: dividida verticalmente */}
      <section className=" relative flex-row md:flex flex-1">

        <section className=" relative h-full text-8xl text-colorBase w-full md:w-1/2 flex font-BebasNeue items-center justify-center border border-gray-300">
        
          <h1 className=" absolute scale-350">SHOP</h1>

          <figure>

          <Image
              src="/DiseñoWeb/shop/market.jpg"
              alt="marketplace"
              width={800}
              height={800}
            />


          </figure>

        </section>

        

        <section className=" overflow-hidden relative h-full  w-full md:w-1/2 font-BebasNeue text-5xl text-trend md:justify-center md:items-center  flex  border border-gray-300">
          <span className="  text-8xl">3D</span>
          <h2>Environment/parts</h2>
          <h3 className="absolute text-orange-400 scale-250 left-1/2  ">
            {" "}
            <br />
            ART LATAM
          </h3>
        </section>

      </section>

      {/* Parte inferior: 1/4 de la altura */}
      <article className=" relative h-fill flex  h-fil bg-trend border shadow-2xl border-gray-300 p-5">
        <p className="text-sm  leading-relaxed text-colorBase">
          <span className="font-semibold text-orange-400 ">
            Diseños exclusivos con estilo artístico exclusivo Latam, mano
            artística latinoamericana con historia rica de emociones,
          </span>{" "}
          listos para usar en tus proyectos. Al comprar un artículo de nuestra
          tienda,{" "}
          <span className="font-semibold">
            el archivo pasa a ser tuyo y estará disponible exclusivamente para
            un solo cliente.
          </span>{" "}
          Nadie, excepto tú, podrá usarlo. El artículo será retirado del mercado
          y ya no estará a la venta, pero se mantendrá expuesto en nuestro
          portafolio como muestra del trabajo realizado. En la página del
          portafolio,{" "}
          <span className="font-semibold text-orange-400">
            el nombre del comprador aparecerá junto al artículo adquirido,
          </span>{" "}
          destacando la exclusividad de tu compra.
        </p>
      </article> 

      

    </main>


    <section><Products/></section>


    </div>

  );
};

export default SplitLayout;
