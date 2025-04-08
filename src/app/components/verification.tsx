import { useEffect, useState } from "react";

const Earrings = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await fetch("/api/earrings", {
          method: "GET",
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY_CLIENT ?? "",
            "Content-Type": "application/json",
          },
        });
        


        
        const result = await response.json();

        if (!result.success) throw new Error(result.message || "Error al obtener datos");

        setData(result.data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  if (loading) return <p className="text-xl text-center">Cargando...</p>;
  if (error) return <p className="text-xl text-red-500 text-center">Error: {error}</p>;

  const renderSection = (title: string, key: string, items: any[], renderItem: (item: any) => JSX.Element) => (
    Array.isArray(items) && items.length > 0 ? (
      <section className="shadow-lg rounded-lg bg-neutral-800 p-5 space-y-3">
        <h3 className="text-2xl font-BebasNeue text-subtitle border-b-4 border-subtitle pb-2 cursor-pointer flex justify-between items-center" onClick={() => toggleSection(key)}>
          {title} <span>{expandedSections[key] ? "▲" : "▼"}</span>
        </h3>
        {expandedSections[key] && <div className="space-y-3">{items.map(renderItem)}</div>}
      </section>
    ) : null
  );

  return (
    <div className="text-neutral-200 space-y-5 w-full overflow-hidden p-5">
      {renderSection("Send Projects", "sendProjects", data.sendProjects, (project) => (
        <div key={project._id} className="bg-subtitle p-4 rounded-lg shadow-md space-y-3">
          <h4 className="text-xl  text-neutral-200 bg-neutral-800 p-2 rounded">{project.title || "Sin título"}</h4>
          <p className=" break-all text-sm border-l-4 border-neutral-700 pl-2">{project.description || "Sin descripción"}</p>
          <p className="text-sm"><strong className="text-3xl font-normal">Precio:</strong> {project.price || "No especificado"}</p>
          <p className="text-sm"><strong className="text-3xl font-normal">Fecha:</strong> {project.time || "No disponible"}</p>
          <p className="text-sm"><strong className="text-3xl font-normal">Categoría:</strong> {project.category || "No categorizado"}</p>
          <p className="text-sm"><strong className="text-3xl font-normal">Email:</strong> {project.email_ID}</p>
          <p className={`text-sm  ${project.verification ? "text-green-500" : "text-red-500"}`}>Verificado: {project.verification ? "Sí" : "No"}</p>
        </div>
      ))}

      {renderSection("Sends", "sends", data.sends, (send) => (
        <div key={send._id} className="bg-neutral-700 p-4 rounded-lg shadow-md space-y-3">
          <p className="text-sm"><strong className="text-3xl font-normal">URL:</strong> <a className="text-blue-400 break-all" href={send.LinkSend}>{send.LinkSend}</a></p>
          <p className="text-sm"><strong className="text-3xl font-normal">Fecha:</strong> {new Date(send.horafechaSend).toLocaleDateString()}</p>
          <p className="text-sm"><strong className="text-3xl font-normal">Email:</strong> {send.email_ID}</p>
          <p className={`text-sm  ${send.verificationSend ? "text-green-500" : "text-red-500"}`}>Verificado: {send.verificationSend ? "Sí" : "No"}</p>
        </div>
      ))}

      {renderSection("Register Web", "registerWeb", data.registerWeb, (register) => (
        <div key={register._id} className="bg-subtitle p-4 rounded-lg shadow-md text-neutral-200 space-y-3">
          <h4 className="text-xl  bg-neutral-800 p-2 rounded">{register.webName}</h4>
          <p className="text-sm"><strong className="text-3xl font-normal">URL:</strong> <a className="text-neutral-900 break-all" href={register.linkWeb}>{register.linkWeb}</a></p>
          <p className="text-sm"><strong className="text-3xl font-normal">Fecha y Hora:</strong> {new Date(register.horafechaWeb).toLocaleString()}</p>
          <p className="text-sm"><strong className="text-3xl font-normal">Email:</strong> {register.email_ID}</p>
          <p className={`text-sm  ${register.verificationWeb ? "text-lime-500" : "text-red-700"}`}>Verificado: {register.verificationWeb ? "Sí" : "No"}</p>
        </div>
      ))}
    </div>
  );
};

export default Earrings;