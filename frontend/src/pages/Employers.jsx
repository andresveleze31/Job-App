import React from "react";
import BannerNav from "../components/BannerNav";
import FormularioEmployers from "../components/employers/FormularioEmployers";
import Employer from "../components/Employer";

function Employers() {
  return (
    <main>
      <BannerNav namePage={"Employers"} />
      <FormularioEmployers />

      <div className="contenedor mb-[10rem] ">
        <div className="grid grid-cols-3 gap-[2rem]">
          <Employer employer={"Hola"} />
          <Employer employer={"Hola"} />
          <Employer employer={"Hola"} />
          <Employer employer={"Hola"} />
          <Employer employer={"Hola"} />
          <Employer employer={"Hola"} />
          <Employer employer={"Hola"} />
          <Employer employer={"Hola"} />
          <Employer employer={"Hola"} />
        </div>
      </div>
    </main>
  );
}

export default Employers;
