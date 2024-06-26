import React from 'react'
import "./Project.css"
import Cal from "./assets/Cal.png"
import DP from "./assets/DP.jpg"
import Card from "./Card.jsx"
import AOS from 'aos';
import GOLOCAL from "./assets/golocal.jpg"
import 'aos/dist/aos.css'; 
const Project=()=> {
  AOS.init();
  return (
    <div className='projectout'id="s4">
        <div className='projecthead'>
            <h1>Projects</h1>
        </div>
        <div className="projectcard1">
            <div className='projectcard' data-aos="fade-up-right">
                    <Card img={Cal} name="Calculator" desc="Introducing our sleek, HTML, CSS, and JavaScript-based calculator for seamless, precise calculations with a user-friendly interface and customizable themes. " view="https://main--superlative-sherbet-ba0ad4.netlify.app/" git="https://github.com/Amisha-Singh-2002/calculator.git" />
            </div>
            <div className='projectcard' data-aos="fade-up-left">
                    <Card img={GOLOCAL} name="E-vendor" desc="My best Project so far, deFi+live location tracking+ecommerce app for both sellers and customer with admin side, decentralized rating " view="https://golocal-ktqh.onrender.com/" git="https://github.com/Amisha-Singh-2002/GoLocal" />
            </div>
        </div>
    </div>
  )
}

export default Project