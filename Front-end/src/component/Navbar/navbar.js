import React, { useState,useEffect } from 'react'

import "./navbar.css";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import HiveIcon from '@mui/icons-material/Hive';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
//import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import Login from '../Login/login';
import axios from 'axios';
 //import { modalClasses } from '@mui/material';

const Navbar = ({setSideNavbarFunc,sideNavbar}) => {
  const [userPic, setUserPic] = useState("")
  const [navbarModal, setNavbarModal] = useState(false);
  const [login,setLogin] = useState(false);
  //const [isLogedIn,setIsLogedIn] = useState(false)
  const navigate = useNavigate();

  const handleClickModal =()=>{
    setNavbarModal(prev=>!prev);
  }
  const sideNavbarFunc=()=>{
    setSideNavbarFunc(!sideNavbar)
  }
 /* const handleprofile =()=>{
    let userId = localStorage.getItem("userId")
    navigate(`/user/7868}`);
    setNavbarModal(false);
  }*/

  const setLoginModal=()=>{
    setLogin(false);
  }

  const onclickOfPopUpOption =(button)=>{
    setNavbarModal(false);

    if(button==="login"){
      setLogin(true);
    }else{
      localStorage.clear();
      getLogoutFun();
      setTimeout(() => {
        navigate('/')
        window.location.reload();
    }, 2000);
    }
  }

 /* const getLogoutFun = async()=>{
    axios.post("http://localhost:4000/auth/logout",{},{ withCredentials: true}).then((res)=>{
      console.log("Logout ")
    }).catch(err=>{
      console.log(err)
    })
  }*/

  useEffect(()=>{
    let userProfilePic = localStorage.getItem("userProfilePic");
    //setIsLogedIn(localStorage.getItem("userId")!==null?true:false);
    if(userProfilePic!==null){
      setUserPic(userProfilePic)
    }

  },[])

  return (
    <div className="navbar">
    <div className="navbar-left">
       <div className="navbarHamberger"onClick={sideNavbarFunc}>
          <MenuIcon sx={{color:'white'}}/>
       </div>
       
       
       <Link to={'/'} className="navbar_youtubeImg">
          <HiveIcon sx={{ fontSize: "34px" }} className='navbar_youtubeImage' />
          <div className='navbar_utubeTitle'>AEQ</div>
        </Link>


       <div className="navbar-middle">
        <div className="navbar_searchBox">
          <input type='text'placeholder='search' className='navbar_searchBoxInput'/>
         <div className="navbar_searchIconBox">< SearchIcon sx={{ fontSize:"28px",color:"white"}}/> </div>       
        
        <div className="navbar_mike">
          <KeyboardVoiceIcon sx={{color: 'white'}}/>
        </div>
        </div>
       </div>
    
    
    <div className="navbar-right">

          <Link to={'/763/upload'}>
             <VideoCallIcon sx={{ fontSize: "30px", cursor: "pointer", color: "white" }} />
          </Link>  
          
         
        
        <NotificationsIcon sx={{ fontSize: "30px", cursor: "pointer", color: "white" }} />
        <img onClick={handleClickModal} src={userPic} className='navbar-right-logo' alt='Logo' />
   
     {navbarModal && 
     <div className= 'navbar-modal'>
     <div className="navbar-modal-option" onClick={handleprofile}>Profile</div>
     <div className="navbar-modal-option" onClick={()=> onclickOfPopUpOption('logout')} >Logout</div>
     <div className="navbar-modal-option" onClick={()=> onclickOfPopUpOption('login')}>Login</div>
   </div>
     }
  </div> 
 </div>
 {login && <Login  setLoginModal={setLoginModal}/>}
 </div>

  )
}

export default Navbar
