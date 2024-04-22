import React, { useEffect, useState } from 'react'
import './AdminHome.css'
import Cookies from 'js-cookie';
import { Navigate, useFetcher, useNavigate } from 'react-router-dom';
import BarLoader from "react-spinners/BarLoader";
import API from '../../http';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTotalApplication } from '../../../store/dashboardSlice';
import { fetchSingleDeath } from '../../../store/deathSlice';
import { fetchSingleBirth } from '../../../store/birthSlice';

const AdminHome = () => {
  const [loading, setLoading]=useState(false);
  const [showBirth, setShowBirth] = useState(false);
  const [showDeath, setShowDeath] = useState(false);
  const [showDashboard,setShowDashboard] = useState(false);
  const [deathApplications, setDeathApplications] = useState([]);
  const [birthApplications, setBirthApplications] = useState([]);
  
  const [isSingleBirth, setSingleBirth] = useState(false);
  const [isSingleDeath, setSingleDeath] = useState(false);

  const dispatch = useDispatch();
  const {birth,death} =useSelector((state)=>state.dashboard);
  const {singleDeath} =useSelector((state)=>state.deathApplication)
  const {singleBirth} =useSelector((state)=>state.birthApplication)
  // console.log(singleDeath)
  useEffect(()=>{
    dispatch(fetchTotalApplication());
    setShowDashboard(true);
  },[])

  const handleDashboardClick =async()=>{
    try {
      setShowDashboard(true);
    setShowBirth(false);
    setShowDeath(false);
    setSingleBirth(false);
    setSingleDeath(false);
  } catch (error) {
      console.log(error)
  }
  }
  const handleBirthClick =async()=>{
    setShowBirth(true);
    setShowDeath(false);
    setShowDashboard(false);
    setSingleBirth(false);
    setSingleDeath(false);
    try {
      setBirthApplications(birth); 
    } catch (error) {
      console.error("Error fetching death applications:", error);
    }
  }
  const handleDeathClick =async()=>{
    setShowBirth(false);
    setShowDeath(true);
    setShowDashboard(false);
    setSingleBirth(false);
    setSingleDeath(false);
    try {
      setDeathApplications(death);
    } catch (error) {
      console.error("Error fetching death applications:", error);
    }
  }
  //application verification
  const handleBirthVerification =async(applicationId,appStatus,uid)=>{
    
    setShowDashboard(false);
    try {
      const id = applicationId;
      const applicationStatus = appStatus
      const userApplicationId = uid
      if(applicationStatus =="verified"){
        alert(`Application with uid: ${userApplicationId} is already verified`)
      }else{
        const response = await API.post(`/admin/deathVerification/${id}`)
        alert(`Application with uid: ${userApplicationId} is verified successfully`)
      
      }
    
    } catch (error) {
      console.log(error)
    }
  }
  const handleDeathVerification =async(applicationId,appStatus,uid)=>{
    setShowDeath(true);
    setShowDashboard(false);
    setSingleBirth(false);
    setShowBirth(false);
    setShowDashboard(false);
    setSingleDeath(false);
    try {
      const id = applicationId;
      const applicationStatus = appStatus
      const userApplicationId = uid
      if(applicationStatus =="verified"){
        alert(`Application with uid: ${userApplicationId} is already verified`)
      }else{
        const response = await API.post(`/admin/deathVerification/${id}`)
        alert(`Application with uid: ${userApplicationId} is verified successfully`)
      
      }
    
    } catch (error) {
      console.log(error)
    }
  }

  //single application click
  const handleSingleDeath =async(uid)=>{
    setSingleBirth(false);
    setShowBirth(false);
    setShowDeath(false);
    setShowDashboard(false);
    setSingleDeath(true);
    const userAppId = uid
    try {
      dispatch(fetchSingleDeath(userAppId));
    } catch (error) {
      alert("Error",error);
    }
  }
  const handleSingleBirth = async(uid)=>{
    setSingleBirth(true);
    setShowBirth(false);
    setShowDeath(false);
    setShowDashboard(false);
    setSingleDeath(false);
    const userAppId = uid
    try {
      dispatch(fetchSingleBirth(userAppId))
    } catch (error) {
      alert("Error",error);
      console.log(error);
    }
  }
  //deathRejection
  const handleDeathRejection =async(applicationId,uid)=>{
    setShowDashboard(false);
    const id = applicationId;
    const userApplicationId =uid
    try {
      const response = await API.post(`/admin/deathRejection/${id}`);
      if(response.status ==200){
        alert(`Application with id: ${userApplicationId} is rejected successfully`)
        setShowDeath(true);
        Navigate("/AdminHome")
      }
    } catch (error) {
      alert("Error",error);
    }
  }
  //birthRejection
  const handleBirthRejection =async(applicationId,uid)=>{
    setShowDashboard(false);
    const id = applicationId;
    const userApplicationId =uid
    try {
      const response = await API.post(`/admin/birthRejection/${id}`);
      if(response.status ==200){
        alert(`Application with id: ${userApplicationId} is rejected successfully`)
        setShowBirth(true);
        Navigate("/AdminHome")
      }
    } catch (error) {
      alert("Error",error);
    }
  }

    
  // auth authentication
  // const isAuthenticated = !!Cookies.get('auth');
  //   const Navigate = useNavigate();
  //   useEffect(()=>{
  //     if(!isAuthenticated){
  //       Navigate('/vrms-admin');
  //     }
  //     setLoading(true);
  //     setTimeout(()=>{
  //       setLoading(false)
  //     },2000)
  //   },[])

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
        <div className="adminPanel">
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
            <div className='adminMain'>
                <h1>Babai Rural Municipality</h1>
                <h2>Office of Municipal Executive, Dang, Lumbini Province</h2>
                <div className="mainApplications">
                  {/* Dashboard */}
                  {showDashboard && (
                    <div className="adminDashboard">
                      <h2>Admin Dashboard</h2>
                      <div className="totalApplications">
                        {death.length>0 && (
                          <h4>Total Death Applications: <i style={{color:"red"}}>{death.length}</i></h4>
                        )}
                        {birth.length>0 && (
                          <h4>Total Birth Applications: <i style={{color:"red"}}>{birth.length}</i></h4>
                        )}
                      </div>
                    </div>
                  )}
                    {/* Birth Applications */}
                    {showBirth && (
                      <div className="allBirthApplications">
                        <h3>All Birth Applications: <i style={{color:"red"}}> {birth.length}</i></h3>
                        {
                          birthApplications.map((birth)=>{
                            return (
                              <div key={birth._id} className="allBirthAppDetails">
                          <span style={{border:"none"}} className="applicationId">
                            <h5>Application ID</h5>
                            <p>{birth.userApplicationId}</p>
                          </span>
                          <span className='childFullName'>
                            <h5>Child's Full Name</h5>
                            <p>{birth.firstName} {birth.middleName} {birth.lastName} </p>
                            </span>
                          <span className="childBOD">
                            <h5>Child Birth Date</h5>
                            <p>{birth.birthDate}</p>
                          </span>
                          <span className="applicationsStatus">
                            <h5>Application Status</h5>
                            <p className={birth.applicationStatus=='verified'?"statusVerified":" "}>{birth.applicationStatus}</p>
                          </span>
                          <span className="adminActions">
                            <h5>Admin Actions</h5>
                            <p>
                              <button onClick={()=>handleSingleBirth(birth.userApplicationId)}>View</button>
                              <button onClick={()=>handleBirthVerification(birth._id,birth.applicationStatus,birth.userApplicationId)}>Verify</button>
                            </p>
                          </span>
                        </div>
                            )
                          })
                        }
                    </div>
                    )}
                    {/* Death */}
                    {showDeath && (
                      <div className="allDeathApplications">
                        <h3>All Death Applications:<i style={{color:"red"}}> {death.length}</i></h3>
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
                              <button onClick={()=>handleSingleDeath(death.userApplicationId)}>View</button>
                              <button onClick={()=>handleDeathVerification(death._id,death.applicationStatus,death.userApplicationId)}>Verify</button>
                            </p>
                          </span>
                        </div>
                            )
                          })
                        }
                    </div>
                    )}

                  {isSingleDeath && (
                    <div className="singleDeath">
                      <div className="allDeathApplications">
                    <h3>ID:<i>{singleDeath.userApplicationId}</i> Death Applications</h3>
                      <div className="deathData">
                          <div className="deathApplication">
                            <div className="deathDetails">
                              <span>Decedent's Details</span>
                              <div className="decedent-birth-certi-no margin-btm margin-top">
                                <label htmlFor='birthCertNo'>Birth Certificate No.: <span id='singleSmallSpan'>{singleDeath.birthCertNo}</span> </label>
                              </div>
                              <div className="decedent-name">
                                <label  htmlFor="decedentFirstName">First Name: <span id='singleSmallSpan'>{singleDeath.decedentFirstName}</span>
                                </label>
                                <label className="margin-left"  htmlFor="decedentMiddleName">Middle Name: <span id='singleSmallSpan'>{singleDeath.decedentMiddleName}</span>
                                </label>
                                <label className="margin-left"  htmlFor="decedentLastName">Last Name: <span id='singleSmallSpan'>{singleDeath.decedentLastName}</span>
                                </label>
                              </div>
                              <div className="birth-death-date margin-top3">
                                <label  htmlFor="birthDate">Birth Date: <span id='singleSmallSpan'>{singleDeath.birthDate}</span>
                                </label>
                                <label className="margin-left"  htmlFor="deathDate">Death Date: <span id='singleSmallSpan'>{singleDeath.deathDate}</span>
                                </label>
                              </div>
                              <div className="death-gender margin-top">
                              <label htmlFor="Gender">Gender: <span id='singleSmallSpan'>{singleDeath.gender}</span> </label>
                              </div>
                              <div className="cause-of-death margin-top">
                              <label  htmlFor="causeOfDeath">Cause of Death: <span id='singleSmallSpan'>{singleDeath.causeOfDeath}</span> </label>
                              </div>
                              <div className="birth-address margin-top2">
                                <span>Birth Address(National)</span>
                                <div className="birth-address-details">
                                  <label htmlFor="birthDistrict" id="two">District: <span id='singleSmallSpan'>{singleDeath.birthDistrict}</span> </label>
                                  <label className="margin-left" htmlFor="birthMunicipality" id="two">Municipality: <span id='singleSmallSpan'>{singleDeath.birthMunicipality}</span> </label>
                                  <label className="margin-left" htmlFor="birthWardno" id="two">Ward No.: <span id='singleSmallSpan'>{singleDeath.birthWardno}</span> </label><br></br>
                                  <label className="margin-top" htmlFor="birthVillage" id="two">Village: <span id='singleSmallSpan'>{singleDeath.birthVillage}</span> </label>
                                </div>
                              </div>
                              <div className="death-address margin-top2">
                                <span>Death Address(National)</span>
                                <div className="death-address-details">
                                  <label htmlFor="deathDistrict" id="two">District: <span id='singleSmallSpan'>{singleDeath.deathDistrict}</span> </label>
                                  <label className="margin-left" htmlFor="deathMunicipality" id="two">Municipality: <span id='singleSmallSpan'>{singleDeath.deathMunicipality}</span> </label>
                                  <label className="margin-left" htmlFor="deathWardno" id="two">Ward No.: <span id='singleSmallSpan'>{singleDeath.deathWardno}</span> </label><br></br>
                                  <label className="margin-top" htmlFor="deathVillage" id="two">Village: <span id='singleSmallSpan'>{singleDeath.deathVillage}</span> </label>
                                </div>
                                <div className="death-place margin-top2">
                                <label htmlFor="deathPlace">Death Place: <span id='singleSmallSpan'>{singleDeath.deathPlace}</span> </label>
                                </div>
                              </div>
                              <div className="death-other-details margin-top2">
                                <span>Other Details</span>
                                <div className="death-citizenship margin-top">
                                  <label htmlFor='decedentCitizenshipNo' id='one' className=''>Citizenship No.: <span id='singleSmallSpan'>{singleDeath.decedentCitizenshipNo}</span> </label>
                                  <label htmlFor='decedentCitishipIssuedDist' id='one' className='margin-left'>Issued District: <span id='singleSmallSpan'>{singleDeath.decedentCitishipIssuedDist}</span> </label>
                                  <label htmlFor='decedentCitishipIssuedDate' id='one' className='margin-left'>Issued Date: <span id='singleSmallSpan'>{singleDeath.decedentCitishipIssuedDate}</span> </label>
                                </div>
                                <div className="death-marrital-stat">
                                  <label id='one'>Marrital Status: <span id='singleSmallSpan'></span></label>
                                </div>
                                <div className="death-edu margin-top2">
                                  <label htmlFor='deathEducation' id='one'>Education: <span id='singleSmallSpan'>{singleDeath.deathEducation}</span></label>
                                </div>
                              </div>
                              <div className="decedent-parent margin-top2">
                              <span>Parent Details</span>
                              <div className="decedent-parent-details margin-top">
                                <div className="decedentFather">
                                  <label  htmlFor="decedentFather">Father's Name: <span id='singleSmallSpan'>{singleDeath.decedentFather}</span>
                                  </label>
                                </div>
                                <div className="decedentMother margin-top">
                                  <label  htmlFor="decedentMother">Mother's Name: <span id='singleSmallSpan'>{singleDeath.decedentMother}</span>
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="grand-details margin-top2">
                              <span>Grand Parent Details</span>
                              <div className="grand-father margin-top">
                                <label htmlFor="grandFather">Grand Father's Name: <span id='singleSmallSpan'>{singleDeath.grandFather}</span></label>
                              </div>
                            </div>
                            <div className="userEmail margin-top2">
                              <label htmlFor='userEmail'>Recipient Mail: <span id='singleSmallSpan'>{singleDeath.userEmail}</span></label>
                            </div>
                            </div>
                          </div>
                          <div className="singleAppBtn">
                            <button onClick={()=>handleDeathVerification(singleDeath._id,singleDeath.applicationStatus,singleDeath.userApplicationId)}>Verify Application</button>
                            <button onClick={()=>handleDeathRejection(singleDeath._id,singleDeath.userApplicationId)}>Reject Application</button>
                          </div>
                      </div>
                    </div>
                    </div>
                  )}
                  {isSingleBirth && (
                      <div className="singleBirth">
                        <div className="allBirthApplications">
                          <h3>ID: <i>{singleBirth.userApplicationId}</i> Birth Applications</h3>
                        <div className="birthData">
                            <div className="birthApplication">
                                <div className="birth-details">
                                <span>Newborn Baby's Details</span>
                                <div className="baby-name  margin-top">
                                  <label  htmlFor="firstName">First Name: <span id='sspan'>{singleBirth.firstName}</span>
                                  </label>
                                  <label className="margin-left"  htmlFor="middleName">Middle Name: <span id='sspan'>{singleBirth.middleName}</span>
                                  </label>
                                  <label className="margin-left"  htmlFor="lastName">Last Name: <span id='sspan'>{singleBirth.lastName}</span>
                                  </label>
                                </div>
                                <div className="birth-time margin-top2">
                                  <label  htmlFor="birthDate">Date: <span id='sspan'>{singleBirth.birthDate}</span>
                                  </label>
                                  <label className="margin-left"  htmlFor="birthTime">Time: <span id='sspan'>{singleBirth.birthTime}</span>
                                  </label>
                                </div>
                                <div className="birth-place margin-top2">
                                  <label htmlFor="birthPlace">Birth Place: <span id='sspan'>{singleBirth.birthPlace}</span></label>
                              </div>
                              <div className="baby-gender margin-top2">
                                <label  htmlFor="Gender">Gender: <span id='sspan'>{singleBirth.babyGender}</span></label>
                              </div>
                              <div className="type-of-birth margin-top2">
                                <label  htmlFor="type-of-birth">Type of Birth: <span id='sspan'>{singleBirth.birthType}</span></label>
                              </div>
                              <div className="baby-weight margin-top2">
                                <label  htmlFor="baby-weight" >Baby's Weight in GM(At birth): <span id='sspan'>{singleBirth.babyWeight}</span></label>
                              </div>
                              <div className="birth-address margin-top2">
                                <span>Birth Address(National)</span>
                                <div className="birth-address-details">
                                  <label htmlFor="birth-district" id="two">District: <span id='sspan'>{singleBirth.birthDistrict}</span></label>
                                  <label className="margin-left" htmlFor="birth-municipality" id="two">Municipality: <span id='sspan'>{singleBirth.birthMunicipality}</span></label>
                                  <label className="margin-left" htmlFor="birth-wardno" id="two">Ward No.: <span id='sspan'>{singleBirth.birthWardno}</span></label><br></br>
                                  <label className="margin-top" htmlFor="birth-village" id="two">Village: <span id='sspan'>{singleBirth.birthVillage}</span></label>
                                </div>
                                
                              </div>
                              <div className="grand-details margin-top2">
                                <span>Grand Parent Details</span>
                                <div className="grand-father margin-top">
                                  <label  htmlFor="grand-father">Grand Father's Name: <span id='sspan'>{singleBirth.grandFather}</span></label>
                                </div>
                              </div>
                              <div className="baby-parent margin-top2">
                                <span>Parent Details</span>
                                <div className="baby-parent-details margin-top">
                                  <label  htmlFor="baby-parent">
                                  <div className="babyFather">
                                    <label  htmlFor="babyFather">Father's First Name: <span id='sspan'>{singleBirth.babyFatherFirstName}</span>
                                    </label>
                                    <label  htmlFor="babyFather" className='margin-left'>Middle Name: <span id='sspan'>{singleBirth.babyFatherMiddleName}</span>
                                    </label>
                                    <label  htmlFor="babyFather" className='margin-left'>Last Name: <span id='sspan'>{singleBirth.babyFatherLastName}</span>
                                    </label>
                                  </div>
                                  <div className="babyMother margin-top">
                                    <label  htmlFor="babyMother">Mother's First Name: <span id='sspan'>{singleBirth.babyMotherFirstName}</span>
                                    </label>
                                    <label  htmlFor="babyMother" className='margin-left'>Middle Name: <span id='sspan'>{singleBirth.babyMotherMiddleName}</span>
                                    </label>
                                    <label  htmlFor="babyMother" className='margin-left'>Last Name: <span id='sspan'>{singleBirth.babyMotherLastName}</span>
                                    </label>
                                  </div>
                                  </label>
                                </div>
                              </div>
                              <div className="parentAddress margin-top2">
                                  <span>Parent's Permanent Address</span>
                                  <div className="parentAddressDetails">
                                    <label  htmlFor="parentDistrict">District: <span id='sspan'>{singleBirth.parentDistrict}</span></label>
                                    <label className="margin-left" htmlFor="parentMunicipality">Municipality: <span id='sspan'>{singleBirth.parentMunicipality}</span></label>
                                    <label  className="margin-left" htmlFor="parentWardno">Wardno: <span id='sspan'>{singleBirth.parentWardno}</span></label><br></br>
                                    <label  htmlFor="parentVillage">Village: <span id='sspan'>{singleBirth.parentVillage}</span></label>
                                    <label  className="margin-left" htmlFor="parentHouseno">Houseno: <span id='sspan'>{singleBirth.parentHouseno}</span></label>
                                  </div>
                              </div>
                              <div className="parentAgeDetails margin-top2">
                                    <span>Parent's Age</span>
                                      <div className="parentAge">
                                        <label  htmlFor="parentFatherAge">Father's Age: <span id='sspan'>{singleBirth.parentFatherAge}</span></label>
                                        <label  className="margin-left" htmlFor="parentMotherAge">Mother's Age: <span id='sspan'>{singleBirth.parentMotherAge}</span></label>
                                      </div>
                              </div>
                              <div className="parentCitizenDetails margin-top2">
                                <span>Citizenship Number:</span>
                                <div className="parentCitizenship">
                                  <label  htmlFor="parentFatherCitizenshipno">Father's Citizenship No: <span id='sspan'>{singleBirth.parentFatherCitizenshipno}</span></label>
                                  <label  className="margin-left" htmlFor="parentFatherCitizenshipDistrict">Issued District: <span id='sspan'>{singleBirth.parentFatherCitizenshipDistrict}</span></label><br></br>
                                  <label  htmlFor="parentFatherCitizenshipDate">Issued Date: <span id='sspan'>{singleBirth.parentFatherCitizenshipDate}</span></label><br></br>
                                  <label  htmlFor="parentMotherCitizenshipno">Mother's Citizenship No: <span id='sspan'>{singleBirth.parentMotherCitizenshipno}</span></label>
                                  <label  className="margin-left" htmlFor="parentMotherCitizenshipDistrict">Issued District: <span id='sspan'>{singleBirth.parentMotherCitizenshipDistrict}</span></label><br></br>
                                  <label  htmlFor="parentMotherCitizenshipDate">Issued Date: <span id='sspan'>{singleBirth.parentMotherCitizenshipDate}</span></label>
                                </div>
                              </div>
                              <div className="parentOtherDetails margin-top2">
                                <span>Others:</span>
                                <div className="FatherDetail margin-top">
                                  <label  htmlFor="fatherEducation">Father's Education: <span id='sspan'>{singleBirth.fatherEducation}</span></label>
                                  <label  className="margin-left" htmlFor="fatherOccupation">Occupation: <span id='sspan'>{singleBirth.fatherOccupation}</span></label>
                                  <label  className="margin-left" htmlFor="fatherReligion">Religion: <span id='sspan'>{singleBirth.fatherReligion}</span></label><br></br>
                                  <label  htmlFor="fatherMotherTongue">Mother Tongue: <span id='sspan'>{singleBirth.fatherMotherTongue}</span></label>
                                </div>
                                <div className="motherDetail margin-top2">
                                  <label  htmlFor="motherEducation">Mother's Education: <span id='sspan'>{singleBirth.motherEducation}</span></label>
                                  <label  className="margin-left" htmlFor="motherOccupation">Occupation: <span id='sspan'>{singleBirth.motherOccupation}</span></label>
                                  <label  className="margin-left" htmlFor="motherReligion">Religion: <span id='sspan'>{singleBirth.motherReligion}</span></label><br></br>
                                  <label  htmlFor="motherMotherTongue">Mother Tongue: <span id='sspan'>{singleBirth.motherMotherTongue}</span></label>
                                </div>
                              </div>
                              <div className="userEmail margin-top2">
                                <label id='one' htmlFor='userEmail'>Reciepient Gmail: <span id="sspan">{singleBirth.userEmail}</span></label>
                              </div>
                              </div>
                            </div>
                            <div className="singleAppBtn">
                              <button onClick={()=>handleBirthVerification(singleBirth._id, singleBirth.applicationStatus,singleBirth.userApplicationId)} className=" margin-top" id="birth-app-btn">Verified Application</button>
                              <button onClick={()=>handleBirthRejection(singleBirth._id,singleBirth.userApplicationId)} className=" margin-top" id="birth-app-btn">Reject Application</button>
                            </div>
                        </div>
                      </div>
                      </div>
                  )}
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