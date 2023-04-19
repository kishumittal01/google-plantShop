import React from 'react'
import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Banner() {
  const title = 'Jungle House'
  
    return (
    <div className="jh_banner">    
        <img src={logo} alt="Jungle House" className="jh_logo" />
        <h1 className='jh_title'>{title}</h1>
    </div>
  )
}

export default Banner
