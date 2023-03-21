import React from 'react';
import { useState } from 'react';
import { navLinks } from '../constants';
import { logo, card, menu, close } from '../assets';






const Navbar = () => {
  const [toogle, settoogle] = useState(false);

  return (
    <nav className='w-full flex py-10 justify-center items-center navbar relative z-10'>
      
      <ul className='list-none sm:flex
        hidden justify-center items-center flex-1 '>
          {navLinks.map ((nav, index) => (
            <li 
            key = {nav.id} 
            className={`font-poppins cursor-pointer text-[20px] text-white ${index === navLinks.length-1 ? 'mr-10' : 'mr-10'}`}          
            >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>

            </li>

          ))}

      </ul>
      
       
      <div className='sm:hidden absolute top-0 right-0 mt-5' >
        <img 
          src={toogle ? close: menu}
          alt='menu'
          className='w-[70px] h-[20px] '  
          onClick={() => settoogle((prev)=> !prev)}
        />
         
        <div className={`${toogle ? 'flex' : 'hidden'}
          p-4 bg-black-gradient-2 absolute top-8 right-6 mx-0 my-0 rounded-md sidebar
        `}>
          <ul className='list-none flex flex-col
            justify-start items-start flex-1 font-semibold'>
              {navLinks.map ((nav, index) => (
              <li 
                key = {nav.id} 
                className={`font-poppins cursor-pointer text-[25px]`}          
              >
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>

            </li>

        ))}

        </ul> 


        </div>  

        

      </div>

    </nav>
  );
};

export default Navbar;



