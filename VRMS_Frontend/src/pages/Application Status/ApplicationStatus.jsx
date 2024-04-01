import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './ApplicationStatus.css'
import axios from 'axios'
const ApplicationStatus = () => {
    const [userApplicationId,setId]= useState(0);
    const [error, setError] = useState(null);
    const [application,setApplication] = useState(0)
    const searchBirthApplication =async(e)=>{
        e.preventDefault();
    }


    const searchDeathApplication = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`https://vrms-server-seven.vercel.app/api/deathApplication/${userApplicationId}`);
            // const response = await axios.get(`http://localhost:9000/api/deathApplication/${userApplicationId}`);
            
            if (response.status === 200 || response.status ==304) {
                setApplication(response.data.deathApplication);
                console.log(application[0])
                setError(null);
            } else {
                setApplication(null);
                setError(response.data.message);
            }
        } catch (error) {
            setApplication(null);
            setError("An error occurred while fetching the application. Please try again later.");
        }
    }

    // useEffect(()=>{
    //     searchDeathApplication();

    // },[])
    // const searchDeathApplication =async(e)=>{
    //     e.preventDefault();

    //     const response = await axios.get(`http://localhost:9000/api/deathApplication/:${userApplicationId}`);
    //     console.log(response)
        
    // }
  return (
    <div>
        <div className="checkApplicationStatus">
            <Header/>
            <div className="applicationStatus">
                <div className="appStatusText">
                    <h2>Check your Application Status Here</h2>
                    <div className="applicationIdInput">
                        <input type='number' onChange={(e)=>setId(e.target.value)} name='userApplicationId' placeholder='Enter your Application Id'/>
                        <div className="appStatusBtn">
                            <button onClick={searchBirthApplication}>Birth Application Status</button>
                            <button onClick={searchDeathApplication}>Death Application Status</button>
                        </div>
                    </div>
                    <div className="statusOfApplication">
                        <h6>Your Death Application Status is <span id='statusStyle'>{application[0].applicationStatus}</span></h6>
                    </div>
                </div>
                
            </div>
            
            <Footer/>
        </div>
    </div>
  )
}

export default ApplicationStatus