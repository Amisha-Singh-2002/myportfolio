import React, { useEffect } from 'react'
import "./Project.css"
import Cal from "./assets/Cal.png"
import DP from "./assets/DP.jpg"
import M from "./assets/M.png"
import i3 from "./assets/i3.png"
import i4 from "./assets/i4.png"
import Card from "./Card.jsx"
import i from "./assets/i.png"
import i2 from "./assets/i2.png"
import AOS from 'aos';
import GOLOCAL from "./assets/golocal.jpg"
import 'aos/dist/aos.css'; 
const Project=()=> {
        useEffect(() => {
                AOS.init({ duration: 700, once: true });
        }, []);
  return (
    <div className='projectout'id="s4">
        <div className='projecthead'>
            <h1>Projects</h1>
        </div>
        <div className="projectcard1">
             <div className='projectcard' data-aos="fade-up-left">
                    <Card img={i3} name="E-Commerce" desc="I built a modern and responsive e-commerce website with the frontend fully completed using React and Tailwind CSS, featuring clean UI, product listings, and cart functionality. I have also integrated MongoDB and am developing the backend with Node.js and Express.js, creating APIs for authentication, products, cart, and orders. The frontend is fully finished, and backend development is currently in progress." view="https://e-commerce-lovat-psi-29.vercel.app/" git="https://github.com/Amisha-Singh-2002/E-Commerce" />
            </div>
            <div className='projectcard' data-aos="fade-up-left">
                    <Card img={GOLOCAL} name="E-vendor" desc="My best Project so far, deFi+live location tracking+ecommerce app for both sellers and customer with admin side, decentralized rating " view="https://golocal-ktqh.onrender.com/" git="https://github.com/Amisha-Singh-2002/GoLocal" />
            </div>
            <div className='projectcard' data-aos="fade-up-left">
                    <Card img={i4} name="Spotify-Clone" desc="Built a responsive music web app using React.js and Tailwind CSS with routing and React Hooks for dynamic and smooth user interaction" view="https://spotify-iota-two-49.vercel.app/" git="https://github.com/Amisha-Singh-2002/Spotify" />
            </div>
            <div className='projectcard' data-aos="fade-up-left">
                    <Card img={i} name="Mom&apos;s-Collection" desc="Mom-Collection is an online marketplace connecting local artisans with customers, showcasing handmade products, promoting cultural heritage, and supporting sustainable trade practices globally." view="https://mom-s-hand-made-collection.vercel.app/" git="https://github.com/Amisha-Singh-2002/MOM-S-HAND-MADE-COLLECTION" />
            </div>
            <div className='projectcard' data-aos="fade-up-right">
                    <Card img={Cal} name="SHOES.__" desc="" view="https://shoes-lac.vercel.app/" git="https://github.com/Amisha-Singh-2002/Shoes"/>
            </div>
            <div className='projectcard' data-aos="fade-up-left">
                    <Card img={i2} name="Calculator" desc="A simple calculator application built with HTML, CSS, and JavaScript , allowing users to perform basic arithmetic operations." view="https://calculator-alpha-app.vercel.app/" git="https://github.com/Amisha-Singh-2002/Calculator" />
            </div>
        </div>
    </div>
  )
}

export default Project