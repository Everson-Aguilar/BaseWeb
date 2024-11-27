/** @type {import('next-sitemap').IConfig} */

const dev = process.env.NODE_ENV !== 'production';

module.exports = {
  siteUrl: dev ? 'http://localhost:3000' : 'https://tudigitalnegocio.com', // URL de tu sitio en producción
  generateRobotsTxt: true,  // Esto genera el archivo robots.txt automáticamente
  sitemapSize: 7000,  // Tamaño máximo de un sitemap (opcional)
  outDir: './out', // Directorio donde se generarán los archivos (opcional)
};


