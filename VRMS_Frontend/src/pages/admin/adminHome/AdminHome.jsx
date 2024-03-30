import React from 'react'
import './AdminHome.css'
const AdminHome = () => {
  return (
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
                </div>
            </div>
            <div id='adminMain'>
                <h1 onClick={()=>Navigate('/')} style={{fontSize:"32px"}}>Babai Rural Municipality</h1>
                <h2 style={{fontSize:"18px"}}>Office of Municipal Executive, Dang, Lumbini Province</h2>
                <div className="mainApplications">

                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminHome