import React from 'react'
import './contentHome.css'
import BannerContent from '../../img/banner.JPG';

function contentBanner() {
  return (
    <div className='banner-content'>
    <div className='banner-img'>
        <img src={BannerContent} alt='banner'/>
    </div>
      
    </div>
  )
}

export default contentBanner
