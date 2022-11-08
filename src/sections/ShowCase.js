import React from 'react'
import { NavLink } from 'react-router-dom'
import img1 from '../images/showcase-img-1.png';
import img2 from '../images/showcase-img-2.png';

const ShowCase = () => {
  return (
    <section className="intro">
    <div className="bild-text container">
      <img src={img1} className='img1'/>
        <div className="content">
            <h2 className='rubrik1'>SALE UP</h2>
            <h2 className='rubrik2'>To 50% off</h2>
            <p>Online shopping free home delivery over $100</p>
            <button className="_btn-theme">
                <span className="_btn-theme-left"></span>
                SHOP NOW
                <span className="_btn-theme-right"></span>
            </button>
        </div>
        <img src={img2} className='img2'/>
    </div>
</section>
  )
}

export default ShowCase