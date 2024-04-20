import React, { useState } from 'react'
import './Admin.css'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'
import API from '../../http';

const Admin = () => {
  const Navigate = useNavigate();
  const [adminName, setAdminName] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

    const loginAdmin =async(e)=>{
      e.preventDefault();
      const authData ={
        adminName,
        adminPassword
      }
      const response = await API.post("/vrms/admin/login",authData)
      if(response.status==200){
        const expirationTime = new Date(new Date().getTime() + 60000);
        Cookies.set('auth',JSON.stringify(authData),{expires:expirationTime});
        Navigate("/adminHome")
      }
    }
    const toggleShowPassword =()=>{
      setShowPassword(!showPassword);
    }
  return (
    <div>
        <div className="admin">
          <div className="adminLogo">
            <img src='../logo.png'/>
            <h2 onClick={()=>Navigate('/')}>Babai Rural Municipality</h2>
            <h3>Office of Municipal Executive, Dang, Lumbini Province</h3>
          </div>
          <div className="adminLogin">
            <div className="loginForm">
              <form onSubmit={loginAdmin}>
                  <div className="adminAuth">
                    <label htmlFor='username'>Username:</label><br></br>
                    <input required type='text' id='username' name='adminName' placeholder='Username' value={adminName} onChange={(e)=>setAdminName(e.target.value)}/> <br></br><br></br>
                    <label htmlFor='adminPassword'>Password:</label>
                    <br></br>
                    <input required type={showPassword?"text":'password'} id='adminPassword' name='adminPassword' placeholder='Password' value={adminPassword} onChange={(e)=>setAdminPassword(e.target.value)}/><h5 onClick={toggleShowPassword}>{showPassword?"Hide":"Show"}</h5><br></br><br></br>
                    <button id='adminLoginBtn' type='submit'>Login</button>
                  </div>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Admin