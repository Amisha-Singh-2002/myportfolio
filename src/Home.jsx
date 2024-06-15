import React from 'react'
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import "./Home.css"
import Typewriter from 'typewriter-effect';

function Home() {
  return (
    <div id="s1" className="main">
        <div className="home1">
          <h1>Hello, I'm <br/><Typewriter
                    options={{
                      strings: ['Amisha Kumari'],
                      autoStart: true,
                      loop: true,
                    }}
                  /></h1>
        </div>
         <div className="home2">
            <h2>Frontend Developer</h2>
         </div>

        <div className="home3">
            <h4>Passionate and creative Full Stack Developer having proficiency in MERN Stack.
             <br/> Attired with a variety of tools & technologies and keen to learn new one.</h4>
        </div>
       <div className="home4">
            <div className="home4a">
                 <a href="https://github.com/Amisha-Singh-2002"><FaGithub /></a>
            </div>
            <a href="https://www.linkedin.com/in/amisha-kumari2803"><IoLogoLinkedin /></a>
        </div>
    </div>
  )
}

export default Home