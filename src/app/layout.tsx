import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Background } from "./components/background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "MakMapa-Professional 3D Environment Design Services: Maps, Cities, Rooms, Parks, Architecture & More",
  description:
    "We create custom 3D environments with detail and unique visual style: interactive maps, rooms, cities, parks, terrains, and architectural spaces. Perfect for video games, virtual reality, visualization, and cinematic marketing. We tell stories through immersive and functional digital worlds.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
        />
        <meta
          property="og:image"
          content="https://tudigitalnegocio.com/DiseñoWeb/WebRecursos/imagenLink.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Preview image of 3D environments and design services"
        />

        {/* Favicons */}
        <link rel="icon" href="/DiseñoWeb/ico.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/DiseñoWeb/WebRecursos/ico.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/DiseñoWeb/WebRecursos/ico.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/DiseñoWeb/WebRecursos/ico.ico"
        />

        <meta
          name="google-site-verification"
          content="daR2rx0nZddsl8gDz_kHUaH19e8t0TcH2pUhtzEYXBA"
        />

        <meta
          property="og:title"
          content="MAkMAPA - Professional 3D Environment Design Services: Maps, Cities, Rooms, Parks, Architecture & More"
        />
        <meta
          property="og:description"
          content="We design custom 3D environments: maps, rooms, cities, parks, terrain, and architecture. Ideal for games, VR, visualization, and cinematic marketing."
        />

        <meta property="og:url" content="https://makmata.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MAkMAPA" />
        <link rel="canonical" href="https://makmata.com" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="MAkMAPA - 3D Environment Design for Games, VR & Architecture"
        />
        <meta
          name="twitter:description"
          content="Custom 3D design for maps, cities, rooms, parks, and more. Tailored for games, virtual reality, architecture, and cinematic storytelling."
        />
        <meta
          name="twitter:image"
          content="https://tudigitalnegocio.com/DiseñoWeb/WebRecursos/imagenLink.png"
        />
        <meta
          name="twitter:image:alt"
          content="3D digital environment design showcase"
        />
      </head>
      <body className={inter.className}>
        <section>
          <Background />
        </section>

        {children}
      </body>
    </html>
  );
}
