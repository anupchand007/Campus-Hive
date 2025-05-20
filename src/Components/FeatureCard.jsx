import React from "react";
import { Link } from "react-router-dom";

const FeatureCard = ({ srcs, title, desc, to }) => {
  return (
    <Link to={to} className="block w-full">
      <article className="bg-gray-300 m-3 p-4 rounded-2xl hover:scale-105 transition-all duration-200 ease-in-out">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          {/* Image container with responsive sizing */}
          <figure className="flex justify-center w-full md:w-1/3 lg:w-1/4">
            <img 
              src={srcs} 
              alt={title} 
              className="w-full h-auto object-contain max-h-[200px] md:max-h-[250px]"
            />
          </figure>

          {/* Content container */}
          <div className="flex flex-col flex-grow space-y-2 md:space-y-4">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
              {title}
            </h2>
            <p className="text-gray-600 text-base md:text-lg lg:text-xl">
              {desc}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default FeatureCard;
