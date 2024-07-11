"use client";

import React, { useState } from "react";

//css

import "../css/peticion.css";

const Paquetes = () => {
  // Definiciones de opciones y estados de los selectores

  // sistemaEscala
  const escalasAmbiente = [40, 80, 120, 160, 200, 240, 280, 400, 1000, 2000];
  const referencia_escala = parseInt(document.getElementById("escala_ref").value); // Asegúrate de convertir el valor a entero si es necesario
  let mensaje = "";

  if (escalasAmbiente.includes(referencia_escala)) {
    switch (referencia_escala) {
      case 40:
        mensaje = "Vivienda, Gimnasio, Taller, Parque, Garaje";
        break;
      case 80:
        mensaje =
          "Oficina, Cafetería, Tienda, Sala de exposiciones, Estudio de arte, Cancha de baloncesto, Castillo de juegos";
        break;
      case 120:
        mensaje =
          "Restaurante, Salón de eventos, Galería de arte, Clínica médica, Salón de belleza, Cancha de fútbol, Bosque de aventuras";
        break;
      case 160:
        mensaje =
          "Biblioteca, Centro educativo, Centro de coworking, Estudio de música, Sala de conferencias, Cancha de béisbol, Cuevas de exploración";
        break;
      case 200:
        mensaje =
          "Centro deportivo, Teatro pequeño, Espacio de coworking, Sala de conciertos, Museo pequeño, Calles de juegos";
        break;
      case 240:
        mensaje =
          "Centro comunitario, Espacio cultural, Centro de rehabilitación, Espacio para ferias, Espacio para talleres, Parque de atracciones";
        break;
      case 280:
        mensaje =
          "Sala de cine, Centro de innovación, Laboratorio de investigación, Espacio de yoga, Centro de formación, Laberinto de juegos";
        break;
      case 400:
        mensaje =
          "Centro comercial pequeño, Complejo deportivo, Centro de convenciones, Galería comercial, Espacio recreativo, Ciudad de juegos";
        break;
      case 1000:
        mensaje =
          "Gran centro comercial, Complejo deportivo grande, Hospital pequeño, Universidad pequeña, Parque temático, Aldea de juegos";
        break;
      case 2000:
        mensaje =
          "Aeropuerto regional, Hospital grande, Universidad grande, Centro de convenciones grande, Parque de diversiones, Mundo de juegos";
        break;
      default:
        mensaje =
          "El número seleccionado está en la lista pero no tiene una frase asociada.";
    }
    console.log(mensaje); // o puedes mostrarlo en otro lugar según tu necesidad
  } else {
    console.log(
      "El número seleccionado no está en la lista de escalas de ambiente."
    );
  }

  // fin sistemaEscala

  const variacionesVegetacion = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const variacionesAccesoriosNatural = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
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
  const variacionesAccesorios = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const variacionesConstrucciones = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const efectosEspecialesAnimaciones = [0, 1, 2, 3, 4, 5, 6, 7]; // Números para los efectos especiales
  const complejidadEstiloJuego = [
    "Free Fire Mobile",
    "GTA V ",
    "Call of Duty Black Ops 3 ",
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

  // Precios base para cada tipo de selección
  const precios = {
    escalaAmbiente: 2,
    variacionVegetacion: 50,
    variacionAccesoriosNatural: 30,
    estiloArquitectonico: 200,
    variacionAccesorios: 40,
    variacionConstrucciones: 80,
    efectoEspecialAnimacionesMundo: 150,
    efectoEspecialAnimacionesLocal: 120,
    complejidadEstilo: 300,
    juego: 500, // Precio base para el juego
  };

  // Definir la constante antes de usarla
  const motoresGraficos = ["Unreal Engine", "Unity", "Render Normal"];

  // Luego, puedes utilizarla en el estado
  const [motorGrafico, setMotorGrafico] = useState(motoresGraficos[0]);

  // Estados para las selecciones
  const [escalaAmbiente, setEscalaAmbiente] = useState(escalasAmbiente[0]);
  const [variacionVegetacion, setVariacionVegetacion] = useState(
    variacionesVegetacion[0]
  );
  const [variacionAccesoriosNatural, setVariacionAccesoriosNatural] = useState(
    variacionesAccesoriosNatural[0]
  );
  const [estiloArquitectonico, setEstiloArquitectonico] = useState(
    estilosArquitectonicos[0]
  );
  const [variacionAccesorios, setVariacionAccesorios] = useState(
    variacionesAccesorios[0]
  );
  const [variacionConstrucciones, setVariacionConstrucciones] = useState(
    variacionesConstrucciones[0]
  );
  const [efectoEspecialAnimacionesMundo, setEfectoEspecialAnimacionesMundo] =
    useState(efectosEspecialesAnimaciones[0]);
  const [efectoEspecialAnimacionesLocal, setEfectoEspecialAnimacionesLocal] =
    useState(efectosEspecialesAnimaciones[0]);
  const [complejidadEstilo, setComplejidadEstilo] = useState(
    complejidadEstiloJuego[0]
  );

  // Nuevos estados para los campos de texto
  const [nombreProyecto, setNombreProyecto] = useState("");
  const [descripcionProyecto, setDescripcionProyecto] = useState("");
  const [duracionProyecto, setDuracionProyecto] = useState("");

  // Opciones para duración del proyecto
  const duracionProyectoOptions = [
    { label: "21 días", value: -1000 },
    { label: "1 mes", value: -200 },
    { label: "1 mes 1/2", value: -300 },
    { label: "2 mes", value: -400 },
    { label: "2 meses 1/2", value: -500 },
    { label: "3 meses", value: -600 },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Calculando el costo total del proyecto
    const costoTotal =
      precios.escalaAmbiente * escalaAmbiente +
      precios.variacionVegetacion * variacionVegetacion +
      precios.variacionAccesoriosNatural * variacionAccesoriosNatural +
      precios.estiloArquitectonico *
        estilosArquitectonicos.indexOf(estiloArquitectonico) +
      precios.variacionAccesorios * variacionAccesorios +
      precios.variacionConstrucciones * variacionConstrucciones +
      precios.efectoEspecialAnimacionesMundo * efectoEspecialAnimacionesMundo +
      precios.efectoEspecialAnimacionesLocal * efectoEspecialAnimacionesLocal +
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
              <div className=" relative flex justify-end items-end p-1 text-lime-500 h-[200px] w-[200px] border  border-lime-500">
                <div className="absolute">{escalaAmbiente}m²</div>

                <div className=" p-2 absolute  w-full h-full ">{mensaje}</div>
              </div>
              <div className="h-[200px] w-[200px] border  border-lime-500">
                x
              </div>
              <div className="h-[200px] w-[200px] border  border-lime-500">
                x
              </div>
              <div className="h-[200px] w-[200px] border  border-lime-500">
                x
              </div>
              <div className="h-[200px] w-[200px] border  border-lime-500">
                x
              </div>
              <div className="h-[200px] w-[200px] border  border-lime-500">
                x
              </div>
              <div className="h-[200px] w-[200px] border  border-lime-500">
                x
              </div>
              <div className="h-[200px] w-[200px] border  border-lime-500">
                x
              </div>
              <div className="h-[200px] w-[200px] border  border-lime-500">
                x
              </div>
              <div className="h-[200px] w-[200px] border  border-lime-500">
                x
              </div>
              <div className="h-[200px] w-[200px] border  border-lime-500">
                x
              </div>
              <div className="h-[200px] w-[200px] border  border-lime-500">
                x
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
                    id="escala_ref"
                    className="w-4/5 bg-neutral-600"
                    value={escalaAmbiente}
                    onChange={(e) => setEscalaAmbiente(Number(e.target.value))}
                  >
                    {escalasAmbiente.map((escala, index) => (
                      <option key={index} value={escala}>
                        {escala}ml <br /> x <br />
                        {escala}ml = ${precios.escalaAmbiente * escala}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label>Variación Vegetación Natural:</label>
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
                        {estilo} - $
                        {precios.complejidadEstilo *
                          complejidadEstiloJuego.indexOf(estilo)}
                      </option>
                    ))}
                  </select>
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
                        {estilo} - $
                        {precios.estiloArquitectonico *
                          estilosArquitectonicos.indexOf(estilo)}
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
                <div>
                  <label>Efecto Especiales Animaciones:</label>
                  <select
                    className="w-4/5 bg-neutral-600"
                    value={efectoEspecialAnimacionesLocal}
                    onChange={(e) =>
                      setEfectoEspecialAnimacionesLocal(Number(e.target.value))
                    }
                  >
                    {efectosEspecialesAnimaciones.map((efecto, index) => (
                      <option key={index} value={efecto}>
                        {efecto} - $
                        {precios.efectoEspecialAnimacionesLocal * efecto}
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
                <label>
                  Disminuye los costo del proyecto,Duración del Proyecto:
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
      precios.escalaAmbiente * escalaAmbiente +
      precios.variacionVegetacion * variacionVegetacion +
      precios.variacionAccesoriosNatural * variacionAccesoriosNatural +
      precios.estiloArquitectonico *
        estilosArquitectonicos.indexOf(estiloArquitectonico) +
      precios.variacionAccesorios * variacionAccesorios +
      precios.variacionConstrucciones * variacionConstrucciones +
      precios.efectoEspecialAnimacionesMundo * efectoEspecialAnimacionesMundo +
      precios.efectoEspecialAnimacionesLocal * efectoEspecialAnimacionesLocal +
      precios.complejidadEstilo *
        complejidadEstiloJuego.indexOf(complejidadEstilo) +
      precios.juego +
      duracionProyecto // Sumando el precio de la duración del proyecto
    );
  }
  /*...*/
};

export default Paquetes;
