import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import Video from "../Video";
import SectionComment from "../SectionComment";
import FormularioReview from "../FormularioReview";

function CandidateInformation() {
  return (
    <main>
      <div>
        <h3 className="font-bold">About Candidate</h3>
        <p className="text-[1.6rem] text-customGray ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
          cupiditate tempora qui quam ad magnam vero explicabo soluta, aperiam,
          totam asperiores magni ut commodi, reprehenderit ex suscipit quaerat
          temporibus dolore. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Est quae repudiandae reprehenderit atque quaerat pariatur
          similique aut ab exercitationem eligendi voluptatem totam odio quas,
          explicabo dolores tempore velit? Impedit, soluta!
        </p>
        <br />
        <p className="text-[1.6rem] text-customGray ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
          cupiditate tempora qui quam ad magnam vero explicabo soluta, aperiam,
          totam asperiores magni ut commodi, reprehenderit ex suscipit quaerat
          temporibus dolore. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Est quae repudiandae reprehenderit atque quaerat pariatur
          similique aut ab exercitationem eligendi voluptatem totam odio quas,
          explicabo dolores tempore velit? Impedit, soluta!
        </p>
      </div>

      <div className="mt-[4rem] ">
        <h3 className="font-bold">Education</h3>
        <Education />
        <Education />
      </div>
      <div className="mt-[4rem] ">
        <h3 className="font-bold">Experience</h3>
        <Experience />
        <Experience />
      </div>
      <div className="mt-[4rem] ">
        <h3 className="font-bold">Video</h3>
        <Video />
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
