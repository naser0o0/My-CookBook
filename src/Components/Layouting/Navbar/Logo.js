import React from 'react';
import './index.css';
import Logo from './hacker_news-512.png';

export default function HeaderLogo(){
  return(
    <>
      <img src={Logo} alt='Logo' className='HeaderLogoStyle'/>
    </>
  )
}