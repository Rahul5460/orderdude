import React from 'react'
import "./header.css"

const Header=()=>{
  return ( 
  <div className="max-width header">
    <img src="./images/Logo.png"
    alt='Order Dude Logo' 
    className='header-logo' />

    <div className='header-right'>
      <div className='header-location-search-container'>
          <div className='location-wrapper'>
            <div className='location-icon-name'>
               <i className="fa-solid fa-location-dot absolute-center location-icon"></i>
               <div>Mohali</div>
            </div>
            <i className="fa-solid fa-caret-down absolute-center"></i>
          </div>
          <div className='location-search-seprator'></div>
          <div className='header-searchbar'>
          <i className="fa-solid fa-magnifying-glass absolute-center search-icon"></i>
          <input placeholder='Search for restaurant , cuision or a dish' className='search-input' />
          </div>
      </div>
        <div className='profile-wrapper'>
        <img src='./images\Screenshot.png'  alt='Profile' className='header-profile-image'/>
        <span className='header-username'>Rahul</span>
        <i className="fa-solid fa-angle-down absolute-center"></i>
        </div>
    </div>
  </div>
  );
};

export default Header;
