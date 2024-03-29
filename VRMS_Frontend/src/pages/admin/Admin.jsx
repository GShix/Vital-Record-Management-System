import React, { useState } from 'react'
import './Admin.css'
import axios from 'axios';
const Admin = () => {
  const [password, hidePassword] = useState(0);
  const showPassword =()=>{

    const loginAdmin =(e)=>{
      e.preventDefault();
      const formData = new FormData(e.currentTarget)
      const data = Object.fromEntries(formData)
      const response = axios.post("http://localhost:8000/vrms-server/admin/adminLogin",data)
      if(response.status==200){

      }
    }
  }
  return (
    <div>
        <div className="admin">
          <div className="adminLogo">
            <img src='../logo.png'/>
            <h2 onClick={()=>Navigate('/')} style={{fontSize:"30px",marginTop:"2px"}}>Babai Rural Municipality</h2>
            <h3 style={{fontSize:"18px",marginTop:"3px",fontWeight:"lighter"}}>Office of Municipal Executive, Dang, Lumbini Province</h3>
          </div>
          <div className="adminLogin">
            <div className="loginForm">
              <form onSubmit={loginAdmin}>
                  <div className="adminAuth">
                    <label htmlFor='username'>Username:</label><br></br>
                    <input type='text' id='username' name='adminName'/> <br></br><br></br>
                    <label htmlFor='adminPassword'>Password:</label>
                    <br></br>
                    <input type='password' id='adminPassword' name='adminPassword'/><h5>Show</h5><br></br><br></br>
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