import React, { useEffect, useState } from 'react'
import './AdminHome.css'
import Cookies from 'js-cookie';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import BarLoader from "react-spinners/BarLoader";
const AdminHome = () => {
  const [loading, setLoading]=useState(false);
  const [showBirth, setShowBirth] = useState(false);
  const [showDeath, setShowDeath] = useState(false);
  const [showDashboard,setShowDashboard] = useState(false);
  const [deathApplications, setDeathApplications] = useState([]);
  
  const [totalBirth, setTotalBirth] = useState([]);
  const [totalDeath, setTotalDeath] = useState([]);

  const handleDashboardClick =async()=>{
    setShowDashboard(true);
    setShowBirth(false);
    setShowDeath(false);
    try {
      const response1 = await axios.get("http://localhost:9000/admin/death");
      const response2 = await axios.get("http://localhost:9000/admin/birth");
      setTotalDeath(response1.data.data)
      setTotalBirth(response2.data.data)
      
  } catch (error) {
      console.log(error)
  }
  }
  const handleBirthClick =()=>{
    setShowBirth(true);
    setShowDeath(false);
    setShowDashboard(false);
  }
  const handleDeathClick =async()=>{
    setShowBirth(false);
    setShowDeath(true);
    setShowDashboard(false);
    // const deathApplications = await axios.get("https://vrms-server-seven.vercel.app/api/admin/deathApplications")
    try {
      const response = await axios.get("http://localhost:9000/admin/death");
      setDeathApplications(response.data.data); // Update deathApplications state with fetched data
      console.log(deathApplications)
      console.log(deathApplications.userApplicationId)
    } catch (error) {
      console.error("Error fetching death applications:", error);
    }
  }
  const handleVerification =async(applicationId)=>{
    const id = applicationId;
    const response = await axios.post(`http://localhost:9000/api/admin/birthApprobation/${id}`)
  }

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
                    <h4 onClick={()=>handleDashboardClick()}>Dashboard</h4>
                    <h4 onClick={()=>handleBirthClick()}>Birth Application</h4>
                    <h4 onClick={()=>handleDeathClick()}>Death Application</h4>
                    <button id='adminLogOutBtn' onClick={handleLogout}>Log Out</button>
                </div>
            </div>
            <div id='adminMain'>
                <h1>Babai Rural Municipality</h1>
                <h2>Office of Municipal Executive, Dang, Lumbini Province</h2>
                <div className="mainApplications">
                  {/* Dashboard */}
                  {showDashboard && (
                    <div className="adminDashboard">
                      <h1>Admin Dashboard</h1>
                      <div className="totalApplications">
                        <h4>Total Death Applications: <i style={{color:"red"}}>{totalDeath.length}</i></h4>
                        <h4>Total Birth Applications: <i style={{color:"red"}}>{totalBirth.length}</i></h4>
                      </div>
                    </div>
                  )}
                    {/* Birth Applications */}
                    {showBirth && (
                      <div className="allBirthApplications">
                        <h3>All Birth Applications</h3>
                        <div className="allBirthAppDetails">
                          <span style={{border:"none"}} className="applicationId">
                            <h5>Application ID</h5>
                            <p>1</p>
                          </span>
                          <span className='childFullName'>
                            <h5>Child's Full Name</h5>
                            <p>Hari OM</p>
                            </span>
                          <span className="childBOD">
                            <h5>Child Birth Date</h5>
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
                    )}
                    {/* Death */}
                    {showDeath && (
                      <div className="allDeathApplications">
                        <h3>All Death Applications</h3>
                        {
                          deathApplications.map((death)=>{ //data not showing
                            return (
                              <div key={death._id} className="allDeathAppDetails">
                          <span style={{border:"none"}} className="applicationId">
                            <h5>Application ID</h5>
                            <p>{death.userApplicationId}</p>
                          </span>
                          <span className='decedentFullName'>
                            <h5>Decedent's Full Name</h5>
                            <p>{death.decedentFirstName}{death.decedentMiddleName}{death.decedentLastName}</p>
                            </span>
                          <span className="decedentBOD">
                            <h5>Decedent Birth Date</h5>
                            <p>{death.birthDate}</p>
                          </span>
                          <span className="applicationsStatus">
                            <h5>Application Status</h5>
                            <p>{death.applicationStatus}</p>
                          </span>
                          <span className="adminActions">
                            <h5>Admin Actions</h5>
                            <p>
                              <button onChange={()=>handleButton()}>View</button>
                              <button onChange={()=>handleVerification(death._id)}>Verify</button>
                            </p>
                          </span>
                        </div>
                            )
                          })
                        }
                    </div>
                    )}
                </div>
            </div>
        </div>
    </div>
    )}
    </div>
    
  )
}

export default AdminHome