import { useState } from 'react';

const FormularioEstructuraEditable = () => {
  const [estructura, setEstructura] = useState({
    nombreSubgrupo: '',
    urlGrupo: '',
    miembrosGrupo: '',
    tendenciaGrupo: '',
  });

  const [jsonGenerado, setJsonGenerado] = useState('');

  // Función para manejar cambios en los campos del formulario
  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>, campo: string) => {
    setEstructura({
      ...estructura,
      [campo]: e.target.value,
    });
  };

  // Función para generar el JSON cuando el usuario hace clic
  const generarJson = () => {
    const estructuraJson = {
      name: estructura.nombreSubgrupo || 'Nombre del subgrupo aquí...',
      children: [
        { name: estructura.urlGrupo || 'https://example.com' },
        { name: `Grupo público · ${estructura.miembrosGrupo || '0 miembros'}` },
        { name: estructura.tendenciaGrupo || 'Tendencia de grupo aquí...' },
      ],
    };

    // Convertir el JSON a string
    let jsonString = JSON.stringify(estructuraJson, null, 2);

    // Agregar la coma después del último elemento antes de cerrar el objeto y el array
    jsonString = agregarComaAlFinal(jsonString);

    // Establecer el JSON generado
    setJsonGenerado(jsonString);
  };

  // Función para agregar la coma al final antes de la última llave y corchete
  const agregarComaAlFinal = (jsonString: string) => {
    const arregloFinal = jsonString.lastIndexOf(']}');
    if (arregloFinal !== -1) {
      // Si encuentra el final de los corchetes, agrega la coma antes de cerrar
      jsonString = jsonString.slice(0, arregloFinal) + '},' + jsonString.slice(arregloFinal);
    }
    return jsonString;
  };

// Función para copiar el JSON generado al portapapeles
const copiarAlPortapapeles = () => {
  if (jsonGenerado) {
    // Texto adicional que quieres agregar
    const textoAdicional = ",";

    // Concatenamos el texto adicional al JSON
    const jsonConTexto = jsonGenerado + textoAdicional;

    // Copiamos el JSON modificado al portapapeles
    navigator.clipboard.writeText(jsonConTexto).then(() => {
      alert('JSON copiado al portapapeles con texto adicional.');
    }).catch((error) => {
      alert('No se pudo copiar el JSON al portapapeles: ' + error.message);
    });
  }
};


  return (
    <div className="flex-row md:flex w-full gap-5 p-8 bg-colorBase">
      {/* Formulario */}
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-semibold mb-4 text-title">Formulario para Crear Estructura Editable</h2>
        <form className="space-y-4">
          {/* Nombre del Subgrupo */}
          <div>
            <label htmlFor="nombreSubgrupo" className="block text-sm font-medium text-subtitle">
              Nombre del Subgrupo:
            </label>
            <input
              id="nombreSubgrupo"
              type="text"
              value={estructura.nombreSubgrupo}
              onChange={(e) => manejarCambio(e, 'nombreSubgrupo')}
              placeholder="Ejemplo: Arquitectura Moderna"
              className="w-full px-4 py-2 border border-message rounded-md shadow-none focus:ring-0 focus:border-trend"
            />
          </div>

          {/* URL del Grupo */}
          <div>
            <label htmlFor="urlGrupo" className="block text-sm font-medium text-subtitle">
              URL de la publicacion:
            </label>
            <input
              id="urlGrupo"
              type="text"
              value={estructura.urlGrupo}
              onChange={(e) => manejarCambio(e, 'urlGrupo')}
              placeholder="Ejemplo: https://www.facebook.com/arquitectura"
              className="w-full px-4 py-2 border border-message rounded-md shadow-none focus:ring-0 focus:border-trend"
            />
          </div>

          {/* Miembros del Grupo */}
          <div>
            <label htmlFor="miembrosGrupo" className="block text-sm font-medium text-subtitle">
              Miembros del Grupo:
            </label>
            <input
              id="miembrosGrupo"
              type="text"
              value={estructura.miembrosGrupo}
              onChange={(e) => manejarCambio(e, 'miembrosGrupo')}
              placeholder="Ejemplo: 50,000 miembros"
              className="w-full px-4 py-2 border border-message rounded-md shadow-none focus:ring-0 focus:border-trend"
            />
          </div>

          {/* Tendencia */}
          <div>
            <label htmlFor="tendenciaGrupo" className="block text-sm font-medium text-subtitle">
              Tendencia:
            </label>
            <input
              id="tendenciaGrupo"
              type="text"
              value={estructura.tendenciaGrupo}
              onChange={(e) => manejarCambio(e, 'tendenciaGrupo')}
              placeholder="Ejemplo: Tendencias en Diseño de Interiores"
              className="w-full px-4 py-2 border border-message rounded-md shadow-none focus:ring-0 focus:border-trend"
            />
          </div>

          {/* Botón para generar el JSON */}
          <button
            type="button"
            onClick={generarJson}
            className="mt-4 w-full bg-trend text-white py-2 px-4 rounded-md hover:bg-trend"
          >
            Generar Estructura
          </button>
        </form>
      </div>

      {/* JSON Generado */}
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-semibold mb-4 text-title">JSON Generado</h2>
        <textarea
          readOnly
          rows={10}
          className="w-full border border-message rounded-md shadow-none focus:ring-0 focus:border-trend"
          value={jsonGenerado}
          
        />
        {/* Botón de Copiar */}
        <button
          type="button"
          onClick={copiarAlPortapapeles}
          className="mt-4 w-full bg-trend text-white py-2 px-4 rounded-md hover:bg-trend"
        >
          Copiar JSON al Portapapeles
        </button>
      </div>
    </div>
  );
};

export default FormularioEstructuraEditable;
