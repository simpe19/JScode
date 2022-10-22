import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '../components/MenuIcon'

const MainMenuSection = () => {
  return (
    <nav className="head container">
        <div className="logo">
            Fixxo.
        </div>
        <div className="navigation">
            <NavLink className="menu-links" to='/'>Home</NavLink>
            <NavLink className="menu-links" to='/categories'>Categories</NavLink>
            <NavLink className="menu-links" to='/products'>Products</NavLink>
            <NavLink className="menu-links" to='/contacts'>Contacts</NavLink>
        </div>
            <div className='menu-icons'>
            <MenuIcon link="/search" icon="fa-solid fa-magnifying-glass" />
            <MenuIcon link="/compare" icon="fa-regular fa-code-compare fa-flip-horizontal" />
            <MenuIcon link="/wishlist" icon="fa-regular fa-heart" />
            <MenuIcon link="/shoppingcart" icon="fa-regular fa-bag-shopping" />
            </div>
    </nav>
  )
}

export default MainMenuSection