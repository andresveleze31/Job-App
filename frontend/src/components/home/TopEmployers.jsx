import React from "react";
import { Link } from "react-router-dom";
import Employer from "../Employer";
import useJobtex from "../../hooks/useJobtex";

function TopEmployers() {

  const {employers} = useJobtex();

  return (
    <div className="contenedor my-[10rem] ">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="mb-0 font-bold">Top Employers</h2>
          <p className="text-customGray">
            Showing companies based on reviews and recent job openings
          </p>
        </div>
        <Link className="font-semibold  flex gap-[2rem] items-center " to={"#"}>
          All Employers{" "}
          <img
            className="w-[3rem] h-[3rem] "
            src="../public/icons/icon_flecha.png"
            alt="Icono Flecha"
          />{" "}
        </Link>
      </div>
      <div className="grid mt-[5rem] grid-cols-3 gap-[2rem] ">
        {employers.map(emp => {
          return <Employer employer={emp} />
        })}

      </div>
    </div>
  );
}

export default TopEmployers;
