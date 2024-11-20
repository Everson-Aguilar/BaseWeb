import React from "react";



interface Postulaciones {
  fecha: string;
  postulaciones: number;
  
}

interface Respuestas {


    respuestas: number;
    detalles: string;

}

const respuesta: Respuestas = {
    respuestas: 0,
    detalles: "Estas son las respuestas obtenidas"
  };


const experimentalPersonal: Postulaciones[] = [
  {
    fecha: "20/11/2024",
    postulaciones: 40,
  },
  {
    fecha: "21/11/2024",
    postulaciones: 0,
  },
  // Agrega más objetos según sea necesario
];






const PostulacionesComponent: React.FC = () => {
  return (
    <article>



      <div className="w-fill h-fill flex-wrap">
        {experimentalPersonal.map((postulacion, index) => (
          <section key={index} className="flex gap-5 mb-5">
            <div className="w-1/4">
              <h2 className="font-BebasNeue text-3xl">Postulaciones</h2>
              <p>
                <span className="font-BebasNeue text-1xl">Fecha:</span>{" "}
                {postulacion.fecha}
              </p>
              <div className="font-BebasNeue text-1xl">
                <span>Postulaciones:</span> {postulacion.postulaciones}
              </div>
            </div>
          </section>
        ))}
      </div>


      <div className=" font-BebasNeue text-3xl text-trend"> {respuesta.respuestas} </div>
      <div>{respuesta.detalles}</div>

    </article>
  );
};

export default PostulacionesComponent;
