import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './ApplicationStatus.css'
import API from '../http'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleBirth } from '../../store/birthSlice'
import { fetchSingleDeath } from '../../store/deathSlice'
import { isDraft } from '@reduxjs/toolkit'
const ApplicationStatus = () => {
    const [userApplicationId,setId]= useState(0);
    const [isbirthButton,clickBirthButton] = useState(false);
    const [isdeathButton,clickDeathButton] = useState(false);

    const {singleDeath} =useSelector((state)=>state.deathApplication)
    const {singleBirth} =useSelector((state)=>state.birthApplication)
    const dispatch = useDispatch();
    const searchBirthApplication =async(e)=>{
        e.preventDefault();
        clickBirthButton(true);
        clickDeathButton(false);
        try {
            dispatch(fetchSingleBirth(userApplicationId));
        }catch (error) {
            alert("Something went wrong",error);
        }
    }

    const searchDeathApplication = async (e) => {
        e.preventDefault();
        clickDeathButton(true);
        clickBirthButton(false);
        try {
            dispatch(fetchSingleDeath(userApplicationId))
        } catch (error) {
            alert("Something went wrong",error);
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
                            {singleBirth && (singleBirth!=="" || singleBirth!==null || singleBirth!==undefined)?( <h6 style={{color:"red"}}>No Birth Application found with id: {userApplicationId}</h6>):(<div className="success"><h6>Your Birth Application Status is <span id='statusStyle'>{singleBirth.applicationStatus}</span></h6>
                            {(singleBirth.applicationStatus=='verified')?<button className='downloadBtn'>Download Your Certificate</button>:""}</div>)}
                        </div>
                        )}
                        {/*  */}
                        {isdeathButton && (
                        <div className="deathAppStatus">
                            {singleDeath && (singleDeath!=="" || singleDeath!==null || singleDeath!==undefined)?(<div className="success"><h6>Your Death Application Status is <span id='statusStyle'>{singleDeath.applicationStatus}</span></h6>{(singleDeath.applicationStatus=="verified")?<button className='downloadBtn'>Download Your Certificate</button>:""}</div>):<h6 style={{color:"red"}}>No Death Application found with id: {userApplicationId}</h6>}
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