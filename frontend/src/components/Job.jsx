import React from "react";
import { Link } from "react-router-dom";

function Job({ job }) {
  console.log(job);

  // Crear un objeto Date con la fecha de MongoDB
  const dateObject = new Date(job.createdAt);

  // Configurar las opciones de formato
  const options = { year: "numeric", month: "long", day: "numeric" };

  // Formatear la fecha según las opciones
  const formattedDate = dateObject.toLocaleDateString("en-US", options);

  return (
    <div className="p-[2rem] border border-slate-200 border-opacity-50 hover:border-primary transition-all duration-300">
      <div>
        <div className="flex justify-between ">
          <div className="flex gap-[2rem] items-center">
            <img
              className="w-[6rem] h-[6rem] "
              src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${
                job.employer_id.photo
              }`}
              alt="Logo Employers"
            />
            <div className="flex flex-col gap-[.5rem] ">
              <Link className="text-[1.4rem] text-primary font-bold hover:underline">
                {job.categorie_id.categorie}
              </Link>
              <Link
                to={`/jobs/${job._id}`}
                className="text-[2rem]  font-bold hover:text-primary transition-all duration-300 "
              >
                {job.title}
              </Link>
              <div className="flex gap-[1rem] ">
                <div className="flex gap-[.5rem] items-center ">
                  <img
                    className="w-[2.3rem] h-[2.4rem] "
                    src="../public/icons/icon_ubicacion_gray.png"
                    alt="Icon Location"
                  />
                  <p className="text-[1.4rem] text-customGray">{job.address}</p>
                </div>
                <div className="flex gap-[.5rem] items-center ">
                  <img
                    className="w-[2.2rem] h-[2.2rem] "
                    src="../public/icons/icon_calendar_gray.png"
                    alt="Icon Location"
                  />
                  <p className="text-[1.4rem] text-customGray">
                    {formattedDate}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button className="border h-[4rem] w-[4.2rem] rounded-full p-[1rem] ">
            <img
              className="filter opacity-25 grayscale w-[2rem] h-[2rem] "
              src="../public/icons/icon_corazon.png"
              alt="Icon Corazon"
            />
          </button>
        </div>
        <div className="mt-[1rem] flex gap-[1rem] pb-[2rem] border-b border-slate-200 border-opacity-50 ">
          <Link className="bg-slate-200 hover:text-primary transition-all duration-300 rounded-full text-[1.2rem] px-[1rem] py-[0.5rem]  ">
            {job.type_id.type}
          </Link>
        </div>
        <div className="flex justify-between mt-[1rem] items-center">
          <div className="flex  ">
            <img
              className="w-[3rem] h-[3rem] "
              src="../public/icons/icon_money.png"
              alt="Icon Money"
            />
            <p className="font-bold">
              ${job.minSalary} - ${job.maxSalary}{" "}
              <span className="font-normal text-[1.4rem] text-customGray ">
                / {job.salaryType.salaryType}
              </span>
            </p>
          </div>

          <p className="text-[1.4rem] text-customGray ">{job.deadline}</p>
        </div>
      </div>
    </div>
  );
}

export default Job;
