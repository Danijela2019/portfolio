import React,{useState} from 'react';
import {BsChevronCompactLeft} from "react-icons/bs"
import {BsChevronCompactRight} from "react-icons/bs"

import SliderItem from './SliderItem';
import Icon from './Icon';
import '../styles/Slider.css'
import {image1, image2, image3} from  '../images'


const Slider = () => {
    let sliderArr=[
        <SliderItem src={image1} alt="computer">Welcome to my portfolio</SliderItem>,
        <SliderItem src={image2} alt="keyboard">A jurney through my career path</SliderItem>,
        <SliderItem src={image3} alt="laptop">How I become a software developer</SliderItem>
    ];

    const [x,setX]= useState(0);

    const goLeft = () => {
        x=== 0 ? setX(-100 *(sliderArr.length-1)) :
        setX(x+100)
    };

    const goRight = () => {
        (x===-100*(sliderArr.length-1))?setX(0): 
        setX(x-100);
    };

    const images = sliderArr.map((item,index) => {
        return (
            <section key={index} className='slider_slide' style={{transform:`translateX(${x}%)`}}>{item} </section>
      )
    })

    return (
        <main className='slider_main'>
            { images } 
            <button className='slider_goleft_button' onClick={goLeft}>
                <Icon>
                    <BsChevronCompactLeft />
                </Icon>
            </button>
            <button className='slider_goright_button' onClick={goRight}>
                <Icon>
                    <BsChevronCompactRight />
                </Icon>
            </button>
        </main>
    )
}

export default Slider;