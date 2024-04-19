import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Birth.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Birth = () => {
  const Navigate = useNavigate();
  const [date, setDate] = useState('');
  const [applicationId, setApplicationId] = useState(100); 

  const sumbitApplication=async(e)=>{
    e.preventDefault();
    const formData= new FormData(e.currentTarget);
    const data = Object.fromEntries(formData)

    try{
        const response = await axios.post("http://localhost:9000/api/birthRegistration",data);
        // const response = await axios.post("https://vrms-server-seven.vercel.app/api/deathRegistration",data);
        if(response.status==201){
          alert("You Application is Successfully Submitted")
          Navigate('/')
        }else{
          alert("Error submitting form")
        }
        
      }catch (error) {
        console.error('Error submitting form:', error);
      }
    console.log(data)
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
      <div className="birth">
      <Header />
      <div className="birth-registration">
        <div className="birth-title">
          <h2>Online Birth Registration</h2>
        </div>
        <div className="birth-form">
          <form onSubmit={sumbitApplication}>
            <div className="birth-application">
                <div className="birth-details">
                <span>Newborn Baby's Details</span>
                <div className="baby-name  margin-top">
                  <label id="one" htmlFor="firstName">First Name:
                    <input required className="margin-top margin-left" type="text" id="firstName" name="firstName" placeholder="Enter Baby's First Name"/>
                  </label>
                  <label className="margin-left" id="one" htmlFor="middleName">Middle Name:
                    <input required className="margin-left2"
                    type="text"
                    id="middleName"
                    name="middleName"
                    placeholder="Enter Baby's Middle Name"/>
                  </label>
                  <label className="margin-left" id="one" htmlFor="lastName">Last Name:
                    <input required className="margin-left2"
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter Baby's Last Name"/>
                  </label>
                </div>
                <div className="birth-time margin-top2">
                  <label id="one" htmlFor="birthDate">Date:
                    <input required className="margin-left" type="date" id="birthDate" value={date.birthDate} onChange={(e)=>handleDate(e,"birthDate")} name="birthDate" />
                  </label>
                  <label className="margin-left" id="one" htmlFor="birthTime">Time:
                    <input required className="margin-left2" type="time" id="birthTime" name="birthTime" />
                  </label>
                </div>
                <div className="birth-place margin-top2">
                  <label htmlFor="birthPlace">Birth Place:</label>
                    <input required className="margin-left"
                    type="radio"
                    id="birth-home"
                    name="birthPlace" value="Home"/><label className="margin-left2" htmlFor="birth-home" id="two">Home
                  </label>
                  <input required className="margin-left"
                    type="radio"
                    id="birth-hospital" name="birthPlace" value="Hospital"/><label className="margin-left2" htmlFor="birth-hospital" id="two">Hospital</label>
                  <input required className="margin-left"
                    type="radio"
                    id="birth-healthpost" name="birthPlace" value="Hospital"/><label className="margin-left2" htmlFor="birth-healthpost" id="two">Health Post</label>
                  <input required className="margin-left"
                    type="radio"
                    id="birth-other" name="birthPlace" value="Other"/><label className="margin-left2" htmlFor="birth-other" id="two">Other</label>
              </div>
              <div className="baby-gender margin-top2">
                <label id="one" htmlFor="Gender">Gender:</label>
                <input required className="margin-left" type="radio" id="baby-male" name="babyGender" value="Male"/><label className="margin-left2" htmlFor="baby-male" id="two">Male</label>
                <input required className="margin-left" type="radio" id="baby-female" name="babyGender" value="Female"/><label className="margin-left2" htmlFor="baby-female" id="two">Female</label>
              </div>
              <div className="type-of-birth margin-top2">
                <label id="one" htmlFor="type-of-birth">Type of Birth:</label>
                <input required className="margin-left" type="radio" id="birth-single" name="birthType" value="Single" /><label className="margin-left2" id="two" htmlFor="birth-single">One</label>
                <input required className="margin-left" type="radio" id="birth-tweens" name="birthType" value="Tweens" /><label className="margin-left2" id="two" htmlFor="birth-tweens">Tweens</label>
                <input required type="radio" id="birthOthers" name="birthType" className="margin-left" value='Other'/><label className="margin-left2" id="two" htmlFor="birthOthers">Other</label>
              </div>
              <div className="baby-weight margin-top2">
                <label id="one" htmlFor="baby-weight" >Baby's Weight in GM(At birth):</label>
                <input required className="margin-left" type="number" id="baby-weight" name="babyWeight" />
              </div>
              <div className="birth-address margin-top2">
                <span>Birth Address(National)</span>
                <div className="birth-address-details">
                  <label htmlFor="birth-district" id="two">District</label>
                    <input required className="margin-left margin-top" type="text" name="birthDistrict" id="birth-district" />
                  <label className="margin-left" htmlFor="birth-municipality" id="two">Municipality</label>
                    <input required className="margin-left" type="text" name="birthMunicipality" id="birth-municipality" />
                  <label className="margin-left" htmlFor="birth-wardno" id="two">Ward No.</label>
                    <input required className="margin-left" type="text" name="birthWardno" id="birth-wardno" /><br></br>
                  <label className="margin-top" htmlFor="birth-village" id="two">Village</label>
                    <input required className="margin-left margin-top" type="text" name="birthVillage" id="birth-village" />
                </div>
                
              </div>
              <div className="grand-details margin-top2">
                <span>Grand Parent Details</span>
                <div className="grand-father margin-top">
                  <label id="one" htmlFor="grand-father">Grand Father's Name:</label>
                  <input required className="margin-left" type="text" name="grandFather" id="grand-father" />
                </div>
              </div>
              <div className="baby-parent margin-top2">
                <span>Parent Details</span>
                <div className="baby-parent-details margin-top">
                  <label id="one" htmlFor="baby-parent">
                  <div className="babyFather">
                    <label id="one" htmlFor="babyFather">Father's First Name:
                      <input required className='margin-left' type='text' id='babyFather'name='babyFatherFirstName'/>
                    </label>
                    <label id="one" htmlFor="babyFather" className='margin-left'>Middle Name:
                      <input required className='margin-left2' type='text' id='babyFather'name='babyFatherMiddleName'/>
                    </label>
                    <label id="one" htmlFor="babyFather" className='margin-left'>Last Name:
                      <input required className='margin-left2' type='text' id='babyFather'name='babyFatherLastName'/>
                    </label>
                  </div>
                  <div className="babyMother margin-top">
                    <label id="one" htmlFor="babyMother">Mother's First Name:
                      <input required className='margin-left' type='text' id='babyMother'name='babyMotherFirstName'/>
                    </label>
                    <label id="one" htmlFor="babyMother" className='margin-left'>Middle Name:
                      <input required className='margin-left2' type='text' id='babyMother'name='babyMotherMiddleName'/>
                    </label>
                    <label id="one" htmlFor="babyMother" className='margin-left'>Last Name:
                      <input required className='margin-left2 margin-top' type='text' id='babyMother'name='babyMotherLastName'/>
                    </label>
                  </div>
                  </label>
                </div>
              </div>
              <div className="parentAddress margin-top2">
                  <span>Parent's Permanent Address</span>
                  <div className="parentAddressDetails">
                    <label id="one" htmlFor="parentDistrict">District:</label><input required type="text" className="margin-top margin-left2" name="parentDistrict" id="parentDistrict"/>
                    <label id="one"className="margin-left" htmlFor="parentMunicipality">Municipality:</label><input required type="text" className="margin-left2" name="parentMunicipality" id="parentMunicipality"/>
                    <label id="one" className="margin-left" htmlFor="parentWardno">Wardno:</label><input required type="number" className="margin-left2" name="parentWardno" id="parentWardno"/><br></br>
                    <label id="one" htmlFor="parentVillage">Village:</label><input required type="text" className="margin-top margin-left2" name="parentVillage" id="parentVillage"/>
                    <label id="one" className="margin-left" htmlFor="parentHouseno">Houseno:</label><input required type="number" className="margin-left2" name="parentHouseno" id="parentHouseno"/>
                  </div>
              </div>
              <div className="parentAgeDetails margin-top2">
                    <span>Parent's Age</span>
                      <div className="parentAge">
                        <label id="one" htmlFor="parentFatherAge">Father's Age:</label><input required type="number" className="margin-top margin-left2" name="parentFatherAge" id="parentFatherAge"/>
                        <label id="one" className="margin-left" htmlFor="parentMotherAge">Mother's Age:</label><input required type="number" className="margin-left2" name="parentMotherAge" id="parentMotherAge"/>
                      </div>
              </div>
              <div className="parentCitizenDetails margin-top2">
                <span>Citizenship Number:</span>
                <div className="parentCitizenship">
                  <label id="one" htmlFor="parentFatherCitizenshipno"><strong>Father's </strong>Citizenship No:</label><input required type="number" className="margin-top margin-left2" name="parentFatherCitizenshipno" id="parentFatherCitizenshipno"/>
                  <label id="one" className="margin-left" htmlFor="parentFatherCitizenshipDistrict">Issued District:</label><input required type="text" className="margin-left2" name="parentFatherCitizenshipDistrict" id="parentFatherCitizenshipDistrict"/><br></br>
                  <label id="one" htmlFor="parentFatherCitizenshipDate">Issued Date:</label><input required type="date" className="margin-top margin-left2" value={date.parentFatherCitizenshipDate} onChange={(e)=>handleDate(e,"parentFatherCitizenshipDate")} name="parentFatherCitizenshipDate" id="parentFatherCitizenshipDate"/><br></br>
                  <label id="one" htmlFor="parentMotherCitizenshipno"><strong>Mother's </strong>Citizenship No:</label><input required type="number" className="margin-left2 margin-top2" name="parentMotherCitizenshipno" id="parentMotherCitizenshipno"/>
                  <label id="one" className="margin-left" htmlFor="parentMotherCitizenshipDistrict">Issued District:</label><input required type="text" className="margin-left2" name="parentMotherCitizenshipDistrict" id="parentMotherCitizenshipDistrict"/><br></br>
                  <label id="one" htmlFor="parentMotherCitizenshipDate">Issued Date:</label><input required type="date" className="margin-top margin-left2" value={date.parentMotherCitizenshipDate} onChange={(e)=>handleDate(e,"parentMotherCitizenshipDate")}  name="parentMotherCitizenshipDate" id="parentMotherCitizenshipDate"/>
                </div>
              </div>
              <div className="parentOtherDetails margin-top2">
                <span>Others:</span>
                <div className="FatherDetail margin-top">
                  <label id="one" htmlFor="fatherEducation"><strong>Father's </strong>Education:</label><input required type="text" id="fatherEducation" className="margin-left2" name="fatherEducation"/>
                  <label id="one" className="margin-left" htmlFor="fatherOccupation">Occupation:</label><input required type="text" className="margin-left2" id="fatherOccupation" name="fatherOccupation"/>
                  <label id="one" className="margin-left" htmlFor="fatherReligion">Religion:</label><input required type="text" className="margin-left2" id="fatherReligion" name="fatherReligion"/><br></br>
                  <label id="one" htmlFor="fatherMotherTongue">Mother Tongue:</label><input required type="text" className="margin-top margin-left2"  id="fatherMotherTongue" name="fatherMotherTongue"/>
                </div>
                <div className="motherDetail margin-top2">
                  <label id="one" htmlFor="motherEducation"><strong>Father's </strong>Education:</label><input required type="text"className="margin-left2" id="motherEducation" name="motherEducation"/>
                  <label id="one" className="margin-left" htmlFor="motherOccupation">Occupation:</label><input required type="text" className="margin-left2" id="motherOccupation" name="motherOccupation"/>
                  <label id="one" className="margin-left" htmlFor="motherReligion">Religion:</label><input required type="text" className="margin-left2" id="motherReligion" name="motherReligion"/> <br></br>
                  <label id="one" htmlFor="motherMotherTongue">Mother Tongue:</label><input required type="text" className="margin-top margin-left2" id="motherMotherTongue" name="motherMotherTongue"/>
                </div>
              </div>
              <div className="userEmail margin-top2">
                <label id='one' htmlFor='userEmail'><span style={{border:"none"}}>Your Gmail </span>(To recieve Confirmation Mail):</label>
                  <input required type='email' id='userEmail' name='userEmail' placeholder='' className='margin-left margin-top'/>
              </div>
              <div className="note-for-certificate">
                <h6><span className="note">Note: </span>Birth Certificate will be provided to you once your visit our office with your documents.</h6>
              </div>
              </div>
            </div>
            <div className="submit-btn">
              <button type="submit" className=" margin-top" id="birth-app-btn">Sumbit Application</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
      </div>
    </div>
  );
};

export default Birth;
