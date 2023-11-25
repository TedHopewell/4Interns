import React from 'react';
import Menupage from '../components/menu';
import "./Home.css"

const NotificationsPage = () => {
  return (
    <div>
       
       <div className="top-part">
        <Menupage />
      </div>
      <div className="notifications-middle-container">
        notification content here
      </div>
    </div>
  );
}

export default NotificationsPage;
