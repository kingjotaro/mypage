import React, { useState } from 'react';
import styles from './style';
import { Board, Navbar } from './components';
import Navbar2 from './components/Navbar2';
import Bio from './components/Bio';
import About from './components/About';

function App() {
  const [boardVisible, setBoardVisible] = useState(true);

  const toggleBoardVisibility = () => {
    setBoardVisible(!boardVisible);
  };

  return (
    <div className={`bg-black w-full `}>
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
        <div className={`${styles.boxWidth}`}>
          <Bio onClick={toggleBoardVisibility} /> 
        </div>
        <div className={`${styles.boxWidth} `}>
          <Navbar2 />
        </div>
      </div>

      <div className={`${styles.flexCenter} `}>
        <div>
            
          {boardVisible && <p className={`font-gloria text-white ${styles.textinho} text-center`}>
            In the quest for answers, We found more questions.
          </p>}
          {boardVisible && <Board />} 
          {!boardVisible && <About />} 
        </div>
      </div>
    </div>
  );
}

export default App;
