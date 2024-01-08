import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function FormularioReview() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className="p-[4rem] mt-[4rem] border rounded-xl ">
      <h3 className="font-bold">Add a Review</h3>
      <form className="">
        <div className="flex items-center">
          <label className="text-[1.4rem] mr-[2rem] " htmlFor="">
            Your Rating
          </label>
          <>
            {[...Array(5)].map((star, index) => {
              const currentRating = index + 1;

              return (
                <label className="cursor-pointer">
                  <input
                    className="hidden"
                    onClick={() => setRating(currentRating)}
                    type="radio"
                    value={currentRating}
                  />
                  <FaStar
                  
                    color={
                      currentRating <= (hover || rating) ? "yellow" : "#e5e5e5"
                    }
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(null)}
                    key={index}
                    size={35}
                  />
                </label>
              );
            })}
          </>
        </div>
        <div className="mt-[2rem] flex flex-col ">
          <label className="text-[1.4rem] mb-[1rem]  mr-[2rem] " htmlFor="comment">
            Your Comment
          </label>
          <textarea className="bg-slate-100 border p-[2rem] " placeholder="Comment" id="comment" cols="30" rows="5"></textarea>
        </div>
        <input className="text-white mt-[2rem] font-semibold bg-primary py-[1rem]  px-[3rem] rounded-lg cursor-pointer hover:bg-white hover:text-primary border border-primary transition-all duration-300 " type="submit" value={"Send Review"} />
      </form>
    </div>
  );
}

export default FormularioReview;
