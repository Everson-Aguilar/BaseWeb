import React from "react";

//componente

import Products from '../../components/products'

const SplitLayout: React.FC = () => {
  return (

    <div>

    <main className=" h-screen flex flex-col bg-colorBase p-5">
      {/* Parte superior: dividida verticalmente */}
      <section className="flex flex-1">
        <div className=" text-8xl text-trend  flex-1 flex font-BebasNeue items-center justify-center border border-gray-300">
          <h1 className="scale-350">SHOP</h1>
        </div>
        <section className="flex-1 font-BebasNeue text-5xl text-trend  flex items-center justify-center border border-gray-300">
          <span className="text-8xl">3D</span>
          <h2>Environment/parts</h2>
          <h3 className="text-orange-400 scale-250">
            {" "}
            <br />
            ART LATAM
          </h3>
        </section>
      </section>

      {/* Parte inferior: 1/4 de la altura */}
      <article className="h-1/4 flex items-center justify-center bg-trend border shadow-2xl border-gray-300 p-5">
        <p className="text-lg leading-relaxed text-colorBase">
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


    <section className=" h-screen"> <Products/></section>


    </div>

  );
};

export default SplitLayout;
