import React from "react";
import Header from "../components/header";
import Image from "next/image"; // Importa el componente Image de Next.js

// Definición de tipos para los datos del producto
interface TechnicalDetails {
  polygons: number;
  accessories: string[];
  size: string;
  fileFormat: string[];
  compatibility: string[];
}

interface ProductData {
  title: string;
  description: string;
  price: string;
  isFeatured: boolean;
  specialDescription: string;
  usage: string[];
  technicalDetails: TechnicalDetails;
  buyerName: string;
  images: string[]; // Nueva propiedad para las imágenes del producto
  constructionStatus: string; // Nueva propiedad para el estado de construcción
}

const ProductPanel: React.FC = () => {
  // Array con varios productos
  const products: ProductData[] = [
    {
      title: "Palacio griego + Latin",
      description: "Base de supervivencia o centro de refugio",
      price: "$240",
      isFeatured: false,
      specialDescription: "No",
      usage: ["Juegos", "Animaciones", "Simulaciones"],
      technicalDetails: {
        polygons: 50000,
        accessories: ["Cámara", "Luces", "Texturas", "Assets"],
        size: "4.9gb",
        fileFormat: ["FBX", "OBJ"],
        compatibility: ["Unreal Engine"],
      },
      buyerName: "Disponible",
      images: ["/DiseñoWeb/shop/products/p1.jpg"],
      constructionStatus: "En construcción...", // Estado de construcción
    },
  ];

  return (
    <>
      <Header />
      <main className="relative bg-colorBase md:flex flex-row p-4 w-full mx-auto gap-6">
        {/* Listado de productos */}
        {products.map((product, index) => (
          <section key={index} className="border-4 pr-5 pl-5">
            <figure className="relative w-full flex justify-center items-center mb-2 mt-2">

            <h2 className=" absolute z-20 bg-colorBase text-2xl">{product.constructionStatus}</h2>

              <Image
                src="/DiseñoWeb/shop/product.png"
                alt="products"
                width={450}
                height={450}
                className="relative"
              />

              {/* Renderizar las imágenes adicionales del producto */}
              <figure className="absolute top-0 p-5">
                {product.images.map((image, idx) => (
                  <Image
                    key={idx}
                    src={image}
                    alt={`Imagen ${idx + 1} de ${product.title}`}
                    width={210}
                    height={0}
                  />
                ))}
              </figure>
            </figure>

            {/* Título y Descripción */}
            <article className="title-description mb-3">
              <h1 className="text-3xl font-Staatliches">{product.title}</h1>
              <p className="text-sm font-Staatliches">{product.description}</p>
              <p className="font-BebasNeue text-5xl text-green-500">Precio: {product.price}</p>
            </article>

            {/* Detalles Especiales */}
            <article className="special-description mb-3">
              <h3 className="text-lg font-Staatliches">¿Por qué es especial?</h3>
              <p className="text-sm">{product.specialDescription}</p>
            </article>

            {/* Usos */}
            <article className="usage mb-3">
              <h3 className="text-lg font-Staatliches">Usos:</h3>
              <ul className="text-sm">
                {product.usage.map((use, idx) => (
                  <li key={idx}>{use}</li>
                ))}
              </ul>
            </article>

            {/* Detalles Técnicos */}
            <article className="mb-3">
              <h3 className="text-lg font-Staatliches">Detalles Técnicos:</h3>
              <ul className="text-sm">
                <li>
                  <strong>Polígonos:</strong> {product.technicalDetails.polygons}
                </li>
                <li>
                  <strong>Tamaño:</strong> {product.technicalDetails.size}
                </li>
                <li>
                  <strong>Formatos de archivo:</strong>{" "}
                  {product.technicalDetails.fileFormat.join(", ")}
                </li>
                <li>
                  <strong>Compatibilidad:</strong>{" "}
                  {product.technicalDetails.compatibility.join(", ")}
                </li>
                <li>
                  <strong>Accesorios: </strong>
                  {product.technicalDetails.accessories.join(", ")}
                </li>
              </ul>
            </article>

            {/* Información del comprador */}
            <section className="buyer-info">
              <p className="font-Staatliches text-2xl">
                Comprado por: {product.buyerName}
              </p>
            </section>

            {/* Estado de Construcción */}
            <section className="construction-status mb-3">
              <h3 className="text-lg font-Staatliches">Estado de Construcción:</h3>
              
            </section>
          </section>
        ))}
      </main>
    </>
  );
};

export default ProductPanel;
