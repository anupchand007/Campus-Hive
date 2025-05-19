import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import art from "../assets/Art.svg";
import notes from "../assets/DocumentAdd.svg";
import forum from "../assets/ChatLine.svg";
import notice from "../assets/Bell.svg";
import calendar from "../assets/CalendarDate.svg";
import FeatureCard from "../Components/FeatureCard";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <div
        className=" bg-blue-900 pt-5 pr-5 pl-5 
      md:pt-12 md:pr-12 md:p-12 "
      >
        <div className=" bg-sky-600 rounded-t-2xl ">
          <Navbar />

          <div className="sm:flex sm:gap-6 border-t-2 ">
            <div className="flex gap-8 justify-evenly ">
              <img
                className="w-100 sm:w-200 sm:ml-10 hover:scale-110 transition-all duration-150 ease-in-out"
                src={art}
                alt="teacher"
              />
            </div>
            <div className="p-5 sm:p-10 flex-row justify-center sm:w-2/3">
              <div className=" text-4xl sm:text-6xl  font-bold text-amber-300">
                Streamline Your Campus Experience
              </div>
              <p className="landing mt-5 text-xsl sm:text-2xl font-Poppins text-white">
                CampusHive is your campus community’s digital space a simple,
                clean, and interactive platform where students, teachers, and
                clubs can stay connected.
                <br />
                Whether it’s about upcoming events, important notices, or fun
                activities happening around your college, CampusHive keeps
                everything in one place.
                <br />
              </p>
              <Link>
                <button className="links bg-amber-400 p-3 mt-3 flex  rounded-2xl border-none font-semibold text-white sm:ml-75">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className=" bg-gray-300 pt-5 pr-5 pl-5 
      md:pt-12 md:pr-12 md:p-12  "
      >
        <div>
          <span
            className="links  bg-white flex justify-center items-center md:text-7xl
        font-extrabold p-10  border-t-amber-500 text-4xl "
          >
            Features of our Site
          </span>

          {/* Button Area */}

          <div className=" grid grid-cols-1  bg-white p-5 sm:grid-cols-3">
            <FeatureCard
              srcs={notes}
              title="Study Materail"
              desc="Upload and Download notes, assignments, and resources."
              to=""
            />

            <FeatureCard
              srcs={forum}
              title="Discussion Forum"
              desc="Paticipate in topic based discussion with peers and faculty."
            />

            <FeatureCard
              srcs={notice}
              title="Announcements & Notices"
              desc="Stay informed with the latest campus news and updates."
            />

            <FeatureCard
              srcs={calendar}
              title="Event Calendar"
              desc="Keep track of upcoming academic events and important dates."
            />

            <FeatureCard
              srcs={notes}
              title="Dashboard"
              desc="Get you own personal Dashboard, helps to track your progress."
            />

            <FeatureCard
              srcs={notes}
              title="Enrolls in Subjects"
              desc="Enroll in various subjects that you have interest on and get Knowledge"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
