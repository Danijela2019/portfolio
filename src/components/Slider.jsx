import React,{useState} from 'react';
import SliderItem from './SliderItem';

import '../styles/Slider.css'
import {image1, image2, image3} from  '../images'
import {IconContext} from "react-icons"
import {BsChevronCompactLeft} from "react-icons/bs"
import {BsChevronCompactRight} from "react-icons/bs"

const IconPlacer = ({ children }) => {
  return (
      <IconContext.Provider value={{ style: {fontSize: '40px', color: "black"}}}>
      <div>
          { children }
      </div>
    </IconContext.Provider>
   )
}



const Slider =() => {
    let sliderArr=[
    <SliderItem src={image1} alt="computer">Welcome to my portfolio</SliderItem>,
    <SliderItem src={image2} alt="keyboard">A jurney through my career path</SliderItem>,
    <SliderItem src={image3} alt="laptop">How I become a software developer</SliderItem>];

    const [x,setX]= useState(0);

    const goLeft = () => {
        x=== 0 ? setX(-100 *(sliderArr.length-1)) :
        setX(x+100)
    };

    const goRight = () => {
        (x===-100*(sliderArr.length-1))?setX(0): 
        setX(x-100);
    };

    return (
        <div className='slider'>
            { sliderArr.map((item,index)=> {
                  return (
                      <div  key={index} className='slide' style={{transform:`translateX(${x}%)`}}>{item}</div>
                )
              })
            } 
            <button className='goLeft' onClick={goLeft}>
                <IconPlacer>
                    <BsChevronCompactLeft />
                </IconPlacer>
            </button>
            <button className='goRight' onClick={goRight}>
                <IconPlacer>
                    <BsChevronCompactRight />
                </IconPlacer>
            </button>
        </div>
    )
}

export default Slider;