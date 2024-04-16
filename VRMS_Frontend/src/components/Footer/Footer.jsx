import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const Navigate = useNavigate()
  return (
    <div>
      <div className="footer">
        <div className="footer-first flex">
          <div className="foot-office-details">
              <div className="footer-logo">
                  <img onClick={()=>Navigate('/')} src='.././logo.png'/>
              </div>
            <h2>Babai Rural Municipality</h2>
            <h3>
              Office of Municipal Executive
            </h3>
            <h4>
            Lumbini Province, Hapure, Dang
            </h4>
            <h5>Phone: <span> 082403067</span></h5>
            <h5 style={{ marginTop:"3px" }}>Email: <span>ito.babaimun@gmail.com</span></h5>
          </div>
          <div className="foot-egovServices">
            <h3>E-Gov Services</h3>
            <li onClick={()=>Navigate('/birthRegistration')}>
              Birth Registration
            </li>
            <li onClick={()=>Navigate('/deathRegistration')}>
              Death Registration
            </li>
          </div>
          <div className="important-links">
            <h3>Important Links</h3>
            <li href="">
              Birth Certificate
            </li>
            <li href="">
              Death Certificate
            </li>
            <li href="">
              Have you lost Documents
            </li>
          </div>
          <div className="location">
            <h3 style={{marginBottom:"3px"}}>Office Location</h3>
            <iframe style={{ width: "25vw", height: "auto", style: "border:0" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.794754017949!2d82.12646007409299!3d28.183156804347846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39981d83cf10baa7%3A0x36e358ae202e448a!2sBabai%20Rural%20Municipality!5e0!3m2!1sen!2snp!4v1711190586246!5m2!1sen!2snp"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="footer-second flex">
          <h5 style={{fontWeight:"lighter"}}>&copy; Babai Rural Municipality, Dang
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
