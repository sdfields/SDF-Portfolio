import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/newsflogo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="SF Logo" style={{ width: "80px" }} />
      </div>

      {/* Main Menu */}
      <ul className="hidden md:flex">
        {/*Home Button*/}
        <li>
          <Link to="home" smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
        {/*About Me Button*/}
        <li>
          <Link to="about" smooth={true} offset={50} duration={500}>
            About Me
          </Link>
        </li>
        {/*Skills Button*/}
        <li>
          <Link to="skills" smooth={true} offset={50} duration={500}>
            Skills
          </Link>
        </li>
        {/*Experience Button*/}
        <li>
          <Link to="experience" smooth={true} offset={50} duration={500}>
            Experience
          </Link>
        </li>
        {/*Contact Button*/}
        <li>
          <Link to="contact" smooth={true} offset={50} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Dropdown */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Phone/Tablet Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        {/*Home Button*/}
        <li className="py-6 text-4xl">          
            <Link onClick={handleClick} to="home" smooth={true} offset={50} duration={500}>
            Home
            </Link></li>
        {/*About Me Button*/}
        <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="about" smooth={true} offset={50} duration={500}>
            About Me
            </Link>
        </li>
        {/*Skills Button*/}
        <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="skills" smooth={true} offset={50} duration={500}>
            Skills
            </Link>
        </li>
        {/*Experience Button*/}
        <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="experience" smooth={true} offset={50} duration={500}>
            Experience
            </Link>
        </li>
        {/*Contact Button*/}
        <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="contact" smooth={true} offset={50} duration={500}>
            Contact
            </Link>
        </li>
      </ul>
      {/* Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-yellow-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:spencerdfields@gmail.com"
            >
              Email <HiOutlineMail size={25} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#171515]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/sdfields" target ="_blank" rel="noreferrer"
            >
              GitHub <FaGithub size={25} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/spencerdfields/" target ="_blank" rel="noreferrer"
            >
              LinkedIn <FaLinkedin size={25} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#34a853]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={25} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
