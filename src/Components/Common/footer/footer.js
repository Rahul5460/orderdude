import React from 'react'
import "./footer.css"

const Footer=()=>{
  return (
  <div className='footer'>
<div className='top'> 
    <img src='./images/OD_Logo.png' className='footer-logo'/> <div className='p'> MADE BY RAHUL & TANISHA ✌</div>
    </div>
<div class="box-container">
    
    <div class="box">
        <h3>Locations</h3>
        <a href="#">India</a>
        <a href="#">Japan</a>
        <a href="#">Russia</a>
        <a href="#">USA</a>
        <a href="#">France</a>
    </div>

    <div class="box">
        <h3>For Restaurants</h3>
        <a href='#'>Search for Restaurant</a>
        <a href="#">Partner With Us </a>
        <a href='#'>Check Availablity</a>
        <a href="#">Apps For You</a>
        <a href="#">Dude For Work</a>
    </div>

    <div class="box">
        <h3>Contact Info</h3>
        <a href="#">+91-8556000406</a>
        <a href="#">+91-6280652254</a>
        <a href="#">tanishasharma1811@gmail.com</a>
        <a href="#">rahularora5460@gmail.com</a>
        <a href="#">Mohali, India - 140307</a>
    </div>

    <div class="box">
        <h3>Follow Us</h3>
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
        <a href="#">Linkedin</a>
    </div>

</div>
    </div>
  );
};

export default Footer;
