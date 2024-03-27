import React from 'react'
import './Header.css'
import {useNavigate} from 'react-router-dom'
import Services from '../../pages/E-Gov Services/Services'
const Header = () => {
    const Navigate = useNavigate()
  return (
    <div>
        <header>
            <div className="navbar">
                <div className="mini-nav flex">
                    <div className="mini-nav1">
                    <img style={{width:"20px",height:"20px"}} src='.././facebook.png'/>
                    <img style={{width:"20px",height:"20px"}} src='.././twitter.png'/>
                    </div>
                    <div className="mini-nav2">
                        <img style={{width:"20px",height:"20px"}} src='.././phone.png'/>
                        <img style={{width:"20px",height:"20px"}} src='.././gmail.png'/>
                    </div>
                </div>
                <div className="main-nav flex">
                    <div className="nav-logo flex">
                        <div className="logo">
                            <img onClick={()=>Navigate('/')} src='.././logo.png'/>
                        </div>
                        <div className="main-nav-text">
                            <h2 onClick={()=>Navigate('/')} style={{fontSize:"30px"}}>Babai Rural Municipality</h2>
                            <h3 style={{fontSize:"18px",fontWeight:"lighter"}}>Office of Municipal Executive, Dang, Lumbini Province</h3>
                        </div>
                        
                    </div>
                    <div className="main-nav-flag">
                        <img style={{width:"70px",height:"auto",marginRight:"10px"}} src='.././np_flag.gif'/>
                    </div>
                </div>
                <div className="nav-news flex">
                    <h2 style={{fontSize:"20px"}}>News</h2>
                </div>
            <div className="nav-list flex">
                <ul >
                    <li onClick={()=>Navigate('/')}>Home</li>
                    <li onClick={()=>Navigate('/')}>Introduction</li>
                    <li onClick={()=>Navigate('/eservices')}>E-Gov Services</li>
                    <li onClick={()=>Navigate('/')}>Download</li>
                    <li onClick={()=>Navigate('/')}>Notices</li>
                    <li onClick={()=>Navigate('/')}>Contact</li>
                </ul>
                <button className='successHomeBtn' onClick={()=>Navigate('/')}>Application Status</button>
                <button id='employee-login-btn' type=''>Admin Login</button>
            </div>
            </div>
        </header>
    </div>
  )
}

export default Header