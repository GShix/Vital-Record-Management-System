import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './ApplicationStatus.css'
const ApplicationStatus = () => {
    const searchApplication =async(e)=>{
        e.preventDefault();
    }
  return (
    <div>
        <div className="statusOfApp">
            <Header/>
            <div className="applicationStatus">
                <div className="appStatusText">
                    <h2>Check your Application Status</h2>
                    <div className="applicationIdInput">
                        <input type='number' name='userApplicationId' placeholder='Enter your Application Id'/><span id='appStatusBtn' onClick={searchApplication}>Click Here</span>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    </div>
  )
}

export default ApplicationStatus