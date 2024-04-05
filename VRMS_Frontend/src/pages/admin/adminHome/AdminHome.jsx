import React, { useEffect, useState } from 'react'
import './AdminHome.css'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import BarLoader from "react-spinners/BarLoader";
const AdminHome = () => {
  const [loading, setLoading]=useState(false);

    // const isAuthenticated = !!Cookies.get('auth');
    // const Navigate = useNavigate();
    // useEffect(()=>{
    //   if(!isAuthenticated){
    //     Navigate('/vrms-admin');
    //   }
    //   setLoading(true);
    //   setTimeout(()=>{
    //     setLoading(false)
    //   },2000)
    // },[])

    var handleLogout =()=>{
      Cookies.remove('auth');
      Navigate('/vrms-admin');
    }
    // if(!isAuthenticated){
    //   return null;
    // }

    const getDeathApplication =async() =>{
      const deathApplications = await axios.get("https://vrms-server-seven.vercel.app/api/admin/deathApplications")
      console.log(deathApplications)
    }
      
  return (
    <div className="sweet-loading">

    {loading ? (<BarLoader
      color={"white"}
      loading={loading}
      size={50}
    />)
    :(
      <div>
        <div className="adminHome">
            <div className="adminSidebar">
                <div className="logo">
                    <img src='../logo.png'/>
                </div>
                <div className="adminSide">
                    <h4>Dashboard</h4>
                    <h4>Birth Application</h4>
                    <h4>Death Application</h4>
                    <button id='adminLogOutBtn' onClick={handleLogout}>Log Out</button>
                </div>
            </div>
            <div id='adminMain'>
                <h1 onClick={getDeathApplication}>Babai Rural Municipality</h1>
                <h2>Office of Municipal Executive, Dang, Lumbini Province</h2>
                <div className="mainApplications">
                    <div className="allDeathApplications">
                      <h3 id='allDeathh2'>All Death Applications</h3>
                      <div className="allDeathAppDetails">
                        <span style={{border:"none"}} className="applicationId">
                          <h5>Application ID</h5>
                          <p>1</p>
                        </span>
                        <span className='applicantFullName'>
                          <h5>Applicant Full Name</h5>
                          <p>Hari OM</p>
                          </span>
                        <span className="applicantBOD">
                          <h5>Applicant Birth Date</h5>
                          <p>2020002</p>
                        </span>
                        <span className="applicationsStatus">
                          <h5>Application Status</h5>
                          <p>Under Review</p>
                        </span>
                        <span className="adminActions">
                          <h5>Admin Actions</h5>
                          <p>
                            <button>View</button>
                            <button>Verify</button>
                          </p>
                        </span>
                      </div>
                    </div>
                    <div className="allBirthApplications">
                      <h3>All Birth Applications</h3>
                      <div className="allBirthAppDetails">
                        <span style={{border:"none"}} className="applicationId">
                          <h5>Application ID</h5>
                          <p>1</p>
                        </span>
                        <span className='applicantFullName'>
                          <h5>Applicant Full Name</h5>
                          <p>Hari OM</p>
                          </span>
                        <span className="applicantBOD">
                          <h5>Applicant Birth Date</h5>
                          <p>2020002</p>
                        </span>
                        <span className="applicationsStatus">
                          <h5>Application Status</h5>
                          <p>Under Review</p>
                        </span>
                        <span className="adminActions">
                          <h5>Admin Actions</h5>
                          <p>
                            <button>View</button>
                            <button>Verify</button>
                          </p>
                        </span>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )}
    </div>
    
  )
}

export default AdminHome