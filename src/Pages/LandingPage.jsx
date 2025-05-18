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
      <div className="h-170 bg-blue-900 pt-12 pr-12 pl-12">
        <div className=" bg-sky-600 rounded-t-2xl">
          <Navbar />

          <div className="rounded-2xl h-150 flex gap-8 justify-evenly">
            <img
              className="ml-20 hover:scale-110 transition duration-200 ease-in-out"
              src={art}
              alt="teacher"
              width={600}
            />
            <div className=" p-10  w-2/3 ">
              <div className="text-6xl font-bold w-2/3 justify-center items-center p-5 ml-15 text-amber-300">
                Streamline Your Campus Experience
              </div>
              <p className=" landing w-2/3 mt-5 ml-15 text-2xl font-Poppins text-white">
                CampusHive is your campus community’s digital space a simple,
                clean, and interactive platform where students, teachers, and
                clubs can stay connected. Whether it’s about upcoming events,
                important notices, or fun activities happening around your
                college, CampusHive keeps everything in one place.
                <br />
              </p>
              <button className="links border-none mt-5 p-2 rounded-2xl bg-amber-400 ml-75 cursor-pointer">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-gray-300 pl-12 pr-12 border-zinc-700">
        <div>
          <h1
            className="links  bg-white flex justify-center items-center text-7xl
        font-extrabold p-10  border-t-amber-500"
          >
            Features of our Site
          </h1>

          {/* Button Area */}
          <div className="grid grid-cols-3 grid-rows-2 bg-white h-full ">
            <Link to="/">
              <FeatureCard
              srcs={notes}
              title="Study Materail"
              desc="Upload and Download notes, assignments, and resources."
            />
            </Link>

            <Link to="/"><FeatureCard
              srcs={forum}
              title="Discussion Forum"
              desc="Paticipate in topic based discussion with peers and faculty."
            /></Link>

            <Link to="/"><FeatureCard
              srcs={notice}
              title="Announcements & Notices"
              desc="Stay informed with the latest campus news and updates."
            /></Link>

            <Link to="/"><FeatureCard
              srcs={calendar}
              title="Event Calendar"
              desc="Keep track of upcoming academic events and important dates."
            /></Link>

            <Link to="/"><FeatureCard
              srcs={notes}
              title="Dashboard"
              desc="Get you own personal Dashboard, which helps to track your progress."
            /></Link>

            <Link><FeatureCard
              srcs={notes}
              title="Enrolls in Different Subjects"
              desc="Upload and Download notes, assignments, and resources"
            /></Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
