import React, { useRef, useState } from "react";
import Image from "next/image";

interface Package {
  title: string;
  description: string;
  image: string;
  basic: string[];
  advanced: string[];
  premium: string[];
  duration: string;
  dailyContent: string;
}

const packages: Package[] = [
  {
    title: "Unlimited 3D Content",
    description: "Create Realistic 3D Ads for Social Media",
    image: "/DiseñoWeb/subServicio/hongos.png",
    basic: ["15 3D images", "2 3D videos of 15 or 30 seconds", "1 revision"],
    advanced: ["23 3D images", "4 3D videos of 15 or 30 seconds", "2 revisions"],
    premium: ["31 3D images", "6 3D videos of 15 or 30 seconds", "2 revisions"],
    duration: "1 month",
    dailyContent: "daily content for your social media",
  },
  {
    title: "Common Highlight",
    description: "Impactful 3D Content for Effective Marketing",
    image: "/DiseñoWeb/subServicio/caballero.png",
    basic: ["15 3D images", "2 3D videos of 15 or 30 seconds", "1 revision"],
    advanced: ["23 3D images", "4 3D videos of 15 or 30 seconds", "2 revisions"],
    premium: ["31 3D images", "6 3D videos of 15 or 30 seconds", "2 revisions"],
    duration: "1 month",
    dailyContent: "daily content for your social media",
  },
  {
    title: "Cinematic Production",
    description: "Impactful 3D Videos for Professional Marketing",
    image: "/DiseñoWeb/subServicio/camaras.png",
    basic: ["15 3D images", "2 3D videos of 15 or 30 seconds", "1 revision"],
    advanced: ["23 3D images", "4 3D videos of 15 or 30 seconds", "2 revisions"],
    premium: ["31 3D images", "6 3D videos of 15 or 30 seconds", "2 revisions"],
    duration: "1 month",
    dailyContent: "daily content for your social media",
  },
];

const PackageList: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    if (scrollContainerRef.current) {
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const deltaX = e.clientX - startX;
    scrollContainerRef.current.scrollLeft = scrollLeft - deltaX;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    if (scrollContainerRef.current) {
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const deltaX = e.touches[0].clientX - startX;
    scrollContainerRef.current.scrollLeft = scrollLeft - deltaX;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <>
      <h2 className="font-BebasNeue text-4xl text-trend border-b-2">SubServices</h2>

      <section
        ref={scrollContainerRef}
        className="flex md:h-screen overflow-hidden gap-5 cursor-grab"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {packages.map((pkg: Package, index: number) => (
          <div
            key={index}
            className="relative min-w-[350px] text-colorBase md:w-2/6 bg-trend mt-5 p-4 rounded-lg shadow-lg select-none"
          >
            <Image
              src={pkg.image}
              alt={pkg.title}
              width={500}
              height={200}
              className="w-full h-fill object-cover rounded-lg pointer-events-none"
            />
            <h3 className="text-xl font-bold mt-3">{pkg.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{pkg.description}</p>
            <div className="mt-3">
              <h4 className="font-semibold">Basic:</h4>
              <ul className="list-disc list-inside">
                {pkg.basic.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <h4 className="font-semibold mt-3">Advanced:</h4>
              <ul className="list-disc list-inside">
                {pkg.advanced.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <h4 className="font-semibold mt-3">Premium:</h4>
              <ul className="list-disc list-inside">
                {pkg.premium.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              Duration: {pkg.duration}
            </p>
            <p className="text-sm text-gray-500">
              Daily Content: {pkg.dailyContent}
            </p>
          </div>
        ))}
      </section>
    </>
  );
};

export default PackageList;
