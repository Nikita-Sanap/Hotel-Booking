import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
    <div className='navbar'>
        <div className='navContainer'>
            <span className='logo'>TravelPerk</span>
            <div className='navItems'>
                <button className='navButton'>Register</button>
                <button className='navButton'>Login</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar
