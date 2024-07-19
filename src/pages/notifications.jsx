import React from 'react';
import Menupage from '../components/menu';
import "./Home.css"
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const NotificationsPage = () => {

  const navigate = useNavigate();

  const back = ()=>{
    navigate('/Home')
}
  return (
    <div>
       
       <div className="top-part">
        <Menupage />
      </div>
      <div className="notifications-middle-container">
        <FontAwesomeIcon icon={faArrowLeft} className='back-arrow-icon' onClick={back}/>
        notification content here
      </div>
    </div>
  );
}

export default NotificationsPage;
