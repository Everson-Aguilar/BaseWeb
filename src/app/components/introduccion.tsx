import React from 'react';


// CSS import

import "../css/graficos.css";


const ComicStory: React.FC = () => {
  return (
    <div className=' w-full flex flex-col md:flex-row bg-base  ' >

      {/* Comic */}
      <div className="grid h-auto  bg-base gap-6 p-5 w-full ">
        {/* Viñeta 1 */}
        <div className="p-4 text-center rounded-md shadow-lg bg-white">
          <p className="text-title text-lg mb-2 ">
            Empleado A: Y aquí está el diseño del restaurante... puedes ver las mesas... y las sillas... y, eh... ¡el menú!
          </p>
          <p className="text-title text-lg mb-2 ">
            Cliente: Sí, claro... parece cualquier restaurante...
          </p>
          <div className="h-40 bg-gray-300 flex items-center justify-center">
            [Imagen de la oficina con el diseño 2D]
          </div>
        </div>

        {/* Viñeta 2 */}
        <div className="p-4 text-center rounded-md shadow-lg bg-white">
          <p className="text-title text-lg mb-2 ">
            Jefe: ¡Necesitamos algo que haga que la gente diga quiero estar ahí! Algo diferente, ¡impactante!
          </p>
          <p className="text-title text-lg mb-2 ">
            Empleado B: ¿Y si usamos gatos? Los gatos siempre funcionan...
          </p>
          <div className="h-40 bg-gray-300 flex items-center justify-center">
            [Imagen del jefe preocupado]
          </div>
        </div>

        {/* Viñeta 3 */}
        <div className="p-4 text-center rounded-md shadow-lg bg-white">
          <p className="text-title text-lg mb-2 ">
            Profesional 3D: ¡Oigan, olvídense de los gatos! ¡Voy a mostrarles cómo se ve realmente ese restaurante... antes de que abran las puertas!
          </p>
          <p className="text-title text-lg mb-2 ">
            Empleado A: ¡Es como si pudiera oler la comida!
          </p>
          <p className="text-title text-lg mb-2 ">
            Empleado B: ¿Y dónde están los gatos?
          </p>
          <div className="h-40 bg-gray-300 flex items-center justify-center">
            [Imagen del profesional 3D con tablet]
          </div>
        </div>

        {/* Viñeta 4 */}
        <div className="p-4 text-center rounded-md shadow-lg bg-white">
          <p className="text-title text-lg mb-2 ">
            Cliente: ¡Esto es perfecto! ¡Me siento como si ya estuviera comiendo allí!
          </p>
          <p className="text-title text-lg mb-2 ">
            Empleado B: ¡Y todavía no hemos pedido la cuenta!
          </p>
          <div className="h-40 bg-gray-300 flex items-center justify-center">
            [Imagen del recorrido virtual del restaurante]
          </div>
        </div>

        {/* Viñeta 5 */}
        <div className="p-4 text-center rounded-md shadow-lg bg-white">
          <p className="text-title text-lg mb-2 ">
            Profesional 3D: ¡No pierdan tiempo con renders aburridos! ¡Vengan y llévense un entorno 3D por el precio de un café! ¡Todo realista, sin IA, sin trucos!
          </p>
          <p className="text-title text-lg mb-2 ">
            Narrador: Porque cuando se trata de destacar, el mundo en 3D no tiene competencia... ¡y a 5 pesos, tampoco!
          </p>
          <div className="h-40 bg-gray-300 flex items-center justify-center">
            [Imagen del profesional 3D en la calle]
          </div>
        </div>
      </div>









      {/* Diagramas */}
      <div className=' h-[1000px]  bg-gradient-to-b from-white to-blue-200  w-full  p-5 bg-base'>
        {/* Aquí puedes agregar tus diagramas */}

      

        <h2 className="text-2xl font-BebasNeue text-center mb-4 text-title">Diagramas</h2>

        

       

        <div className="  relative flex justify-center items-center  bg-slate-300 bg-opacity-30 backdrop-blur-md p-4 rounded-md h-full shadow-lg z-10">

        <div className='absolute h-auto w-auto   top-40 flex justify-center items-center xl:p-5 md:p-2 md:gap-2 p-2 gap-2 '>

          <div className=' xl:h-28 xl:w-28 lg:h-20 lg:w-20 md:h-14 md:w-14 h-16 w-16 panel'></div>
          <div className=' xl:h-28 xl:w-28 lg:h-20 lg:w-20 md:h-14 md:w-14 h-16 w-16 panel'></div>
          <div className=' xl:h-28 xl:w-28 lg:h-20 lg:w-20 md:h-14 md:w-14 h-16 w-16 panel'></div>
          <div className=' xl:h-28 xl:w-28 lg:h-20 lg:w-20 md:h-14 md:w-14 h-16 w-16 panel'></div>
          <div className=' xl:h-28 xl:w-28 lg:h-20 lg:w-20 md:h-14 md:w-14 h-16 w-16 panel'></div>

        </div>

        <div className='absolute h-auto w-auto   bottom-40 flex justify-center items-center xl:p-5 md:p-2 md:gap-2 p-2 gap-2 '>

<div className=' xl:h-28 xl:w-28 lg:h-20 lg:w-20 md:h-14 md:w-14 h-16 w-16 panel'></div>
<div className=' xl:h-28 xl:w-28 lg:h-20 lg:w-20 md:h-14 md:w-14 h-16 w-16 panel'></div>
<div className=' xl:h-28 xl:w-28 lg:h-20 lg:w-20 md:h-14 md:w-14 h-16 w-16 panel'></div>
<div className=' xl:h-28 xl:w-28 lg:h-20 lg:w-20 md:h-14 md:w-14 h-16 w-16 panel'></div>
<div className=' xl:h-28 xl:w-28 lg:h-20 lg:w-20 md:h-14 md:w-14 h-16 w-16 panel'></div>

</div>


       


      

        

        <div className='  flex  justify-center  items-center  rounded-full w-60 h-60  panel'>
          <div className='absolute  l bg-trend h-1 w-60'></div> 


        <div className=' absolute font-BebasNeue text-4xl text-trend ' > Real <br /> Virtual</div>
        

        
        </div>

        


        </div>
      </div>

    </div>
  );
};

export default ComicStory;
