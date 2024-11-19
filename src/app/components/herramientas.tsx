// Componente para cada Video con su título y descripción
type VideoItemProps = {
  src: string;
  alt: string;
  titulo: string;
  descripcion: string;
};

// Componente funcional para mostrar un video con su título y descripción
const VideoItem: React.FC<VideoItemProps> = ({ src, alt, titulo, descripcion }) => {
  return (
    <div className="relative  ">
      <div className="absolute bottom-0 p-1">
        <h2 className="text-2xl md:text-3xl font-BebasNeue  text-orange-400">{titulo}</h2>
        <p className="text-sm md:text-xl bg-trend opacity-70 ">{descripcion}</p>
      </div>
      <video 
        src={src}
        width={500} // Ajusta el tamaño del video según tus necesidades
        height={500}
        autoPlay
        loop
        muted
        className="block pointer-events-none "
        aria-label={alt}
      />
    </div>
  );
};

// Array de objetos con la información de los videos
const videos = [
  {
    src: "/DiseñoWeb/WebRecursos/animacion_herramientas/v1.mp4",
    alt: "esculpido 3d",
    titulo: "Zbrush",
    descripcion:
      "ZBrush es un software de modelado 3D y escultura digital utilizado en videojuegos, películas y diseño 3D.",
  },
  {
    src: "/DiseñoWeb/WebRecursos/animacion_herramientas/v2.mp4",
    alt: "modelado 3d",
    titulo: "Blender",
    descripcion:
      "Blender es una herramienta de animación y modelado 3D, con capacidades de texturización y renderizado.",
  },
  {
    src: "/DiseñoWeb/WebRecursos/animacion_herramientas/v3.mp4",
    alt: "Renderizado en Unreal Engine",
    titulo: "Render",
    descripcion:
      "Renderiza imágenes y escenas 3D realistas en tiempo real con Unreal Engine.",
  },
  {
    src: "/DiseñoWeb/WebRecursos/animacion_herramientas/v4.mp4",
    alt: "Edición de Video",
    titulo: "Adobe Premiere",
    descripcion:
      "Adobe Premiere es un software de edición de video profesional utilizado para el montaje de imágenes en movimiento.",
  },
  {
    src: "/DiseñoWeb/WebRecursos/animacion_herramientas/v5.mp4",
    alt: "Programación",
    titulo: "Next.js/Node.js",
    descripcion:
      "Next.js y Node.js son herramientas para crear aplicaciones web rápidas y escalables con JavaScript.",
  },
  {
    src: "/DiseñoWeb/WebRecursos/animacion_herramientas/v6.mp4",
    alt: "Diseño 2D",
    titulo: "Photoshop",
    descripcion:
      "Photoshop es el programa líder en edición y diseño gráfico 2D para imágenes y fotografía.",
  },
  {
    src: "/DiseñoWeb/WebRecursos/animacion_herramientas/v7.mp4",
    alt: "Arquitectura",
    titulo: "Revit",
    descripcion:
      "Revit es un software de modelado para arquitectura, ingeniería y construcción con BIM.",
  },
  {
    src: "/DiseñoWeb/WebRecursos/animacion_herramientas/v8.mp4",
    alt: "Animación 2D",
    titulo: "After Effects",
    descripcion:
      "After Effects es un software para crear efectos visuales y composiciones en animación 2D y 3D.",
  },
  {
    src: "/DiseñoWeb/WebRecursos/animacion_herramientas/v9.mp4",
    alt: "Texturizado",
    titulo: "Substance Painter",
    descripcion:
      "Substance Painter es una herramienta avanzada para texturizar modelos 3D en tiempo real.",
  },
];

const MiComponente: React.FC = () => {
  return (
    <div className="text-colorBase relative p-5 flex flex-wrap gap-5 justify-start items-start w-full">
      {videos.map((video, index) => (
        <VideoItem
          key={index}
          src={video.src}
          alt={video.alt}
          titulo={video.titulo}
          descripcion={video.descripcion}
        />
      ))}
    </div>
  );
};

export default MiComponente;
