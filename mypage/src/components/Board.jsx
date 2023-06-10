import React from "react";
import Spline from "@splinetool/react-spline";

const Board = () => {
  return (
    <div className={`ml-20 custom-scale `}>
      <div>
        <Spline
          className={`spline`}
          scene="https://prod.spline.design/9e68dkmu8kG-BetQ/scene.splinecode"
        />
      </div>
    </div>
  );
};

export default Board;
