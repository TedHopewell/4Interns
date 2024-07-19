import React from 'react';
import Menupage from '../components/menu';
import "./Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Jobspage = () => {

  const navigate = useNavigate();

  const back = ()=>{
    navigate('/Home')
}

  return (
    <div>
      <div className="top-part">
        <Menupage />
      </div>
      <div className="jobs-middle-container">
        <FontAwesomeIcon icon={faArrowLeft} className='back-arrow-icon' onClick={back}/>
        Jobs content here
      </div>
      <div>Applied jobs on the left <br />
             available jobs on the right </div>
    </div>
  );
}

export default Jobspage;
