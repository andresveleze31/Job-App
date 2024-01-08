import React from "react";
import { Link } from "react-router-dom";
import JobInformation from "../components/jobs/JobInformation";
import JobAside from "../components/jobs/JobAside";
import EmployerAside from "../components/employers/EmployerAside";
import Map from "../components/Map";
import ContactFormEmployer from "../components/employers/ContactFormEmployer";

function JobDetails() {
  return (
    <main>
      <header className="hero_employer h-[40rem]"></header>

      <div className="my-[4rem] contenedor grid grid-cols-[2fr,1fr] gap-[7rem] ">
        <div>
          <div className="flex pb-[3rem]  border-b justify-between">
            <div className="flex  items-center gap-[2rem]">
              <img
                className="w-[10rem] h-[10rem] "
                src="../../public/images/employers_example.png"
                alt="Logo Employer"
              />
              <div>
                <Link className="text-[1.4rem] text-primary hover:underline font-bold ">
                  Aprico Ltd
                </Link>
                <h3 className="font-bold mb-3">Software Engineer</h3>
                <div className="flex mb-[1rem] gap-[1rem] ">
                  <div className="flex gap-[.5rem] items-center ">
                    <img
                      className="w-[2.3rem] h-[2.4rem] "
                      src="../public/icons/icon_ubicacion_gray.png"
                      alt="Icon Location"
                    />
                    <p className="text-[1.4rem] text-customGray">
                      Manhattan Ave
                    </p>
                  </div>
                  <div className="flex gap-[.5rem] items-center ">
                    <img
                      className="w-[2.2rem] h-[2.2rem] "
                      src="../public/icons/icon_calendar_gray.png"
                      alt="Icon Location"
                    />
                    <p className="text-[1.4rem] text-customGray">
                      June 20, 2023
                    </p>
                  </div>
                </div>
                <Link className="bg-slate-200 hover:text-primary transition-all duration-300 rounded-full text-[1.2rem] px-[1rem] py-[0.5rem]  ">
                  Full Time
                </Link>
              </div>
            </div>

            <div>
              <div className="flex gap-[2rem]">
                <button className="border rounded-full py-[1rem] px-[1.2rem] ">
                  <img
                    className="filter opacity-25 grayscale w-[2rem] h-[2rem] "
                    src="../public/icons/icon_corazon.png"
                    alt="Icon Corazon"
                  />
                </button>
                <button className="text-white font-semibold bg-primary py-[1rem] px-[3rem] rounded-lg cursor-pointer hover:bg-white hover:text-primary border border-primary transition-all duration-300 ">
                  Apply Now
                </button>
              </div>
              <p className="mt-[1rem] flex justify-end gap-[.5rem] text-[1.4rem] font-bold">
                <span className="text-red-600 font-normal">
                  Deadline Date:{" "}
                </span>{" "}
                June 14, 2030
              </p>
              <div className="flex justify-end mt-[1rem]">
                <img
                  className="w-[3rem] h-[3rem] "
                  src="../public/icons/icon_money.png"
                  alt="Icon Money"
                />
                <p className="font-bold">
                  $750 - $800{" "}
                  <span className="font-normal text-[1.4rem] text-customGray ">
                    / money
                  </span>
                </p>
              </div>
            </div>
          </div>
          <JobInformation />
        </div>
        <div className="flex flex-col gap-[3rem] ">
          <Map />
          <JobAside />
          <EmployerAside />
          <ContactFormEmployer />
        </div>
      </div>
    </main>
  );
}

export default JobDetails;
