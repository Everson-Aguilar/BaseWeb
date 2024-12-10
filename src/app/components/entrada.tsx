// components/BusinessBanner.tsx

import Image from 'next/image';
import Link from 'next/link';

const BusinessBanner = () => {
  return (
    <div className="flex flex-col justify-center items-center h-fill text-center p-5">
      <Link href="/"> {/* Change "/" to the route you want to redirect to */}
        <button className="text-lg bg-trend p-5 text-colorBase rounded-lg hover:bg-orange-600 transition">
        My professionalism, click here.
        </button>
      </Link>
      <div>
        <Image 
          src="/DiseñoWeb/logogris.svg" // Make sure this image is in the "public" folder
          alt="Logo"
          width={150}
          height={150}
        />
      </div>
    </div>
  );
};

export default BusinessBanner;
