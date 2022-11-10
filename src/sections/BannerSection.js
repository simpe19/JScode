import React from 'react'
import img1 from '../images/img1.svg';
import img2 from '../images/img2.svg';

const BannerSection = () => {
  return (
    <div className='banner container'>
        <div className='banner-left' >
            <img src={img1} className='banner-img-left' />
            <p>Pamela Reif's Top Picks</p>
            <button className="_btn-theme">
                <span className="_btn-theme-left"></span>
                SHOP NOW
                <span className="_btn-theme-right"></span>
            </button>
        </div>
        <div className='banner-right'>
            <img src={img2} className='banner-img-right'/>
            <p>Pamela Reif's Top Picks</p>
            <button className="_btn-theme">
                <span className="_btn-theme-left"></span>
                SHOP NOW
                <span className="_btn-theme-right"></span>
            </button>
        </div>
    </div>
    
  )
}

export default BannerSection