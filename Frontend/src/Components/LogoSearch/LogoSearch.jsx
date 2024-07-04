import React from 'react'
import Logo from '../../img/Logo_social.png'
import './LogoSearch.css'

export default function LogoSearch() {
  return (
    <div className='LogoSearch'>
        <img src={Logo} alt="bird_logo" />
        <div className='Platform_Name'> Achieve Net </div>
    </div>
  )
}
