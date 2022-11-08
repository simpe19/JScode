import React from 'react'
import { NavLink } from 'react-router-dom'

const itemCard = ({item}) => {

    const addToWishlist = (e) => {
        console.log(`${e.target} added to wish list`)
    }
    const addToCompare = (e) => {
        console.log("added to compare ")
    }
    const addToCart = (e) => {
        console.log("added to cart")
    }

  return (
<div className="col">
    <div className="card">
            <div className="card-img">
                <img src={item.imageName} alt={item.name} />
                <div className="card-menu d-xl-none">
                    <button onClick={addToWishlist} className='menu-link'><i className="fa-regular fa-heart"></i></button>
                    <button onClick={addToCompare} className='menu-link'><i className="fa-regular fa-code-compare fa-flip-horizontal"></i></button>
                    <button onClick={addToCart} className='menu-link'><i className="fa-regular fa-bag-shopping"></i></button>
                </div>
                <NavLink to={`/items/${item.name.toLowerCase().replace(/ /gi, "-")}`} className="_btn-theme btn-card-theme d-xl-none">
                    <span className="_btn-theme-left"></span>
                    QUICK VIEW
                    <span className="_btn-theme-right"></span>
                </NavLink>
            </div>
        <div className="card-body">
            <p className="card-category">{item.category}</p>
            <h5 className="card-title">{item.name}</h5>
            <p className="card-rating">
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
            </p>
            <p className="card-price">{item.price}</p>
        </div>
    </div>
</div>
  )
}

export default itemCard