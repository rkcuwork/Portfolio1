import React,{useRef} from 'react'
import './Contact.css'
import facebookIcon from '../../assets/facebook-icon.png'
import instagramIcon from '../../assets/instagram.png'
import youtubeIcon from '../../assets/youtube.png'
import twitterIcon from '../../assets/twitter.png'
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zothtsm', 'template_5lba3ks', form.current, 'v4BKZ5fKRwO0EqXEx')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent !")
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <section className="clients-section">
        <div id="contact">
            <h1 className="title">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
              <input type="text" className="name" placeholder='Your Name' name='from_name'/>
              <input type="email" className="email" placeholder='Your Email' name='from_email'/>
              <textarea name="message"  cols="30" rows="5" className="msg" placeholder='Your Message'></textarea>
              <button type='submit' value='send' className="submitBtn">Submit</button>
              <div className="links">
                <img src={facebookIcon} alt="Facebook" className="link" />
                <img src={twitterIcon} alt="Twitter" className="link" />
                <img src={youtubeIcon} alt="Youtube" className="link" />
                <img src={instagramIcon} alt="Instagram" className="link" />
              </div>
            </form>

          
        </div>
    </section>
  )
}

export default Contact