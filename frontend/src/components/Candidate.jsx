import React from "react";
import { Link } from "react-router-dom";

function Candidate({ candidate }) {

  console.log(candidate)
  return (
    <div className="border rounded-xl p-[2rem] ">
      <div className="grid grid-cols-3">
        <div className="flex justify-center">
          <p className="text-[1.2rem] w-[7.2rem] h-[3rem] py-[.5rem] px-[1rem] rounded-full bg-green-100 text-primary border-primary ">
            Featured
          </p>
        </div>
        <div className="flex justify-center">
          <img
            className="rounded-full w-[8rem] h-[8rem] "
            src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${
              candidate.photo
            }`}
            alt="Candidate Photo"
          />
        </div>
        <div className="flex justify-center">
          <button className="border h-[4rem] w-[4.2rem] rounded-full p-[1rem] ">
            <img
              className="filter opacity-25 grayscale w-[2rem] h-[2rem] "
              src="../public/icons/icon_corazon.png"
              alt="Icon Corazon"
            />
          </button>
        </div>
      </div>

      <div className=" flex flex-col items-center mt-[2rem] ">
        <p className="text-[1.4rem] text-center font-bold text-primary ">
          {candidate.jobtitle}
        </p>
        <h3 className="font-bold mb-3 text-center">{candidate.fullname}</h3>
        <div className="flex gap-[1rem] ">
          <div className="flex gap-[.5rem] items-center ">
            <img
              className="w-[2.3rem] h-[2.4rem] "
              src="../public/icons/icon_ubicacion_gray.png"
              alt="Icon Location"
            />
            <p className="text-[1.4rem] text-customGray">{candidate.address}</p>
          </div>
          <div className="flex gap-[.5rem] items-center ">
            <img
              className="w-[2.5rem] h-[2.5rem] filter grayscale opacity-80 h-[2.2rem] "
              src="../public/icons/icon_money.png"
              alt="Icon Location"
            />
            <p className="text-[1.4rem] text-customGray">
              ${candidate.salary} / {candidate.salaryType.salaryType}
            </p>
          </div>
        </div>
        <div className="flex mt-[2rem]  gap-[1rem] ">
          <Link className="bg-slate-200 hover:text-primary transition-all duration-300 rounded-full text-[1.2rem] px-[1rem] py-[0.5rem]  ">
            {candidate.categorie_id.categorie}
          </Link>
        </div>
        <Link
          to={`/candidates/${candidate._id}`}
          className="text-white mt-[2rem] font-semibold bg-primary text-center py-[1rem] w-full px-[3rem] rounded-lg cursor-pointer hover:bg-white hover:text-primary border border-primary transition-all duration-300 "
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}

export default Candidate;
