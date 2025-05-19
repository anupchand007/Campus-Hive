import React from "react";
import { Link } from "react-router-dom";

const FeatureCard = ({ srcs, title, desc, to }) => {
  return (

    <>
    <Link to ={to}>
    <div
    className="border w-3/4  m-4 p-2 gap-2 h-70 rounded-2xl sm:flex"
    >
          <figure className=" flex justify-center ">
            <img src={srcs} alt=""  className="w-15 sm:50"  />
          </figure>
          <div className="w-full">
              <h2 className="links text-4xl font-bold flex justify-center">{title}</h2>
              <div className="text-gray-400 flex text-wrap">{desc}</div>
          </div>
    </div>
    </Link>
    </>

    // <div>
    //   <div className=" flex justify-center items-center bg-dark-300 p-2 border">
    //     <Link to={to}>
    //       <div
    //         className="rounded-2xl bg-gray-200 gap-3  px-1.5 py-1.5 hover:scale-110 transition-all duration-75 ease-in-out border" 
    //       >
    //         <figure className=" flex justify-center items-center ">
    //           <img src={srcs} alt="" className="w-30 sm:w-40" />
    //         </figure>
    //         <div className="border sm:h-35  ">
    //           {/* flex-col items-center p-2 gap-2 */}
    //           <h2 className="links  w-full h-20 text-2xl flex flex-wrap font-bold sm:h-fit">{title}</h2>
    //           <p className="text-gray-600 text-xl text-wrap h-56 flex justify-center items-center sm:h-fit">{desc}</p>
    //         </div>
    //       </div>
    //     </Link>
    //   </div>
    // </div>

// <div className=" flex justify-center items-center bg-dark-300 p-2 border">
//       <Link to={to}>
//         <div
//           className="border w-3/4 m-4 p-2  gap-3 h-70 rounded-2xl 
//           sm:h-1/2 sm:w-1/4 sm:flex "
//         >
//           <figure className=" flex justify-center ">
//             <img src={srcs} alt="" className="w-15" />
//           </figure>
//           <div className=" w-full ">
//             <h2 className="links  text-4xl font-bold flex justify-center">
//               {title}
//             </h2>
//             <div className="text-gray-400  flex text-wrap">
//               {desc}
//             </div>
//           </div>
//         </div>
//       </Link>
//       </div>
  );
};

export default FeatureCard;


