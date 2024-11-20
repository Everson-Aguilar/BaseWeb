import React from "react";
import Image from "next/image";  // Importar el componente Image de Next.js

interface PlataformaData {
  nombre: string;
  descripcion: string;
  calificacion: string;
  estrellas: string;
  tiempoRespuesta: string;
  imagen: string;  // Agregar la propiedad imagen
}

const plataformas: PlataformaData[] = [
  {
    nombre: "elempleo",
    descripcion:
      "ingieneria o arquitectura",
    calificacion: "★★★",
    estrellas: "0-5 estrellas",
    tiempoRespuesta: "0-0 días",
    imagen: "/DiseñoWeb/paginasTrabajo/p1.png",  // Ruta de la imagen de elempleo
  },
  {
    nombre: "computrabajo",
    descripcion:
      "marketing contenido, diseño 3d, diseño industrial, estanderia, 3D, dibujante, delineador",
    calificacion: "★★★★★",
    estrellas: "0-5 estrellas",
    tiempoRespuesta: "0-0 días",
    imagen: "/DiseñoWeb/paginasTrabajo/p2.png",  // Ruta de la imagen de Workana
  },
  // Puedes agregar más plataformas aquí
];

const Plataforma: React.FC = () => {
  return (
    <article>
      <div className="flex-wrap">
        {plataformas.map((plataforma, index) => (
          <section key={index} className="flex gap-5 mb-5">
            <div className="w-40 h-40 border-4 border-trend">
              {/* Usar el componente Image de Next.js */}
              <Image
                src={plataforma.imagen}
                alt={`Imagen de ${plataforma.nombre}`}
                width={160}  // Ancho de la imagen
                height={160} // Alto de la imagen
                className="object-cover"  // Asegura que la imagen cubra el contenedor
              />
            </div>
            <div className="w-1/3">
              <h2 className="font-BebasNeue text-3xl">{plataforma.nombre}</h2>
              <p>
                <span className="font-BebasNeue text-1xl">Tendencia:</span>{" "}
                {plataforma.descripcion}
              </p>
              <div className="font-BebasNeue text-1xl">
                <span>Calificación:</span> {plataforma.calificacion}{" "}
                {plataforma.estrellas}
              </div>
              <div className="font-BebasNeue text-1xl">
                <span>Tiempo de Respuesta Promedio:</span>{" "}
                {plataforma.tiempoRespuesta}
              </div>
            </div>
          </section>
        ))}
      </div>
    </article>
  );
};

export default Plataforma;
