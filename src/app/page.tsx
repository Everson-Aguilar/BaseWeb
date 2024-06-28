import Head from 'next/head';

export default function Home() {
  return (
    <div className="App">
      <Head>
        <title>
          SERVICIOS DE DISEÑO DE ENTORNO 3D, PLANIFICACION DE CONSTRUCCION Y
          ACCESORIOS OPTIMIZADO-3Dscape
        </title>
        <meta
          name="description"
          content="Descubre nuestros servicios en diseño 3D para entornos, planos de construcción y accesorios. En 3Dscape, convertimos ideas en realidad con modelos virtuales detallados y visualizaciones realistas."
        />
        <meta
          name="keywords"
          content="diseño 3D, modelado 3D, renderizado, visualización arquitectónica, diseño de interiores, animación 3D, simulaciones 3D"
        />
        {/* Otras meta etiquetas según sea necesario */}
      </Head>

      <main className="container mx-auto px-4">
        <header>
          <h1 className="text-2xl font-bold mt-8 mb-4">
            SERVICIOS DE DISEÑO DE ENTORNO 3D, PLANIFICACION DE CONSTRUCCION Y
            ACCESORIOS OPTIMIZADO
          </h1>
        </header>

        {/* Introducción */}
        <section>
          <p>
            Descubre nuestros servicios en diseño 3D para entornos, planos de
            construcción y accesorios. En 3Dscape, convertimos ideas en realidad
            con modelos virtuales detallados y visualizaciones realistas. Servimos
            a diversas industrias, incluyendo arquitectura, cine, videojuegos y
            más, ofreciendo soluciones personalizadas que combinan creatividad,
            precisión y sostenibilidad. Confía en nuestra experiencia en diseño 3D
            para llevar tu proyecto al siguiente nivel.
          </p>
        </section>

        {/* Portfolio */}
        <section>
          <h2>Nuestro Portfolio Artístico</h2>
          <p>Galería de Proyectos</p>
        </section>

        {/* Tipos de servicios ofrecidos */}
        <section>
          <h2>Tipos de Servicios Disponibles</h2>

          <table className="border-collapse border border-gray-300 w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Área de Servicio</th>
                <th className="border border-gray-300 px-4 py-2">Ejemplos de Salida</th>
                <th className="border border-gray-300 px-4 py-2">Detalles Adicionales</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Arquitectura</td>
                <td className="border border-gray-300 px-4 py-2">Visualización de edificios</td>
                <td className="border border-gray-300 px-4 py-2">Casas, oficinas, fábricas; Vistas de día y noche</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2">Modelado BIM</td>
                <td className="border border-gray-300 px-4 py-2">Gestión de datos de construcción, colaboración</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2">Realidad Virtual (VR)</td>
                <td className="border border-gray-300 px-4 py-2">Recorridos virtuales, ajustes de iluminación</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Diseño de Interiores</td>
                <td className="border border-gray-300 px-4 py-2">Visualización de interiores</td>
                <td className="border border-gray-300 px-4 py-2">Estilos de decoración, muebles personalizados</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2">Simulaciones de iluminación</td>
                <td className="border border-gray-300 px-4 py-2">Efectos de luz, ambiente nocturno</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Diseño de Productos</td>
                <td className="border border-gray-300 px-4 py-2">Prototipos digitales</td>
                <td className="border border-gray-300 px-4 py-2">Diseños ergonómicos, ensamblaje virtual</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2">Animación de productos</td>
                <td className="border border-gray-300 px-4 py-2">Demostraciones de uso, características destacadas</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Diseño de Paisajes</td>
                <td className="border border-gray-300 px-4 py-2">Modelado de paisajes</td>
                <td className="border border-gray-300 px-4 py-2">Jardines, paisajes urbanos, recreaciones históricas</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2">Simulación de estaciones</td>
                <td className="border border-gray-300 px-4 py-2">Cambios de clima, efectos estacionales</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2">Diseño vegetativo</td>
                <td className="border border-gray-300 px-4 py-2">Jardines verticales, parques naturales</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Cine y Entretenimiento</td>
                <td className="border border-gray-300 px-4 py-2">Efectos visuales</td>
                <td className="border border-gray-300 px-4 py-2">Explosiones, partículas especiales</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2">Creación de mundos virtuales para películas</td>
                <td className="border border-gray-300 px-4 py-2">Ciudades futuristas, escenarios post-apocalípticos</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Videojuegos</td>
                <td className="border border-gray-300 px-4 py-2">Diseño de entornos</td>
                <td className="border border-gray-300 px-4 py-2">Paisajes naturales, escenarios acuáticos</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2">Diseño de niveles y escenarios</td>
                <td className="border border-gray-300 px-4 py-2">Plataformas, mundos abiertos, laberintos</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2">Animación de objetos</td>
                <td className="border border-gray-300 px-4 py-2">Movimientos realistas, física aplicada</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2">Géneros de tendencia en videojuegos</td>
                <td className="border border-gray-300 px-4 py-2">Battle Royale, Metroidvania, Survival Horror, Mundo Abierto, Roguelike, Construcción</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Educación y Formación</td>
                <td className="border border-gray-300 px-4 py-2">Simulaciones educativas</td>
                <td className="border border-gray-300 px-4 py-2">Ciencia, historia, capacitación laboral</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2">Formación en realidad virtual</td>
                <td className="border border-gray-300 px-4 py-2">Simulación de emergencias, habilidades técnicas</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Marketing y Publicidad</td>
                <td className="border border-gray-300 px-4 py-2">Renders de productos</td>
                <td className="border border-gray-300 px-4 py-2">Vistas de productos, demostraciones</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2">Experiencias interactivas</td>
                <td className="border border-gray-300 px-4 py-2">Eventos virtuales, interacción online</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2">Tendencias de marketing interior</td>
                <td className="border border-gray-300 px-4 py-2">Experiencias inmersivas, realidad aumentada en tiendas</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2">Tendencias de marketing digital</td>
                <td className="border border-gray-300 px-4 py-2">Interacciones en redes sociales, contenido 3D en publicidad online</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Servicio económico */}
        <section>
          <h2>Servicios de Diseño en Entorno 3D - Oferta Económica</h2>
          <h4>Descripción del Servicio:</h4>
          <p>
            Transformamos tus ideas en diseños tridimensionales realistas y
            funcionales. Utilizamos herramientas avanzadas de modelado y
            renderizado para crear visualizaciones impresionantes y detalladas.
          </p>
          <h4>Negociación:</h4>
          <p>
            Con respecto a la tarifa a ofertar, buscamos establecer un precio
            justo y equitativo según el proyecto a desarrollar. Nuestra meta es
            ayudar a los pequeños emprendedores a obtener un producto económico
            que se ajuste a sus necesidades.
          </p>
          <h4>Incluye Configuración Básica:</h4>
          <ul>
            <li>Modelado 3D de [objetos/arquitectura/productos] según tus especificaciones.</li>
            <li>Texturización y materiales realistas.</li>
            <li>Renderizado de alta calidad.</li>
            <li>Revisión y ajustes basados en tu retroalimentación.</li>
            <li>Entrega en formatos estándar para fácil integración.</li>
          </ul>
        </section>

        {/* Valoración Clientes */}
        <section>
          <h2>Valoración Clientes</h2>
          <p>Slider Clientes Valoración</p>
        </section>

        {/* Soluciones Diseño Enfocado al Mercado Comercial */}
        <section>
          <h2>Compromiso Social y Sostenibilidad</h2>
          <p>Soluciones Diseño Enfocado al Mercado Comercial</p>
        </section>

        {/* Herramientas de trabajo */}
        <section>
          <h2>Lista de Programas Populares Utilizados por Artistas y Profesionales del Diseño 3D</h2>
          <ol>
            <li>
              <p><strong>Blender:</strong> Software versátil de modelado, animación y renderizado, gratuito y de código abierto.</p>
            </li>
            <li>
              <p><strong>ZBrush:</strong> Especializado en escultura digital y modelado orgánico detallado.</p>
            </li>
            <li>
              <p><strong>Substance Painter:</strong> Herramienta líder en texturización 3D para crear materiales realistas.</p>
            </li>
            <li>
              <p><strong>Adobe Substance Designer:</strong> Para la creación de texturas procedurales y materiales avanzados.</p>
            </li>
            <li>
              <p><strong>Unity:</strong> Motor de juego utilizado para experiencias interactivas y simulaciones 3D.</p>
            </li>
            <li>
              <p><strong>Unreal Engine:</strong> Potente motor de juego y herramienta para visualización arquitectónica y efectos visuales.</p>
            </li>
            <li>
              <p><strong>Adobe Photoshop:</strong> Edición de texturas, composición final y mapas UV en proyectos 3D.</p>
            </li>
            <li>
              <p><strong>Adobe Illustrator:</strong> Creación de gráficos vectoriales para integración en diseño 3D.</p>
            </li>
            <li>
              <p><strong>Adobe After Effects:</strong> Composición y efectos visuales para postproducción de animaciones y videos 3D.</p>
            </li>
            <li>
              <p><strong>Autodesk Revit:</strong> Software BIM para diseño y documentación de edificios en arquitectura y construcción.</p>
            </li>
          </ol>
        </section>

        {/* Visión y Misión Empresarial */}
        <section>
          <h2>Visión y Misión</h2>
          <p>Explica claramente la misión y visión de tu empresa. Esto ayuda a los visitantes a comprender tus objetivos y valores fundamentales.</p>
        </section>

        {/* Exploración */}
        <section>
          <h2>Investigación y Desarrollo</h2>
          <p>Si tu equipo está involucrado en investigación o desarrollo de nuevas metodologías o herramientas en diseño 3D, resalta estos esfuerzos para mostrar tu liderazgo en innovación.</p>
        </section>

        {/* Mundo Social de Artistas */}
        <section>
          <nav>
            <h2>Exploración de Redes Sociales de Creadores Digitales</h2>
            <h3>El Mundo Virtual de los Artistas Digitales</h3>
            <ul>
              <li>
                <a href="https://blenderartists.org/t/environment-design-blender-3d-coat/1297573">
                  blenderartists
                </a>
                <p>Red social de artistas de blender</p>
              </li>

              <li>
                <a href="https://www.artstation.com/">Artstation</a>
                <p>Webs grande de exposición de los mejores artistas del Mundo</p>
              </li>

              <li>
                <a href="https://80.lv/">80 Level</a>
                <p>Webs grande de noticias del mundo artístico 3D</p>
              </li>
            </ul>
          </nav>
        </section>
      </main>

      <footer className="bg-gray-200 py-4 mt-8">
        <section className="container mx-auto px-4">
          <h2>Contacto</h2>
          <address>
            <p>Dirección: COLOMBIA</p>
            <p>
              Email: <a href="mailto:aguilar3dstudio@gmail.com">aguilar3dstudio@gmail.com</a>
            </p>
            <p>
              Teléfono: <a href="tel:+573052158161">+57 305 215 81 61</a>
            </p>
          </address>
        </section>
        <section className="container mx-auto px-4 mt-4">
          <h2>Redes Sociales</h2>
          <ul className="flex space-x-4">
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">YouTube</a>
            </li>
          </ul>
        </section>
        <section className="container mx-auto px-4 mt-4">
          <p className="text-center">
            © 2024 3Dscape. Todos los derechos reservados. Diseñado por 3Dscape.
          </p>
        </section>
      </footer>
    </div>
  );
}


