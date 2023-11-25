import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./menu.css"


const Menupage = () => {
    const navigate = useNavigate()

const home = ()=>{
      navigate('/')
}
const networks = ()=>{
    navigate('/myNetworks')
}
const jobs = ()=>{
    navigate('/jobs')
}
const notifications = ()=>{
    navigate('/notifications')
}
const profile = ()=>{
    navigate('/profile')
}



  return (
    <div className='menu-container'>
        <div className="logo-container">
                <div className="logo">
                    4INTERNS
                </div>
        </div>
        <div className="menu-tabs">
                <div className="menuList" onClick={home}>Home</div>
                <div className="menuList" onClick={networks}>My Networks</div>
                <div className="menuList" onClick={jobs}>Jobs</div>
                <div className="menuList" onClick={notifications}>Notifications</div>
                <div className="menuList" onClick={profile}>Profile</div>
        </div>
     
    </div>
  );
}

export default Menupage;
