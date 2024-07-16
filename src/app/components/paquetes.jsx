"use client";

import React, { useState } from "react";
import Image from "next/image";

//componentes

import Plantas from "./plantas";
import Construcciones from "./construcciones";
import Ref from "./ref";

//css

import "../css/peticion.css";

const Paquetes = () => {
  // sistemaEscala

  //array
  const escalasAmbiente = [40, 80, 120, 160, 200, 240, 280, 400, 1000, 2000];

  //selectivo de array

  const [selectivoEscala, setselectivoEscala] = useState(escalasAmbiente[0]);

  // convercion m2

  const metrosCuadrados = selectivoEscala * selectivoEscala;

  // condicional
  const asignarMensaje = () => {
    switch (selectivoEscala) {
      case 40:
        return "Vivienda, Gimnasio, Taller, Parque, Garaje";
      case 80:
        return "Oficina, Cafetería, Tienda, Sala de exposiciones, Estudio de arte, Cancha de baloncesto, Castillo de juegos";
      case 120:
        return "Restaurante, Salón de eventos, Galería de arte, Clínica médica, Salón de belleza, Cancha de fútbol, Bosque de aventuras";
      case 160:
        return "Biblioteca, Centro educativo, Centro de coworking, Estudio de música, Sala de conferencias, Cancha de béisbol, Cuevas de exploración";
      case 200:
        return "Centro deportivo, Teatro pequeño, Espacio de coworking, Sala de conciertos, Museo pequeño, Calles de juegos";
      case 240:
        return "Centro comunitario, Espacio cultural, Centro de rehabilitación, Espacio para ferias, Espacio para talleres, Parque de atracciones";
      case 280:
        return "Sala de cine, Centro de innovación, Laboratorio de investigación, Espacio de yoga, Centro de formación, Laberinto de juegos";
      case 400:
        return "Centro comercial pequeño, Complejo deportivo, Centro de convenciones, Galería comercial, Espacio recreativo, Ciudad de juegos";
      case 1000:
        return "Gran centro comercial, Complejo deportivo grande, Hospital pequeño, Universidad pequeña, Parque temático, Aldea de juegos";
      case 2000:
        return "Aeropuerto regional, Hospital grande, Universidad grande, Centro de convenciones grande, Parque de diversiones, Mundo de juegos";
      default:
        return "El número seleccionado está en la lista pero no tiene una frase asociada.";
    }
  };

  // variable a obtener resultados
  let mensaje;

  // Llamamos a la función para obtener el mensaje
  mensaje = asignarMensaje();

  //...

  // sistemaVegetacion

  const variacionesVegetacion = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 50, 80, 200, 600,
  ];

  const [variacionVegetacion, setVariacionVegetacion] = useState(
    variacionesVegetacion[0]
  );

  //...

  // variacionesAccesoriosNatural

  const variacionesAccesoriosNatural = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  const [variacionAccesoriosNatural, setVariacionAccesoriosNatural] = useState(
    variacionesAccesoriosNatural[0]
  );

  //...

  // motores graficos
  const motoresGraficos = ["Unreal Engine", "Unity", "Render Normal"];

  const [motorGrafico, setMotorGrafico] = useState(motoresGraficos[0]);

  //...

  //efectoEspecialesAnimacion

  const efectosEspecialesAnimaciones = [0, 1, 2, 3, 4, 5, 6, 7]; // Números para los efectos especiales

  const [efectoEspecialAnimacionesMundo, setEfectoEspecialAnimacionesMundo] =
    useState(efectosEspecialesAnimaciones[0]);

  //...

  //complejidad de videojuego

  const complejidadEstiloJuego = [
    "Free Fire Mobile",
    "GTA V",
    "Call of Duty Black Ops 3",
    "Cyberpunk 2077",
    "Red Dead Redemption 2",
    "Assassin's Creed Valhalla",
    "Horizon Zero Dawn",
    "The Witcher 3: Wild Hunt",
    "The Sims",
    "Half-Life",
    "Doom",
    "Counter-Strike",
    "World of Warcraft",
  ];

  const imagenesJuegos = {
    "Free Fire Mobile": "/DiseñoWeb/formulario/juegosMesa de trabajo 1.jpg",
    "GTA V": "/DiseñoWeb/formulario/juegosMesa de trabajo 2.jpg",
    "Call of Duty Black Ops 3":
      "/DiseñoWeb/formulario/juegosMesa de trabajo 3.jpg",
    "Cyberpunk 2077": "/DiseñoWeb/formulario/juegosMesa de trabajo 4.jpg",
    "Red Dead Redemption 2":
      "/DiseñoWeb/formulario/juegosMesa de trabajo 5.jpg",
    "Assassin's Creed Valhalla":
      "/DiseñoWeb/formulario/juegosMesa de trabajo 6.jpg",
    "Horizon Zero Dawn": "/DiseñoWeb/formulario/juegosMesa de trabajo 7.jpg",
    "The Witcher 3: Wild Hunt":
      "/DiseñoWeb/formulario/juegosMesa de trabajo 8.jpg",
    "The Sims": "/DiseñoWeb/formulario/juegosMesa de trabajo 9.jpg",
    "Half-Life": "/DiseñoWeb/formulario/juegosMesa de trabajo 10.jpg",
    Doom: "/DiseñoWeb/formulario/juegosMesa de trabajo 11.jpg",
    "Counter-Strike": "/DiseñoWeb/formulario/juegosMesa de trabajo 12.jpg",
    "World of Warcraft": "/DiseñoWeb/formulario/juegosMesa de trabajo 13.jpg",
  };

  const [complejidadEstilo, setComplejidadEstilo] = useState(
    complejidadEstiloJuego[0]
  );

  // Ejemplo de cómo acceder a la ruta de imagen de un juego específico
  const juego_imagen = complejidadEstilo;
  const rutaImagen = imagenesJuegos[juego_imagen];
  console.log(`La ruta de la imagen para ${juego_imagen} es: ${rutaImagen}`);

  const preciosJuegos = {
    "Free Fire Mobile": 50,
    "GTA V": 120,
    "Call of Duty Black Ops 3": 200,
    "Cyberpunk 2077": 200,
    "Red Dead Redemption 2": 200,
    "Assassin's Creed Valhalla": 200,
    "Horizon Zero Dawn": 210,
    "The Witcher 3: Wild Hunt": 200,
    "The Sims": 50,
    "Half-Life": 80,
    Doom: 280,
    "Counter-Strike": 180,
    "World of Warcraft": 200,
  };

  // Ejemplo de cómo acceder al precio de un juego
  const juegoSeleccionado = complejidadEstilo;
  const precioJuegoSeleccionado = preciosJuegos[juegoSeleccionado];
  console.log(precioJuegoSeleccionado);

  //...

  // estilo  arquiteconico

  const estilosArquitectonicos = [
    "Rural",
    "Minimalista",
    "Asia",
    "Moderno",
    "Industrial",
    "Mediterráneo",
    "Escandinavo",
    "Colonial",
    "Futurista",
    "Tropical",
    "Vanguardista",
    "Neoclásico",
    "Ecléctico",
    "Art Deco",
    "Barroco",
    "Gótico",
    "Románico",
    "Renacentista",
    "High-tech",
  ];

  const [estiloArquitectonico, setEstiloArquitectonico] = useState(
    estilosArquitectonicos[0]
  );

  //...

  // variacion accesorios

  const variacionesAccesorios = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  const [variacionAccesorios, setVariacionAccesorios] = useState(
    variacionesAccesorios[0]
  );

  //...

  // variacion construcciones

  const variacionesConstrucciones = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  const [variacionConstrucciones, setVariacionConstrucciones] = useState(
    variacionesConstrucciones[0]
  );

  //...

  // Opciones para duración del proyecto
  const duracionProyectoOptions = [
    { label: "21 días", value: 250 },
    { label: "1 mes", value: 130 },
    { label: "1 mes 1/2", value: 80 },
    { label: "2 mes", value: 70 },
    { label: "2 meses 1/2", value: 50 },
    { label: "3 meses", value: 30 },
  ];

  const [duracionProyecto, setDuracionProyecto] = useState(
    duracionProyectoOptions[0].value
  );

  // Función para obtener el label a partir del value
  function getLabelByValue(value) {
    const option = duracionProyectoOptions.find(
      (option) => option.value === value
    );
    return option ? option.label : null;
  }

  // Ejemplo de uso
  const value = duracionProyecto;
  const tiempo = getLabelByValue(value);
  console.log(tiempo); // Imprime "1 mes"

  //..

  // Nuevos estados para los campos de texto
  const [correoEletronico, setcorreoEletronico] = useState("");
  const [nombreProyecto, setNombreProyecto] = useState("");
  const [descripcionProyecto, setDescripcionProyecto] = useState("");

  // Precios base para cada tipo de selección
  const precios = {
    selectivoEscala: 2,
    variacionVegetacion: 2.5,
    variacionAccesoriosNatural: 18,
    efectoEspecialAnimacionesMundo: 50,
    variacionAccesorios: 18,
    variacionConstrucciones: 30,
    juego: 0, // Precio base para el juego
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Calculando el costo total del proyecto
    const costoTotal =
      precios.escalaAmbiente * escalaAmbiente +
      precios.variacionVegetacion * variacionVegetacion +
      precios.variacionAccesoriosNatural * variacionAccesoriosNatural +
      precios.variacionAccesorios * variacionAccesorios +
      precios.variacionConstrucciones * variacionConstrucciones +
      precios.efectoEspecialAnimacionesMundo * efectoEspecialAnimacionesMundo +
      precios.complejidadEstilo *
        complejidadEstiloJuego.indexOf(complejidadEstilo) +
      precios.juego +
      duracionProyecto; // Sumando el precio de la duración del proyecto

    // Aquí puedes manejar el envío del formulario
    console.log("Nombre del Proyecto:", nombreProyecto);
    console.log("Descripción del Proyecto:", descripcionProyecto);
    console.log("Duración del Proyecto:", duracionProyecto);
    console.log("Costo Total del Proyecto:", costoTotal);
  };

  return (
    //ESTRUCTURA

    <div>
      <div className="  peticion_Estructura  w-full min-w-[412px] bg-neutral-600    ">
        {/*-----------------------------------------------------------------------------------------------------------------------visual-------*/}

        <div className=" flex items-start justify-start text-center font-VT323 text-1xl break-words w-full p-2 text-neutral-600 h-full bg-neutral-900  min-h-[650px]   ">
          {/*visual representacion */}

          <div className="  max-w-[416px] box-border  h-full">
            <div className=" max-w-[416px] text-lime-500 text-5xl ">
              {" "}
              INFORMACION BASICA
            </div>

            <div>1</div>

            <div className=" text-orange-600 border-dashed border border-orange-600  mt-2 mb-2 ">
              ! Piensa en los elementos básicos y principales que necesitarás,
              Nuestro enfoque es guiar y dejar todo lo relacionado con el diseño
              en manos de nuestros artistas, quienes se encargarán de darle
              sentido y fuerza a tu proyecto tanto artísticamente como en su
              historia
            </div>

            <div className=" p-1  text-5xl text-neutral-200 ">
              {nombreProyecto}
            </div>

            <div>2</div>

            <div className=" text-orange-600 border-dashed border  mt-2 mb-2 border-orange-600 ">
              ! Cuéntanos cómo te gustaría que fuera la historia, Vamos a
              procesarla y editarla para hacerla más interesante a nivel
              literario y escénico, buscando incluir emociones que impacten a
              tus clientes.
            </div>

            <div className="  p-1 text-1xl text-neutral-300 texto-limitado">
              {descripcionProyecto}
            </div>

            <div>3</div>

            <div className=" text-orange-600 border-dashed  mt-2 mb-2 border border-orange-600 ">
              ! Aspectos esenciales pero completos para obtener un excelente
              proyecto. El presupuesto dependerá de la complejidad, pero siempre
              nos esforzaremos por ofrecer lo mejor, sin importar las
              variaciones.
            </div>


    
            <div className="Grid_Exposicion gap-9  ">
              <div className=" relative  p-1 text-lime-500  border  border-lime-500">
                <div className="absolute text-orange-600">
                  {metrosCuadrados} m2{" "}
                </div>

                <div className=" p-2 absolute   ">
                  {" "}
                  <div className= "  text-lime-500 text-2xl">USOS</div> {mensaje}
                </div>
              </div>
              <div className=" relative  flex   ">
                <div className=" absolute  text-orange-600  z-20  text-3xl p-1 ">
                  {variacionVegetacion}
                </div>
                <Plantas cantidad={variacionVegetacion} />{" "}
                {/* Mostrar 5 treboles */}
                <Image
                  src="/DiseñoWeb/formulario/vegetacion.jpg"
                  alt="plano arquitectonico"
                  layout="fill" // Ajusta la imagen para llenar todo el contenedor
                  objectFit="fill" // Ajusta la imagen para llenar completamente el contenedor, sin recortar
                />
              </div>
              <div className=" p-2 relative flex  border  border-lime-500">
                <div className="text-lime-500 text-2xl">
                  <div>VARIEDAD COSAS NATURAL</div>{" "}
                  <span className=" text-orange-600   z-20  text-3xl p-1 ">
                    {variacionAccesoriosNatural}
                  </span>{" "}
                  <span className=" text-base">
                    {" "}
                    diferentes tipos de objetos en una escena 3D
                  </span>{" "}
                </div>
              </div>

              <div className=" p-2  border  border-lime-500">
                <div className="text-lime-500 text-2xl">
                  {" "}
                  <div>ANIMACIONES OBJETOS</div>{" "}
                  <span className=" text-orange-600   z-20  text-3xl p-1 ">
                    {efectoEspecialAnimacionesMundo}
                  </span>{" "}
                  <span className=" text-base">
                    {" "}
                    diseñar un ambiente mas vivo con animacion de objetos
                  </span>{" "}
                </div>
              </div>
              <div className=" relative   z-10 ">
                <Image
                  src={rutaImagen}
                  alt="juegos consola"
                  layout="fill" // Ajusta la imagen para llenar todo el contenedor
                  objectFit="fill" // Ajusta la imagen para llenar completamente el contenedor, sin recortar
                />
              </div>

              <div className=" p-2  border  border-lime-500">
                <div className="text-lime-500 text-2xl">
                  {" "}
                  <div>ESTILO ARQUITECTONICO</div>{" "}
                  <span className="  text-orange-600  z-20  text-3xl p-1 ">
                    {estiloArquitectonico}
                  </span>{" "}
                  <span className=" text-base">
                    {" "}
                    diseñar un ambiente con respecto al estilo e historia
                  </span>{" "}
                </div>
              </div>

              <div className=" p-2  border  border-lime-500">
                <div className="text-lime-500 text-2xl">
                  {" "}
                  <div>VARIACION COSAS ARTIFICIAL</div>{" "}
                  <span className="    z-20  text-3xl p-1 "></span>{" "}
                  <span className=" text-base"> creado por el humano</span>{" "}
                </div>
                <div className=" absolute  text-orange-600  z-20  text-3xl p-1 ">
                  {variacionAccesorios}
                </div>
              </div>
              <div className=" relative  flex   ">
                <div className=" absolute  text-orange-600  z-20  text-3xl p-1 ">
                  {variacionConstrucciones}
                </div>
                <Construcciones cantidad={variacionConstrucciones} />{" "}
                {/* Mostrar 5 construcciones */}
                <Image
                  src="/DiseñoWeb/formulario/construcciones.jpg"
                  alt="plano arquitectonico"
                  layout="fill" // Ajusta la imagen para llenar todo el contenedor
                  objectFit="fill" // Ajusta la imagen para llenar completamente el contenedor, sin recortar
                />
              </div>

              <div className=" p-2  border  border-lime-500  ">
                <div className="text-lime-500 text-2xl ">
                  {" "}
                  <div>MOTOR GRAFICO</div>{" "}
                  <span className=" text-orange-600   z-20  text-3xl p-1 ">
                    {motorGrafico}
                  </span>{" "}
                </div>
                <div className=" text-orange-600  z-20  text-3xl">{tiempo}</div>
              </div>

              <div className=" relative flex text-center items-center justify-center border-dashed h-[180px]   border box-border overflow-hidden border-neutral-500">
                <Ref />
              </div>

              <div className=" relative flex text-center items-center justify-center border-dashed h-[180px]   border box-border overflow-hidden border-neutral-500">
                <Ref />
              </div>
              <div className=" relative flex text-center items-center justify-center border-dashed h-[180px]   border box-border overflow-hidden border-neutral-500">
                <Ref />
              </div>
              <div className=" relative flex text-center items-center justify-center border-dashed h-[180px]   border box-border overflow-hidden border-neutral-500">
                <Ref />
              </div>
              <div className=" relative flex text-center items-center justify-center border-dashed h-[180px]   border box-border overflow-hidden border-neutral-500">
                <Ref />
              </div>
              <div className=" relative flex text-center items-center justify-center border-dashed h-[180px]   border box-border overflow-hidden border-neutral-500">
                <Ref />
              </div>
              <div className=" relative flex text-center items-center justify-center border-dashed h-[180px]   border box-border overflow-hidden border-neutral-500">
                <Ref />
              </div>
              <div className=" relative flex text-center items-center justify-center border-dashed h-[180px]   border box-border overflow-hidden border-neutral-500">
                <Ref />
              </div>
              <div className=" relative flex text-center items-center justify-center border-dashed h-[180px]  border box-border overflow-hidden border-neutral-500">
                <Ref />
              </div>
            </div>
           
            <div className=" text-orange-600 border-dashed border  mt-2 mb-2 border-orange-600 ">
              ! IMPORTANTE:Cuanto más significativas y detalladas sean las
              referencias que nos proporciones, más precisa será nuestra
              capacidad para crear exactamente lo que deseas.
            </div>
          </div>
        </div>
        {/*...*/}

        {/*-------------------------------------------------------------------------------------------------------------------formulario-------*/}
        <div className="  flex w-1/2 ">
          <div className=" z-10  p-14 w-full  flex-row pb-10  shadow-lg min-w-96  bg-neutral-700   justify-between font-Quicksand   text-zinc-400">
            <div className="font-BebasNeue text-3xl text-zinc-800">
              RECOLECTA DE DATOS
            </div>

            <div>
              <label>
                <div> Correo Eletronico: </div>
              </label>
              <input
                className="w-4/5 bg-neutral-600"
                type="text"
                value={correoEletronico}
                onChange={(e) => setcorreoEletronico(e.target.value)}
                maxLength={50} // ajusta el valor según tus necesidades
              />
            </div>

            <div className="font-BebasNeue text-2xl text-zinc-800">
              INFORMACION PROYECTO
            </div>
            <div>
              <label>
                <div> Nombre del Proyecto: </div>
              </label>
              <input
                className="w-4/5 bg-neutral-600"
                type="text"
                value={nombreProyecto}
                onChange={(e) => setNombreProyecto(e.target.value)}
                maxLength={35} // ajusta el valor según tus necesidades
              />
            </div>
            <div>
              <label>
                <div>Descripción del Proyecto: </div>
              </label>
              <textarea
                className=" overflow-auto  max-h-20 w-4/5 bg-neutral-600"
                value={descripcionProyecto}
                onChange={(e) => setDescripcionProyecto(e.target.value)}
                maxLength={500} // ajusta el valor según tus necesidades
              />
            </div>

            <div className="font-BebasNeue text-2xl text-zinc-800">
              <div>DISEÑO GLOBAL MUNDO</div>
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <div>
                  <label>Escala del Ambiente:</label>
                  <select
                    className="w-4/5 bg-neutral-600"
                    value={selectivoEscala}
                    onChange={(e) => setselectivoEscala(Number(e.target.value))}
                  >
                    {escalasAmbiente.map((escala, index) => (
                      <option key={index} value={escala}>
                        {escala}ml×
                        {escala}ml = ${precios.selectivoEscala * escala}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label>Cantidad Vegetación Natural:</label>
                  <select
                    className="w-4/5 bg-neutral-600"
                    value={variacionVegetacion}
                    onChange={(e) =>
                      setVariacionVegetacion(Number(e.target.value))
                    }
                  >
                    {variacionesVegetacion.map((variacion, index) => (
                      <option key={index} value={variacion}>
                        {variacion} - ${precios.variacionVegetacion * variacion}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label>Variación Accesorios Naturales:</label>
                  <select
                    className="w-4/5 bg-neutral-600"
                    value={variacionAccesoriosNatural}
                    onChange={(e) =>
                      setVariacionAccesoriosNatural(Number(e.target.value))
                    }
                  >
                    {variacionesAccesoriosNatural.map((variacion, index) => (
                      <option key={index} value={variacion}>
                        {variacion} - $
                        {precios.variacionAccesoriosNatural * variacion}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label>Efecto Especiales Animaciones:</label>
                  <select
                    className="w-4/5 bg-neutral-600"
                    value={efectoEspecialAnimacionesMundo}
                    onChange={(e) =>
                      setEfectoEspecialAnimacionesMundo(Number(e.target.value))
                    }
                  >
                    {efectosEspecialesAnimaciones.map((efecto, index) => (
                      <option key={index} value={efecto}>
                        {efecto} - $
                        {precios.efectoEspecialAnimacionesMundo * efecto}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label>Complejidad y Estilo de Juego Esperado:</label>
                  <select
                    className="w-4/5 bg-neutral-600"
                    value={complejidadEstilo}
                    onChange={(e) => setComplejidadEstilo(e.target.value)}
                  >
                    {complejidadEstiloJuego.map((estilo, index) => (
                      <option key={index} value={estilo}>
                        {estilo}
                      </option>
                    ))}
                  </select>
                  <div className=" text-3xl">{precioJuegoSeleccionado}$</div>
                </div>
              </div>

              <div className="font-BebasNeue text-2xl text-zinc-800">
                DISEÑO LOCAL CONSTRUCCION
              </div>
              <div>
                <div>
                  <label>Estilo Lugar Arquitectónico:</label>
                  <select
                    className="w-4/5 bg-neutral-600"
                    value={estiloArquitectonico}
                    onChange={(e) => setEstiloArquitectonico(e.target.value)}
                  >
                    {estilosArquitectonicos.map((estilo, index) => (
                      <option key={index} value={estilo}>
                        {estilo}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label>
                    <div>Variación Accesorios: </div>
                  </label>
                  <select
                    className="w-4/5 bg-neutral-600"
                    value={variacionAccesorios}
                    onChange={(e) =>
                      setVariacionAccesorios(Number(e.target.value))
                    }
                  >
                    {variacionesAccesorios.map((variacion, index) => (
                      <option key={index} value={variacion}>
                        {variacion} - ${precios.variacionAccesorios * variacion}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label>
                    <div>Variación de Construcciones:</div>
                  </label>
                  <select
                    className="w-4/5 bg-neutral-600"
                    value={variacionConstrucciones}
                    onChange={(e) =>
                      setVariacionConstrucciones(Number(e.target.value))
                    }
                  >
                    {variacionesConstrucciones.map((variacion, index) => (
                      <option key={index} value={variacion}>
                        {variacion} - $
                        {precios.variacionConstrucciones * variacion}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label>
                  <div>Motor Gráfico:</div>
                </label>
                <select
                  className="w-4/5 bg-neutral-600"
                  value={motorGrafico}
                  onChange={(e) => setMotorGrafico(e.target.value)}
                >
                  {motoresGraficos.map((motor, index) => (
                    <option key={index} value={motor}>
                      {motor}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label>
                  <div>Tiempo Entrega:</div>
                </label>
                <select
                  className="w-4/5 text-red-400 bg-neutral-600 "
                  value={duracionProyecto}
                  onChange={(e) => setDuracionProyecto(Number(e.target.value))}
                >
                  {duracionProyectoOptions.map((opcion, index) => (
                    <option key={index} value={opcion.value}>
                      {opcion.label} - $
                      {opcion.value < 0 ? Math.abs(opcion.value) : opcion.value}
                    </option>
                  ))}
                </select>
              </div>
            </form>

            {/* Mostrar resultado final dinámico */}
            <div>
              <div className="font-BebasNeue text-2xl text-zinc-800">
                Costo Total del Proyecto:
              </div>
              <div className=" text-4xl">${calcularCostoTotal()}</div>
            </div>
            <button
              className="font-BebasNeue text-2xl text-zinc-800"
              type="submit"
            >
              Enviar
            </button>
          </div>

          <div className=" DiseñoMobil_peticion  "></div>
          {/* publicidad */}
        </div>
        {/*...*/}
      </div>
    </div>
  );

  // resultados

  function calcularCostoTotal() {
    return (
      precios.selectivoEscala * selectivoEscala +
      precios.variacionVegetacion * variacionVegetacion +
      precios.variacionAccesoriosNatural * variacionAccesoriosNatural +
      precios.variacionAccesorios * variacionAccesorios +
      precios.variacionConstrucciones * variacionConstrucciones +
      precios.efectoEspecialAnimacionesMundo * efectoEspecialAnimacionesMundo +
      precioJuegoSeleccionado +
      precios.juego +
      duracionProyecto // Sumando el precio de la duración del proyecto
    );
  }
  /*...*/
};

export default Paquetes;
