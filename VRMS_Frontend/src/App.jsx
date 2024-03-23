
import './App.css'
import Birth from './pages/Birth Registration/Birth'
import Services from './pages/E-Gov Services/Services'
import Home from './pages/Home/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element ={<Home/>} />
          <Route path='/eservices' element ={<Services/>} />
          <Route path='/birthRegistration' element ={<Birth/>} />
          <Route path='/deathRegistration' element ={<Services/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
