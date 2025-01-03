

import './App.css';
import Navbar from './component/Navbar/navbar';
//import SideNavbar from './component/SideNavbar/sideNavbar';
import Home from './Pages/Home/home';
import Video from './Pages/Video/video';
import { useState} from 'react';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import Profile from './Pages/Profile/profile';
import VideoUpload from './Pages/VideoUpload/videoUpload.js';
import SignUp from './Pages/SignUp/signUp';


import axios from 'axios';
function App() {
  const [sideNavbar,setSideNavbar] = useState(true);

  // useEffect(()=>{
  //   axios.get('http://localhost:4000/api/allVideo').then(res=>{
  //     console.log(res)
  //   }).catch(err=>{
  //     console.log(err);
  //   })
  // },[])
  
  const setSideNavbarFunc=(value)=>{
    setSideNavbar(value)
  }
  return (
      <div className="App">
        <Navbar setSideNavbarFunc={setSideNavbarFunc} sideNavbar={sideNavbar} />
        <Routes>
          <Route path='/' element={<Home sideNavbar={sideNavbar} />} />
          <Route path='/watch/:id' element={<Video />} />
          <Route path='/user/:id' element={<Profile sideNavbar={sideNavbar} />} />
          <Route path='/:id/upload' element={<VideoUpload/>} />
          <Route path='/signup' element={<SignUp/>} />
        </Routes>
        
      </div>
    );
  }
  
  export default App;
  