import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Creamos Negocios Digitales con Redes Sociales, Marketing, Web, Orientación Artística y Obtención de Clientes",
  description:
    "En tudigitalnegocio.com, transformamos tu negocio local en un poderoso negocio digital que impulsa tus ventas. Utilizamos redes sociales, marketing digital, desarrollo web, diseño gráfico, diseño de productos y diseño de espacios. Con tecnologías avanzadas y un flujo de trabajo optimizado, ofrecemos soluciones económicas y adaptadas a tus necesidades. ¡Conéctate con nosotros y da el primer paso hacia el éxito digital!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/DiseñoWeb/logoGris.svg" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/DiseñoWeb/logoGris.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/DiseñoWeb/logoGris.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/DiseñoWeb/logoGris.svg"
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
        />
        <meta
          name="keywords"
          content="negocio digital, impulso de ventas, redes sociales, marketing digital, desarrollo web, diseño gráfico, diseño de productos, diseño de espacios, tecnologías avanzadas, soluciones económicas"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
