import React from 'react'


const Bio = ({ onClick }) => {
  return (
    <nav className='w-full flex py-10 relative z-10 textinho cursor-pointer text-[40px] mr-10'>
      
      <button onClick={onClick}>About me</button> 
    
    </nav>
  );
};

export default Bio;

