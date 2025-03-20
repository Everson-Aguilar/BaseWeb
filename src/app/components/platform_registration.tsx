'use client';

import { useState } from 'react';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    platform: '',
    email: '',
    profileLink: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch('/api/workExploration', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Registro guardado con éxito');
      setFormData({ platform: '', email: '', profileLink: '', password: '' });
    } else {
      alert('Error al guardar el registro');
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <input type="text" name="platform" placeholder="Nombre de la plataforma" value={formData.platform} onChange={handleChange} required className=" text-lime-500 p-2 border rounded bg-neutral-800 shadow-inner-xl w-1/2" />
      <input type="email" name="email" placeholder="Correo electrónico" value={formData.email} onChange={handleChange} required className=" text-lime-500  p-2 border rounded bg-neutral-800 shadow-inner-xl" />
      <input type="url" name="profileLink" placeholder="Enlace al perfil" value={formData.profileLink} onChange={handleChange} required className=" text-lime-500  p-2 border rounded bg-neutral-800 shadow-inner-xl" />
      <input type="password" name="password" placeholder="Contraseña asignada" value={formData.password} onChange={handleChange} required className=" text-lime-500  p-2 border rounded bg-neutral-800 shadow-inner-xl w-1/2" />
      <button type="submit" className="mt-10 p-2 bg-subtitle hover:bg-lime-500 text-white rounded" disabled={loading}>
        {loading ? 'Guardando...' : 'Guardar'}
      </button>


      <section className='text-xs'>


      <p> <span className='text-5xl'>!</span>The goal is to get clients on freelancer platforms and manage projects with multiple artists. To be accepted, follow these rules:</p>

<strong>Platform Registration</strong>
<ul>
  <li>Avoid platforms with more than 15 applications per project (burned platforms).</li>
  <li>Apply and wait for acceptance to earn points and income.</li>
  <li>Do not register platforms already in the history list.</li>
</ul>

<strong>Project Search</strong>
<ul>
  <li>Apply only if you are among the first 1 or 2 applicants.</li>
  <li>Focus on projects related to 3D environments, modeling, digital sculpting, game maps, or architecture.</li>
</ul>

<p><strong>Optimize your applications to increase earnings.</strong></p>

</section>

 
      
    </form>
  );
}
