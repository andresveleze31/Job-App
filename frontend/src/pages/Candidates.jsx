import React from "react";
import FormularioCandidates from "../components/candidates/FormularioCandidates";
import BannerNav from "../components/BannerNav";
import Candidate from "../components/Candidate";
import useJobtex from "../hooks/useJobtex";

function Candidates() {

  const {candidates} = useJobtex();

    
  return (
    <div>
      <BannerNav namePage={"Candidates"} />
      <FormularioCandidates />

      <div className="contenedor mb-[10rem] ">
        <div className="grid grid-cols-3 gap-[4rem]">
          {candidates.map(cand => {
            return <Candidate candidate={cand} />
          })}

        </div>

      </div>
    </div>
  );
}

export default Candidates;
