import React, { useState } from 'react';
import { Logo } from './Logo';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa'; // For the close icon

function Navbar({ scrollToSection, refs }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='fixed z-[999] w-full px-6 md:px-20 py-2 text-zinc-500 font-lato flex justify-between md:justify-between lg:gap-[50%] items-center  bg-white bg-opacity-0 backdrop-blur-lg backdrop-opacity-70 shadow-md'>

      {/* logo part */}
      <div className='logo'>
        <Logo />
      </div>

      {/* Hamburger icon for small screens */}
      <div className='md:hidden'>
        {menuOpen ? (
          <FaTimes
            className="cursor-pointer"
            size={24}
            onClick={() => setMenuOpen(false)} // Close menu
          />
        ) : (
          <FaBars
            className="cursor-pointer"
            size={24}
            onClick={() => setMenuOpen(true)} // Open menu
          />
        )}
      </div>

      {/* links part */}
      <div
        className={` text-lg lg:text-[1.3vw] text-center fixed top-0 left-0 h-screen md:h-full w-full md:w-2/3 text-zinc-500 flex flex-col gap-5 px-5 py-10  transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0  bg-white bg-opacity-0 backdrop-blur-lg backdrop-opacity-70 shadow-md' : '-translate-x-full'
          } md:transform-none md:static md:flex md:flex-row md:w-auto md:py-0 md:px-0 md:bg-transparent gap-20 md:gap-10`}

      >
        {[
          { name: 'About ', ref: refs.aboutRef },
          { name: 'Skills', ref: refs.skillsRef },
          { name: 'Projects', ref: refs.projectsRef },
          { name: 'HireMe', ref: refs.hireRef },
          { name: 'Contact', ref: refs.contactRef },
        ].map((item, index) => (
          <a
            key={index}
            className={`${index === 4 && 'ml-0 md:ml-0 lg:ml-32'} cursor-pointer`}
            onClick={() => {
              scrollToSection(item.ref); // Trigger scroll to section
              setMenuOpen(false); // Close the menu after clicking a link
            }}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
