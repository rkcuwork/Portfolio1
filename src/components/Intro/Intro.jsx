import React from 'react'
import './Intro.css'
import { Link } from 'react-scroll'
import btnImg from '../../assets/hireme.png'
import bg from '../../assets/image.png'

function Intro() {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Rajiv</span> <br />Machine Learning Engineer</span>
            <p className="introPara">Dedicated to harnessing the power of algorithms and data to develop intelligent solutions <br /> that drive innovation. Armed with expertise in cutting-edge technologies, I am committed <br />to pushing the boundaries of what is possible in the realm of machine learning.</p>
            <Link><button className="btn"><img src={btnImg} alt="Hire Me" className='btnImg' />Hire Me</button></Link>
        </div>
        <img src={bg} alt="Profile Image" className="bg" />
    </section>
  )
}

export default Intro