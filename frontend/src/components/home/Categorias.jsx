import React, { useEffect } from "react";
import Categoria from "./Categoria";
import { Link } from "react-router-dom";
import useJobtex from "../../hooks/useJobtex";

function Categorias() {

  const {categories} = useJobtex();

  return (
    <div className="contenedor mt-[5rem] ">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="mb-0 font-bold">Browse By Category</h2>
          <p className="text-customGray">
            Recruitment Made Easy in 100 seconds
          </p>
        </div>
        <Link className="font-semibold  flex gap-[2rem] items-center " to={"#"}>All Categories <img className="w-[3rem] h-[3rem] " src="../public/icons/icon_flecha.png" alt="Icono Flecha" /> </Link>
      </div>

      <div className="grid  mt-[5rem] grid-cols-5 gap-[2rem]">
        {categories.map(categorie => {
          return <Categoria key={categorie._id} categoria={categorie} />
        })}

      </div>
    </div>
  );
}

export default Categorias;
