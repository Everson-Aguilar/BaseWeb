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
}

const ProductPanel: React.FC = () => {
  // Array con varios productos
  const products: ProductData[] = [
    {
      title: "Entorno 3D exclusivo",
      description: "Este entorno 3D está diseñado para brindar una experiencia única.",
      price: "$199",
      isFeatured: true,
      specialDescription:
        "Este entorno es especialmente destacado por su complejidad y detallado diseño.",
      usage: ["Juegos", "Animaciones", "Simulaciones"],
      technicalDetails: {
        polygons: 50000,
        accessories: ["Cámara", "Luces", "Texturas"],
        size: "10MB",
        fileFormat: ["FBX", "OBJ"],
        compatibility: ["Unreal Engine", "Unity"],
      },
      buyerName: "Juan Pérez",
    },
    {
      title: "Nuevo Entorno 3D",
      description: "Un entorno innovador para proyectos creativos.",
      price: "$249",
      isFeatured: false,
      specialDescription: "Destacado por su diseño moderno y funcionalidad.",
      usage: ["Arquitectura", "Visualizaciones"],
      technicalDetails: {
        polygons: 75000,
        accessories: ["Cámara avanzada", "Sombras dinámicas"],
        size: "15MB",
        fileFormat: ["FBX", "GLTF"],
        compatibility: ["Unreal Engine", "Blender"],
      },
      buyerName: "Ana Gómez",
    },

    {
      title: "Nuevo Entorno 3D",
      description: "Un entorno innovador para proyectos creativos.",
      price: "$249",
      isFeatured: false,
      specialDescription: "Destacado por su diseño moderno y funcionalidad.",
      usage: ["Arquitectura", "Visualizaciones"],
      technicalDetails: {
        polygons: 75000,
        accessories: ["Cámara avanzada", "Sombras dinámicas"],
        size: "15MB",
        fileFormat: ["FBX", "GLTF"],
        compatibility: ["Unreal Engine", "Blender"],
      },
      buyerName: "Ana Gómez",
    }


  ];

  return (
    <>
      <Header />
      <main className="relative flex mt-40 p-4 w-full mx-auto gap-6">

  

        {/* Listado de productos */}
        {products.map((product, index) => (
          <div key={index} className=" border border-gray-300 rounded-lg shadow-lg p-4">

<figure>

<Image
    src="/DiseñoWeb/shop/product.png"
    alt="products"
    width={500}
    height={500}
  />


</figure>

            {/* Título y Descripción */}
            <article className="title-description mb-3">
              <h1 className="text-5xl font-Staatliches">{product.title}</h1>
              <p className="text-sm font-Staatliches">{product.description}</p>
              <p className="font-BebasNeue text-5xl">Precio: {product.price}</p>
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
                <li>Polígonos: {product.technicalDetails.polygons}</li>
                <li>Tamaño: {product.technicalDetails.size}</li>
                <li>Formatos de archivo: {product.technicalDetails.fileFormat.join(", ")}</li>
                <li>Compatibilidad: {product.technicalDetails.compatibility.join(", ")}</li>
                <li>Accesorios: {product.technicalDetails.accessories.join(", ")}</li>
              </ul>
            </article>

            {/* Información del comprador */}
            <section className="buyer-info">
              <p className="font-Staatliches text-2xl">Comprado por: {product.buyerName}</p>
            </section>
          </div>
        ))}
      </main>
    </>
  );
};

export default ProductPanel;
