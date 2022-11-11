import React from 'react'
import img1 from '../images/customer-service.svg';
import img2 from '../images/credit-card.svg';
import img3 from '../images/delivery-truck.svg';



const SupportSection = () => {
  return (
<section className="webinfo">
    <div className="box1 container">
        <div className="infobox">
            <div className='wrap'>
                <div className='background' >
                    <img src={img1} alt='bild'/>
                </div>
            </div>
            <div>
                <h2>Customer Support</h2>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
        </div>
        <div className="infobox">
            <div className='wrap'>
                <div className='background' >
                    <img src={img2} alt='bild'/>
                </div>
            </div>
            <div>
                <h2>Secured Payment</h2>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
        </div>
        <div className="infobox">
            <div className='wrap'>
                <div className='background' >
                    <img src={img3} alt='bild'/>
                </div>
            </div>
            <div>
                <h2>Free Home Delivery</h2>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
        </div>
        <div className="infobox">
            <div className='wrap'>
                <div className='background' >
                    <img src={img3} alt='bild'/>
                </div>
            </div>
            <div>
                <h2>30 Day Reuters</h2>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
        </div>
    </div>
</section>
  )
}

export default SupportSection