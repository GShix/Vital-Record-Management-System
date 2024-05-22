import React, { useState } from 'react'
import './Header.css'
import {useNavigate} from 'react-router-dom'
const Header = () => {
    const Navigate = useNavigate();
    const [clickMenu,setClickMenu] = useState(false);
    console.log(clickMenu)
  return (
    <div>
        <header>
            <div className="navbar">
                <div className="mini-nav flex">
                    <div className="mini-nav1">
                    <img src='.././facebook.png'/>
                    <img src='.././twitter.png'/>
                    </div>
                    <div className="mini-nav2">
                        <img src='.././phone.png'/>
                        <img src='.././gmail.png'/>
                    </div>
                </div>
                <div className="main-nav flex">
                    <div className="nav-logo flex">
                        <div className="logo">
                            <img onClick={()=>Navigate('/')} src='.././logo.png'/>
                        </div>
                        <div className="main-nav-text">
                            <h2 onClick={()=>Navigate('/')}>Babai Rural Municipality</h2>
                            <h3>Office of Municipal Executive, Dang, Lumbini Province</h3>
                        </div>
                        
                    </div>
                    <div className="main-nav-flag">
                        <img src='.././np_flag.gif'/>
                    </div>
                </div>
                <div className="nav-news flex">
                    <h2>News</h2>
                    <marquee><a href='/'>दोस्रो बोलपत्रको सूचना (Invitation for Bids) !!&nbsp;</a> <a href='/'>&nbsp;बोलपत्रको सूचना(Invitation for Online Bids) !!&nbsp;</a> <a href='/'>&nbsp;बोलपत्र आशयको मुल्याङ्कन सूचना !!&nbsp;</a> <a href='/'>&nbsp;गोल्ड कप फुटवल प्रतियोगितामा फुटबल टिम सहभागीता सम्बन्धी सम्बन्धी सूचना !!&nbsp;</a><a href='/'>&nbsp;बबई गाउँपालिका स्थित सबै सामुदायिक विद्यालयहरु प्रस्ताव पेश गर्ने सम्बन्धमा !!&nbsp;</a><a href='/'>&nbsp;नदिजन्य पदार्थको बिक्री शुल्क उठाउने सम्बन्धी बोलपत्र ठेक्का को मुल्याङ्कन बोलपत्र आशयको सूचना !!!</a></marquee>
                </div>
            <div className="nav-list flex">
                <ul className="nav-list-items">
                    <li onClick={()=>Navigate('/')}>Home</li>
                    <li onClick={()=>Navigate('/introduction')}>Introduction</li>
                    <li onClick={()=>Navigate('/eservices')}>E-Gov Services</li>
                    <li onClick={()=>Navigate('/')}>
                        <select style={{border:'none',fontSize:"16px",textDecoration:"none"}} className="dropdown">
                            <option id='#'>Download</option>
                            <option id=''>Birth Certificate</option>
                            <option id=''>Death Certificate</option>
                        </select>
                    </li>
                    <a style={{textDecoration:"none"}} href='.././VRMS_Guide.pdf'><li>How to use VRMS?</li></a>    
                    <li onClick={()=>Navigate('/contact')}>Contact</li>
                </ul>
                <button className='successHomeBtn' onClick={()=>Navigate('/applicationStatus')}>Application Status</button>
                <button id='employee-login-btn' type='' onClick={()=>Navigate('/vrms-admin')}>Admin Login</button>
                <div className="list-menu">
                    <img src={clickMenu ?".././public/menu-cancel.png":'.././menu.png'} onClick={()=>setClickMenu(!clickMenu)}/>
                </div>
            </div>

            {clickMenu ?
            (
                <div className="md-nav">
                <h5 onClick={()=>Navigate('/')}>Home</h5>
                <h5 onClick={()=>Navigate('/introduction')}>Introduction</h5>
                <h5 onClick={()=>Navigate('/eservices')}>E-Gov Services</h5>
                <h5 onClick={()=>Navigate('/')}>
                    <select style={{border:'none',background:"none",fontFamily:"arial",fontWeight:"600",fontSize:"15px",textDecoration:"none",color:"white"}} className="dropdown">
                        <option id='#'>Download</option>
                        <option id=''>Birth Certificate</option>
                        <option id=''>Death Certificate</option>
                    </select>
                </h5>
                <a style={{textDecoration:"none",color:"white"}} href='.././VRMS_Guide.pdf'><h5>How to use VRMS?</h5></a>    
                <h5 onClick={()=>Navigate('/contact')}>Contact</h5>
        </div>
            )
            :""}
            </div>
        </header>
    </div>
  )
}

export default Header