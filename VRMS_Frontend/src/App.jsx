
import './App.css'
import Birth from './pages/Birth Registration/Birth'
import Death from './pages/Death Registration/Death'
import Services from './pages/E-Gov Services/Services'
import Home from './pages/Home/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Success from './pages/success/Success'
import Admin from './pages/admin/Admin'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element ={<Home/>} />
          <Route path='/eservices' element ={<Services/>} />
          <Route path='/birthRegistration' element ={<Birth/>} />
          <Route path='/deathRegistration' element ={<Death/>} />
          {/* <Route path='/success' element ={<Success/>} /> */}
          <Route path='/vrms-admin' element ={<Admin/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
