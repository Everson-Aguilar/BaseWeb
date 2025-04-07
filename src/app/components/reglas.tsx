import React from "react";

import Maps from "../../app/components/mapa";
import Comments from "../../app/components/comentarios";




const SocialMediaFormats: React.FC = () => {

  return (
    <section className="relative flex h-full w-full flex-col md:flex-row text-green">
      <article className="mx-auto p-6 w-full md:w-1/2">
        <h2 className="text-3xl font-BebasNeue p-5 mb-6 text-green border-4 border-green w-fit">
          Social Media and Website Commercial Formats
        </h2>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2 text-green font-BebasNeue">
            Common:
          </h3>
          <p className="text-green mb-2">
            <span className="font-bold">Description:</span> Content that follows a traditional approach, easy to understand and widely accepted. It focuses on showcasing the products functionality and benefits.
          </p>
          <ul className="list-disc list-inside ml-4 text-green">
            <li>Static ads on social media highlighting offers.</li>
            <li>Banner ads on websites with simple designs.</li>
            <li>Product posts with images and descriptions.</li>
            <li>15-30 second video ads on platforms like Instagram and Facebook.</li>
            <li>Informational infographics about products or services.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2 text-green font-BebasNeue">
            Different:
          </h3>
          <p className="text-green mb-2">
            <span className="font-bold">Description:</span> Innovative formats designed to stand out from the crowd. They use creativity and unique visual elements to attract the consumer.
          </p>
          <ul className="list-disc list-inside ml-4 text-green">
            <li>Viral campaigns with storytelling on social media.</li>
            <li>Interactive ads that incorporate 3D design for impactful visual experiences.</li>
            <li>User-generated content that encourages active participation.</li>
            <li>Documentary-style videos that tell the story behind the brand or product.</li>
          </ul>
        </section>

        <h2 className="text-3xl font-BebasNeue mb-4 text-green text-center border-4 p-5 border-green w-fit">
          Social Media Content Rules
        </h2>
        <ul className="list-disc list-inside ml-4 text-green">
          <li>Education</li>
          <li>Needs Solution</li>
          <li>Trends</li>
          <li>Innovation</li>
          <li>Community Building</li>
          <li>Repurposing</li>
          <li>User Experience</li>
          <li>Commercial Differentiation</li>
          <li>Short-Term Viability</li>
          <li>Quality</li>
          <li>Competitor Analysis</li>
          <li>Adaptability</li>
          <li>Use of Analytical Tools</li>
          <li>Incorporation of Feedback</li>
          <li>Cultural and Social Trends</li>
          <li>Data-Driven Content</li>
        </ul>
      </article>

      <section className="w-full md:w-1/2 h-full"> 

        <div className="p-5"><Maps/></div>
        <div><Comments/></div>
        
       
      </section>
    </section>
  );
};

export default SocialMediaFormats;
