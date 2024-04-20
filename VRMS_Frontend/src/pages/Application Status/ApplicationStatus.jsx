import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './ApplicationStatus.css'
import API from '../http'
const ApplicationStatus = () => {
    const [userApplicationId,setId]= useState(0);
    const [error, setError] = useState(null);
    const [deathApplication,setDeathApplication] = useState(0);
    const [birthApplication,setBirthApplication] = useState(0);
    const [isbirthButton,clickBirthButton] = useState(false);
    const [isdeathButton,clickDeathButton] = useState(false);
    const searchBirthApplication =async(e)=>{
        e.preventDefault();
        clickDeathButton(false);
        clickBirthButton(true);
        try {
            // const response = await axios.get(`https://vrms-server-seven.vercel.app/api/birthApplication/${userApplicationId}`);
            const response = await API.get(`/birthApplication/${userApplicationId}`);

            if (response.status === 200) {
                setBirthApplication(response.data.brithApplication[0]);
                console.log(birthApplication);
                setError(null);
            } else {
                setBirthApplication(null);
                setError(response.data.message);
            }
        } catch (error) {
            setBirthApplication(null);
            setError("An error occurred while fetching the application. Please try again later.");
        }
    }


    const searchDeathApplication = async (e) => {
        e.preventDefault();
        clickDeathButton(true);
        clickBirthButton(false);
        try {
            // const response = await axios.get(`https://vrms-server-seven.vercel.app/api/deathApplication/${userApplicationId}`);
            const response = await API.get(`/deathApplication/${userApplicationId}`);
            
            if (response.status === 200) {
                console.log(response)
                setDeathApplication(response.data.deathApplication[0]);
                console.log(deathApplication);
                setError(null);
            } else {
                setDeathApplication(null);
                setError(response.data.message);
                Navigate("/applicationStatus")
            }
        } catch (error) {
            setDeathApplication(null);
            setError("An error occurred while fetching the application. Please try again later.");
        }
    }

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
                        {isbirthButton && (
                            <div className="birthAppStatus">
                            {birthApplication?(<h6>Your Birth Application Status is <span id='statusStyle'>{birthApplication.applicationStatus}</span></h6>):<h6 style={{color:"red"}}>No Birth Application found with id: {userApplicationId}</h6>}
                        </div>
                        )}
                        {/*  */}
                        {isdeathButton && (
                            <div className="deathAppStatus">
                            {deathApplication?(<h6>Your Death Application Status is <span id='statusStyle'>{deathApplication.applicationStatus}</span></h6>):<h6 style={{color:"red"}}>No Death Application found with id: {userApplicationId}</h6>}
                        </div>
                        )}
                    </div>
                </div>
                
            </div>
            
            <Footer/>
        </div>
    </div>
  )
}

export default ApplicationStatus