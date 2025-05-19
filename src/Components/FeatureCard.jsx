import React from "react";
import { Link } from "react-router-dom";

const FeatureCard = ({ srcs, title, desc, to }) => {
  return (
    <div>
      <div className=" flex justify-center items-center bg-dark-300   h-55  p-15">
        <Link to={to}>
          <div className="border-none  rounded-2xl bg-gray-200 w-full flex gap-3  px-1.5 py-1.5 hover:scale-110 transition-all duration-75 ease-in-out ">
            <figure className="flex-shrink-1">
              <img src={srcs} alt="" width={250} className="object-center " />
            </figure>
            <div className="flex-col items-center p-2 gap-2">
              <h2 className="font-bold text-2xl flex justify-start">{title}</h2>
              <p className="text-gray-600 text-xl text-wrap">{desc}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;
