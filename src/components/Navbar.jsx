import React, { useState } from 'react';
import { Logo } from './Logo';
import { FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
  { name: 'About', refKey: 'aboutRef' },
  { name: 'Skills', refKey: 'skillsRef' },
  { name: 'Projects', refKey: 'projectsRef' },
  { name: 'HireMe', refKey: 'hireRef' },
  { name: 'Contact', refKey: 'contactRef' },
];

function Navbar({ scrollToSection, refs }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleNavItemClick = (ref) => {
    scrollToSection(ref);
    setMenuOpen(false);
  };

  const navbarClasses = `
    fixed z-[999] w-full px-6 md:px-20 py-2 text-white
    md:text-zinc-500 font-lato 
    flex justify-between md:justify-between lg:gap-[50%] items-center
    bg-white bg-opacity-0 backdrop-blur-lg backdrop-opacity-70 shadow-md
  `;

  const menuClasses = `
    text-lg lg:text-[1.3vw] text-center 
    fixed top-0 left-0 h-screen md:h-full w-full md:w-2/3 text-green-400
    md:text-zinc-500 flex flex-col gap-20 px-5 py-10
    transform transition-transform duration-300 ease-in-out
    ${menuOpen ? 'translate-x-0 bg-black bg-opacity-0 backdrop-blur-lg backdrop-opacity-70 shadow-md' : '-translate-x-full'}
    md:transform-none md:static md:flex md:flex-row md:w-auto md:py-0 md:px-0 md:bg-transparent md:gap-10
  `;

  return (
    <nav className={navbarClasses}>
      <div className='logo'>
        <Logo />
      </div>

      <button className='md:hidden' onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <div className={menuClasses}>
        {navItems.map((item, index) => (
          <a
            key={item.name}
            className={`cursor-pointer ${index === navItems.length - 1 ? 'ml-0 md:ml-0 lg:ml-32' : ''}`}
            onClick={() => handleNavItemClick(refs[item.refKey])}
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;