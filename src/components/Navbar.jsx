import React from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'   //FaBars and FaTimes are icons that we are able to access thanks to the fact we installed the 'react-icons' npm package. Because of that we have access to the 'fa' subdirectory, which is Font Awesome
import Logerino from '../assets/logo1.png'      //import our logo for initials from the logo1.png file

const Navbar = () => {
  return (
    <div className = "fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
        <div>
            <img src= {Logerino} alt="Logo Image" style = {{width:'50px'}}/>
        </div>

        {/* Menu */}
        <div >
            <ul className = 'flex'>
                <li >Home</li>
                <li >About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </div>

        {/* Hamburger */}
        <div className = 'hidden'>
            <FaBars/>
        </div>

        {/* Mobile Menu */}
       <ul className = 'hidden'>        {/*The 'hidden' className is used to hide an element from the user interface without removing it from the HTML document.  */}
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
        </ul>


        {/* social Icons */}
        <div></div>


    </div>
  )
}

export default Navbar