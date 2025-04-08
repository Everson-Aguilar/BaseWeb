"use client";

import React, { useEffect } from "react";

// Components
import Tasks from "../../components/tasks";
import Verification from "../../components/verification";
import Control from "../../components/control";

const Admin: React.FC = () => {
  useEffect(() => {
    const deleteRequest = async () => {
      try {
        await fetch("/api/live", {
          method: "DELETE",
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY_CLIENT ?? "",
            "Content-Type": "application/json",
          },
        });
      } catch (error) {
        console.error("Error al hacer DELETE:", error);
      }
    };

    deleteRequest();
  }, []);

  return (
    <main className="p-5 h-screen w-screen">
      <section className="font-BebasNeue text-5xl border-subtitle h-fill border-2 p-5">
        <span className="text-colorBase"> ADMINISTRACION</span>
        <section className="md:flex h-5/6 gap-5">
          <div className="p-5 w-full mb-5 md:w-1/3 h-[700px]">
            <Tasks />
          </div>
          <div className="p-5 w-full mb-5 md:w-1/3 h-[700px] overflow-scroll">
            <Verification />
          </div>
          <div className="font-Notable p-5 w-full mb-5 md:w-1/3 bg-zinc-800 h-[700px] overflow-scroll">
            <Control />
          </div>
        </section>
      </section>
    </main>
  );
};

export default Admin;
