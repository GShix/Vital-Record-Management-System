
import './App.css'
import Birth from './pages/Birth Registration/Birth'
import Death from './pages/Death Registration/Death'
import Services from './pages/E-Gov Services/Services'
import Home from './pages/Home/Home'
import {BrowserRouter,Routes,Route, useNavigate} from 'react-router-dom'
import Admin from './pages/admin/adminLogin/Admin'
import AdminHome from './pages/admin/adminHome/AdminHome'
import ApplicationStatus from './pages/Application Status/ApplicationStatus'
import Contact from './pages/Contact/Contact'
import Introduction from './pages/Introduction/Introduction'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element ={<Home/>} />
          <Route path='/eservices' element ={<Services/>} />
          <Route path='/birthRegistration' element ={<Birth/>} />
          <Route path='/deathRegistration' element ={<Death/>} />
          <Route path='/applicationStatus' element ={<ApplicationStatus/>} />
          <Route path='/contact' element ={<Contact/>} /> 
          <Route path='/introduction' element ={<Introduction/>} /> 
          <Route path='/vrms-admin' element ={<Admin/>} />
          <Route path='/adminHome' element ={<AdminHome/>} />
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
