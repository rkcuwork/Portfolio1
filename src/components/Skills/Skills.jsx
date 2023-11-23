import React from 'react'
import './Skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

function Skills() {
  return (
    <section id="skills">
      <span className="skillTitle">What I Do</span>
      <span className="skillDesc"> I possess advanced skills in designing, developing, and implementing machine learning algorithms. My expertise lies in leveraging cutting-edge technologies and frameworks such as TensorFlow and Scikit-learn to create robust models. I am adept at data preprocessing, feature engineering, and statistical analysis, ensuring the extraction of meaningful insights from complex datasets. My proficiency extends to deep learning techniques, including neural networks, and natural language processing, allowing me to tackle diverse challenges in the field. I excel in model evaluation, fine-tuning, and optimization, consistently achieving high accuracy and performance.</span>
      <div className='skillBars'>
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, facilis.</p>
          </div>
        </div>

        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Design</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, eum.</p>
          </div>
        </div>

        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App Design</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, veritatis?</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills