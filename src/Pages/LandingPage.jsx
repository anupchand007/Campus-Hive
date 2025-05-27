import React from "react";
import { Navbar, Footer, FeatureCard } from "../Components/Index";
import {Art,Notes,Forum,Notice,Calendar,Dashboard,Enroll,} from  "../assets/icons/index"
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <div className=" bg-blue-900 pt-5 pr-5 pl-5 sm:pt-12 sm:pr-12 sm:pl-12 ">
        <div className=" bg-sky-600 rounded-t-2xl ">
          <Navbar />
          <div className="w-full flex justify-center px-5 sm:px-20">
            {" "}
            <div className="border-b-2 border-b-gray-600 w-full"></div>
          </div>
          <div className="sm:flex sm:gap-6">
            <div className="flex gap-8 justify-evenly ">
              <img
                className="w-100 sm:w-200 sm:ml-10 hover:scale-110 transition-all duration-150 ease-in-out"
                src={Art}
                alt="teacher"
              />
            </div>
            <div className="p-5 sm:p-20 flex-row justify-center sm:w-2/3  ">
              <div className="landing text-4xl sm:text-6xl  font-bold text-amber-300  ">
                Streamline Your Campus Experience
              </div>
              <p className="landing mt-5 text-xsl sm:text-2xl font-Poppins text-white sm:h-1/2 sm:flex sm:justify-center sm:items-center  ">
                CampusHive is your campus community’s digital space a simple,
                clean, and interactive platform where students, teachers, and
                clubs can stay connected.
                <br />
                Whether it’s about upcoming events, important notices, or fun
                activities happening around your college, CampusHive keeps
                everything in one place.
                <br />
              </p>
              <Link
                to="/feature"
                className="links bg-amber-400 p-3 mt-3 flex 
                justify-center rounded-full border-none font-semibold text-white 
                mr-30 sm:ml-75 sm:mr-120 hover:scale-105 xl: hover:bg-black transition-all duration-300 text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-gray-300 pr-5 pl-5 sm:pr-12 sm:pl-12 ">
        <div className="py-5 bg-white">
          <div>
            <span className="links pt-5  bg-white flex justify-center items-center sm:text-6xl  font-bold p-5  text-2xl ">
              Features of our Site
            </span>
            <div className="w-full flex justify-center px-5 sm:px-20 bg-white pt-5">
              {" "}
              <div className="border-b-2 border-b-gray-200 w-full"></div>
            </div>

            {/* Button Area */}

            <div className=" grid grid-cols-1  bg-white p-5 sm:grid-cols-3  px-10">
              <FeatureCard
                srcs={Notes}
                title="Study Materail"
                desc="Upload and Download notes, assignments, and resources."
                to=""
              />

              <FeatureCard
                srcs={Forum}
                title="Discussion Forum"
                desc="Paticipate in topic based discussion with peers and faculty."
              />

              <FeatureCard
                srcs={Notice}
                title="Announcements & Notices"
                desc="Stay informed with the latest campus news and updates."
              />

              <FeatureCard
                srcs={Calendar}
                title="Event Calendar"
                desc="Keep track of upcoming academic events and important dates."
              />

              <FeatureCard
                srcs={Dashboard}
                title="Dashboard"
                desc="Get you own personal Dashboard, helps to track your progress."
              />

              <FeatureCard
                srcs={Enroll}
                title="Enrolls in Subjects"
                desc="Enroll in various subjects that you have interest on and get Knowledge"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
