import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SERVICIOS DE DISEÑO DE ENTORNO 3D, PLANIFICACION DE CONSTRUCCION Y ACCESORIOS OPTIMIZADO-3Dscape",
  description: "Descubre nuestros servicios en diseño 3D para entornos, planos de construcción y accesorios. En 3Dscape, convertimos ideas en realidad con modelos virtuales detallados y visualizaciones realistas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/DiseñoWeb/logogrisoscuro.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/DiseñoWeb/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/DiseñoWeb/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/DiseñoWeb/favicon-16x16.png" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
        <meta name="keywords" content="diseño 3D, modelado 3D, renderizado, visualización arquitectónica, diseño de interiores, animación 3D, simulaciones 3D" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
