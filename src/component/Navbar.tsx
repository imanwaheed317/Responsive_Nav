'use client'
import React, { useState } from 'react' 

const Navbar = () => {

const [isClick, setisClick] = useState(false)

const toggleNavbar = () => {
  setisClick(!isClick)
};
  return (
  <>
  <nav className='bg-gradient-to-tr from-teal-700 to-purple-500'>
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='flex items-center justify-between h-16'>
        <div className='flex items-center'>
          <a href='#' className='text-3xl font-bold text-white'>IMAN WAHEED</a>
       
      </div>
      <div className='hidden md:block'>
        <div className='text-2xl ml-3 flex items-center space-x-8'>
          <a href="/" className='text-white hover:bg-white hover:text-black rounded-lg'>
          Home</a>
          <a href="/" className='text-white hover:bg-white hover:text-black rounded-lg'>
          About</a>
          <a href="/" className='text-white hover:bg-white hover:text-black rounded-lg'>
          Services</a>
          <a href="/" className='text-white hover:bg-white hover:text-black rounded-lg'>
          Contact</a>
        </div>
      </div>
      <div className='md:hidden flex items-center'>
      <button 
      className='inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
        onClick={toggleNavbar}>
         {isClick ? (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
) : (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
)}

        </button>
      </div>
    </div>
    {isClick && (
  <div className="md:hidden">
    <div className="space-y-2 text-center text-2xl text-white">
      <a href="/" className="block hover:bg-gray-700 py-2">
        Home
      </a>
      <a href="/" className="block hover:bg-gray-700 py-2">
        About
      </a>
      <a href="/" className="block hover:bg-gray-700 py-2">
        Services
      </a>
      <a href="/" className="block hover:bg-gray-700 py-2">
        Contact
      </a>
    </div>
  </div>
)}
    </div>
  </nav>
  </>
  )
}

export default Navbar
