import React from 'react';
import TimelineItem from './TimelineItem'
import '../styles/TimelineBoard.css'

import timelineData from '../data.js' ;

const timelineCards = timelineData.length > 0 ? (
    timelineData.map((data,index) => (
             <TimelineItem 
             data={data} key={index} />
         ))
     
 ): null;

const TimelineBoard = () => {
    return (
        <main className="timeline_main">
            <h1 className="timeline_header">Projects timeline</h1>
            <section className="timeline_container">
                {timelineCards}
            </section>
        </main>
        
    )
}

export default TimelineBoard;