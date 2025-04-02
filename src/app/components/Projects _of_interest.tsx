import { useState, useEffect } from "react";
import Assistant_02 from "./assistant_02";

export default function ProjectForm() {
  const [formData, setFormData] = useState({
    webName: "",
    linkWeb: "",
    verificationWeb: false,
    horafechaWeb: "",
    email_ID: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("email_ID") || "";
    setFormData((prevData) => ({
      ...prevData,
      email_ID: storedEmail,
    }));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(false);

    const storedEmail = sessionStorage.getItem("email_ID") || "";

    const newEntry = {
      ...formData,
      horafechaWeb: new Date().toISOString(),
      email_ID: storedEmail,
    };

    try {
      const response = await fetch("/api/registerWeb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEntry),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setFormData({
          webName: "",
          linkWeb: "",
          verificationWeb: false,
          horafechaWeb: "",
          email_ID: storedEmail,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <form className="p-1 space-y-1" onSubmit={handleSubmit}>
        <input
          type="text"
          name="webName"
          value={formData.webName}
          onChange={handleChange}
          placeholder="Web Name"
          className="p-1 rounded-xl mr-5"
          maxLength={50}
          required
        />
        <input
          type="text"
          name="linkWeb"
          value={formData.linkWeb}
          onChange={handleChange}
          placeholder="Project Link"
          className="p-1 rounded-xl mr-5"
          required
        />
        <button className="bg-orange-500 hover:bg-lime-500 p-2 ml-5 rounded-3xl" type="submit">
          Submit
        </button>
        {submitted && <p>Form submitted successfully!</p>}
      </form>

      <div>
        <Assistant_02 />
      </div>
    </div>
  );
}
