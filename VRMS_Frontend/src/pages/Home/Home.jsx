import React from 'react'
import './Home.css'
import PhotoCard from '../../components/PhotoCard/PhotoCard'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div>
        <header>
            <div className="navbar">
                <div className="mini-nav flex">
                    <div className="mini-nav1">
                    <img style={{width:"20px",height:"20px"}} src='.././public/facebook.png'/>
                    <img style={{width:"20px",height:"20px"}} src='.././public/twitter.png'/>
                    </div>
                    <div className="mini-nav2">
                        <img style={{width:"20px",height:"20px"}} src='.././public/phone.png'/>
                        <img style={{width:"20px",height:"20px"}} src='.././public/gmail.png'/>
                    </div>
                </div>
                <div className="main-nav flex">
                    <div className="nav-logo flex">
                        <div className="logo">
                            <img src='.././public/logo.png'/>
                        </div>
                        <div className="main-nav-text">
                            <h2 style={{fontSize:"30px"}}>Babai Rural Municipality</h2>
                            <h3 style={{fontSize:"18px",fontWeight:"lighter"}}>Office of Municipal Executive, Dang, Lumbini Province</h3>
                        </div>
                    </div>
                    <div className="main-nav-flag">
                        <img style={{width:"70px",height:"auto",marginRight:"10px"}} src='.././public/np_flag.gif'/>
                    </div>
                </div>
                <div className="nav-news flex">
                    <h2 style={{fontSize:"20px"}}>News</h2>
                </div>
            <div className="nav-list flex">
                <ul >
                    <li>Home</li>
                    <li>Introduction</li>
                    <li>E-Gov Services</li>
                    <li>Download</li>
                    <li>Notices</li>
                    <li>Contacts</li>
                </ul>
                <button type=''>Employee Login</button>
            </div>
            </div>
        </header>

        <div className="hero">
            <img src='.././public/hero1.jpg'/>
        </div>
        <div className="staff">
            <PhotoCard/>
        </div>

        <div className="footer flex">
            <Footer/>
        </div>
    </div>
  )
}

export default Home