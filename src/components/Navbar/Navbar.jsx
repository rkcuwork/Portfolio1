import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import contactImg from "../../assets/contact.png"
import {Link} from "react-scroll"
import menu from '../../assets/menu.png'

function Navbar() {
  const [showMenu,setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
        <img src={logo} alt="Logo" className='logo'/>
        <div className='destopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="destopMenuListItem">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-15} duration={500}className="destopMenuListItem">About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="destopMenuListItem">Protfolio</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500}className="destopMenuListItem">Client</Link>
        </div>
        <button className='destopMenuBtn' onClick={() => document.getElementById('contact').scrollIntoView({behavior:"smooth"})}>
            <img src={contactImg} alt="" className='destopMenuImg' />
            Contact Me
        </button>

        <img src={menu} alt="Menu" className='mobMenu' onClick={()=>(setShowMenu(!showMenu))}/>
        <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-15} duration={500}className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Protfolio</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500}className="listItem" onClick={()=>setShowMenu(false)}>Client</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500}className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>

    </nav>
  )
}

export default Navbar