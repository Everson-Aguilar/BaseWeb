import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marketing Digital y Contenido 3D para Impulsar tu Negocio",
  description:
  "Impulsa tu negocio con Marketing Digital y visualizaciones 3D impactantes. En tudigitalnegocio.com, mejoramos la experiencia de compra de tus clientes con soluciones innovadoras. ¡Haz que tus ideas cobren vida!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>



      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
        
        {/* Favicons */}
        <link rel="icon" href="/DiseñoWeb/ico.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/DiseñoWeb/WebRecursos/ico.ico"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/DiseñoWeb/WebRecursos/ico.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/DiseñoWeb/WebRecursos/ico.ico" />

        
        <meta property="og:title" content="Marketing Digital y Contenido 3D para Impulsar tu Negocio" />
        <meta property="og:description" content="Impulsa tu negocio con Marketing Digital y visualizaciones 3D impactantes. En tudigitalnegocio.com, mejoramos la experiencia de compra de tus clientes con soluciones innovadoras. ¡Haz que tus ideas cobren vida!" />
        <meta property="og:image" content="https://tudigitalnegocio.com/DiseñoWeb/WebRecursos/imagenLink.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Imagen representativa de marketing digital y contenido 3D para impulsar tu negocio" />
        <meta property="og:url" content="https://tudigitalnegocio.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tu Digital Negocio" />
        <link rel="canonical" href="https://tudigitalnegocio.com" />
      
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Marketing Digital y Contenido 3D para Impulsar tu Negocio" />
        <meta name="twitter:description" content="Impulsa tu negocio con Marketing Digital y visualizaciones 3D impactantes." />
        <meta name="twitter:image" content="https://tudigitalnegocio.com/DiseñoWeb/WebRecursos/imagenLink.png" />
        <meta name="twitter:image:alt" content="Imagen de Marketing Digital y Contenido 3D" />









 
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
} 