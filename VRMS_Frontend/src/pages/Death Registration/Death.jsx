import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './Death.css'
import { useNavigate } from 'react-router-dom';
import API from '../http';
const Death = () => {
    const Navigate = useNavigate();
    const [date, setDate] = useState('');

    const submitApplication = async(e)=>{
      e.preventDefault(); //prevent reloading
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData)
      try{
        const response = await API.post("/user/register/death-form",data);
        if(response.status==201){
          alert("You Application is Successfully Submitted")
          Navigate('/eservices')
        }else{
          alert("Error submitting form")
        }
        
      }catch (error) {
        console.error('Error submitting form:', error);
      }
   
  }
  const handleDate =(e, inputName)=>{
    const enteredDate = new Date(e.target.value);
    const today = new Date();
    if(enteredDate>today){
      alert("Please enter a date in past from today.");
      setDate((prevDate)=>({
        ...prevDate,
        [inputName]:''
      }));
    }else{
      setDate((prevDate)=>({
        ...prevDate,
        [inputName]:e.target.value
    }))
  }
}
  return (
    <div>
        <div className="death">
      <Header />
      <div className="death-registration">
        <div className="death-title">
          <h2>Online Death Registration</h2>
        </div>
        <div className="death-form">
          <form onSubmit={submitApplication}>
            <div className="death-application">
              <div className="death-details">
                <span>Decedent's Details</span>
                <div className="decedent-birth-certi-no margin-btm margin-top">
                  <label id='one' htmlFor='birthCertNo'>Birth Certificate No.:</label>
                    <input required type='number'className='margin-top margin-btm margin-left' id='birthCertNo' name='birthCertNo'/>
                </div>
                <div className="decedent-name">
                  <label id="one" htmlFor="decedentFirstName">First Name:
                    <input required className="margin-top margin-left" type="text" id="decedentFirstName" name="decedentFirstName" placeholder="Enter Decedent's First Name"/>
                  </label>
                  <label className="margin-left" id="one" htmlFor="decedentMiddleName">Middle Name:
                    <input required className="margin-left2"
                    type="text"
                    id="decedentMiddleName"
                    name="decedentMiddleName"
                    placeholder="Enter Child's Middle Name"/>
                  </label>
                  <label className="margin-left" id="one" htmlFor="decedentLastName">Last Name:
                    <input required className="margin-left2"
                    type="text"
                    id="decedentLastName"
                    name="decedentLastName"
                    placeholder="Enter Child's Last Name"/>
                  </label>
                </div>
                <div className="birth-death-date margin-top3">
                  <label id="one" htmlFor="birthDate">Birth Date:
                    <input required className="margin-left" type="date" id="birthDate" name="birthDate" value={date.birthDate} onChange={(e)=>handleDate(e,"birthDate")}/>
                  </label>
                  <label className="margin-left" id="one" htmlFor="deathDate">Death Date:
                    <input required className="margin-left2" type="date" id="deathDate" value={date.deathDate} onChange={(e)=>handleDate(e,"deathDate")} name="deathDate" />
                  </label>
                </div>
                <div className="death-gender margin-top">
                <label id="one" htmlFor="Gender">Gender:</label>
                <input className="margin-left" type="radio" id="male" name="Gender" value="Male"/><label className="margin-left2" htmlFor="male" id="two">Male</label>
                <input className="margin-left" type="radio" id="female" name="Gender" value="Female"/><label className="margin-left2" htmlFor="female" id="two">Female</label>
                </div>
                <div className="cause-of-death margin-top">
                <label id="one" htmlFor="causeOfDeath">Cause of Death:</label>
                <input required className="margin-left" type="text" id="causeOfDeath" name="causeOfDeath"/>
                </div>
                <div className="birth-address margin-top2">
                  <span>Birth Address(National)</span>
                  <div className="birth-address-details">
                    <label htmlFor="birthDistrict" id="two">District</label>
                      <input required className="margin-left margin-top" type="text" name='birthDistrict' id="birthDistrict" />
                    <label className="margin-left" htmlFor="birthMunicipality" id="two">Municipality</label>
                      <input required className="margin-left" type="text" name='birthMunicipality' id="birthMunicipality" />
                    <label className="margin-left" htmlFor="birthWardno" id="two">Ward No.</label>
                      <input required className="margin-left" type="text" name='birthWardno' id="birthWardno" /><br></br>
                    <label className="margin-top" htmlFor="birthVillage" id="two">Village</label>
                      <input required className="margin-left margin-top" type="text" name='birthVillage' id="birthVillage" />
                  </div>
                </div>
                <div className="death-address margin-top2">
                  <span>Death Address(National)</span>
                  <div className="death-address-details">
                    <label htmlFor="deathDistrict" id="two">District</label>
                      <input required className="margin-left margin-top" type="text" name='deathDistrict' id="deathDistrict"/>
                    <label className="margin-left" htmlFor="deathMunicipality" id="two">Municipality</label>
                      <input required className="margin-left" type="text" name='deathMunicipality' id="deathMunicipality" />
                    <label className="margin-left" htmlFor="deathWardno" id="two">Ward No.</label>
                      <input required className="margin-left" type="text" name='deathWardno' id="deathWardno" /><br></br>
                    <label className="margin-top" htmlFor="deathVillage" id="two">Village</label>
                      <input required className="margin-left margin-top" type="text" name='deathVillage' id="deathVillage" />
                  </div>
                  <div className="death-place margin-top2">
                  <label htmlFor="deathPlace">Death Place:</label>
                    <input className="margin-left"
                    type="radio"
                    id="death-home"
                    name="deathPlace" value="Home"/><label className="margin-left2" htmlFor="death-home" id="two">Home
                  </label>
                  <input className="margin-left"
                    type="radio"
                    id="death-hospital" name="birthPlace" value="Hospital"/><label className="margin-left2" htmlFor="death-hospital" id="two">Hospital</label>
                  <input className="margin-left"
                    type="radio"
                    id="death-other" name="birthPlace" value="Other"/><label className="margin-left2" htmlFor="death-other" id="two">Other</label>
                  </div>
                </div>
                <div className="death-other-details margin-top2">
                  <span>Other Details</span>
                  <div className="death-citizenship margin-top">
                    <label htmlFor='decedentCitizenshipNo' id='one' className=''>Citizenship No.:</label>
                      <input required className='margin-left' type='number' id='decedentCitizenshipNo' name='decedentCitizenshipNo'/>
                    <label htmlFor='decedentCitishipIssuedDist' id='one' className='margin-left'>Issued District:</label>
                      <input required className='margin-left2' type='text' id='decedentCitishipIssuedDist' name='decedentCitishipIssuedDist'/>
                    <label htmlFor='decedentCitishipIssuedDate' id='one' className='margin-left'>Issued Date:</label>
                      <input required className='margin-left2' type='date' value={date.decedentCitishipIssuedDate} onChange={(e)=>handleDate(e,"decedentCitishipIssuedDate")} id='decedentCitishipIssuedDate' name='decedentCitishipIssuedDate'/>
                  </div>
                  <div className="death-marrital-stat">
                    <label id='one'>Marrital Status:</label>
                      <input className='margin-left2 margin-top' type='radio' id='decedentMarried' name='deathMarritalStatus' value="Married"/><label id='two'className='margin-left2' htmlFor='decedentMarried'>Married</label>
                      <input className='margin-left2 margin-top' type='radio' id='decedentUnmarried' name='deathMarritalStatus' value="Unmarried"/><label id="two" className='margin-left2' htmlFor='decedentUnmarried'>Unmarried</label>
                  </div>
                  <div className="death-edu margin-top2">
                    <label htmlFor='deathEducation' id='one'>Education:</label>
                    <input required className='margin-left' type='text' name='deathEducation' id="deathEducation"/>
                  </div>
                </div>
                <div className="decedent-parent margin-top2">
                <span>Parent Details</span>
                <div className="decedent-parent-details margin-top">
                  <div className="decedentFather">
                    <label id="one" htmlFor="decedentFather">Father's Name:
                      <input required className='margin-left' type='text' id='decedentFather'name='decedentFather'/>
                    </label>
                  </div>
                  <div className="decedentMother margin-top">
                    <label id="one" htmlFor="decedentMother">Mother's Name:
                      <input required className='margin-left' type='text' id='decedentMother'name='decedentMother'/>
                    </label>
                  </div>
                </div>
              </div>
              <div className="grand-details margin-top2">
                <span>Grand Parent Details</span>
                <div className="grand-father margin-top">
                  <label id="one" htmlFor="grandFather">Grand Father's Name:</label>
                  <input required className="margin-left" type="text" name='grandFather' id="grandFather" />
                </div>
              </div>
              <div className="userEmail margin-top2">
                <label id='one' htmlFor='userEmail'><span style={{border:"none"}}>Your Gmail </span>(To recieve Confirmation Mail):</label>
                  <input required type='email' id='userEmail' name='userEmail' placeholder='' className='margin-left margin-top'/>
              </div>
              <div className="note-for-certificate">
                <h6><span className="note">Note: </span>Death Certificate will be provided to you once your visit our office with your Dead Person's documents.</h6>
              </div>
              </div>
            </div>
            <div className="submit-btn">
              <button type="submit" name='' id="death-app-btn">Sumbit Application</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
      </div>
    </div>
  )
}

export default Death