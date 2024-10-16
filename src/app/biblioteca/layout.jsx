import Header from "../components/header";



const Layout = ({ children }) => {



  return (

<div> 



    <div><header >
    <Header />
  </header>

    <div className="relative bg-neutral-600 min-h-screen p-5">
      <main className=" mt-10">{children}</main>
    </div>

    </div>

    </div>
    
  );
};

export default Layout;
