import React from 'react';
import Menupage from '../components/menu';
import "./Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const MyMessages = () => {

  const navigate = useNavigate();

  const back = ()=>{
    navigate('/Home')
}
  return (
    <div>
         <div className="top-part">
        <Menupage />
      </div>
      <div className="messages-middle-container">
        <FontAwesomeIcon icon={faArrowLeft} className='back-arrow-icon' onClick={back}/>
        messages content here
      </div>
    </div>
  );
}

export default MyMessages;