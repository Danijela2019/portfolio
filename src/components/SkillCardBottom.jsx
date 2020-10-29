import React from 'react'

import '../styles/SkillCardBottom.css'
import imageData from '../data/logo_img_data'

    
const Logo = ({images}) => {
    return (
        <img className="skill-card_logo_img" src={images.src} alt={images.alt}></img>
    )
}

const logos = imageData.map((images) => (
    <Logo images={images} key={images.id} />
))

const SkillCardBottom = () => {
            return (
                <main className="skill-card_bottom_main">
                <h1 className="skill-card_bottom_header">Other skills </h1>
                <section className="skill-card_bottom_logos">
                   {logos}
                </section>
            </main>
            )
        }
        

export default SkillCardBottom;