import React from "react";
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
  imageUrl: string;
  videoUrl: string;
}

const ProductPanel: React.FC = () => {
  // Datos internos del producto con los tipos definidos
  const productData: ProductData = {
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
    imageUrl: "/images/entorno3d.jpg", // Asegúrate de que la ruta de la imagen sea correcta
    videoUrl: "/videos/entorno3d.mp4", // Cambié el enlace de YouTube a un archivo de video local
  };

  return (
    <div className="product-panel border border-gray-300 p-4 w-full max-w-xl mx-auto">
      {/* Título y Descripción */}
      <div className="title-description border-b border-gray-300 mb-3">
        <h1 className="text-xl font-bold">{productData.title}</h1>
        <p className="text-sm">{productData.description}</p>
        <p className="font-semibold mt-2">Precio: {productData.price}</p>
      </div>

      {/* Detalles Especiales */}
      <div className="special-description border-b border-gray-300 mb-3">
        <h3 className="text-lg font-semibold">¿Por qué es especial?</h3>
        <p className="text-sm">{productData.specialDescription}</p>
      </div>

      {/* Usos */}
      <div className="usage border-b border-gray-300 mb-3">
        <h3 className="text-lg font-semibold">Usos:</h3>
        <ul className="text-sm">
          {productData.usage.map((use, index) => (
            <li key={index}>{use}</li>
          ))}
        </ul>
      </div>

      {/* Detalles Técnicos */}
      <div className="technical-details border-b border-gray-300 mb-3">
        <h3 className="text-lg font-semibold">Detalles Técnicos:</h3>
        <ul className="text-sm">
          <li>Polígonos: {productData.technicalDetails.polygons}</li>
          <li>Tamaño: {productData.technicalDetails.size}</li>
          <li>Formatos de archivo: {productData.technicalDetails.fileFormat.join(", ")}</li>
          <li>Compatibilidad: {productData.technicalDetails.compatibility.join(", ")}</li>
          <li>Accesorios: {productData.technicalDetails.accessories.join(", ")}</li>
        </ul>
      </div>

      {/* Imagen y Video */}
      <div className="media border-b border-gray-300 mb-3">
        <div className="image-container mb-3">
          <Image
            src={productData.imageUrl} // Usamos el componente Image de Next.js
            alt={productData.title}
            width={400} // Ajustamos el tamaño de la imagen
            height={250} // Ajustamos la altura de la imagen
            className="border border-gray-300"
          />
        </div>

        <div className="video-container mb-3">
          <video width="100%" height="200" controls className="border border-gray-300">
            <source src={productData.videoUrl} type="video/mp4" />
            Tu navegador no soporta el formato de video.
          </video>
        </div>
      </div>

      {/* Información del comprador */}
      <div className="buyer-info">
        <p className="font-semibold text-sm">Comprado por: {productData.buyerName}</p>
      </div>
    </div>
  );
};

export default ProductPanel;
