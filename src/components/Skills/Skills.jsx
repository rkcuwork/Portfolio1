import React from 'react'
import './Skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'
import SkillBox from './SkillBox'

function Skills() {
  const skills = {
    uiDesign:{
      image: UIDesign,
      title: "UI/UX Design",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, obcaecati."
    },
    webDesign:{
      image: WebDesign,
      title: "Web Design",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, voluptas."
    },
    appDesign:{
      image: AppDesign,
      title: "App Design",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, modi!"
    },
    // ComputerVision:{
    //   image: AppDesign,
    //   title: "Computer Vision",
    //   description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, modi!"
    // },
  }

  return (
    <section id="skills">
      <span className="skillTitle">What I Do</span>
      <span className="skillDesc"> I possess advanced skills in designing, developing, and implementing machine learning algorithms. My expertise lies in leveraging cutting-edge technologies and frameworks such as TensorFlow and Scikit-learn to create robust models. I am adept at data preprocessing, feature engineering, and statistical analysis, ensuring the extraction of meaningful insights from complex datasets. My proficiency extends to deep learning techniques, including neural networks, and natural language processing, allowing me to tackle diverse challenges in the field. I excel in model evaluation, fine-tuning, and optimization, consistently achieving high accuracy and performance.</span>
      <div className='skillBars'>
        {Object.keys(skills).map((key) => (
          <SkillBox key={key} image={skills[key].image} title={skills[key].title} description={skills[key].description}></SkillBox>
        ))}
      </div>
      
      
      
    </section>
  )
}

export default Skills