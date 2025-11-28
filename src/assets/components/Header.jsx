import React from 'react'
import { Link } from 'react-router-dom'
import logo from './../images/logo.jpg'

const Header = () => {
  return (
    <div className=' container mx-auto p-6 bg-green-900 flex justify-between'>
        <div className='flex gap-3'>
          <img src={logo} alt="" className='w-10 h-auto'/>
          <h3 className='font-bold text-white'>WATCHDREAMER</h3>
        </div>
        <nav className='containter px-4 flex gap-4 text-white'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/service">Service</Link>
        <Link to="/contact">Contact</Link>
        </nav>
    </div>
  )
}

export default Header
