import React from 'react'



const ImgComponent =({src}) =>{

    const imgStyles = {
     width:100+"%",
     height:'auto',
    }
    return (
        <div  className="background">
        <img src={src} style={imgStyles} alt=""></img>
        <div className="centered">
    <h1 className='transboxP'>Welcome to my portfolio page</h1>
  </div>
  </div>
         )

}
export default ImgComponent; 