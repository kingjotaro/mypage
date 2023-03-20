import React from 'react';
import styles from './style';


import {Board, Button, Footer, Midboard, Navbar} from './components';


function App() {
  return (
    
  
    
    <div className="bg-black w-full overflow-hiden">

      <div className={`${styles.paddingX} ${styles.flexCenter}  `}>
        <div className={`${styles.boxWidth} navbar-fixed `}>
          <Navbar/>
        </div>
      </div> 


      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`xl:max-w-[1280px] w-full font-bold text-gray-800  text-2xl`}>
        <p className={`${styles.heading2} text-white `}
        >A world is a vast, beautiful, and full of opportunities.</p>
        <Board/>
        </div>
      </div>

      <div className={`bg-black-gradient-2 ${styles.flexCenter} ${styles.paddingB}`}>
        <div className={`flex items-center center`}></div>
        <Midboard />
      </div>

      <div className={`bg-black-gradient ${styles.flexCenter} ${styles.paddingB}`}>
      <p className={`${styles.heading2} ml-10 `}
        >Don't wait for opportunities to come to you. Let's create them together.</p>
        <div className={`flex items-center center`}></div>
        <Footer />
      </div>

       
      
    </div>
    
  );
  }


export default App



