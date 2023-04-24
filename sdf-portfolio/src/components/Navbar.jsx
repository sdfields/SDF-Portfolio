import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/sflogo.png'


const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src = {Logo} alt="SF Logo" style ={ {width: '65px'} }/>
        </div>

        {/* Main Menu */}
        <div>
            <ul>
                <li>Home</li>
                <li>About Me</li>
                <li>Skills</li>
                <li>Resume</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar