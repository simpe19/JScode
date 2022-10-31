import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '../components/MenuIcon'

const MainMenuSection = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <nav className="head">
      <div className='color container'>
            <NavLink className="logo" to='/' end>Fixxo.</NavLink>
        <div className={`menu-links ${ showMenu ? 'd-grid': ''}`}>
            <NavLink className="menu-link"  to='/' end>Home</NavLink>
            <NavLink className="menu-link"  to='/categories' end>Categories</NavLink>
            <NavLink className="menu-link"  to='/products' >Products</NavLink>
            <NavLink className="menu-link"  to='/contacts' end>Contacts</NavLink>
        </div>
        <div className='menu-icons'>
            <MenuIcon link="/search" icon="fa-solid fa-magnifying-glass" />
            <MenuIcon hideMobile={true} link="/compare" icon="fa-regular fa-code-compare fa-flip-horizontal" />
            <MenuIcon hideMobile={true} quantity='3' link="/wishlist" icon="fa-regular fa-heart" />
            <MenuIcon quantity='4' link="/shoppingcart" icon="fa-regular fa-bag-shopping" />

            <button onClick={toggleMenu} className='d-xl-none menu-icon btn-menu-icon'><i className="fa-regular fa-bars"></i></button>
        </div>
      </div>
    </nav>
  )
}

export default MainMenuSection