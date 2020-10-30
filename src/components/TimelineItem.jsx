import React from 'react';
 import  '../styles/TimelineItem.css'


const TimelineItem = ({ data }) =>{
    return  (
        <main className="timeline_item">
            <section className="timeline_item_content">
                <time>{data.date}</time>
                <p className="timeline_item_title">{data.title}</p>
                <img className="timeline_item_img" src ={require (`../images/${data.img}`)} alt="Project screen"></img>
                <div className="timeline_item_button-wrapper">
                    <a href={data.link.url1} target="_blank" rel="noopener noreferrer">
                        <button className="timeline_item_button">  {data.link.button1}</button>
                    </a>
                    <a href={data.link.url2} target="_blank" rel="noopener noreferrer">
                        <button className="timeline_item_button">  {data.link.button2}</button>
                    </a> 
                </div>     
                <span className="circle" />
            </section>
        </main>
    );
}

export default TimelineItem;