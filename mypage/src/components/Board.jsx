import React from 'react';
import Spline from '@splinetool/react-spline';

const Board = () => {
  return (
    <div className="overflow-auto">
      <div className="relative w-2/3 mx-auto">
        <Spline
          className={`spline w-full h-full relative z-0`}
          scene="https://prod.spline.design/oMP39xrH2DhD1meU/scene.splinecode"
        />
      </div>
    </div>
  );
};

export default Board;

