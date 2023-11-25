import './App.css';
import Homepage from './pages/Home';
import Mynetworks from './pages/myNetworks';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Jobspage from './pages/jobs';
import NotificationsPage from './pages/notifications';
import Profilepage from './pages/profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/'>
          <Route index element={<Homepage/>}/>
          {/* <Route exact path='/' element={<Homepage/>}/> */}
          <Route exact path='/products' element={<Homepage/>}/>
          <Route exact path='/myNetworks' element={<Mynetworks />}/>
          <Route exact path='/jobs' element={<Jobspage />}/>
          <Route exact path='/notifications' element={<NotificationsPage />}/>
          <Route exact path='/profile' element={<Profilepage />}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
