import React from "react";
import BannerNav from "../components/BannerNav";
import Job from "../components/Job";
import FormularioJobs from "../components/jobs/FormularioJobs";

function Jobs() {
  return (
    <main>
      <BannerNav namePage={"Jobs"} />

      <div className="contenedor my-[5rem] grid grid-cols-[1fr,2fr] gap-[3rem] ">
        <FormularioJobs />
        <div className="grid grid-cols-2 gap-[2rem] ">
          <Job job={"hola"} />
          <Job job={"hola"} />
          <Job job={"hola"} />
          <Job job={"hola"} />
          <Job job={"hola"} />
          <Job job={"hola"} />
          <Job job={"hola"} />
          <Job job={"hola"} />
          <Job job={"hola"} />
          <Job job={"hola"} />
          
        </div>
      </div>
    </main>
  );
}

export default Jobs;
