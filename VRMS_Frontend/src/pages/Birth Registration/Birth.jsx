import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './Birth.css'
const Birth = () => {
  return (
    <div>
        <Header/>
        <div className="birth">
            <div className="birth-text">
                <h2>Online Birth Registration</h2>
            </div>
            <div className="birth-form">
                <form>
                    <div className="name">
                        <label htmlFor='firstName'>First Name:<input type='text' id='firstName' name='firstName' placeholder="Enter Child's First Name" /></label>
                        <label htmlFor='middleName'>Middle Name:<input type='text' id='middleName' name='middleName' placeholder="Enter Child's Middle Name" /></label>
                        <label htmlFor='lastName'>Last Name:<input type='text' id='lastName' name='lastName' placeholder="Enter Child's Last Name" /></label>
                    </div>
                    <div className="birth-time">
                        <label htmlFor='birthDate'>Birth Date:<input type='date' id='birthDate' name='birthDate' /></label>
                        <label htmlFor='birthTime'>Birth Time:<input type='time' id='birthTime' name='birthTime'/></label>
                    </div>
                    <div className="birth-place">
                        <label htmlFor='birthPlace'>Birth Place:
                            <input type='text' id='birthPlace' name='birthPlace' placeholder="Enter Province" />
                            <input type='text' id='birthPlace' name='birthDistrict' placeholder='Enter District'/>
                        </label>
                    </div>
                </form>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Birth