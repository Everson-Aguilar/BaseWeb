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

        const storedEmail = sessionStorage.getItem("email_ID");

        if (!storedEmail) {
          throw new Error("No hay email_ID en sessionStorage");
        }

        const filteredData = {
          sendProjects: result.data.sendProjects.filter(
            (project: any) => project.email_ID === storedEmail
          ),
          sends: result.data.sends
            .map((send: any) => ({
              ...send,
              verificationSend: Boolean(send.verificationSend),
            }))
            .filter((send: any) => send.email_ID === storedEmail),
          registerWeb: result.data.registerWeb.filter(
            (register: any) => register.email_ID === storedEmail
          ),
        };

        setData(filteredData);
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
      {data.sendProjects.length > 0 && (
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
                <p className="relative text-colorBase bg-neutral-800 p-5 rounded-sm">
                  <strong>Verificación:</strong>
                  <span className={`h-10 w-10 rounded-full p-3 ml-5  ${project.verification ? "bg-lime-500" : "bg-red-500"}`}>
                    {project.verification ? "Sí" : "No"}
                  </span>
                </p>
              </div>
            ))}
        </section>
      )}

      {/* Sends */}
      {data.sends.length > 0 && (
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
                <p className="relative text-colorBase bg-neutral-800 p-5 rounded-sm">
                  <strong>Verificación:</strong>




                  <span className={`h-10 w-10 rounded-full p-3 ml-5  ${send.verificationSend ? "bg-lime-500" : "bg-red-500"}`}>
                    {send.verificationSend ? "Sí" : "No"}
                  </span>



                  <span className="absolute text-5xl text-neutral-200 font-BebasNeue bottom-1 right-2">$2.000</span>
                </p>
              </div>
            ))}
        </section>
      )}

      {/* Registrations */}
      {data.registerWeb.length > 0 && (
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
                <p><strong className="bg-subtitle p-1 text-xl">Nombre de la web:<br /></strong> {register.webName}</p>
                <p><strong className="bg-subtitle p-1 text-xl">Fecha y Hora:<br /></strong> {new Date(register.horafechaWeb).toLocaleString()}</p>
                <p><strong className="bg-subtitle p-1 text-xl">Email:<br /></strong> {register.email_ID}</p>
                <p><strong className="bg-subtitle p-1 text-xl">Verificación:<br /></strong>
                <span className={`h-10 w-10 rounded-full p-3 ml-56  ${register.verificationWeb ? "bg-lime-500" : "bg-red-500"}`}>
                   {register.verificationWeb ? "Sí" : "No"}
                </span>





                </p>


              </div>
            ))}
        </section>
      )}
    </div>
  );
};

export default Earrings;