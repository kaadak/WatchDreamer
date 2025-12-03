import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './../images/logo.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";


const Header = () => {

  const[show, setShow] = useState(false)

  return (
    <div  className='left-0 right-0 fixed top-0 z-50 w-full bg-primary'>
      <div className=' bg-primary backdrop-blur-md text-md  container font-display  mx-auto p-4 items-center  flex justify-between'>


      {/* logo */}


        <div className='flex gap-3 items-center'>
          <img src={logo} alt="" className='w-15 h-auto'/>
          <h3 className='font-bold text-lg text-secondary'>WATCHDREAMER</h3>
        </div>

        {/* Nav */}
        <nav className='containter px-4 md:flex gap-4 hidden text-white'>
        <Link to="/" className='hover:text-secondary group relative'>Home 
        <span className='w-0 absolute group-hover:w-full left-0 bottom-0 transform duration-300 h-0.5 bg-white '></span></Link>
        
        <Link to="/about" className='hover:text-secondary group relative'>About
        <span className='w-0 absolute group-hover:w-full left-0 bottom-0 transform duration-300 h-0.5 bg-white '></span></Link>
        <Link to="/service" className='hover:text-secondary group relative'>Service
        <span className='w-0 absolute group-hover:w-full left-0 bottom-0 transform duration-300 h-0.5 bg-white '></span></Link>
        <Link to="/contact" className='hover:text-secondary group relative'>Contact
        <span className='w-0 absolute group-hover:w-full left-0 bottom-0 transform duration-300 h-0.5 bg-white '></span></Link>
        </nav>

        {/* hamburger */}
        
        
        {show ? <button onClick={() => setShow(!show)} className='text-white text-lg md:hidden'><MdOutlineCancel /></button>  : <button onClick={() => setShow(!show)} className='text-white text-lg md:hidden'><RxHamburgerMenu /></button> }
        
    </div>


    {show && (
      <div className='fixed font-display z-50 top-0 left-0 bottom-0 p-4 bg-primary w-[50%]'>
      <div className='flex gap-3 items-center'>
          <img src={logo} alt="" className='w-15 h-auto'/>
          <h3 className='font-bold text-lg text-secondary'>WATCHDREAMER</h3>
        </div>

        <nav className='containter py-8 relative gap-8 mt-5 text-md  text-left   flex flex-col w-full text-white'>
        <Link to="/" className='w-full group   relative  border-white'>Home
        <span className='absolute bottom-0 w-0 group-hover:w-full  hover:w-full left-0 transform duration-200 bg-secondary h-0.5'></span></Link>
        <Link to="/about" className='w-full group   relative  border-white'>About
        <span className='absolute bottom-0 w-0 group-hover:w-full  hover:w-full left-0 transform duration-200 bg-secondary h-0.5'></span></Link>
        <Link to="/service" className='w-full group  relative  border-white'>Service
        <span className='absolute bottom-0 w-0 group-hover:w-full  hover:w-full left-0 transform duration-200 bg-white  h-0.5'></span></Link>
        <Link to="/contact" className='w-full group  relative  border-white'>Contact
        <span className='absolute bottom-0 w-0 group-hover:w-full  hover:w-full left-0 transform duration-200 bg-white h-0.5'></span></Link>
        </nav>
    </div>
    )}

    </div>
  )
}

export default Header
