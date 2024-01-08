import React from "react";
import { FaStar } from "react-icons/fa";

function Comment() {
  return (
    <div className="py-[4rem] border-b  ">
      <div className="flex justify-between">
        <div className="flex gap-[2rem] ">
          <img
            className="w-[6rem] h-[6rem] "
            src="../public/images/employers_example.png"
            alt="Imagen Empresa"
          />
          <div>
            <h4 className="text-[1.8rem] font-bold">Employer</h4>
            <span className="text-customGray text-[1.4rem] ">June 7, 2023</span>
          </div>
        </div>

        <div className="flex gap-[.2rem] ">
          <FaStar color="yellow" size={17} />
          <FaStar color="yellow" size={17} />
          <FaStar color="yellow" size={17} />
          <FaStar color="yellow" size={17} />
          <FaStar color="yellow" size={17} />
        </div>
      </div>

      <p className="text-[1.6rem] mt-[2rem]  text-customGray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio molestias optio maxime perspiciatis accusamus reprehenderit saepe ea deserunt, expedita sunt iusto recusandae quae omnis necessitatibus! Facilis voluptatum atque veritatis pariatur!</p>
    </div>
  );
}

export default Comment;
