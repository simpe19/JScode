import React from 'react'
import { NavLink } from 'react-router-dom'

const ShowCase = () => {
  return (
    <section className="intro">
    <div className="bild-text container">
      <div>img</div>
        <div className="content">
            <h1>SALE UP</h1>
            <h2>To 50% off</h2>
            <p>Online shopping free home delivery over $100</p>
            <button className="_btn-theme">
                <span className="_btn-theme-left"></span>
                SHOP NOW
                <span className="_btn-theme-right"></span>
            </button>
        </div>
      <div>img</div>
    </div>
</section>
  )
}

export default ShowCase