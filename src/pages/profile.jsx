import React from 'react';
import Menupage from '../components/menu';
import "./Home.css"

const Profilepage = () => {
  return (
    <div>
        <div className="top-part">
        <Menupage />
      </div>
      <div className="profile-middle-container">
        profile content here
      </div>
    </div>
  );
}

export default Profilepage;
