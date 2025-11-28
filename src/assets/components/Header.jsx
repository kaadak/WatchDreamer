import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='p-6 bg-green-900 text-center'>
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
