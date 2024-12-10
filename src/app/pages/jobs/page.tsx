'use client'

import { useEffect, useState } from 'react';

interface UrlsData {
  urls: string[];
}

const UrlsList: React.FC = () => {
  const [urls, setUrls] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [newUrl, setNewUrl] = useState<string>('');
  const [newlyAddedUrls, setNewlyAddedUrls] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Usamos fetch para obtener el archivo JSON desde la carpeta public
    fetch('/Data/clients.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error al cargar el archivo JSON: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data: UrlsData) => setUrls(data.urls))
      .catch((error) => {
        console.error('Error al leer el archivo JSON:', error);
        setError('No se pudo cargar el archivo JSON');
      });
  }, []);

  const handleAddUrl = () => {
    if (newUrl.trim() !== '') {
      setUrls((prevUrls) => [...prevUrls, newUrl]);
      setNewlyAddedUrls((prevAdded) => new Set(prevAdded).add(newUrl)); // Marcar como nuevo
      setNewUrl('');
    }
  };

  const handleDelete = (url: string) => {
    setUrls((prevUrls) => prevUrls.filter((item) => item !== url));
    setNewlyAddedUrls((prevAdded) => {
      const newAdded = new Set(prevAdded);
      newAdded.delete(url);
      return newAdded;
    });
  };

  const handleCopyToClipboard = () => {
    const jsonString = JSON.stringify({ urls }, null, 2);
    navigator.clipboard.writeText(jsonString)
      .then(() => {
        alert('¡Lista de URLs copiada al portapapeles!');
      })
      .catch((error) => {
        console.error('Error al copiar al portapapeles:', error);
      });
  };

  return (
    <section className='p-5'>
      <h1 className="text-2xl font-bold mb-4">Lista de URLs</h1>

      {/* Campo para agregar nueva URL */}
      <div className="mb-4">
        <input
          type="url"
          value={newUrl}
          onChange={(e) => setNewUrl(e.target.value)}
          placeholder="Agregar nueva URL"
          className="p-2 border border-gray-300 rounded-md  mr-2"
        />
        <button
          onClick={handleAddUrl}
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          Agregar URL
        </button>
      </div>

      {/* Mensaje de error */}
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* Lista de URLs */}
      <ul>
        {urls.map((url, index) => (
          <li
            key={index}
            className={`flex items-center justify-between p-2 border-b border-gray-200 ${
              newlyAddedUrls.has(url) ? 'bg-green-200' : ''
            }`} // Resaltar con verde si es nueva URL
          >
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              {url}
            </a>

            {/* Botón de eliminar */}
            <button
              onClick={() => handleDelete(url)}
              className="text-red-500 hover:text-red-700"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      {/* Botón para copiar lista en JSON al portapapeles */}
      <div className="mt-4">
        <button
          onClick={handleCopyToClipboard}
          className="bg-trend text-white p-2 rounded-md"
        >
          Copiar lista en JSON
        </button>
      </div>
    </section>
  );
};

export default UrlsList;
