import Image from "next/image";
import '../css/galeria.css'; // Asumiendo que este es tu archivo de estilos

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

        //guarda la informacion en una base datos

    ];

    return (
        <div className='galeria w-full h-full grid grid-cols-4 gap-4'>
            {/* Mapeamos sobre el array de imágenes */}
            {images.map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden">
                    <Image
                        src={image}
                        alt={`Imagen ${index + 1}`}
                        width={400}
                        height={400}
                    />
                </div>
            ))}
        </div>
    );
}

export default MyComponent;
