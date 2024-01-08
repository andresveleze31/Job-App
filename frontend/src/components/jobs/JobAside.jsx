import React from "react";
import { Link } from "react-router-dom";

function JobAside() {
  return (
    <div>
      <div>
        <div className="py-[2.5rem] border border-opacity-40 px-[3rem] bg-slate-100 rounded-2xl">
          <h3 className="font-bold">Job Information</h3>

          <div className="border-b flex justify-between pb-[1.5rem] ">
            <p className="text-customGray text-[1.6rem] ">Date Posted</p>
            <p className="text-[1.6rem] font-semibold text-primary">
              June 20, 2023
            </p>
          </div>

          <div className="border-b mt-[1.5rem] flex justify-between pb-[1.3rem] ">
            <p className="text-customGray text-[1.6rem] ">Location</p>
            <p className="text-[1.6rem] font-semibold">United States</p>
          </div>

          <div className="border-b mt-[1.5rem] flex justify-between pb-[1.3rem] ">
            <p className="text-customGray text-[1.6rem] ">Category</p>
            <p className="text-[1.6rem] font-semibold">IT & Networking</p>
          </div>

          <div className="border-b mt-[1.5rem] flex justify-between pb-[1.3rem] ">
            <p className="text-customGray text-[1.6rem] ">Offered Salary</p>
            <p className="text-[1.6rem] font-semibold">$400 - $450 / month</p>
          </div>

          <div className="border-b mt-[1.5rem] flex justify-between pb-[1.3rem] ">
            <p className="text-customGray text-[1.6rem] ">Expiration date</p>
            <p className="text-[1.6rem] font-semibold">June 14, 2030</p>
          </div>

          <div className="border-b mt-[1.5rem] flex justify-between pb-[1.3rem] ">
            <p className="text-customGray text-[1.6rem] ">Experience</p>
            <p className="text-[1.6rem] font-semibold">1 Year</p>
          </div>

          <div className="border-b mt-[1.5rem] flex justify-between pb-[1.3rem] ">
            <p className="text-customGray text-[1.6rem] ">Gender</p>
            <p className="text-[1.6rem] font-semibold">Female</p>
          </div>

          <div className="border-b mt-[1.5rem] flex justify-between pb-[1.3rem] ">
            <p className="text-customGray text-[1.6rem] ">Industry</p>
            <p className="text-[1.6rem] font-semibold">Seo, Banking</p>
          </div>

          <div className="border-b mt-[1.5rem] flex justify-between pb-[1.3rem] ">
            <p className="text-customGray text-[1.6rem] ">Qualification</p>
            <p className="text-[1.6rem] font-semibold">Certificate</p>
          </div>

          <div className="border-b mt-[1.5rem] flex justify-between pb-[1.3rem] ">
            <p className="text-customGray text-[1.6rem] ">Career Level</p>
            <p className="text-[1.6rem] font-semibold">Student</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobAside;
