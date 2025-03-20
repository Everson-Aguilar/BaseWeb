import { useState } from "react";

export default function ProjectForm() {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    projectName: "",
    projectLink: "",
  });
  
  // Estado para controlar si el formulario fue enviado
  const [submitted, setSubmitted] = useState(false);

  // Manejar cambios en los inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "projectName" && e.target.value.length > 150) return; // Limita el texto del nombre a 150 caracteres
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(false);
    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitted(true); // Muestra el mensaje de éxito
        setFormData({ projectName: "", projectLink: "" }); // Reinicia el formulario
        setTimeout(() => setSubmitted(false), 3000); // Oculta el mensaje después de 3 segundos
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form className="p-1 space-y-1" onSubmit={handleSubmit}>
      {/* Input para el nombre del proyecto */}
      <input
        type="text"
        name="projectName"
        value={formData.projectName}
        onChange={handleChange}
        placeholder="Project Name"
        className="p-1 rounded-xl mr-5"
      />
      {/* Input para el enlace del proyecto, solo acepta URLs */}
      <input
        type="url" // Restringe el input solo a enlaces
        name="projectLink"
        value={formData.projectLink}
        onChange={handleChange}
        placeholder="Project Link"
        className="p-1 rounded-xl mr-5"
      />
      {/* Botón para enviar el formulario */}
      <button className="bg-orange-500 hover:bg-lime-500 p-2 ml-5 rounded-3xl hover:bg-mi" type="submit">Submit</button>
      {/* Mensaje de éxito que se muestra tras enviar el formulario */}
      {submitted && <p>Form submitted successfully!</p>}
    </form>
  );
}
