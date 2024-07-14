import React, { useRef, useState } from 'react'
import './Admin.css'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'
import API from '../../http';

const Admin = () => {
  const Navigate = useNavigate();
  const [adminName, setAdminName] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const formRef = useRef(null);
    const loginAdmin =async(e)=>{
      e.preventDefault();
      try {
        const authData ={
          adminName,
          adminPassword
        }
        const response = await API.post("/admin/login",authData)
        localStorage.setItem("token",response.data.token)
        if(response.status===200){
          const expirationTime = new Date(new Date().getTime() + 120000);
          Cookies.set('auth',JSON.stringify(authData),{expires:expirationTime});
          console.log(Cookies)
          Navigate("/adminHome")
        }else if (response.status === 401) {
          alert("Invalid credentials");
        } 
      } catch (error) {
        alert("Error",error);
        setAdminName('')
        setAdminPassword('')
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
              <form ref={formRef} onSubmit={loginAdmin}>
                  <div className="adminAuth">
                    <label htmlFor='username'>Username:</label><br></br>
                    <input required type='text' id='username' name='adminName' placeholder='Username' value={adminName} onChange={(e)=>setAdminName(e.target.value)}/> <br></br><br></br>
                    <label htmlFor='adminPassword'>Password:</label>
                    <br></br>
                    <input required type={showPassword?"text":'password'} id='adminPassword' name='adminPassword' placeholder='Password' value={adminPassword} onChange={(e)=>setAdminPassword(e.target.value)}/><h5 onClick={toggleShowPassword}>{showPassword?"Hide":"Show"}</h5><br></br><br></br>
                    <div className='flex admin-login-btn'>
                      <button className='admin-login-btn1' type='submit'>Login</button>
                      <button className='admin-login-btn2' onClick={()=>Navigate('/')}><i class="ri-arrow-go-back-fill"></i>Home</button>
                    </div>
                  </div>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Admin