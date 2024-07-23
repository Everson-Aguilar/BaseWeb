

import Header from "../components/header";

const Layout = ({ children }) => {
  return (
    <div className="relative bg-neutral-600 min-h-screen box  ">
      
    

      <header>
        <Header />
      </header>

      {/* Espacio para el contenido */}

      <main>{children}</main>
      <div className=   "bg-neutral-600 h-3 "></div>
    </div>
  );
};

export default Layout;
