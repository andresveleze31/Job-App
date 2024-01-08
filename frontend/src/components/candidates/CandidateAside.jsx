import React from "react";

function CandidateAside() {
  return (
    <div>
      <div className="py-[2.5rem] border border-opacity-40 px-[3rem] bg-slate-100 rounded-2xl mt-[-20rem] ">
        <h3 className="font-bold">Information</h3>

        <div className="border-b flex justify-between pb-[1.5rem] ">
          <p className="text-customGray text-[1.6rem] ">Offered Salary</p>
          <p className="text-[1.6rem] font-semibold">$1200 / month</p>
        </div>

        <div className="border-b mt-[1.5rem] flex justify-between pb-[1.3rem] ">
          <p className="text-customGray text-[1.6rem] ">Experience Time</p>
          <p className="text-[1.6rem] font-semibold">3 Year</p>
        </div>

        <div className="border-b mt-[1.5rem] flex justify-between pb-[1.3rem] ">
          <p className="text-customGray text-[1.6rem] ">Gender</p>
          <p className="text-[1.6rem] font-semibold">Male</p>
        </div>

        <div className="border-b mt-[1.5rem] flex justify-between pb-[1.3rem] ">
          <p className="text-customGray text-[1.6rem] ">Age</p>
          <p className="text-[1.6rem] font-semibold">20</p>
        </div>

        <div className="border-b mt-[1.5rem] flex justify-between pb-[1.3rem] ">
          <p className="text-customGray text-[1.6rem] ">Qualification</p>
          <p className="text-[1.6rem] font-semibold">Master’s Degree</p>
        </div>

        <div className="border-b mt-[1.5rem] flex justify-between pb-[1.3rem] ">
          <p className="text-customGray text-[1.6rem] ">Languages</p>
          <p className="text-[1.6rem] font-semibold">English, French</p>
        </div>

        <div className="border-b mt-[1.5rem] flex justify-between pb-[1.3rem] ">
          <p className="text-customGray text-[1.6rem] ">Email</p>
          <p className="text-[1.6rem] font-semibold">brooklyn@apus.com</p>
        </div>

        <div className="border-b mt-[1.5rem] flex justify-between pb-[1.3rem] ">
          <p className="text-customGray text-[1.6rem] ">Phone Number</p>
          <p className="text-[1.6rem] font-semibold">(+88)123-456-789</p>
        </div>

        <div className=" mt-[1.5rem] flex justify-between items-center pb-[1.3rem] ">
          <p className="text-customGray text-[1.6rem] ">Socials</p>
          <div className="flex gap-[2rem] items-center">
            <div className="p-[1rem] group cursor-pointer hover:bg-primary transition-all duration-300 rounded-full bg-gray-200 ">
              <img
                className="w-[2rem] group-hover:filter group-hover:invert transition-all duration-300 h-[2rem] "
                src="../../public/icons/icon_facebook.png"
                alt="Icon Social"
              />
            </div>

            <div className="p-[1rem] group cursor-pointer hover:bg-primary transition-all duration-300 rounded-full bg-gray-200 ">
              <img
                className="w-[2rem] group-hover:filter group-hover:invert transition-all duration-300 h-[2rem] "
                src="../../public/icons/icon_linkedin.png"
                alt="Icon Social"
              />
            </div>
            <div className="p-[1rem] group cursor-pointer hover:bg-primary transition-all duration-300 rounded-full bg-gray-200 ">
              <img
                className="w-[2rem] group-hover:filter group-hover:invert transition-all duration-300 h-[2rem] "
                src="../../public/icons/icon_pinterest.png"
                alt="Icon Social"
              />
            </div>
            <div className="p-[1rem] group cursor-pointer hover:bg-primary transition-all duration-300 rounded-full bg-gray-200 ">
              <img
                className="w-[2rem] group-hover:filter group-hover:invert transition-all duration-300 h-[2rem] "
                src="../../public/icons/icon_google.png"
                alt="Icon Social"
              />
            </div>
          </div>{" "}
        </div>
        <button className="bg-white group w-full mt-[2rem]  border p-[1.3rem] hover:bg-primary transition-all duration-300 rounded-xl flex justify-between">
          <div className="flex flex-col group-hover:text-white transition-all duration-300 gap-[.8rem] ">
            <p className="text-[1.2rem] uppercase text-left font-semibold">
              CV
            </p>
            <p className="text-[1.6rem] text-left font-bold ">PDF</p>
          </div>
          <img
            className="h-[5rem] w-[5rem] group-hover:filter group-hover:brightness-50 transition-all duration-300 group-hover:opacity-50"
            src="../../public/icons/icon_pdf.png"
            alt="Icon Pdf"
          />
        </button>
        <button className="text-white mt-[2rem] font-semibold bg-primary py-[1rem] w-full px-[3rem] rounded-lg cursor-pointer hover:bg-white hover:text-primary border border-primary transition-all duration-300 ">
          Download CV
        </button>
      </div>
    </div>
  );
}

export default CandidateAside;
