import React from 'react'
import DP from "./assets/DP.jpg"
import { MdDoubleArrow } from "react-icons/md";
import "./About.css"
function About () {
  return (
    
      <div id="s2" className="aboutmain">
          <div className="top">
              <h1>ABOUT <span>ME</span></h1>
          </div>
          <div className="bottom">
                <div className="bottomleft">
                    <img src={DP} alt="GPT3 Logo" />
                </div>
                <div className="bottomright">
                    <p> I'm a dedicated frontend developer with expertise in HTML, CSS, JavaScript, Node.js, React, and Bootstrap. I specialize in creating dynamic, responsive, and user-friendly web applications. Passionate about coding and design, I bring ideas to life with seamless functionality and modern aesthetics.</p>
                       <br/>
                       <br/>
                       <p>Things I love apart form Coding :</p>                
                       <div className="icons">
                              <a href="#"><MdDoubleArrow /></a>
                              <h3>Reading Books</h3>
                        </div>
                       <div className="icons">
                            <a href="#"><MdDoubleArrow /></a>
                            <h3>Exploring new places</h3>
                       </div>
                </div>
          </div>
    </div>
  )
}

export default About