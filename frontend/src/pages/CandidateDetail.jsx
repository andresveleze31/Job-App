import React from "react";
import { useParams } from "react-router-dom";
import HeroCandidate from "../components/candidates/HeroCandidate";
import CandidateInformation from "../components/candidates/CandidateInformation";
import CandidateAside from "../components/candidates/CandidateAside";
import ContactFormCandidate from "../components/candidates/ContactFormCandidate";

function CandidateDetail() {
  const { id } = useParams();

  return (
    <div>
      <HeroCandidate />
      <div className=" my-[4rem] contenedor grid grid-cols-[2fr,1fr] gap-[7rem] ">
        <CandidateInformation />
        <div className="flex flex-col gap-[3rem] ">
          <CandidateAside />
          <ContactFormCandidate />
        </div>
      </div>
    </div>
  );
}

export default CandidateDetail;
