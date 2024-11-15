import React from 'react';
import Link from 'next/link';

const MiComponente: React.FC = () => {
  return (
    <Link href="/pages/VidaDiferente/" className="font-BebasNeue text-1xl fixed bg-orange-500 hover:bg-orange-300 h-96 w-5 shadow-lg">
      <nav>
        <p className="absolute top-44 -translate-x-[110px] w-60 -rotate-90">
          ENTIENDE A TUS CLIENTES...
        </p>
      </nav>
    </Link>
  );
};

export default MiComponente;
