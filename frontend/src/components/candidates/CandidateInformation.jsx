import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import Video from "../Video";
import SectionComment from "../SectionComment";
import FormularioReview from "../FormularioReview";

function CandidateInformation({ candidate, educations, experiences }) {
  return (
    <main>
      <div>
        <h3 className="font-bold">About Candidate</h3>
        {candidate.aboutme}
      </div>

      <div className="mt-[4rem] ">
        <h3 className="font-bold">Education</h3>
        {educations.length > 0 &&
          educations.map((edu) => {
            return <Education education={edu} />;
          })}
      </div>
      <div className="mt-[4rem] ">
        <h3 className="font-bold">Experience</h3>
        {experiences.length > 0 &&
          experiences.map((exp) => {
            return <Experience experience={exp} />;
          })}
      </div>
      <div className="mt-[4rem] ">
        <h3 className="font-bold">Video</h3>
        <Video url={candidate.video} />
      </div>
      <div className="mt-[4rem] ">
        <h3 className="font-bold">2 Comments</h3>
        <SectionComment />
        <FormularioReview />
      </div>
    </main>
  );
}

export default CandidateInformation;
