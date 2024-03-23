import React from 'react'
import Header from '../../components/Header/Header'
import './Services.css'
const Services = () => {
  return (
    <div>
        <Header/>
        <div className="eservices">
            <div className="eservices-title">
                <h1>Vital Record Management System</h1>
            </div>
            <div className="services flex">
                <div className="birth">
                    <button>Online Birth Registration</button>
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