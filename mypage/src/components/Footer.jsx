import React from 'react';
import rocket from '../assets/rocket.gif';

const Footer = () => {
  return (
    <div className={`flex-cold relative`}>
      <iframe
        src={rocket}
        width="500"
        height="400"
        
        scrolling="no"
      />
    </div>
  );
};

export default Footer;
