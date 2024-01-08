import React from "react";
import Video from "../Video";
import { Link } from "react-router-dom";
import Job from "../Job";
import SectionComment from "../SectionComment";
import FormularioReview from "../FormularioReview";

function EmployerInformation() {
  return (
    <main>
      <div>
        <h3 className="font-bold">About Company</h3>
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

      <div className="mt-[4rem]">
        <h3 className="font-bold">Video</h3>
        <Video />
      </div>
      <div className="mt-[4rem]">
        <div className="flex justify-between items-center mb-[3rem] ">
          <h3 className="font-bold m-0">Open Positions</h3>
          <Link to={"/jobs"} className="text-primary">Browse Full List  {" >"}</Link>
        </div>

        <div className="grid grid-cols-1 gap-[2rem]">
            <Job />
            <Job />
            <Job />

        </div>
      </div>

      <div className="mt-[4rem] ">
        <h3 className="font-bold">2 Comments</h3>
        <SectionComment />
        <FormularioReview />
      </div>

    </main>
  );
}

export default EmployerInformation;
