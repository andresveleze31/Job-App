import React from "react";
import { useParams } from "react-router-dom";
import EmployerInformation from "../components/employers/EmployerInformation";
import EmployerAside from "../components/employers/EmployerAside";
import ContactFormEmployer from "../components/employers/ContactFormEmployer";
import Map from "../components/Map";

function EmployerDetails() {
  const { id } = useParams();

  return (
    <div>
      <header className="hero_employer h-[40rem]">
        <div className="contenedor flex h-[40rem] items-end">
          <div className="bg-white mb-[-10rem] border-b w-full p-[5rem] flex justify-between">
            <div className="flex gap-[2rem] items-center">
              <img
                className="w-[10rem] h-[10rem] "
                src="../public/images/employers_example.png"
                alt="Employer Image"
              />
              <div>
                <h3 className="font-bold mb-2">Employer</h3>
                <div className="flex gap-[.5rem] items-center ">
                  <img
                    className="w-[2.3rem] h-[2.4rem] "
                    src="../public/icons/icon_ubicacion_gray.png"
                    alt="Icon Location"
                  />
                  <p className="text-[1.4rem] text-customGray">Manhattan Ave</p>
                </div>
                <div className="flex gap-[2rem] mt-[1.5rem]  ">
                  <button className="text-white font-semibold bg-primary py-[1rem]  px-[3rem] rounded-lg cursor-pointer hover:bg-white text-[1.4rem] hover:text-primary border border-primary transition-all duration-300 ">
                    Follow
                  </button>
                  <button className=" font-bold border border-primary py-[1rem] px-[2rem] hover:bg-primary transition-all duration-300 text-[1.4rem] rounded-lg hover:text-white ">
                    Open Jobs - 3
                  </button>
                </div>
              </div>
            </div>

            <div className="grid gap-[1.5rem] grid-cols-1">
              <button className="text-white font-semibold bg-primary py-[1rem]  px-[3rem] rounded-lg cursor-pointer hover:bg-white hover:text-primary border border-primary transition-all duration-300 ">
                Send a Message
              </button>
              <button className=" font-bold border border-primary py-[1rem] px-[4rem] hover:bg-primary transition-all duration-300  rounded-lg hover:text-white ">
                Write a Review
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="mt-[14rem] mb-[4rem] contenedor grid grid-cols-[2fr,1fr] gap-[7rem] ">
        <EmployerInformation />

        <div className="flex flex-col gap-[3rem] ">
          <Map />
          <EmployerAside />
          <ContactFormEmployer />
        </div>
      </div>
    </div>
  );
}

export default EmployerDetails;
