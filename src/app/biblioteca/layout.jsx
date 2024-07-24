import Header from "../components/header";
import '../biblioteca/mobil.css'
import Image from "next/image";


const Layout = ({ children }) => {



  return (

<div> 

  <div className="fixed mobil z-30 backdrop-blur-lg h-screen w-screen  font-Staatliches text-2xl text-neutral-300   ">
      
    <Image
                      src="/DiseñoWeb/horizontal.jpg"
                      alt="diseño objetos 3d"
                      width={100} // Ancho deseado en píxeles (equivalente a w-15 en Tailwind CSS)
                      height={100} // Alto deseado en píxeles (equivalente a h-15 en Tailwind CSS)
                      className="rotar_animacion  rounded-full"
                      
                    />
                  

      <div className=" ml-3">rotar dispositivo a horizontal</div>
  </div>

    <div><header >
    <Header />
  </header>

    <div className="relative bg-neutral-600 min-h-screen p-5">
      <main className=" mt-10">{children}</main>
    </div>

    </div>

    </div>
    
  );
};

export default Layout;
