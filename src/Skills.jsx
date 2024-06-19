import React from 'react'
 import "./Skills.css"
 import { FaHtml5 } from "react-icons/fa6";
 import { MdOutlineCss } from "react-icons/md";
 import { AiOutlineJavaScript } from "react-icons/ai";
 import { FaReact } from "react-icons/fa";
 import { FaNode } from "react-icons/fa";
 import { SiExpress } from "react-icons/si";
 import { BsBootstrap } from "react-icons/bs";
 import { SiTailwindcss } from "react-icons/si";
 import AOS from 'aos';
import 'aos/dist/aos.css'; 
 function Skills() {
    AOS.init();
    return (
    <div className='skillmain' id="s3">
            <div className="topskill">
                <h1>Skills</h1>
            </div>
            <div className="bottom1"> 
                    
                        <div className="bottoma" data-aos="fade-up-right">       
                                <a href="#"><FaHtml5 /></a> 
                                <p>HTML</p>
                           </div>  
                      

                    
                    <div className="bottoma" data-aos="fade-up-left"> 
                        <a href=""><MdOutlineCss /></a>
                        <p>CSS</p>
                           
                    </div>
                    <div className="bottoma"  data-aos="fade-up-right"> 
                        <a href=""><AiOutlineJavaScript /></a>
                        <p>JavaScript</p>
                    </div>
                    <div className="bottoma" data-aos="fade-up-left"> 
                        <a href=""><FaReact /></a>
                        <p>React</p>
                    </div>
                  </div>
                  <div className="bottom2"  >
                    <div className="bottoma"data-aos="fade-up-right"> 
                        <a href="#"><FaNode /></a>
                        <p>Node.js</p>
                    </div>
                    <div className="bottoma" data-aos="fade-up-left"> 
                        <a href=""><SiExpress /></a>
                        <p>Express</p>

                    </div>
                    <div className="bottoma" data-aos="fade-up-right"> 
                        <a href=""><BsBootstrap /></a>
                        <p>Bootstrap</p>
                    </div>
                    <div className="bottoma" data-aos="fade-up-left">
                        <a href=""><SiTailwindcss /></a>
                        <p>Tailwindcss</p>
                    </div>
            </div>
     </div>
   )
 }
 
 export default Skills;