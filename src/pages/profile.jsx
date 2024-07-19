import React from 'react';
import Menupage from '../components/menu';
import "./Home.css"
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const Profilepage = () => {

  const navigate = useNavigate();

  const back = ()=>{
    navigate('/Home')
}

  return (
    <div>
        <div className="top-part">
        <Menupage />
      </div>
      <div className="profile-middle-container">
        <FontAwesomeIcon icon={faArrowLeft} className='back-arrow-icon' onClick={back}/>
        profile content here
      </div>
    </div>
  );
}

export default Profilepage;
