import React from 'react';
import TimelineItem from './TimelineItem';
import '../../styles/projects/TimelineBoard.css';

import timelineData from '../../data/timeline_data';

const timelineCards = timelineData.map((data, index) => <TimelineItem data={data} key={index} />);

const TimelineBoard = () => {
    return (
        <section className="timeline_main" id="projects">
            <h1 className="timeline_header">Project's timeline</h1>
            <div className="timeline_container">{timelineCards}</div>
        </section>
    );
};

export default TimelineBoard;
