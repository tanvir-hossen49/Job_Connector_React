import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="flex flex-col justify-between items-center lg:flex-row gap-10 my-container bg-[#faf8ff]">
      <div className="flex-1 ">
        <h1 className="text-5xl leading-normal">
          One Step Closer To Your{" "}
          <span className="text-gradient">Dream Job</span>
        </h1>
        <p className="font-medium text-lg mt-6 mb-10">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <div>
          <Link to="/" className="px-5 py-3 btn-gradient text-xl">
            Get Started
          </Link>
        </div>
      </div>
      <div className="flex-1 text-right">
        <img src="man.png" alt="hero img" />
      </div>
    </section>
  );
};

export default HeroSection;
