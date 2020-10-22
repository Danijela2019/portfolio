import React,{useState} from 'react';


import '../styles/Slider.css'
import ImgComponent from './ImgComponent';
import image1 from '../slideImages/image1.jpg'
import image2 from '../slideImages/image2.jpg'
import image3 from '../slideImages/image3.jpg'

let styles = {
    width: '100vw',
    height: '100vh'
  };

const Slider =() => {
    let sliderArr=[
    <ImgComponent src={image1} alt="computer"></ImgComponent>,
    <ImgComponent src={image2} alt="keyboard"></ImgComponent>,
    <ImgComponent src={image3} alt="laptop"></ImgComponent>]
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
          <button className='goLeft' onClick={goLeft}>left</button>
          <button className='goRight' onClick={goRight}>Right</button>
        </div>
    )
}
export default Slider;