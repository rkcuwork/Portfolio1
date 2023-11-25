import React from 'react'
import './Works.css'
import Portfolio1 from '../../assets/portfolio-1.png'
import Portfolio2 from '../../assets/portfolio-2.png'
import Portfolio3 from '../../assets/portfolio-3.png'
import Portfolio4 from '../../assets/portfolio-4.png'
import Portfolio5 from '../../assets/portfolio-5.png'
import Portfolio6 from '../../assets/portfolio-6.png'


function Works() {
  return (
    <section id="works">
        <h2 className="worksTitle">My Protfolio</h2>
        <span className="worksDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates beatae necessitatibus, eos dolor ut, vero reiciendis porro laborum nam exercitationem voluptatibus suscipit, sint et iste doloremque id repellendus qui est illo voluptate aspernatur incidunt. Voluptates excepturi consequuntur enim. Eos, quaerat? Corporis, eligendi modi quidem ex itaque officia nihil? Dolor, tenetur!</span>

        <div className="worksImgs">
            <img src={Portfolio1} alt="" className="worksImg" />
            <img src={Portfolio2} alt="" className="worksImg" />
            <img src={Portfolio3} alt="" className="worksImg" />
            <img src={Portfolio4} alt="" className="worksImg" />
            <img src={Portfolio5} alt="" className="worksImg" />
            <img src={Portfolio6} alt="" className="worksImg" />
        </div>
        <button className="workBtn">See More</button>
    </section>
  )
}

export default Works