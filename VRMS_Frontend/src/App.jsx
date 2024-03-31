
import './App.css'
import Birth from './pages/Birth Registration/Birth'
import Death from './pages/Death Registration/Death'
import Services from './pages/E-Gov Services/Services'
import Home from './pages/Home/Home'
import {BrowserRouter,Routes,Route, useNavigate} from 'react-router-dom'
import Admin from './pages/admin/adminLogin/Admin'
import AdminHome from './pages/admin/adminHome/AdminHome'
import ApplicationStatus from './pages/Application Status/ApplicationStatus'

import Cookies from 'js-cookie'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element ={<Home/>} />
          <Route path='/eservices' element ={<Services/>} />
          <Route path='/birthRegistration' element ={<Birth/>} />
          <Route path='/deathRegistration' element ={<Death/>} />
          <Route path='/applicationStatus' element ={<ApplicationStatus/>} />
          {/* <Route path='/success' element ={<Success/>} /> */}
          <Route path='/vrms-admin' element ={<Admin/>} />
          <Route path='/adminHome' element ={<AdminHome/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
