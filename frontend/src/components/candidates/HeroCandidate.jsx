import React from "react";
import { Link } from "react-router-dom";

function HeroCandidate() {
  return (
    <header className="py-[5rem]  hero_candidate">
      <div className="contenedor px-[2rem] ">
        <div className="flex items-center gap-[2rem]">
          <img
            className="rounded-lg w-[12rem] h-[12rem] "
            src="../../public/images/candidate_photo.jpg"
            alt="Candidate Photo"
          />
          <div>
            <p className="text-white mb-[.5rem] text-[1.4rem] font-bold">
              Web Developer
            </p>
            <h3 className="text-white font-bold mb-5">Brooklyn Simmons </h3>
            <div className="flex gap-[1rem] items-center ">
              <img
                className="w-[2.3rem] h-[2.4rem] "
                src="../public/icons/icon_ubicacion_white.png"
                alt="Icon Location"
              />
              <p className="text-[1.4rem] text-white">Manhattan Ave</p>
            </div>

            <div className="flex mt-[1.5rem] gap-[2rem]">
              <div className="flex gap-[1rem]">
                <Link className="bg-white rounded-full hover:bg-opacity-100 hover:text-primary transition-all duration-300 px-[1.5rem] py-[.5rem]  bg-opacity-20 text-white text-[1.2rem] " to={"#"}>
                  Manager
                </Link>
                <Link className="bg-white rounded-full hover:bg-opacity-100 hover:text-primary transition-all duration-300 px-[1.5rem] py-[.5rem]  bg-opacity-20 text-white text-[1.2rem] " to={"#"}>
                  Service
                </Link>
                <Link className="bg-white rounded-full hover:bg-opacity-100 hover:text-primary transition-all duration-300 px-[1.5rem] py-[.5rem]  bg-opacity-20 text-white text-[1.2rem] " to={"#"}>
                  Manager
                </Link>
              </div>
              <div className="flex items-center">
                <img className="w-[2.5rem] h-[2.5rem] filter invert " src="../../public/icons/icon_money.png" alt="Icon Money" />
                <p className="text-white text-[1.6rem] ">$1200 / month</p>
              </div>
            </div>
          </div>
        </div>

        <button className="text-white mt-[2rem] hover:bg-white hover:text-primary transition-all duration-300 py-[1rem] font-bold px-[2rem] border border-white rounded-lg ">Add to ShortList</button>
      </div>
    </header>
  );
}

export default HeroCandidate;
