import React from 'react';
import Spline from '@splinetool/react-spline';

const Board = () => {
  const handleMouseOver = e => {
    e.preventDefault();
    document.body.style.overflow = 'hidden';
  };

  const handleMouseLeave = () => {
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="h-screen overflow-auto ">
      <div
        className="relative w-2/3 mx-auto"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <Spline
          className={`spline absolute w-full h-full`}
          scene="https://prod.spline.design/MQqYpCovw8zTHaUT/scene.splinecode"
        />
      </div>
    </div>
  );
};

export default Board;
