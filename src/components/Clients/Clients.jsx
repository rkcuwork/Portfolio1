import React from 'react'
import './Clients.css'
import walmart from "../../assets/walmart.png"
import adobe from "../../assets/adobe.png"
import microsoft from "../../assets/microsoft.png"
import facebook from "../../assets/facebook.png"

function Clients() {
  return (
    <section className="clients-section">
        <div id="clients">
            <h1 className="title">My clients</h1>
            <p className="clientDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque nam dolorem ipsam excepturi deleniti. Possimus eius quis reiciendis dolore vitae.</p>

            <div className="clientsImgs">
                <img src={walmart} alt="walmart"  className='clientImg'/>
                <img src={adobe} alt="adobe"  className='clientImg'/>
                <img src={microsoft} alt="microsoft"  className='clientImg'/>
                <img src={facebook} alt="facebook" className='clientImg' />

            </div>
        </div>
    </section>
  )
}

export default Clients