import React from "react";
import Notepad from "../assets/cartoon-notepad.jpg";

const Work = () => {
  return (
    <div
      name="experience"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        {/*Experience Header Container*/}
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#c1ff72]">
            Experience
          </p>
          <p className="py-6">Here is a showcase of some of my work:</p>
        </div>

        {/*Main Container*/}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/*Grid Item 1*/}
          <div
            style={{ backgroundImage: `url(${Notepad})` }}
            className="shadow-lg shadow-gray-700 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover 1*/}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                PWA Text Editor
              </span>
              <div className="pt-8 text-center">
                <a href="https://jate-sdf.herokuapp.com/" target ="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    View
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*Grid Item 2*/}
          <div
            style={{ backgroundImage: `url(${Notepad})` }}
            className="shadow-lg shadow-gray-700 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover 2*/}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Regex Tutorial for Email
              </span>
              <div className="pt-8 text-center">
                <a href="https://gist.github.com/sdfields/2d26067b9ad4766365c7421a9806bbc7" target ="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    View
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*Grid Item 3*/}
          <div
            style={{ backgroundImage: `url(${Notepad})` }}
            className="shadow-lg shadow-gray-700 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover 3*/}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                CLI Employee Tracker
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/sdfields/Employee-Tracker" target ="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    View
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
