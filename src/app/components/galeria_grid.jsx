import Image from "next/image";
import "../css/galeria.css"; // Asumiendo que este es tu archivo de estilos

const MyComponent = () => {
  // Array con las rutas de las imágenes
  const images = [
    "/DiseñoWeb/portfolio/g1.jpg",
    "/DiseñoWeb/portfolio/g2.jpg",
    "/DiseñoWeb/portfolio/g3.jpg",
    "/DiseñoWeb/portfolio/g4.jpg",
    "/DiseñoWeb/portfolio/g5.jpg",
    "/DiseñoWeb/portfolio/g6.jpg",
    "/DiseñoWeb/portfolio/g7.jpg",
    "/DiseñoWeb/portfolio/g8.jpg",
    "/DiseñoWeb/portfolio/g9.jpg",
    "/DiseñoWeb/portfolio/g10.jpg",
    "/DiseñoWeb/portfolio/g11.jpg",
    "/DiseñoWeb/portfolio/g12.jpg",
  ];

  return (
    <div className="galeria w-full h-full grid grid-cols-4 gap-4">
      {/* Mapeamos sobre el array de imágenes */}
      {images.map((image, index) => (
        <div key={index} className="relative rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={`Imagen ${index + 1}`}
            width={400}
            height={400}
          />
          <button className="absolute h-5 w-auto top-2 right-2  bg-neutral-800 text-black px-3 py-1 rounded-md shadow-md">
            <Image
              src="/DiseñoWeb/ver.svg"
              alt="ver"
              layout="fill" // Ajusta la imagen para llenar todo el contenedor
              objectFit="fill" // Ajusta la imagen para llenar completamente el contenedor, sin recortar
            />
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyComponent;
