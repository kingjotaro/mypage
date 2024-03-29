import React, { useState } from "react";
import styles from "./style";
import { Board, Navbar, NavbarTwo, Bio, About } from "./components";


function App() {
  const [boardVisible, setBoardVisible] = useState(true);

  const toggleBoardVisibility = () => {
    setBoardVisible(!boardVisible);
  };

  return (
    <div className={`bg-black `}>
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
        <div className={`${styles.boxWidth}`}>
          <Bio onClick={toggleBoardVisibility} />
        </div>
        <div className={`${styles.boxWidth} `}>
          <NavbarTwo />
        </div>
      </div>

      <div className={`${styles.flexCenter} `}>
        <div>
          {boardVisible && (
            <p
              className={`font-gloria text-white mt-5 ${styles.textinho} text-center`}
            >
              In the quest for answers, We found more questions.
            </p>
          )}
          {boardVisible && <Board />}
          {!boardVisible && <About />}
        </div>
      </div>
    </div>
  );
}

export default App;
