
//componente importado

import ProfileFreelancer from "../../components/profile"
import Session_expired from "../../components/session_expired"


const Profile = () => {
  return <>

    <section> <Session_expired/></section>


    <section className=" md:flex flex-row bg-message  h-full">

      <section className="  w-full md:w-1/3  "><ProfileFreelancer/></section>
  

    </section>




  </>;
};

export default Profile;
