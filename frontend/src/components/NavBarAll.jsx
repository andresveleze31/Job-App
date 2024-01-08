import React from 'react'
import { Link } from "react-router-dom";


function NavBarAll() {
  return (
    <div>
      <div className=" border-b border-slate-100 border-opacity-15 py-[2rem]">
      <div className="contenedor flex items-center  justify-between">
        <div className="flex gap-[4rem] items-center ">
          <img  src="../../public/images/logo_black.svg" alt="Logo Jobtex" />
          <button className="flex gap-[1rem]  ">
            <img
              className="w-[2.2rem] filter invert "
              src="../public/icons/icon_categoria_white.png"
              alt="Icono Categorias"
            />{" "}
            Categories
          </button>
        </div>
        <nav className="flex gap-[2rem]">
          <Link to={"/"} className=" hover:underline transition-all duration-300 ease-in-out">
            Home
          </Link>
          <Link to={"/jobs"} className=" hover:underline transition-all duration-300 ease-in-out">
            Find Jobs
          </Link>
          <Link to={"/employers"} className=" hover:underline transition-all duration-300 ease-in-out">
            Employers
          </Link>
          <Link to={"/candidates"} className=" hover:underline transition-all duration-300 ease-in-out">
            Candidates
          </Link>
        </nav>
        <div className="flex gap-[2rem] items-center">
          <img
            className="w-[3rem] filter invert "
            src="../../public/icons/icon_notificacion_white.png"
            alt="Icon Notification"
          />
          <button className="flex font-semibold gap-[1rem] text-[1.4rem] ">
            <img
              className="w-[2.5rem] filter invert"
              src="../public/icons/icon_user_white.png"
              alt="Icono Usuario"
            />
            Login / Register
          </button>
          <button className=" font-semibold border border-primary py-[1rem] px-[4rem] hover:bg-primary transition-all duration-300 rounded-lg hover:text-white ">
            Post Job
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default NavBarAll
