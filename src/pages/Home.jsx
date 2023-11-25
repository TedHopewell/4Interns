import React from 'react';
import Menupage from '../components/menu';
import { useNavigate } from 'react-router-dom';
import Leftside from '../components/leftside';
import Rightside from '../components/rightside';
import "./Home.css"
import Middleside from '../components/middle';

const Homepage = () => {

const navigate = useNavigate()

const button = ()=>{
      navigate('/myNetworks')
}
  return (
    <div className='home-container'>
      <div className="top-part">
        <Menupage />
      </div>
      <div className="middle-container">
        <div className="left">
            <Leftside />
        </div>
        <div className="middle">
            <Middleside />
        </div>
        <div className="right">
            <Rightside />
        </div>

      </div>
      
    </div>
  );
}

export default Homepage;
