import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
            <div className="footer-first flex">
                <div className="foot-office-details">
                    <h2 style={{fontSize:"24px"}}>Babai Rural Municipality</h2>
                    <h3 style={{fontSize:"14px",fontWeight:"lighter"}}>Office of Municipal Executive, Lumbini Province</h3>
                    <h3 style={{fontSize:"14px",fontWeight:"lighter"}}>Hapure, Dang</h3>
                </div>
                <div className="foot-egovServices" style={{marginLeft:"60px"}}>
                    <h3 style={{fontSize:"20px"}}>E-Gov Services</h3>
                    <li style={{fontSize:"14px",fontWeight:"normal"}}>Birth Registration</li>
                    <li style={{fontSize:"14px",fontWeight:"normal"}}>Death Registration</li>
                </div>
                <div className="important-links" style={{marginLeft:"30px"}}>
                    <h3 style={{fontSize:"20px"}}>Important Links</h3>
                    <li style={{fontSize:"14px",fontWeight:"normal"}} href="">Birth Certificate</li>
                    <li style={{fontSize:"14px",fontWeight:"normal"}} href="">Death Certificate</li>
                    <li style={{fontSize:"14px",fontWeight:"normal"}} href="">Lost Documents</li>
                </div>
                <div className="location" style={{marginLeft:"30px"}}><h3 style={{fontSize:"20px"}}>Office Location</h3>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.794754017949!2d82.12646007409299!3d28.183156804347846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39981d83cf10baa7%3A0x36e358ae202e448a!2sBabai%20Rural%20Municipality!5e0!3m2!1sen!2snp!4v1711190586246!5m2!1sen!2snp" style={{width:"650", height:"450", style:"border:0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className="footer-second flex">
                <h5 style={{textAlign:"center", fontWeight:"lighter",fontSize:'12px'}}>Copyright &copy Babai Rural Municipality, Dang</h5>
            </div>
    </div>
  )
}

export default Footer