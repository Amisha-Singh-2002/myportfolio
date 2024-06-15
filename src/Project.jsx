import React from 'react'
import "./Project.css"
import Cal from "./assets/Cal.png"
import DP from "./assets/DP.jpg"
import Card from "./Card.jsx"
const Project=()=> {
  return (
    <div className='projectout'id="s4">
        <div className='projecthead'>
            <h1>Projects</h1>
        </div>
        <div className='projectcard1'>
            <div className='projectcard'>
                    <Card img={Cal} name="Calculator" desc="Introducing our sleek, HTML, CSS, and JavaScript-based calculator for seamless, precise calculations with a user-friendly interface and customizable themes. " view="https://www.google.com" git="githud.com/7twik" />
            </div>
            
        </div>
    </div>
  )
}

export default Project