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

        <section className="    flex-row justify-center items-center p-5  text-trend">

    <h2 className=" text-4xl font-BebasNeue  ">Chapters</h2>

    <h3> <strong>Form Follows Function – Louis Sullivan</strong></h3>

    <p> <span className="text-trend text-5xl ">!</span>A firm believer that functionality is what shapes design! I believe that something truly functional feels alive, resonates with us, reduces unnecessary effort, and serves a clear purpose. That’s why every chapter of my experience and exploration is focused on crafting solutions that are not only practical but also aesthetically meaningful.

My approach blends forms, colors, textures, and purpose, ensuring that each element has a coherent meaning, is practical, enjoyable, and adds unique value. Every design I create is born from logic, from understanding the why behind things, embracing their essence to build authentic solutions.

I strive to see reality at its brightest, appreciating what is truly meaningful while avoiding getting lost in the distortion of superficiality. My goal is to create transcendent experiences where functionality and design converge to illuminate clear and purposeful paths.</p>

</section>

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
