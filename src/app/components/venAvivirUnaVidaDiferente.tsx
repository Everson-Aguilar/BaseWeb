import React from 'react';
import Link from 'next/link';

const MiComponente: React.FC = () => {
  return (
    <Link href="/pages/VidaDiferente/" className="  font-BebasNeue text-1xl fixed z-20 bg-green hover:bg-orange-300 h-96 w-5 shadow-lg">
      <nav>
        <p className="absolute top-44 -translate-x-[110px] w-60 -rotate-90">
        Meet the Founder
        </p>
      </nav>
    </Link>
  );
};

export default MiComponente;
