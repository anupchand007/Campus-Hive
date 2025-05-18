import React from "react";

const FeatureCard = ({ srcs, title, desc }) => {
  return (
    <div>
      <div className="flex justify-center items-center bg-dark-300   h-55">
        <div className="border-none  rounded-2xl bg-gray-200 w-112 flex gap-3 hover:cursor-pointer px-1.5 py-1.5 ">
          <div>
            <img
              src={srcs}
              alt=""
              width={250}
              className=" flex justify-center items-center "
            />
          </div>
          <div className="justify-center items-center p-2">
            <h2 className="font-bold text-2xl flex justify-start">{title}</h2>
            <p className="text-gray-600 text-xl text-wrap">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
