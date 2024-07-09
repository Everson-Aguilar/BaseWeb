

import Header from "../components/header";

const Layout = ({ children }) => {
  return (
    <div className="relative bg-neutral-600 min-h-screen box pr-3 pl-3 ">
      
      {/* Encabezado */}

      <header>
        <Header />
      </header>

      {/* Espacio para el contenido */}
      <main className="pt-8">{children}</main>
      <div className="bg-neutral-600 h-3"></div>
    </div>
  );
};

export default Layout;
