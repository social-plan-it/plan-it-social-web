import React, { useState } from 'react';

const TopNav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-start items-center max-w-screen-2xl mx-auto">
        <div className="text-white text-xl font-semibold flex justify-between items-center py-4 w-full">
          <a href="/"><img  className="w-1/3" src="https://res.cloudinary.com/dxctpvd8v/image/upload/v1683267003/SocialPlanIt/SocialPlan-it-logo-Horizontal_xwm3xt.png" alt="Social Plan It horizontal logo" /></a>
          <div className="hidden md:flex justify-between w-3/4 py-4" >
          <ul className='flex'>
            <a href="/"><li className='text-2xl py-1 hover:py-0'>Home</li></a>
            <a href="/about"><li className='ml-4 text-2xl py-1 hover:py-0'>About</li></a>
            <a href="/events"><li className='ml-4 text-2xl py-1 hover:py-0'>Events</li></a>
            <a href="/groups"><li className='ml-4 text-2xl py-1 hover:py-0'>Groups</li></a>
          </ul>
          <ul className='flex'>
            <a href="/signin"><li className='text-2xl py-1 hover:py-0'>Sign in</li></a>
            <a href="/signup"><li className='ml-4 bg-secondary text-primary rounded-full px-2 py-1 text-2xl hover:bg-primary hover:text-secondary hover:border-white hover:border-solid hover:py-0' >Sign up</li></a>
            
          </ul>
          </div>
          
        </div>
        <button
          className="text-white block md:hidden"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="mt-4">
          {/* Add your menu items here */}
          <a
            className="block text-white py-2 px-4 hover:bg-gray-700"
            href="/"
          >
            Home
          </a>
          <a
            className="block text-white py-2 px-4 hover:bg-gray-700"
            href="/about"
          >
            About
          </a>
          <a
            className="block text-white py-2 px-4 hover:bg-gray-700"
            href="/events"
          >
            Events
          </a>
          <a
            className="block text-white py-2 px-4 hover:bg-gray-700"
            href="/groups"
          >
            Groups
          </a>
          <a
            className="block text-white py-2 px-4 hover:bg-gray-700"
            href="/signin"
          >
            Sign in
          </a>
          <a
            className="block text-white py-2 px-4 hover:bg-gray-700"
            href="/signup"
          >
            Sign up
          </a>
        </div>
      )}
    </nav>
  );
};


export default TopNav;