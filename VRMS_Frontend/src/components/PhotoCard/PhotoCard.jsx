import React from 'react'
import './PhotoCard.css'
const PhotoCard = () => {
  return (
    <div>
        <div className="card">
            <div className="photo">
            <img src='.././mayar.jpg'/> 
            </div>
            <div className="photo-details">
                <h3>Kul Bahadur Khatri</h3>
                <h4 style={{fontWeight:"lighter"}}>Mayor</h4>
                <h5 style={{fontWeight:"lighter"}}>ito.babaimun@gmail.com</h5>
                <h6 style={{fontWeight:"lighter",marginTop:"3px"}}>9810890039</h6>
            </div>
        </div>
    </div>
  )
}

export default PhotoCard