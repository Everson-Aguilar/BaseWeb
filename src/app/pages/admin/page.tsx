"use client";

import React from "react";

//components

import Task from "../../components/tasks"

import Verification from "../../components/verification"

import Control from "../../components/control"



const Admin: React.FC = () => {
  return (
    <main className="p-5 h-screen w-screen">
      <section className="font-BebasNeue text-5xl border-subtitle h-fill border-2 p-5">
        <span className="text-colorBase"> ADMINISTRACION</span>
        <section className="md:flex h-5/6 gap-5">
          <div className="p-5 w-full mb-5 md:w-1/3 bg-colorBase h-[700px]">

            <Task/>

          </div>
          <div className="p-5 w-full mb-5 md:w-1/3 bg-zinc-800 h-[700px]">

          <Verification/>

          </div>
          <div className="p-5 w-full mb-5 md:w-1/3 bg-zinc-800 h-[700px] overflow-scroll">

            <Control/>

          </div>
        </section>

      </section>
    </main>
  );
};

export default Admin;
