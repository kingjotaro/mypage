import React from 'react';
import styles from '../style';
import { boardLinks1, boardLinks2 } from '../constants';
import { faRocket, faLightbulb, faCode, faSun, faThunderstorm, faBagShopping} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Midboard = () => {
  return (
    <div>
        <div className={`text-white ${styles.flexCenter}`}>
          <ul className='list-none flex flex-col'>
            {boardLinks1.map((nav, index, description, icon) => (
              <li key={nav.id} className={`flex items-center font-bold flex-col px-20 py-10 fonte-size3`}>
              <a href={`#${nav.id}` }>
                {nav.title}
                {index === 1 && <FontAwesomeIcon icon={faRocket}/>}
                {index === 0 && <FontAwesomeIcon icon={faLightbulb}/>}
                
                {index === 2 && <FontAwesomeIcon icon={faSun} />}
              
              </a>
              <span className={`font-semibold fonte-size1`}> {nav.description}</span> 

              
              
            </li>
            
            ))}
          </ul>
          <ul className='list-none flex flex-col'>
            {boardLinks2.map((nav, index, description, icon) => (
              <li key={nav.id} className={`flex items-center font-bold px-20 py-10 flex-col fonte-size3`}>
                <a href={`#${nav.id}`}>
                  {nav.title}
                  {index === 0 && <FontAwesomeIcon icon={faThunderstorm}/>}
                {index === 1 && <FontAwesomeIcon icon={faCode}/>}
                {index === 2 && <FontAwesomeIcon icon={faBagShopping}/>}
                </a>
                <span className={`font-semibold fonte-size1`}> {nav.description}</span> 
              </li>
            ))}
          </ul>
      </div>
    </div>
  );
};

export default Midboard;
