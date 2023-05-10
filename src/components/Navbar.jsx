import React, {useState} from 'react'
import {FaBars,FaTimes,FaGithub,FaLinkedin} from 'react-icons/fa'   //FaBars, FaTimes, FaGithub, FaLinkedin are icons that we are able to access thanks to the fact we installed the 'react-icons' npm package. Because of that we have access to the 'fa' subdirectory, which is Font Awesome
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logerino from '../assets/logo1.png'      //import our logo for initials from the logo1.png file
// ES6 Imports

import { Link} from 'react-scroll'

const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className = "fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
        <div>
            <img src= {Logerino} alt="Logo Image" style = {{width:'50px'}}/>
        </div>

        {/* Menu, added in Link from smooth scroll npm docs  */}
        {/* The names we set up for the 'to' property in the 'Link' component is to match what we used inside the component. So, for example, we use a 'name' property of 'home' in our Home component. 
        If we set the 'to' property to 'home' it will match and help us smooth scroll to the Home component portion on the webpage */}
        <ul className = 'hidden md:flex'>
            <li>
                <Link to="home"  smooth={true}  duration={500}>
                    Home
                </Link>
            </li>
            <li>
                <Link to="about"  smooth={true}  duration={500}>
                    About
                </Link>
            </li>
            <li>
                <Link to="skills"  smooth={true}  duration={500}>
                   Skills 
                </Link>
            </li>
            <li>
                <Link to="work"  smooth={true}  duration={500}>
                    Work
                </Link>
            </li>
            <li>
                <Link to="contact"  smooth={true}  duration={500}>
                    contact
                </Link>
            </li>
        </ul>
        
        {/* Hamburger Menu*/}
        {/*Once the screen pixels exceed medium(768 pixels), the hamburger menu will be hidden */}
        {/*You want to use z-10 so that way we have the 'FaBars' logo to appear on the top level. So that way when our mobile menu shows, we will still be able to see the hamburger 'FaBars' logo and it won't be hidden behind.*/}
        <div onClick = {handleClick} className = 'md:hidden z-10'>
           {!nav ? <FaBars/> : <FaTimes />}
        </div>

        {/* Mobile Menu, once again, React Smooth Scroll is being used*/}
       <ul className = {!nav ? 'hidden' :'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>        {/*The 'hidden' className is used to hide an element from the user interface without removing it from the HTML document.  */}
            <li className = 'py-6 text-4xl'>
                <Link to="home"  smooth={true}  duration={500}>
                    Home
                </Link>  
            </li>
            <li className = 'py-6 text-4xl'>
                <Link to="about"  smooth={true}  duration={500}>
                    About
                </Link>
            </li>
            <li className = 'py-6 text-4xl'>
                Skills
            </li>
            <li className = 'py-6 text-4xl'>
                Work
            </li>
            <li className = 'py-6 text-4xl'>
                Contact
            </li>
        </ul>


        {/* social Icons */}
        {/* We set up the icons to be hidden until we reach the large breakpoint/media query, which is 1024 pixels. The icons won't show when the screen is less than 1024 pixels horizontally  */}
        <div className = 'hidden lg:flex flex fixed flex-col top-[35%] left-0'>
        {/* Set up an unordered list of of social icons */}
        <ul> 
            <li className = 'w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                <a className = 'flex justify-between items-center w-full text-gray-300'  target="_blank" href="https://www.linkedin.com/in/nick-castagnaro-6ba511178/">
        {/* The 'size' prop is a common prop used in React icon libraries such as 'react-icons', and it specifies the size of the icon to be rendered */}
        {/* Depending on the specific library, the size value can be provided in different units such as pizels, em or rem. In this case, it uses pixels as the unit of measurement */}
                    Linkedin <FaLinkedin size = {30}/> 
                </a>
            </li>
            <li className = 'w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#047857]'>
                <a className = 'flex justify-between items-center w-full text-gray-300' href="/">
                    Github <FaGithub size = {30}/>    
                </a>
            </li>
            <li className = 'w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6d28d9]'>
                <a className = 'flex justify-between items-center w-full text-gray-300' href="/">
                    Mail <HiOutlineMail size = {30}/>    
                </a>
            </li>
            <li className = 'w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#4338ca]'>
                <a className = 'flex justify-between items-center w-full text-gray-300' href="/">
                    Resume <BsFillPersonLinesFill size = {30}/>    
                </a>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar