import React from 'react'
import img1 from '../images/imgpam.png';
import img2 from '../images/imgbee.png';

const BannerSection = () => {
  return (
    <div className='banner container'>
        <div className='banner-left' >
            <img src={img1} className='banner-img-left' />
            <div className='content-left'>
            <p>Pamela Reif's Top Picks</p>
            <button className="_btn-theme">
                <span className="_btn-theme-left"></span>
                SHOP NOW
                <span className="_btn-theme-right"></span>
            </button>
            </div>
        </div>
        <div className='banner-right'>
            <img src={img2} className='banner-img-right'/>
            <div className='content-right'>
                <p>Let's Be Conscious</p>
                <button className="_btn-theme">
                    <span className="_btn-theme-left"></span>
                    FLASH SALE
                    <span className="_btn-theme-right"></span>
                </button>
            </div>
        </div>
    </div>
    
  )
}

export default BannerSection