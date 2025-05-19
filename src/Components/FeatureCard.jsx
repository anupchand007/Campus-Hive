import React from "react";
import { Link } from "react-router-dom";

const FeatureCard = ({ srcs, title, desc, to }) => {
  return (
    <>
    <Link to ={to}>
    <div
    className=" bg-gray-300  m-4 p-2 gap-2 h-55 rounded-2xl sm:flex sm:w-3/4 sm:gap-3 hover:scale-110 transition-all duration-75 ease-in-out
    "
    >
          <figure className=" flex justify-center h-4/12  sm:w-40 sm:h-full">
            <img src={srcs} alt="" />
          </figure>
          <div className="w-full  sm:flex-col sm:justify-center sm:items-center sm:p-5">
              <h2 className="links flex justify-start  items-center  text-3xl sm:text-4xl font-bold p-1">{title}</h2>
              <div className="text-gray-600 flex text-wrap sm:text-xl">{desc}</div>
          </div>
    </div>
    </Link>
    </>
  );
};

export default FeatureCard;
