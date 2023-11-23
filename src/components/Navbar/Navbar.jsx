import React from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import contactImg from "../../assets/contact.png"
import {Link} from "react-scroll"

function Navbar() {
  return (
    <nav className='navbar'>
        <img src={logo} alt="Logo" className='logo'/>
        <div className='destopMenu'>
            <Link className="destopMenuListItem">Home</Link>
            <Link className="destopMenuListItem">Client</Link>
            <Link className="destopMenuListItem">About</Link>
            <Link className="destopMenuListItem">Protfolio</Link>
        </div>
        <button className='destopMenuBtn'>
            <img src={contactImg} alt="" className='destopMenuImg' />
            Contact Me
        </button>

    </nav>
  )
}

export default Navbar