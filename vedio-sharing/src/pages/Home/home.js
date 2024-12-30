import React from 'react'
import SideNavbar from '../../component/SideNavbar/sideNavbar'
import HomePage from '../../component/HomePage/homePage'
import './home.css'
const Home = ({sideNavbar}) => {
  return (
    <div className='home'>
        <SideNavbar sideNavbar={sideNavbar}/>
        <HomePage sideNavbar={sideNavbar}/>

    </div>
  )
}

export default Home 