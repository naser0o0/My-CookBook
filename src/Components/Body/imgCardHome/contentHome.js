import React from 'react';
import './contentHome.css';
import imag1 from '../../img/card01..JPG';
import imag2 from '../../img/card02.JPG';
import imag3 from '../../img/card03.JPG';

function contentHome() {
  return (
    <div className='content-img-card'>
        <div className='img-card'>
            <img src={imag1} alt='' />
        </div>
        <div className='img-card'>
        <img src={imag2} alt='' />
        </div>
        <div className='img-card'>
        <img src={imag3} alt='' />
        </div>
      
    </div>
  )
}

export default contentHome
