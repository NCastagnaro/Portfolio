import React, {useState} from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'   //FaBars and FaTimes are icons that we are able to access thanks to the fact we installed the 'react-icons' npm package. Because of that we have access to the 'fa' subdirectory, which is Font Awesome
import Logerino from '../assets/logo1.png'      //import our logo for initials from the logo1.png file


const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className = "fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
        <div>
            <img src= {Logerino} alt="Logo Image" style = {{width:'50px'}}/>
        </div>

        {/* Menu */}
        <ul className = 'hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
        </ul>
        

        {/* Hamburger Menu*/}
        {/*Once the screen pixels exceed medium(768 pixels), the hamburger menu will be hidden */}
        {/*You want to use z-10 so that way we have the 'FaBars' logo to appear on the top level. So that way when our mobile menu shows, we will still be able to see the hamburger 'FaBars' logo and it won't be hidden behind.*/}
        <div onClick = {handleClick} className = 'md:hidden z-10'>
            <FaBars/>
        </div>

        {/* Mobile Menu */}
       <ul className = {!nav ? 'hidden' :'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>        {/*The 'hidden' className is used to hide an element from the user interface without removing it from the HTML document.  */}
            <li className = 'py-6 text-4xl'>Home</li>
            <li className = 'py-6 text-4xl'>About</li>
            <li className = 'py-6 text-4xl'>Skills</li>
            <li className = 'py-6 text-4xl'>Work</li>
            <li className = 'py-6 text-4xl'>Contact</li>
        </ul>


        {/* social Icons */}
        <div className = 'hidden'></div>
    </div>
  )
}

export default Navbar