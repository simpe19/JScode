import React from 'react'
import { NavLink } from 'react-router-dom'

const ShowCase = () => {
  return (
    <section className="intro">
    <div className="bild-text container">
      <img src='https://images.pexels.com/photos/11586575/pexels-photo-11586575.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load' className='img1'/>
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
        <img src='https://images.pexels.com/photos/14036566/pexels-photo-14036566.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load' className='img2'/>
    </div>
</section>
  )
}

export default ShowCase