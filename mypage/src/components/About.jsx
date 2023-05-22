import React from 'react';
import { rafael } from '../assets';

const About = () => {
  return (
    <div className='flex justify-center'>
      <div className='text-white font-amatic w-[55%] text-[30px] font-bold flex flex-col items-center'>
        <img src={rafael} alt='rafael' className='mb-7' />
        <div>
          
        Hello visitor, welcome to my page! I'm Rafael, an aspiring developer with a background in economics. Besides my passion for programming, I enjoy engaging in various hobbies such as gaming, weightlifting, and spending time with cats. I firmly believe that simplicity is the key to solving problems efficiently and effectively.
        With a broad perspective, I strive to understand the bigger picture in every situation. This comprehensive outlook allows me to make informed decisions and achieve exceptional results. I am constantly seeking new opportunities to apply my skills in development and economics.
        As a committed, curious, and continuously learning individual, I am always ready to take on challenging projects. If you're looking for a dedicated, flexible, and motivated professional, I'm here to contribute and collaborate with you. Together, we can achieve extraordinary results!
        </div>
      </div>
    </div>
  );
};

export default About;
