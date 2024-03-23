
import './App.css'
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
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
