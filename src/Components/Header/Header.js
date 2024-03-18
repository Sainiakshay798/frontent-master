import React from 'react'
import { CgProfile } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa6";
import './Header.css';

function Header() {
  return (
    <div className='headerMain'>
      <div className='headerTop'>
        <div className='headerLeft'>
          <img src='https://www.needledust.com/cdn/shop/files/logo-store-image_155x.png?v=1614301519'  />
        </div>
        <div className='headerRight' >
          <div className='headerRight1'>
            <label htmlFor="currency">INR</label>
            <select id="currency">
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="INR">INR</option>
            </select>
          </div>
          <div className='headerLogo1'><CgProfile /></div>
          <div className='headerLogo2'><IoSearch /></div>
          <div className='headerLogo3'><FaCartArrowDown /></div>
        </div>
      </div>
      <div className='headerBottom'>
      <div class="menu">
    
    Women

      <div class="submenu">
        <p>JUTTIS</p>
        <p>HEELS</p>
        <p>KOLHAPAIRS</p>
        <p>SANDALS</p>
        <p>MULES</p>
      </div>
    </div>

    <div class="menu2">
    <span>NEEDLEDUST X ABHINAV MISHRA</span>
    <div class="submenu2">
      <p>JUTTIS</p>
      <p>HEELS</p>
      <p>PURSES</p>
      <p>MAN</p>
      <p>VIEW All</p>
    </div>
  </div>

        <span>PURSES</span>
        <span>MAN</span>
        <span>KIDS</span>
       
        <div class="menuGifting">
        <span>GIFTING</span>
        <div class="submenuGifting">
          <p>GIFT SET</p>
          <p>HIS & ME GIFT SETS</p>
          <p>MOM & ME GIFT SETS </p>
        <p>GIFT CARDS</p>
          </div>
      </div>

        <span>CELEBRITIES</span>
        <img src='https://sandbyshirin.com/cdn/shop/files/SAN_200x.png?v=1614949992' alt='not found' />
      </div>
    </div>
  );
}

export default Header;
