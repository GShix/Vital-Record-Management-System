import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Birth.css";
const Birth = () => {
  return (
    <div>
      <Header />
      <div className="birth-form">
        <div className="birth-text">
          <h2>Online Birth Registration</h2>
        </div>
        <div className="birth-form">
          <form>
            <div className="birth-application">
                <div className="birth-details">
                <span>Newborn Baby's Details</span>
                <div className="baby-name  margin-top">
                  <label id="one" htmlFor="firstName">First Name:
                    <input className="margin-top margin-left" type="text" id="firstName" name="firstName" placeholder="Enter Child's First Name"/>
                  </label>
                  <label className="margin-left" id="one" htmlFor="middleName">Middle Name:
                    <input className="margin-left2"
                    type="text"
                    id="middleName"
                    name="middleName"
                    placeholder="Enter Child's Middle Name"/>
                  </label>
                  <label className="margin-left" id="one" htmlFor="lastName">Last Name:
                    <input className="margin-left2"
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter Child's Last Name"/>
                  </label>
                </div>
                <div className="birth-time margin-top2">
                  <label id="one" htmlFor="birthDate">Date:
                    <input className="margin-left" type="date" id="birthDate" name="birthDate" />
                  </label>
                  <label className="margin-left" id="one" htmlFor="birthTime">Time:
                    <input className="margin-left2" type="time" id="birthTime" name="birthTime" />
                  </label>
                </div>
                <div className="birth-place margin-top2">
                  <label htmlFor="birthPlace">Birth Place:</label>
                    <input className="margin-left"
                    type="radio"
                    id="birth-home"
                    name="birthPlace" value="Home"/><label className="margin-left2" htmlFor="birth-home" id="two">Home
                  </label>
                  <input className="margin-left"
                    type="radio"
                    id="birth-hospital" name="birthPlace" value="Hospital"/><label className="margin-left2" htmlFor="birth-hospital" id="two">Hospital</label>
                  <input className="margin-left"
                    type="radio"
                    id="birth-healthpost" name="birthPlace" value="Hospital"/><label className="margin-left2" htmlFor="birth-healthpost" id="two">Health Post</label>
                  <input className="margin-left"
                    type="radio"
                    id="birth-other" name="birthPlace" value="Other"/><label className="margin-left2" htmlFor="birth-other" id="two">Other</label>
              </div>
              <div className="baby-gender margin-top2">
                <label id="one" htmlFor="Gender">Gender:</label>
                <input className="margin-left" type="radio" id="baby-male" name="baby-gender" value="Male"/><label className="margin-left2" htmlFor="baby-male" id="two">Male</label>
                <input className="margin-left" type="radio" id="baby-female" name="baby-gender" value="Female"/><label className="margin-left2" htmlFor="baby-female" id="two">Female</label>
              </div>
              <div className="type-of-birth margin-top2">
                <label id="one" htmlFor="type-of-birth">Type of Birth:</label>
                <input className="margin-left" type="radio" id="birth-single" name="birth-type" value="Single" /><label className="margin-left2" id="two" htmlFor="birth-single">One</label>
                <input className="margin-left" type="radio" id="birth-tweens" name="birth-type" value="Tweens" /><label className="margin-left2" id="two" htmlFor="birth-tweens">Tweens</label>
              </div>
              <div className="baby-weight margin-top2">
                <label id="one" htmlFor="baby-weight" >Baby's Weight in GM(At birth):</label>
                <input className="margin-left" type="number" id="baby-weight" name="baby-weight" />
              </div>
              <div className="birth-address margin-top2">
                <span>Birth Address(National)</span>
                <div className="birth-address-details">
                  <label htmlFor="birth-district" id="two">District</label>
                    <input className="margin-left margin-top" type="text" id="birth-district" />
                  <label className="margin-left" htmlFor="birth-municipality" id="two">Municipality</label>
                    <input className="margin-left" type="text" id="birth-municipality" />
                  <label className="margin-left" htmlFor="birth-wardno" id="two">Ward No.</label>
                    <input className="margin-left" type="text" id="birth-wardno" /><br></br>
                  <label className="margin-top" htmlFor="birth-village" id="two">Village</label>
                    <input className="margin-left margin-top" type="text" id="birth-village" />
                </div>
                
              </div>
              <div className="grand-details margin-top2">
                <span>Grand Parent Details</span>
                <div className="grand-father margin-top">
                  <label id="one" htmlFor="grand-father">Grand Father's Name:</label>
                  <input className="margin-left" type="text" id="grand-father" />
                </div>
              </div>
              <div className="baby-parent margin-top2">
                <span>Parent Details</span>
                <div className="baby-parent-details margin-top">
                  <label id="one" htmlFor="baby-parent">
                    <table>
                      <tr>
                        <th>Parent</th>
                        <th>First Name</th>
                        <th>Middle Name</th>
                        <th>Last Name</th>
                      </tr>
                      <tr>
                        <td>Father</td>
                        <td>
                          <input className="margin-left" type="text" id="baby-father-first-name"/>
                        </td>
                        <td>
                          <input type="text" id="baby-father-middle-name"/>
                        </td>
                        <td>
                          <input type="text" id="baby-father-last-name"/>
                        </td>
                      </tr>
                      <tr>
                        <td>Mother</td>
                        <td>
                          <input className="margin-left" type="text" id="baby-mother-first-name"/>
                        </td>
                        <td>
                          <input type="text" id="baby-mother-middle-name"/>
                        </td>
                        <td>
                          <input type="text" id="baby-mother-last-name"/>
                        </td>
                      </tr>
                    </table>
                  </label>
                </div>
              </div>
              <div className="note-for-certificate">
                <h6><span className="note">Note:</span>Birth Certificate will be provided to you once your visit our office with your documents.</h6>
              </div>
              </div>
            </div>
            <div className="submit-btn">
              <button type="submit" id="birth-app-btn">Sumbit Application</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Birth;
