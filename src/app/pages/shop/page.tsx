import { Metadata } from "next";
import Image from "next/image"; 
import Products from "../../components/products";  // Asegúrate de que esta ruta sea correcta.

// Definiendo los metadatos
export const metadata: Metadata = {
  title: "Shop 3D Environments and Assets in Latin American Style",
  description:
    "Browse and purchase high-quality 3D environments and assets inspired by the diverse cultures of Latin America. From vibrant landscapes and traditional architecture to tropical textures and indigenous art, our collection brings authentic Latin American style to your game development. Perfect for RPGs, adventure games, or simulations, our store offers everything you need to create immersive, culturally rich worlds. Explore our catalog today and find the perfect assets to elevate your game.",
};

const SplitLayout: React.FC = () => {
  return (
    <main className="h-screen flex flex-col bg-colorBase p-5">
      <section className="relative flex-row md:flex flex-1">
        <section className="relative h-full text-8xl text-colorBase w-full md:w-1/2 flex font-BebasNeue items-center justify-center border border-gray-300">
          <h1 className="absolute scale-200 md:scale-350">SHOP</h1>

          <figure>
            <Image
              src="/DiseñoWeb/shop/market.jpg"
              alt="marketplace"
              width={800}
              height={800}
            />
          </figure>
        </section>

        <section className="overflow-hidden relative h-full w-full md:w-1/2 font-BebasNeue text-5xl text-trend md:justify-center md:items-center flex border border-gray-300">
          <span className="text-8xl">3D</span>
          <h2>Environment/parts</h2>
          <h3 className="absolute text-orange-400 scale-250 left-1/2">
            <br />
            ART LATAM
          </h3>
        </section>
      </section>

      <article className="relative h-fill flex h-fil bg-trend border shadow-2xl border-gray-300 p-5">
        <p className="text-sm leading-relaxed text-colorBase">
          <span className="font-semibold text-orange-400">
            Diseños exclusivos con estilo artístico exclusivo Latam, mano
            artística latinoamericana con historia rica de emociones,
          </span>{" "}
          listos para usar en tus proyectos. Al comprar un artículo de nuestra
          tienda,{" "}
          <span className="font-semibold">
            el archivo pasa a ser tuyo y estará disponible exclusivamente para
            un solo cliente.
          </span>{" "}
          Nadie, excepto tú, podrá usarlo. El artículo será retirado del
          mercado y ya no estará a la venta, pero se mantendrá expuesto en
          nuestro portafolio como muestra del trabajo realizado. En la página
          del portafolio,{" "}
          <span className="font-semibold text-orange-400">
            el nombre del comprador aparecerá junto al artículo adquirido,
          </span>{" "}
          destacando la exclusividad de tu compra.
        </p>
      </article>

      <section>
        <Products />
      </section>
    </main>
  );
};

export default SplitLayout;
