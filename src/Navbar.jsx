import React ,{ useState } from 'react'
import "./Navbar.css"
import DP from "./assets/DP.jpg"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
// import Res from "./assets/res.pdf"


const Menu = () => (
  <>
    <p><a href='#s1'>Home</a></p>
    <p><a href='#s2'>About</a></p>
    <p><a href='#s3'>Skills</a></p>
    <p><a href='#s4'>Project</a></p>
    {/* <p><a href={}>Resume</a></p> */}
    <p><a href='#s5'>Contact</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={DP} alt="GPT3 Logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
        <div className="gpt3__navbar-wrapper">

         
            
         
          {/* Responsive part for mobiles devices */}
          {/* hamburger menu */}
          <div className="gpt3__navbar-menu">
            {toggleMenu
              ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
              : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
            }
            {toggleMenu &&
              <div className="gpt3__navbar-menu_container scale-up-center">
                <div className="gpt3__navbar-menu_container-links">
                  <Menu />
                </div>
                
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;