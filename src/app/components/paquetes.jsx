"use client";

import React, { useState } from "react";
import Image from "next/image";

//componentes

import Plantas from "./plantas";
import Construcciones from "./construcciones";

import subir_01 from './subir_01';

 

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
    "Doom": "/DiseñoWeb/formulario/juegosMesa de trabajo 11.jpg",
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
    { label: "21 días", value: 150 },
    { label: "1 mes", value: 130 },
    { label: "1 mes 1/2", value: 80 },
    { label: "2 mes", value: 70 },
    { label: "2 meses 1/2", value: 50 },
    { label: "3 meses", value: 30 },
  ];

  const [duracionProyecto, setDuracionProyecto] = useState(duracionProyectoOptions[0].value);

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
  const [nombreProyecto, setNombreProyecto] = useState("");
  const [descripcionProyecto, setDescripcionProyecto] = useState("");

  // Precios base para cada tipo de selección
  const precios = {
    selectivoEscala: 2,
    variacionVegetacion: 2.5,
    variacionAccesoriosNatural: 18,
    efectoEspecialAnimacionesMundo: 50,
    variacionAccesorios:18,
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
      
      <div className="  peticion_Estructura   h-auto w-full min-w-[412px] bg-neutral-600     ">
        {/*-----------------------------------------------------------------------------------------------------------------------visual-------*/}

        <div className=" font-VT323 text-1xl break-words w-full p-2 text-neutral-600 h-full bg-neutral-900  min-h-[650px]  ">
          {/*visual representacion */}

          <div className="  w-[416px] flex-initial box-border  h-full">
            <div className=" p-1  text-5xl text-neutral-200 ">
              {nombreProyecto}
            </div>

            <div className="  p-1 text-1xl text-neutral-300 texto-limitado">
              {descripcionProyecto}
            </div>

            <div className="Grid_Exposicion gap-5">
              <div className=" relative flex justify-end items-end  p-1 text-lime-500 h-[180px] w-[180px] border  border-lime-500">
                <div className="absolute">{metrosCuadrados} m2 </div>

                <div className=" p-2 absolute  w-full h-full ">
                  {" "}
                  <h2 className="text-lime-500 text-2xl">USOS</h2> {mensaje}
                </div>
              </div>
              <div className=" relative h-[180px] w-[180px] flex   ">
                <h2 className=" absolute  text-orange-600  z-20  text-3xl p-1 ">
                  {variacionVegetacion}
                </h2>
                <Plantas cantidad={variacionVegetacion} />{" "}
                {/* Mostrar 5 treboles */}
                <Image
                  src="/DiseñoWeb/formulario/vegetacion.jpg"
                  alt="plano arquitectonico"
                  layout="fill" // Ajusta la imagen para llenar todo el contenedor
                  objectFit="fill" // Ajusta la imagen para llenar completamente el contenedor, sin recortar
                />
              </div>
              <div className=" p-2 relative flex h-[180px] w-[180px] border  border-lime-500">
                <h2 className="text-lime-500 text-2xl">
                  <h2>VARIEDAD COSAS NATURAL</h2>{" "}
                  <span className="    z-20  text-3xl p-1 ">
                    {variacionAccesoriosNatural}
                  </span>{" "}
                  <span className=" text-base">
                    {" "}
                    diferentes tipos de objetos en una escena 3D
                  </span>{" "}
                </h2>
              </div>

              <div className=" p-2 h-[180px] w-[180px] border  border-lime-500">
                <h2 className="text-lime-500 text-2xl">
                  {" "}
                  <h2>ANIMACIONES OBJETOS</h2>{" "}
                  <span className="    z-20  text-3xl p-1 ">
                    {efectoEspecialAnimacionesMundo}
                  </span>{" "}
                  <span className=" text-base">
                    {" "}
                    diseñar un ambiente mas vivo con animacion de objetos
                  </span>{" "}
                </h2>
              </div>
              <div className=" relative h-[180px] w-[180px]  z-10 ">
                <Image
                  src={rutaImagen}
                  alt="juegos consola"
                  layout="fill" // Ajusta la imagen para llenar todo el contenedor
                  objectFit="fill" // Ajusta la imagen para llenar completamente el contenedor, sin recortar
                />
              </div>

              <div className=" p-2 h-[180px] w-[180px] border  border-lime-500">
                <h2 className="text-lime-500 text-2xl">
                  {" "}
                  <h2>ESTILO ARQUITECTONICO</h2>{" "}
                  <span className="    z-20  text-3xl p-1 ">
                    {estiloArquitectonico}
                  </span>{" "}
                  <span className=" text-base">
                    {" "}
                    diseñar un ambiente con respecto al estilo e historia
                  </span>{" "}
                </h2>
              </div>

              <div className=" p-2 h-[180px] w-[180px] border  border-lime-500">
                <h2 className="text-lime-500 text-2xl">
                  {" "}
                  <h2>VARIACION COSAS ARTIFICIAL</h2>{" "}
                  <span className="    z-20  text-3xl p-1 "></span>{" "}
                  <span className=" text-base"> creado por el humano</span>{" "}
                </h2>
                <h3 className=" absolute  text-lime-500  z-20  text-3xl p-1 ">
                  {variacionAccesorios}
                </h3>
              </div>
              <div className=" relative h-[180px] w-[180px] flex   ">
                <h2 className=" absolute  text-orange-600  z-20  text-3xl p-1 ">
                  {variacionConstrucciones}
                </h2>
                <Construcciones cantidad={variacionConstrucciones} />{" "}
                {/* Mostrar 5 construcciones */}
                <Image
                  src="/DiseñoWeb/formulario/construcciones.jpg"
                  alt="plano arquitectonico"
                  layout="fill" // Ajusta la imagen para llenar todo el contenedor
                  objectFit="fill" // Ajusta la imagen para llenar completamente el contenedor, sin recortar
                />
              </div>

              <div className=" p-2 h-[180px] w-[180px]  ">
                <h2 className="text-lime-500 text-2xl">
                  {" "}
                  <h2>MOTOR GRAFICO</h2>{" "}
                  <span className="    z-20  text-3xl p-1 ">
                    {motorGrafico}
                  </span>{" "}
                </h2>
                <p className=" text-orange-600  z-20  text-3xl">{tiempo}</p>
              </div>


              <div className=" flex z-50 justify-center items-center border-dashed text-3xl h-[180px] w-[180px] border  border-neutral-500">
              <subir_01/>
              </div>

              <div className=" flex justify-center items-center border-dashed text-3xl h-[180px] w-[180px] border  border-neutral-500">
                <div className=" text-center text-sm">
                  Agregar Imagen Referencia <br />{" "}
                  <span className="font-BebasNeue text-3xl">+</span>{" "}
                </div>
              </div>

              <div className=" flex justify-center items-center border-dashed text-3xl h-[180px] w-[180px] border  border-neutral-500">
                <div className=" text-center text-sm">
                  Agregar Imagen Referencia <br />{" "}
                  <span className="font-BebasNeue text-3xl">+</span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*...*/}

        {/*-------------------------------------------------------------------------------------------------------------------formulario-------*/}
        <div className="  flex w-1/2 ">
          <div className=" z-10  p-14 w-full  flex-row pb-10  shadow-lg min-w-96  bg-neutral-700   justify-between font-Quicksand   text-zinc-400">
            <h2 className="font-BebasNeue text-2xl text-zinc-800">
              INFORMACION PROYECTO
            </h2>
            <div>
              <label>
                Nombre del Proyecto: <br />
              </label>
              <input
                className="w-4/5 bg-neutral-600"
                type="text"
                value={nombreProyecto}
                onChange={(e) => setNombreProyecto(e.target.value)}
              />
            </div>
            <div>
              <label>
                Descripción del Proyecto: <br />
              </label>
              <textarea
                className=" overflow-auto  max-h-20 w-4/5 bg-neutral-600"
                value={descripcionProyecto}
                onChange={(e) => setDescripcionProyecto(e.target.value)}
              />
            </div>

            <h2 className="font-BebasNeue text-2xl text-zinc-800">
              DISEÑO GLOBAL MUNDO
            </h2>
            <form onSubmit={handleSubmit}>
              <div>
                <div>
                  <label>
                    Escala del Ambiente: <br />
                  </label>
                  <select
                    className="w-4/5 bg-neutral-600"
                    value={selectivoEscala}
                    onChange={(e) => setselectivoEscala(Number(e.target.value))}
                  >
                    {escalasAmbiente.map((escala, index) => (
                      <option key={index} value={escala}>
                        {escala}ml <br /> x <br />
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
                  <p className=" text-3xl">{precioJuegoSeleccionado}$</p>
                </div>
              </div>

              <h2 className="font-BebasNeue text-2xl text-zinc-800">
                DISEÑO LOCAL CONSTRUCCION
              </h2>
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
                    Variación Accesorios: <br />
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
                  <label>Variación de Construcciones:</label>
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
                <label>Motor Gráfico:</label>
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
                <label>Tiempo Entrega:</label> <br />
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
              <h3 className="font-BebasNeue text-2xl text-zinc-800">
                Costo Total del Proyecto:
              </h3>
              <p className=" text-4xl">${calcularCostoTotal()}</p>
            </div>
            <button
              className="font-BebasNeue text-2xl text-zinc-800"
              type="submit"
            >
              Enviar
            </button>
          </div>

          <div className=" DiseñoMobil_peticion  ">publicidad</div>
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
