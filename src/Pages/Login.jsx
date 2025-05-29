import { Link } from "react-router-dom";
import { CampusHive } from "../assets/icons/index";
import React from "react";
import { Email } from "lucide-react";

const Login = () => {
  return (
    <>
      <div className="h-screen bg-gray-200 flex justify-center w-full">
        <div className="h-full w-3/4  md:w-2/5 flex flex-col items-center">
          <div className=" flex flex-col my-4 h-1/5 md:h-3/12 justify-evenly ">
            <img src={CampusHive} alt="" className="h-1/3 md:h-4/12" />
            <h2 className="links text-center text-xl">Sign in to CampusHive</h2>
            <p className="links text-center text-xl">Or </p>
            <Link className="links text-center text-blue-600 font-bold text-xl sm:cursor-pointer">
              create a new account
            </Link>
          </div>

          <div className="border h-4/6 rounded-xl w-full md:w-2/3 mt-5 md:mt-0 p-5 flex flex-col ">
            <div className="border h-10/12">
            <form action="">
              <label htmlFor="EmailAddress">Email Address</label>
              <input type="email" name="EmailAddress" id="EmailAddress" placeholder="you@examples.com" className="links"/>
              <label htmlFor="Password">Password</label>
            </form>
            </div>
            <div className="border w-full ">
              <Link className="w-2/5"></Link>
              <Link className="w-2/5"></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
