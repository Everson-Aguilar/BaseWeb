// Component for each video with its title and description
type VideoItemProps = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

// Functional component to display a video with its title and description
const VideoItem: React.FC<VideoItemProps> = ({
  src,
  alt,
  title,
  description,
}) => {
  return (
    <div className="relative">
      <div className="absolute bottom-0 p-1">
        <h2 className="text-2xl md:text-3xl font-BebasNeue text-orange-400">
          {title}
        </h2>
        <p className="text-sm md:text-xl bg-trend opacity-70">{description}</p>
      </div>
      <video
        src={src}
        width={400} // Adjust the video size as needed
        height={400}
        autoPlay
        loop
        muted
        className="block pointer-events-none"
        aria-label={alt}
      />
    </div>
  );
};

// Array of objects with video information
const videos = [
  {
    src: "/DiseñoWeb/WebRecursos/animacion_herramientas/v1.mp4",
    alt: "3D sculpting",
    title: "Zbrush",
    description:
      "ZBrush is a 3D modeling and digital sculpting software used in video games, movies, and 3D design.",
  },
  {
    src: "/DiseñoWeb/WebRecursos/animacion_herramientas/v2.mp4",
    alt: "3D modeling",
    title: "Blender",
    description:
      "Blender is a 3D animation and modeling tool, with texturing and rendering capabilities.",
  },
  {
    src: "/DiseñoWeb/WebRecursos/animacion_herramientas/v3.mp4",
    alt: "Rendering in Unreal Engine",
    title: "Render",
    description:
      "Renders realistic 3D images and scenes in real-time with Unreal Engine.",
  },
  {
    src: "/DiseñoWeb/WebRecursos/animacion_herramientas/v4.mp4",
    alt: "Video editing",
    title: "Adobe Premiere",
    description:
      "Adobe Premiere is a professional video editing software used for assembling moving images.",
  },
  {
    src: "/DiseñoWeb/WebRecursos/animacion_herramientas/v5.mp4",
    alt: "Programming",
    title: "Next.js/Node.js",
    description:
      "Next.js and Node.js are tools for creating fast and scalable web applications with JavaScript.",
  },
  {
    src: "/DiseñoWeb/WebRecursos/animacion_herramientas/v6.mp4",
    alt: "2D design",
    title: "Photoshop",
    description:
      "Photoshop is the leading program for 2D graphic editing and design for images and photography.",
  },
  {
    src: "/DiseñoWeb/WebRecursos/animacion_herramientas/v7.mp4",
    alt: "Architecture",
    title: "Revit",
    description:
      "Revit is a modeling software for architecture, engineering, and construction with BIM.",
  },
  {
    src: "/DiseñoWeb/WebRecursos/animacion_herramientas/v8.mp4",
    alt: "2D animation",
    title: "After Effects",
    description:
      "After Effects is software for creating visual effects and compositions in 2D and 3D animation.",
  },
  {
    src: "/DiseñoWeb/WebRecursos/animacion_herramientas/v9.mp4",
    alt: "Texturing",
    title: "Substance Painter",
    description:
      "Substance Painter is an advanced tool for real-time texturing of 3D models.",
  },
];

const MyComponent: React.FC = () => {
  return (
    <div>
      <div className="p-5">
        <h2 className="text-3xl font-BebasNeue text-trend">
          TECHNOLOGICAL TOOLS{" "}
        </h2>

        <p>
          I create advanced digital design solutions, both in 2D and 3D, using
          the most common and powerful tools in the industry. I transform ideas
          into realistic and detailed visual experiences, working with graphic
          design, animation, and professional editing software. My focus on
          precision and innovation ensures results that exceed expectations in
          fields such as video games, cinema, architecture, and more.
        </p>
      </div>

      <div className="text-colorBase relative p-5 flex flex-wrap gap-5 justify-start items-start w-full">
        {videos.map((video, index) => (
          <VideoItem
            key={index}
            src={video.src}
            alt={video.alt}
            title={video.title}
            description={video.description}
          />
        ))}
      </div>
    </div>
  );
};

export default MyComponent;

