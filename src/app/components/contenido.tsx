import React from "react";
import Image from "next/image";

interface Content {
  title: string;
  objective: string;
  summary: string;
  image: string; // Image URL or path
  ContentStatus:string;
}

const contentList: Content[] = [
  {
    title: "The Art of Survival",
    objective: "Unveiling the truth behind social distortion.",
    summary: "An approach to identifying and escaping the false realities of our era.",
    image: "/images/survival.jpg", 
    ContentStatus:"available"

  },
  {
    title: "The Art of Survival",
    objective: "Unveiling the truth behind social distortion.",
    summary: "An approach to identifying and escaping the false realities of our era.",
    image: "/images/survival.jpg", 
    ContentStatus:"investigating..."
  }
];

const ContentContainer: React.FC = () => {
  return (

    <section>

    <h2 className=" text-4xl flex flex-row justify-center items-center p-5 font-BebasNeue text-trend">Chapters</h2>

    

    <section className="grid gap-8 px-6 py-12 lg:grid-cols-2 max-w-6xl mx-auto">
      {contentList.map((content, index) => (
        <article
          key={index}
          className="bg-trend text-colorBase p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          {/* Image Section */}
          <div className="relative h-48 w-full mb-4">
            <Image
              src={content.image}
              alt={content.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          {/* Text Section */}
          <h2 className="text-2xl font-bold mb-2">{content.title}</h2>
          <p className="text-orange-400 font-semibold mb-2">{content.objective}</p>
          <p className="text-colorBase">{content.summary}</p>
          <p  className=" text-orange-400">{content.ContentStatus}</p>
        </article>
      ))}
    </section>

    </section>

  );
};

export default ContentContainer;
