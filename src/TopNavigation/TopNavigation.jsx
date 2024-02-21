import React from 'react'
import { FaUserGraduate } from "react-icons/fa";

const TopNavigation = () => {
  return (
    <div class="topnav" id="myTopnav">
        <div style={{ display:'flex',justifyContent:'center',alignItems:'center', paddingLeft:'2rem' }}>
            <FaUserGraduate style={{ color:'white', fontSize:'24px' }}/>
        </div>
        <div style={{ display:'flex',flexDirection:'row' }}>
            <a href="#contact">Contact</a>
            <a href="#news">News</a>
            <a href="#about">About</a>
            <a href="#home">Home</a>
        </div>
    </div>
  )
}

export default TopNavigation