import React from "react";
import Video from "../Video";
import { Link } from "react-router-dom";
import Job from "../Job";
import SectionComment from "../SectionComment";
import FormularioReview from "../FormularioReview";

function EmployerInformation({employer}) {
  return (
    <main>
      <div>
        <h3 className="font-bold">About Company</h3>
        {employer.aboutme}
      </div>

      <div className="mt-[4rem]">
        <h3 className="font-bold">Video</h3>
        <Video url={employer.video} />
      </div>
      <div className="mt-[4rem]">
        <div className="flex justify-between items-center mb-[3rem] ">
          <h3 className="font-bold m-0">Open Positions</h3>
          <Link to={"/jobs"} className="text-primary">Browse Full List  {" >"}</Link>
        </div>

        <div className="grid grid-cols-1 gap-[2rem]">
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
