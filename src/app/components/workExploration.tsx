import Platfom_registration from "../components/platform_registration";
import History from "./history";
import El_guias from "./el_guias";
import Projects_of_interest from "./Projects _of_interest";

const Registers = () => {
  return (
    <section className=" relative p-5 h-screen ">
      <nav>
        <El_guias />
      </nav>

      <section className="absolute bg-neutral-200 h-10 w-10 rounded-full right-2  ">
        {" "}
      </section>

      <h2 className="text-colorBase mb-5 text-5xl font-BebasNeue   ">
        REGISTRO DE PAGINAS FREELANCERS
      </h2>

      <section className=" gap-5  md:flex flex-row  w-full h-fill space-y-5  ">
        <div className=" p-3  md:w-1/2 w-full bg-colorBase rounded-3xl  ">
          <div className=" h-16 mb-2 font-Staatliches text-3xl border-b-2 border-subtitle w-fill p-2 text-center  text-neutral-800 ">
            REGISTRAR PAGINAS
          </div>
          <div className=" p-5">
            <Platfom_registration />
          </div>
        </div>

        <div className=" p-3 md:w-1/2 w-full bg-colorBase  text-title  rounded-3xl">
          <div className=" bg-neutral-200 p-2 rounded-2xl  md:w-1/2 w-full justify-center text-center">
            historial de registro
          </div>

          <div className="overflow-scroll h-4/5">
            <div>
              <History />
            </div>
          </div>
        </div>
      </section>

      <section className=" p-2 bg-neutral-200 md:w-1/2 w-full mt-5  rounded-3xl flex justify-between  ">
        <div className=" p-3 flex justify-center items-center font-Staatliches bg-colorBase  rounded-2xl">
          Projects of interest
        </div>
        <div className="w-4/6">
          <Projects_of_interest />
        </div>
      </section>
      <div className="h-1"></div>
    </section>
  );
};

export default Registers;
