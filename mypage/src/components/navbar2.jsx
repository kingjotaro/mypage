import React, { useState } from 'react';
import { jobLinks } from '../constants';

const Navbar2 = () => {

    const [showJobs, setJob] = useState(false);
  
  
    const handleContactMouseEnter = () => {
      setJob(true);
    };
  
    const handleContactMouseLeave = () => {
      setJob(false);
    };
    
  
 
    return (
        <nav className={`w-full flex py-10 justify-center items-center relative z-10 `}>
          <ul className='list-none sm:flex justify-center items-center flex-1 '>
            {jobLinks.map((nav) => (
              <li key={nav.id} className={` cursor-pointer text-[40px]  mr-10 ${nav.dropdownLinks ? 'sticky ' : ''}`}>
    
               {nav.url ? (<a href={nav.url} download>{nav.title}</a>) : (<a href={`#${nav.id}`}>{nav.title}</a>)}
               {nav.id === "jobs" && (
                  <div className={`flex flex-col ${showJobs ? "visible" : "invisible"} absolute top-full left-0 bg-black p-4 `}
                    onMouseEnter={handleContactMouseEnter}
                    onMouseLeave={handleContactMouseLeave}
                    >
                    {nav.dropdownLinks.map((link) => (<a href={link.url} key={link.id}> {link.title} </a>))}
                  </div>
  )}
               
            
            </li>
          ))}
    
          </ul>

        
        
      
    </nav>
  );
};

export default Navbar2;
  
















