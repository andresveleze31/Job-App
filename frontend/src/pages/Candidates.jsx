import React from "react";
import FormularioCandidates from "../components/candidates/FormularioCandidates";
import BannerNav from "../components/BannerNav";
import Candidate from "../components/Candidate";

function Candidates() {

    
  return (
    <div>
      <BannerNav namePage={"Candidates"} />
      <FormularioCandidates />

      <div className="contenedor mb-[10rem] ">
        <div className="grid grid-cols-3 gap-[4rem]">
        <Candidate candidate={"Hola"}  />
        <Candidate candidate={"Hola"}  />
        <Candidate candidate={"Hola"}  />
        <Candidate candidate={"Hola"}  />
        <Candidate candidate={"Hola"}  />
        <Candidate candidate={"Hola"}  />
        <Candidate candidate={"Hola"}  />
        <Candidate candidate={"Hola"}  />
        <Candidate candidate={"Hola"}  />

        </div>

      </div>
    </div>
  );
}

export default Candidates;
