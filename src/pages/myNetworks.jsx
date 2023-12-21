import React from 'react';
import Menupage from '../components/menu';
import "./Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Mynetworks = () => {

  const navigate = useNavigate();

  const back = ()=>{
    navigate('/')
}
  return (
    <div>
         <div className="top-part">
        <Menupage />
      </div>
      <div className="networks-middle-container">
        <FontAwesomeIcon icon={faArrowLeft} className='back-arrow-icon' onClick={back}/>
        networks content here
      </div>
    </div>
  );
}

export default Mynetworks;
