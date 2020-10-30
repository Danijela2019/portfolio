import React from 'react'

import '../styles/SliderItem.css'


const SliderItem =({src, children})  => {
    return (
        <section className="background">
            <img className="background_image" src={src} alt=""></img>
            <div className="background_transparent">
                <h1 className='background_text'>{children}</h1>
            </div>
        </section>
    )
}

export default SliderItem; 