import React from 'react';
import Menupage from '../components/menu';
import "./Home.css"

const Jobspage = () => {
  return (
    <div>
        
        <div className="top-part">
        <Menupage />
      </div>
      <div className="jobs-middle-container">
        Jobs content here
      </div>
    </div>
  );
}

export default Jobspage;
