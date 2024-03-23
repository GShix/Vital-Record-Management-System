import React from 'react'
import './Home.css'
import PhotoCard from '../../components/PhotoCard/PhotoCard'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
const Home = () => {
  return (
    <div>
        
        <Header/>
        <div className="hero">
            <img src='.././hero1.jpg'/>
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