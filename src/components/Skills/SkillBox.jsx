import React from 'react'
import './SkillBox.css'

function SkillBox({
    image,
    title,
    description
}) {
  return (
    <div className="skillBar">
        <img src={image} alt="UIDesign" className="skillBarImg" />
        <div className="skillBarText">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default SkillBox