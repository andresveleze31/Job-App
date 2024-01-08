import React from 'react'
import { Link } from 'react-router-dom'

function EmployerAside() {
  return (
    <div>
      <div className="py-[2.5rem] border border-opacity-40 px-[3rem] bg-slate-100 rounded-2xl">
        <h3 className="font-bold">Company Information</h3>

        <div className="border-b flex justify-between pb-[1.5rem] ">
          <p className="text-customGray text-[1.6rem] ">Categories</p>
          <p className="text-[1.6rem] font-semibold text-primary">Industrial</p>
        </div>

        <div className="border-b mt-[1.5rem] flex justify-between pb-[1.3rem] ">
          <p className="text-customGray text-[1.6rem] ">Founded Date</p>
          <p className="text-[1.6rem] font-semibold">1998</p>
        </div>

        <div className="border-b mt-[1.5rem] flex justify-between pb-[1.3rem] ">
          <p className="text-customGray text-[1.6rem] ">Company Size</p>
          <p className="text-[1.6rem] font-semibold">30 - 50</p>
        </div>

        <div className="border-b mt-[1.5rem] flex justify-between pb-[1.3rem] ">
          <p className="text-customGray text-[1.6rem] ">Location</p>
          <p className="text-[1.6rem] font-semibold">United States</p>
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

        <Link to={"#"} className="text-white block text-center w-full mt-[2rem] font-semibold bg-primary py-[1rem]  px-[3rem] rounded-lg cursor-pointer hover:bg-white hover:text-primary border border-primary transition-all duration-300 ">
          Visit Us
        </Link>
      </div>
    </div>
  )
}

export default EmployerAside
