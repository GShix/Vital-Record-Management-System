import React, { useEffect, useState } from "react";
import "./Home.css";
import PhotoCard from "../../components/PhotoCard/PhotoCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import BarLoader from "react-spinners/BarLoader";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [spoken, setSpoken] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSpoken(true);
    }, 1500);
  }, []);
  useEffect(() => {
    if (loading && spoken) {
      const textToSpeak = "Welcome to Babai Rural Municipality";
      const speak = new SpeechSynthesisUtterance(textToSpeak);
      window.speechSynthesis.speak(speak);
      setSpoken(false);
    }
  }, []);
  return (
    <div className="sweet-loading">
      {loading ? (
        <BarLoader color={"white"} loading={loading} size={50} />
      ) : (
        <div className="homeBabai">
          <Header />
          <div className="hero">
            <img src=".././hero1.jpg" />
          </div>
          <div className="staff flex">
            <PhotoCard
              staffPhoto=".././mayor.jpg"
              staffName="Kul Bahadur Khatri"
              staffPosition="Mayor"
              staffGmail="ito.babaimun@gmail.com"
              staffPhone="9810890039"
            />
            <PhotoCard
              staffPhoto=".././upamayor.jpg"
              staffName="Bam Kumari Khadka"
              staffPosition="Upmayor"
              staffGmail="ito.babaimun@gmail.com"
              staffPhone="98098332863"
            />
            <PhotoCard
              staffPhoto=".././chief-officer.jpg"
              staffName="Hiralal Bhandari"
              staffPosition="Chief Adminstrative Officer"
              staffGmail="hiralalbhandari2072@gmail.com"
              staffPhone="9857825444"
            />
            <PhotoCard
              staffPhoto=".././inform-officer.jpg"
              staffName="Purushottam Adhikari"
              staffPosition="Information Officer"
              staffGmail="developerpurusottam@gmail.com"
              staffPhone="9857824703"
            />
          </div>

          <Footer />
        </div>
      )}
    </div>
  );
};

export default Home;
