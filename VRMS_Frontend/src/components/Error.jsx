import React from "react";
import "./Error.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useNavigate } from "react-router-dom";
function Error() {
    const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="error">
        <div className="error-logo">
          <img src="/error.jpg" />
        </div>
        <div className="error-button">
          <button onClick={()=>navigate('/')}><i class="ri-arrow-go-back-fill"></i>
            Return to Home</button>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Error;
