import { useState, useEffect } from "react";
import Assistant_02 from "./assistant_02";

export default function ProjectForm() {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    webData: [
      {
        webName: "",
        LinkWeb: "",
        verificationWeb: false, // Siempre falso por defecto
        horafechaWeb: "", // Se llenará al enviar el formulario
        email_ID: "", // Para identificar al usuario
      },
    ],
  });

  // Estado para controlar si el formulario fue enviado
  const [submitted, setSubmitted] = useState(false);

  // Obtener el email del usuario desde sessionStorage al cargar el componente
  useEffect(() => {
    const storedEmail = sessionStorage.getItem("email_ID") || ""; // Si no hay email, se asigna un string vacío
    setFormData((prevData) => ({
      ...prevData,
      webData: [
        {
          ...prevData.webData[0],
          email_ID: storedEmail,
        },
      ],
    }));
  }, []);

  // Manejar cambios en los inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      webData: [
        {
          ...prevData.webData[0], // Mantiene el resto de los datos
          [name]: value, // Actualiza el campo modificado
        },
      ],
    }));
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(false);

    const storedEmail = sessionStorage.getItem("email_ID") || ""; // Obtener email al momento de enviar

    // Crear nuevo objeto con fecha y hora actual
    const newEntry = {
      webName: formData.webData[0]?.webName || "", // Asegura que no sea undefined
      LinkWeb: formData.webData[0]?.LinkWeb || "", // Asegura que no sea undefined
      verificationWeb: false, // Siempre falso por defecto
      horafechaWeb: new Date().toISOString(), // Fecha y hora actual en formato ISO
      email_ID: storedEmail, // Asociar con el email del usuario
    };

    // Actualizar el estado con el nuevo objeto dentro del array `webData`
    setFormData((prevData) => ({
      ...prevData,
      webData: [newEntry], // Sustituye con la nueva entrada
    }));

    try {
      const response = await fetch("/api/updateTask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ webData: [newEntry] }), // Enviar el array con el email
      });

      if (response.ok) {
        setSubmitted(true); // Muestra el mensaje de éxito
        setTimeout(() => setSubmitted(false), 3000); // Oculta el mensaje después de 3 segundos
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <form className="p-1 space-y-1" onSubmit={handleSubmit}>
        {/* Input para el nombre del proyecto */}
        <input
          type="text"
          name="webName"
          value={formData.webData[0].webName}
          onChange={handleChange}
          placeholder="Web Name"
          className="p-1 rounded-xl mr-5"
        />
        {/* Input para el enlace del proyecto */}
        <input
          type="url"
          name="LinkWeb"
          value={formData.webData[0].LinkWeb}
          onChange={handleChange}
          placeholder="Project Link"
          className="p-1 rounded-xl mr-5"
        />
        {/* Botón para enviar el formulario */}
        <button className="bg-orange-500 hover:bg-lime-500 p-2 ml-5 rounded-3xl" type="submit">
          Submit
        </button>
        {/* Mensaje de éxito */}
        {submitted && <p>Form submitted successfully!</p>}
      </form>

      <div>
        <Assistant_02 />
      </div>
    </div>
  );
}
