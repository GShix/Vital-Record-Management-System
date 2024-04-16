import React from 'react'
import Header from '../../components/Header/Header'
import './Contact.css'
const Contact = () => {
  return (
    <div>
        <Header/>
    <div className="contactPage flex">
    <div>
        <h1>Babai Rural Municipality</h1>
        <p>
            For inquiries regarding vital record management and related services,
            please contact us through one of the following methods:
        </p>
        <ul>
            <li>Email: ito.babaimun@gmail.com</li>
            <li>Phone: +977 082403067</li>
            <li>Address: Lumbini Province,Hapure-Dang</li>
        </ul>
        <p>
            Our office hours are Monday to Friday, 9:00 AM to 5:00 PM (local time).
            We are closed on weekends and public holidays.
        </p>
        </div>
    </div>
    </div>
  )
}

export default Contact