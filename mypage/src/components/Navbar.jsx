import React, { useState } from 'react';
import { navLinks } from '../constants';



const Navbar = () => {
 


  

  

  return (
    <nav className='w-full flex py-10 justify-center items-center relative z-10'>
      <ul className='list-none sm:flex justify-center items-center flex-1 '>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`textinho cursor-pointer text-[40px] mr-10 }`}>

           {nav.url ? (<a href={nav.url} target="_blank">{nav.title}</a>) : (<a href={`#${nav.id}`}>{nav.title}</a>)}

           
        
        </li>
      ))}
     
      </ul>

      
    </nav>
  );
};

export default Navbar;
