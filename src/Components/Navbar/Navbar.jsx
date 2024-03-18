import React from 'react'
import'./Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart.png'
const Navbar = () => {
  return (
    <div className='navbar'>
<div className='nav-logo'>
    <img src={logo} alt='logo'/>
</div>
          <div className='nav-logo-cart'>
          <ul className="nev-menu">
        <li>INR</li>
    
          </ul>
            <button >Login</button>
            <img src={cart_icon} alt='cart'/>
          </div>
    <div>
        
    </div>
    
    </div>
 


 )
}

export default Navbar
