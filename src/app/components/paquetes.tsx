// src/components/PanelesServicios.tsx
import React from "react";

const PanelesServicios: React.FC = () => {
  return (
    <div>
      <header className="p-3 m-5 text-7xl font-BebasNeue text-trend border-4 border-trend w-fit">
        AVAILABLE PACKAGES
      </header>

      <section className="p-20">
        <p>
          We offer a comprehensive and strategic approach to help your business
          stand out in the market. Our packages are designed to guide you through
          each stage of building your brand, from creating a solid visual identity
          to producing impactful audiovisual content. Each month, we will focus on
          key aspects that will lay the foundation of your brand and boost your
          presence in the digital space. With a commitment to quality and creativity,
          we are here to turn your ideas into visual realities that connect with
          your audience.
        </p>
      </section>

      <section className="p-8 flex flex-col md:flex-row gap-5">
        {/* First Month: Active (Blue) */}
        <article className="border border-blue-500 rounded-lg p-6 bg-blue-100 shadow-md max-w-md mx-auto my-6 text-left">
          <h2 className="text-2xl font-semibold mb-2 text-blue-900">
            First Month: Brand Identity and Planning
          </h2>
          <p className="text-lg font-bold text-blue-800 mb-4">
            <span className="text-green-600">International Price: $450 USD</span>
            <br /> * Optional Package
          </p>
          <ul className="list-disc pl-5 text-blue-800">
            <li className="mb-2">Logo and Visual Identity Design</li>
            <li className="mb-2">Development of Business Philosophy and Artistic Style</li>
            <li className="mb-2">Creation of Images, Iconography, and Symbolism</li>
            <li className="mb-2">Definition of Brand Manual</li>
            <li className="mb-2">Content Strategy and Planning for Month Two</li>
          </ul>
        </article>

        {/* Second Month: Disabled (Yellow) */}
        <article className="border border-yellow-500 rounded-lg p-6 bg-yellow-100 shadow-md max-w-md mx-auto my-6 text-left opacity-50">
          <h2 className="text-2xl font-semibold mb-2 text-yellow-900">
            Second Month: 3D Environment Design and Creation
          </h2>
          <p className="text-lg font-bold text-yellow-800 mb-4">
            <span className="text-green-600">International Price: $800 USD</span>
            <br /> * Optional Package
          </p>
          <ul className="list-disc pl-5 text-yellow-800">
            <li className="mb-2">3D Environment Concept Design</li>
            <li className="mb-2">3D Modeling and Texturing</li>
            <li className="mb-2">Lighting and Environment Composition</li>
            <li className="mb-2">Design Review and Adjustments based on Brand Identity</li>
            <li className="mb-2">Preparation for Audiovisual Production in Month Three</li>
          </ul>
        </article>

        {/* Third Month: Disabled (Green) */}
        <article className="border border-green-500 rounded-lg p-6 bg-green-100 shadow-md max-w-md mx-auto my-6 text-left opacity-50">
          <h2 className="text-2xl font-semibold mb-2 text-green-900">
            Third Month: Audiovisual Content Production
          </h2>
          <p className="text-lg font-bold text-green-800 mb-4">
            <span className="text-green-600">International Price: $450 USD</span>
            <br /> * Optional Package
          </p>
          <ul className="list-disc pl-5 text-green-800">
            <li className="mb-2">Creation of Animations and 3D Sequences</li>
            <li className="mb-2">Production of Promotional Videos and Graphics</li>
            <li className="mb-2">Editing of Audiovisual Content for Advertising</li>
            <li className="mb-2">Optimization of Content for Social Media and Websites</li>
            <li className="mb-2">Content Distribution Strategies</li>
          </ul>
        </article>
      </section>
    </div>
  );
};

export default PanelesServicios;
