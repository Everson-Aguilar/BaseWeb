// Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-trend text-colorBase mt-10">
      <div className="max-w-6xl mx-auto p-5 text-sm">
        {/* Contacto */}
        <section className="mb-5">
          <h2 className="font-bold text-lg mb-2">Contacto</h2>
          <address className="not-italic">
            <a
              href="mailto:eversonaguilar1@gmail.com"
              className="hover:underline text-orange-400"
            >
              eversonaguilar1@gmail.com
            </a>
          </address>
        </section>

        {/* Redes Sociales */}
        <section className="mb-5">
          <h2 className="font-bold text-lg mb-2">Redes Sociales</h2>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover: text-orange-400">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover: text-orange-400">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover: text-orange-400">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover: text-orange-400">
                LinkedIn
              </a>
            </li>
          </ul>
        </section>

        {/* Derechos reservados */}
        <section className="mt-5 text-center text-xs text-message">
          <p>
            © 2024{" "}
            <a href="#" className="hover:underline text-orange-400">
              tudigitalnegocio.com
            </a>
            . Todos los derechos reservados.
          </p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
