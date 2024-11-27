import React from 'react';
import Content from '../../components/contenido'

//componente

import Header from "../../components/header";








const FirstAidKit: React.FC = () => {




  return (

    <>

    <header><Header/></header>




    <section className="bg-trend text-colorBase py-12 px-6 md:px-12">
      {/* Title with animation */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-gradient animate__animated animate__fadeIn">
          The Art of Survival: First Aid Kit for Chaos
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          Find that moment and enjoy it until it fades away.
        </p>
      </div>

      {/* Narrative Content */}
      <article className="max-w-4xl mx-auto text-base leading-relaxed space-y-6">
        <p className="transition-all duration-300 ease-in-out hover:text-orange-400">
          In the world we live in, we are saturated with a <strong className="hover:text-orange-400">false reality</strong>, 
          a distortion that continues to expand, making it increasingly difficult to recognize whether we are trapped in it or not. 
          The line between what is real and what is false fades away, but with <strong className="hover:text-orange-400">intention</strong> 
          and the right techniques, it is possible to break free. This distortion, fed by the social patterns around us, 
          makes it harder and harder to achieve the <strong>good life</strong>.
        </p>

        <p className="transition-all duration-300 ease-in-out hover:text-orange-400">
          Look for the right moment to <strong className="text-orange-400">rest</strong> and appreciate life. 
          Lose yourself in that moment of peace and harmony that, unfortunately, always ends. The distortion is there, lurking, 
          and the darkness will return. But all is not lost: here is your <strong>first aid kit</strong> 
          to help <strong>lift your spirits</strong> and make you feel truly alive, even if just for an instant.
        </p>

        <p className="transition-all duration-300 ease-in-out hover:text-orange-400">
          Take it, but remember: everything is temporary. This kit is just a bridge that will take you to those resting places. 
          The key is to move quickly and find the right moments where the <strong className="text-orange-400">aura</strong> 
          of peace shines, allowing you to rest. But like everything, time is working against you, and you must be fast to enjoy those moments.
        </p>

        <p className="transition-all duration-300 ease-in-out hover:text-orange-400">
          You are guided by your ghost mentors, figures who came before you and left fragments of their wisdom behind. 
          They wont give you all the answers, but their guidance, like a <strong className="text-orange-400">glitch</strong> in reality, 
          will light your way.
        </p>

        <p className="transition-all duration-300 ease-in-out hover:text-orange-400">
          You must help those who are blinded by the distortion, those who are lost, sick, and desperate. 
          Like you, they havent taken the necessary steps because they are too blinded to see it. 
          The only way to help them is to take them to those moments of peace. The kit and tools are essential to heal them, 
          to slowly illuminate them.
        </p>

        <p className="transition-all duration-300 ease-in-out hover:text-orange-400">
          You are an explorer, navigating through your experience, seeking ways to heal and create those temporary moments of relief. 
          Dont forget your mentors, and make sure to document everything you find so the darkness doesnt return. 
          Its up to you to recreate those small sanctuaries for those in need, to give them a place to rest and heal.
        </p>
      </article>


      

    </section>

<section> <Content/></section>

</>

  );
}

export default FirstAidKit;
