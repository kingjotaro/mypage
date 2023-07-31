import React from 'react'


const Bio = ({ onClick }) => {
  return (
    <nav className='text-[40px] mr-10'>
      
      <button onClick={onClick}>About me</button> 
    
    </nav>
  );
};

export default Bio;

