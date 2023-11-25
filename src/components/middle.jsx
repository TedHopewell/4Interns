import React from 'react';
import './middle.css'
import { useNavigate } from 'react-router-dom';

const Middleside = () => {

const navigate = useNavigate()

const button = ()=>{
      navigate('/jobs')
}
  return (
    <div className='home-middle-container'>
      <div className="job-list-card">
            <div className="photo">
                
            </div>
            <div className="list-card-middle-container">
                Vodacom internship
            </div>
            <div className="apply-button">
                <button className='apply-button-button' onClick={button}>apply</button>
            </div>

      </div>
      <div className="job-list-card">
            <div className="photo">
                
            </div>
            <div className="list-card-middle-container">
                Telkom internship
            </div>
            <div className="apply-button">
                <button className='apply-button-button'>apply</button>
            </div>

      </div>
      <div className="job-list-card">
            <div className="photo">
                
            </div>
            <div className="list-card-middle-container">
                Cyber internship
            </div>
            <div className="apply-button">
                <button className='apply-button-button'>apply</button>
            </div>

      </div>
      <div className="job-list-card">
            <div className="photo">
                
            </div>
            <div className="list-card-middle-container">
                Software internship
            </div>
            <div className="apply-button">
                <button className='apply-button-button'>apply</button>
            </div>

      </div>
      <div className="job-list-card">
            <div className="photo">
                
            </div>
            <div className="list-card-middle-container">
                Absa internship
            </div>
            <div className="apply-button">
                <button className='apply-button-button'>apply</button>
            </div>

      </div>

      <div className="job-list-card">
            <div className="photo">
                
            </div>
            <div className="list-card-middle-container">
                Vodacom internship
            </div>
            <div className="apply-button">
                <button className='apply-button-button'>apply</button>
            </div>

      </div>

      <div className="job-list-card">
            <div className="photo">
                
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