import React from "react";
import Navbar from "../Components/Navbar";
import Body from "../Components/Body";
import Footer from "../Components/Footer";
import art from "../assets/Art.svg";

const LandingPage = () => {
  return (
    <div>
      <div className="h-160 bg-blue-900 pt-12 pr-12 pl-12 ">
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
      <Body />
      <Footer />
    </div>
  );
};

export default LandingPage;
