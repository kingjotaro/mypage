import React, { useState } from 'react';
import { navLinks } from '../constants';
import { menu, close } from '../assets';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [showContactLinks, setShowContactLinks] = useState(false);


  const handleContactMouseEnter = () => {
    setShowContactLinks(true);
  };

  const handleContactMouseLeave = () => {
    setShowContactLinks(false);
  };
  

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <nav className='w-full flex py-10 justify-center items-center navbar relative z-10'>
      <ul className='list-none sm:flex hidden justify-center items-center flex-1 '>
        {navLinks.map((nav, index) => (
      <li
        key={nav.id}
        className={`font-poppins cursor-pointer text-[20px]  ${
            index === navLinks.length - 1 ? 'mr-10' : 'mr-10'
        } ${nav.dropdownLinks ? 'relative' : ''}`}
      >
        {nav.url ? (
          <a href={nav.url} download>
            {nav.title}
          </a>
           ) : (
          
          <a href={`#${nav.id}`}>{nav.title}</a>
          )
        }
         {nav.id === "contact" && (
              <div 
                className={`flex flex-col ${
                  showContactLinks ? "visible" : "invisible"
                } absolute top-full left-0 bg-white p-4 `}
                onMouseEnter={handleContactMouseEnter}
                onMouseLeave={handleContactMouseLeave}
              >
                {nav.dropdownLinks.map((link) => (
                  <a href={link.url} key={link.id}>
                    {link.title}
                  </a>
                ))}
              </div>
            )}
        
        {nav.dropdownLinks && nav.id !== "contact" && (
              <ul
                className={`${
                  toggle ? 'visible' : 'invisible'
                } absolute top-full right-0 bg-white p-4`}
              >
                {nav.dropdownLinks.map((link) => (
                  <li key={link.id}>
                    <a href={link.url}>{link.title}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
))}

      </ul>

      <div className='sm:hidden absolute top-0 right-0 mt-5'>
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='w-[70px] h-[20px] '
          onClick={handleToggle}
        />

        <div
          className={`${toggle ? 'flex' : 'hidden'}
            p-4 text-white absolute top-8 right-6 mx-0 my-0 rounded-md sidebar
          `}
        >
          <ul className='list-none flex flex-col justify-start items-start flex-1 font-semibold'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins cursor-pointer text-[25px]`}
              >
                {nav.url ? (
                  <a href={nav.url} download>
                    {nav.title}
                  </a>
                ) : (
                  <a href={`#${nav.id}`}>{nav.title}</a>
                )}
                {nav.dropdownLinks && (
                  <ul className='pl-4'>
                    {nav.dropdownLinks.map((link) => (
                      <li key={link.id}>
                        <a href={link.url}>{link.title}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
