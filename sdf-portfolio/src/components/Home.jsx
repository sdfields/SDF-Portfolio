import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/*Main Container*/}
      <div className="max-w-[1000px] h-full mx-auto px-8 flex flex-col justify-center">
        <p className="text-[#ccd6f6]">Hello! My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#c1ff72]">
          Spencer Fields
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#ffde59]">
          I am interested in Business, Law, and Technology
        </h2>
        <p className="py-4 max-w-[700px] text-[#ccd6f6]">
          I have a BS in Business Administration from the Sam Walton College of
          Business with majors in Organizational Leadership and Supply Chain
          Management and a minor in Marketing. I am currently studying to become
          a full-stack developer throught the Coding Boot Camp at UT Austin.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#c1ff72] hover:text-black">
            My Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
