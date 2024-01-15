import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeroCandidate from "../components/candidates/HeroCandidate";
import CandidateInformation from "../components/candidates/CandidateInformation";
import CandidateAside from "../components/candidates/CandidateAside";
import ContactFormCandidate from "../components/candidates/ContactFormCandidate";
import axios from "axios";

function CandidateDetail() {
  const { id } = useParams();

  const [candidate, setCandidate] = useState({});
  const [educations, setEducations] = useState({});
  const [experiences, setExperiences] = useState({});

  useEffect(() => {

    async function getCandidate(){
      try {
        //get-candidate/:id
        const { data } = await axios.get(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/api/candidates/get-candidate/${id}`
        );
        setCandidate(data);

        const edus = await axios.get(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/api/candidates/get-education/${id}`
        );
        setEducations(edus.data);

        const exps = await axios.get(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/api/candidates/get-experience/${id}`
        );

        setExperiences(exps.data);

      } catch (error) {
        console.log(error);
      }
    }
    getCandidate();

  }, [])

  return (
    <div>
      <HeroCandidate candidate={candidate} />
      <div className=" my-[4rem] contenedor grid grid-cols-[2fr,1fr] gap-[7rem] ">
        <CandidateInformation candidate={candidate} educations={educations} experiences={experiences} />
        <div className="flex flex-col gap-[3rem] ">
          <CandidateAside candidate={candidate} />
          <ContactFormCandidate />
        </div>
      </div>
    </div>
  );
}

export default CandidateDetail;
