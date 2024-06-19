import React from 'react'
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import "./Footer.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
function Footer() {
      AOS.init();
  return (
    <div className="footermain" id="s5">
        <div className="footer1">
             <h1> GET IN <span>TOUCH</span></h1>
       </div>
       <div className="footer2">
              <div className="footerdown1" data-aos="fade-up-right">
                    <a href="https://github.com/Amisha-Singh-2002" target="_blank"><IoLogoGithub />
</a>
                
              </div>
              <div className="footerdown2" data-aos="fade-up-right">
                    <a href="https://www.linkedin.com/in/amisha-kumari2803 " target="_blank"><FaLinkedin /></a>
              </div>
              <div className="footerdown3" data-aos="fade-up-left">
                    <a href="mailto:amishasingh2302@gmail.com"><MdEmail /></a>
              </div>
              <div className="footerdown4" data-aos="fade-up-left">
                  <a href="tel:+916206276126"><IoCallSharp />
</a>
              </div>

       </div>
       <div className="footer3">
            <div className="footer3a" data-aos="fade-up-right">
                 <a href="mailto:amishasingh2302@gmail.com"><MdEmail />&nbsp;amishasingh2302@gmail.com</a>
            </div>
            <div className="footer3b" data-aos="fade-up-left">
                    <a href="tel:+916202795448"><IoCallSharp />&nbsp;+91******* </a>
                    {/* <p>+916206276126</p> */}
            </div>
        </div>
        
    </div>
  )
}

export default Footer