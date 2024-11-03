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
        <link rel="icon" href="/DiseñoWeb/ico.svg" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/DiseñoWeb/ico.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/DiseñoWeb/ico.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/DiseñoWeb/ico.svg"
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
