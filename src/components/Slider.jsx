import React,{useState, useEffect} from 'react';

import SliderItem from './SliderItem';
import '../styles/Slider.css'
import {image1, image2, image3} from  '../images'


const Slider = () => {
    let sliderArr=[
        <SliderItem src={image1} alt="computer">Welcome to my portfolio</SliderItem>,
        <SliderItem src={image2} alt="keyboard">My name is Danijela</SliderItem>,
        <SliderItem src={image3} alt="laptop">This is my coding jurney</SliderItem>
    ];

    const [x,setX]= useState(0);

   

    const images = sliderArr.map((item,index) => {
        return (
            <section key={index} className='slider_slide' style={{transform:`translateX(${x}%)`}}>{item} </section>
      )
    })

    useEffect(() => {
        const Autoplay = () => {
            (x===-100*(sliderArr.length-1))?setX(0): setX(x-100);
            };
        const timer = setInterval(() => {
            Autoplay();}, 2000);
            return () => clearInterval(timer);
        }, [sliderArr.length,images,x]);
      
    return (
        <main className='slider_main' id="home">
            { images }
        </main>
    )
}

export default Slider;