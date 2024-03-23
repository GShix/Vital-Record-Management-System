import React from 'react'
import './Header.css'
const Header = () => {
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
                            <img src='.././logo.png'/>
                        </div>
                        <div className="main-nav-text">
                            <h2 style={{fontSize:"30px"}}>Babai Rural Municipality</h2>
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
                    <li><a href={'https://vrms-babaimuni.vercel.app/'}>Home</a></li>
                    <li><a href={''}>Introduction</a></li>
                    <li><a href={''}>E-Gov Services</a></li>
                    <li><a href={''}>Download</a></li>
                    <li><a href={''}>Notices</a></li>
                    <li><a href={''}>Contact</a></li>
                </ul>
                <button type=''>Employee Login</button>
            </div>
            </div>
        </header>
    </div>
  )
}

export default Header