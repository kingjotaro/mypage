import React from 'react';
import styles from './style';
import wall from './assets/wall.jpg';




import {Board, Button, Footer, Midboard, Navbar} from './components';


function App() {
  return (
    
  
    
    <div className={`bg-black-to-white-gradient3 w-full overflow-hiden `}>

      <div className={` ${styles.flexCenter}  `}>
        <div className={`${styles.boxWidth} navbar-fixed `}>
          <Navbar/>
        </div>
      </div> 


      <div className={`${styles.flexCenter}`}>
        <div>
        <p className={`${styles.heading2} text-white`}
        >A world is a vast, beautiful, and full of opportunities. </p>
    
        
        <Board/>
        <span className={`text-white ${styles.heading2} text-justify px-40 -mt-60`} >If you're ready to explore the endless possibilities of this vast world, take a look at my portfolio and see how we can make opportunities happen together.</span>
        </div>
      </div>

      <div className={` mt-20 `}>
        <p className={`text-white ${styles.flexCenter} fonte-size4 font-bold mr-20 py-10`}>
        Portfolio</p>
        <Midboard />
      </div>

      <div className={` ${styles.flexCenter} flex-col`}>
        <p className={`${styles.heading2} ml-10 text-white`}
        >Don't wait for opportunities to come to you. Let's create them together.</p>
        <div className={`flex items-center center`}></div>
        
        <Footer />
      </div>

       
      
    </div>
    
  );
  }


export default App



