import React from 'react';
import Spline from '@splinetool/react-spline';

const Board = () => {
  return (
    <div className={`w-full h-screen hidden sm:flex justify-center items-center `}>
      <div className={`w-3/3 -mt-60`}>
        <Spline className={`spline`} scene="https://prod.spline.design/9e68dkmu8kG-BetQ/scene.splinecode" />
      </div>
      
    </div>
  );
};

export default Board;
