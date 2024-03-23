import React from 'react'
import Header from '../../components/Header/Header'
import './Services.css'
import { useNavigate } from 'react-router-dom'
const Services = () => {
    const Navigate = useNavigate();
  return (
    <div>
        <Header/>
        <div className="eservices">
            <div className="eservices-title">
                <h1>Vital Record Management System</h1>
            </div>
            <div className="services flex">
                <div className="birth">
                    <button onClick={()=>Navigate("/birthRegistration")}>Online Birth Registration</button>
                </div>
                <div className="death">
                <button>Online Death Registration</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services