import React from 'react'
import './PhotoCard.css'
const PhotoCard = (props) => {
  return (
    <div>
        <div className="card">
            <div className="photo">
            <img src={props.staffPhoto}/> 
            </div>
            <div className="photo-details">
                <h3>{props.staffName}</h3>
                <h4 id='staffPosition' style={{fontWeight:"lighter"}}>{props.staffPosition}</h4>
                <h5 id='staffContacts' style={{fontWeight:"lighter"}}>{props.staffGmail}</h5>
                <h6 id='staffContacts' className='staffPhone' style={{fontWeight:"lighter",marginTop:"3px"}}>{props.staffPhone}</h6>
            </div>
        </div>
    </div>
  )
}

export default PhotoCard