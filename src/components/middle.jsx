import React from 'react';
import './middle.css'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons';

const Middleside = () => {

const navigate = useNavigate()

const button = ()=>{
      navigate('/jobs')
}
const profilePic = ()=>{
    navigate('/profile')
}
  return (
    <div className='home-middle-container'>
        <div className="top-part-job-list-searchbar">
            <div className="photo" onClick={profilePic}>
                
            </div>
            <div className="searchbar">
                <FontAwesomeIcon icon={faSearch} className='search-icon' />
                <input type="text" className='input-box'/>
            </div>
            <div className="font-awesome-icons-view">
                <div className="logo">
                    4INTERNS
                </div>
                <FontAwesomeIcon icon={faEnvelope} className='email-icon'/>
                <FontAwesomeIcon icon={faBell} className='email-icon'/>
            </div>
        </div>
      <div className="job-list-card">
            <div className="photo" onClick={profilePic}>
                
            </div>
            <div className="list-card-middle-container">
                Vodacom internship
            </div>
            <div className="apply-button">
                <button className='apply-button-button' onClick={button}>apply</button>
            </div>

      </div>
      <div className="job-list-card">
            <div className="photo" onClick={profilePic}>
                
            </div>
            <div className="list-card-middle-container">
                Telkom internship
            </div>
            <div className="apply-button">
                <button className='apply-button-button'>apply</button>
            </div>

      </div>
      <div className="job-list-card">
            <div className="photo" onClick={profilePic}>
                
            </div>
            <div className="list-card-middle-container">
                Cyber internship
            </div>
            <div className="apply-button">
                <button className='apply-button-button'>apply</button>
            </div>

      </div>
      <div className="job-list-card">
            <div className="photo" onClick={profilePic}>
                
            </div>
            <div className="list-card-middle-container">
                Software internship
            </div>
            <div className="apply-button">
                <button className='apply-button-button'>apply</button>
            </div>

      </div>
      <div className="job-list-card">
            <div className="photo" onClick={profilePic}>
                
            </div>
            <div className="list-card-middle-container">
                Absa internship
            </div>
            <div className="apply-button">
                <button className='apply-button-button'>apply</button>
            </div>

      </div>

      <div className="job-list-card">
            <div className="photo" onClick={profilePic}>
                
            </div>
            <div className="list-card-middle-container">
                Vodacom internship
            </div>
            <div className="apply-button">
                <button className='apply-button-button'>apply</button>
            </div>

      </div>

      <div className="job-list-card">
            <div className="photo" onClick={profilePic}>
                
            </div>
            <div className="list-card-middle-container">
                Vodacom internship
            </div>
            <div className="apply-button">
                <button className='apply-button-button'>apply</button>
            </div>

      </div>
      
    </div>
  );
}

export default Middleside;