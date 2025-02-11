
//componente importado

import ProfileFreelancer from "../../components/profile"
import Exploratory from "../../components/exploratory"

const Profile = () => {
  return <div className=" md:flex flex-row bg-message  h-screen">

    <section className="  w-full md:w-1/3 "><ProfileFreelancer/></section>
    <section className="w-full md:w-1/3 " ><Exploratory/></section>
    <section className="w-full md:w-1/3  " >Tareas Asignadas</section>





  </div>;
};

export default Profile;
