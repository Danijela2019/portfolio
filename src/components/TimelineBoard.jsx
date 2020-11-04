import React from 'react';
import TimelineItem from './TimelineItem'
import '../styles/TimelineBoard.css'

import timelineData from '../data/timeline_data.js';

const timelineCards = timelineData.map((data,index) => (
             <TimelineItem 
             data={data} key={index} />
         ));

const TimelineBoard = () => {
    return (
        <main className="timeline_main" id="projects">
            <h1 className="timeline_header">Project's timeline</h1>
            <section className="timeline_container">
                {timelineCards}
            </section>
        </main>
    )
}

export default TimelineBoard;