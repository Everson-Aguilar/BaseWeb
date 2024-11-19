// components/BusinessBanner.tsx

import Image from 'next/image';
import Link from 'next/link';

const BusinessBanner = () => {
  return (
    <div className="flex flex-col justify-center items-center h-fill text-center p-5">
      <Link href="/"> {/* Cambia "/" a la ruta que deseas redirigir */}
        <button className="text-lg bg-orange-400 p-5 text-colorBase rounded-lg hover:bg-orange-600 transition">
          Ven y mira mi agencia de marketing digital.
        </button>
      </Link>
      <div>
        <Image 
          src="/DiseñoWeb/logogris.svg" // Asegúrate de tener esta imagen en la carpeta "public"
          alt="Logo"
          width={150}
          height={150}
        />
      </div>
    </div>
  );
};

export default BusinessBanner;
