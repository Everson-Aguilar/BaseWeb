import { useEffect, useState } from "react";

const Earrings = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    sendProjects: false,
    sends: false,
    registerWeb: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/earrings");
        const result = await response.json();

        if (!result.success) {
          throw new Error(result.message || "Error al obtener datos");
        }

        const formattedData = {
          ...result.data,
          sends: result.data.sends.map((send: any) => ({
            ...send,
            verificationSend: Boolean(send.verificationSend),
          })),
        };

        setData(formattedData);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="text-neutral-200 space-y-5 w-fill overflow-hidden">
      {/* Send Projects */}
      <section className="shadow-xl space-y-1">
        <h3
          className="text-3xl font-BebasNeue text-subtitle border-4 border-subtitle p-1 cursor-pointer"
          onClick={() => toggleSection("sendProjects")}
        >
          Send Projects {expandedSections.sendProjects ? "▲" : "▼"}
        </h3>
        {expandedSections.sendProjects &&
          data.sendProjects.map((project: any) => (
            <div key={project._id} className="shadow-inner-md pt-5 pb-5 bg-subtitle pl-10 pr-10 space-y-5">
              <h4 className="font-BebasNeue text-2xl text-neutral-200 border-neutral-200 border-2 flex text-center justify-center items-center">
                {project.title || "Sin título"}
              </h4>
              <p className="border-2 border-neutral-800 h-fill overflow-hidden p-1">
                <span className="text-neutral-900 break-all flex">{project.description || "Sin descripción"}</span>
              </p>
              <p><strong className="text-colorBase bg-neutral-800 p-1 text-xl rounded-sm flex justify-center items-center">Precio:<br /></strong> {project.price || "No especificado"}</p>
              <p><strong className="text-colorBase bg-neutral-800 p-1 text-xl rounded-sm flex justify-center items-center">Fecha:<br /></strong> {project.time || "No disponible"}</p>
              <p><strong className="text-colorBase bg-neutral-800 p-1 text-xl rounded-sm flex justify-center items-center">Categoría:<br /></strong> {project.category || "No categorizado"}</p>
              <p className="relative text-colorBase bg-neutral-800 p-5 rounded-sm"><strong>Verificación:</strong> {project.verification ? "Sí" : "No"}</p>
            </div>
          ))}
      </section>

      {/* Sends */}
      <section className="shadow-xl space-y-1">
        <h3
          className="text-3xl font-BebasNeue text-subtitle border-4 border-subtitle p-1 cursor-pointer"
          onClick={() => toggleSection("sends")}
        >
          Sends {expandedSections.sends ? "▲" : "▼"}
        </h3>
        {expandedSections.sends &&
          data.sends.map((send: any) => (
            <div key={send._id} className="shadow-inner-md pt-5 pb-5 bg-neutral-700 pl-10 pr-10 space-y-5">
              <p><strong className="text-colorBase bg-neutral-800 p-1 text-xl rounded-sm flex justify-center items-center">URL:<br /></strong> <a className="break-all" href={send.LinkSend}>{send.LinkSend}</a></p>
              <p><strong className="text-colorBase bg-neutral-800 p-1 text-xl rounded-sm flex justify-center items-center">Fecha:<br /></strong> {new Date(send.horafechaSend).toLocaleDateString()}</p>
              {send.email_ID && <p><strong className="text-colorBase bg-neutral-800 p-1 text-xl rounded-sm flex justify-center items-center">Email:<br /></strong> {send.email_ID}</p>}
              <p className="relative text-colorBase bg-neutral-800 p-5 rounded-sm"><strong>Verificación:</strong> {send.verificationSend ? "Sí" : "No"} <span className="absolute text-5xl text-neutral-200 font-BebasNeue bottom-1 right-2">$2.000</span></p>
            </div>
          ))}
      </section>

      {/* Registrations */}
      <section className="shadow-xl">
        <h3
          className="text-3xl font-BebasNeue bg-subtitle p-1 cursor-pointer"
          onClick={() => toggleSection("registerWeb")}
        >
          Register Web {expandedSections.registerWeb ? "▲" : "▼"}
        </h3>
        {expandedSections.registerWeb &&
          data.registerWeb.map((register: any) => (
            <div key={register._id} className="text-colorBase p-1 border-b-2 pb-5 border-colorBase space-y-5 mt-5 mb-5">
              <p><strong className="bg-lime-500 p-1 text-xl">Nombre de la web:<br /></strong> {register.webName}</p>
              {/*<p><strong className="bg-lime-500 p-1 text-xl">URL:<br /></strong> <a className="break-all" href={register.linkWeb} target="_blank" rel="noopener noreferrer">{register.linkWeb}</a></p>*/}
              <p><strong className="bg-lime-500 p-1 text-xl">Fecha y Hora:<br /></strong> {new Date(register.horafechaWeb).toLocaleString()}</p>
              <p><strong className="bg-lime-500 p-1 text-xl">Email:<br /></strong> {register.email_ID}</p>
              <p><strong className="bg-lime-500 p-1 text-xl">Verificación:<br /></strong> {register.verificationWeb ? "Sí" : "No"}</p>
            </div>
          ))}
      </section>
    </div>
  );
};

export default Earrings;