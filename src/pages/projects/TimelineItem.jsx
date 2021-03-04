import React from 'react';
import '../../styles/TimelineItem.css';

const TimelineItem = ({ data }) => {
    return (
        <section className="timeline_item">
            <article className="timeline_item_content">
                <time className="timeline_item_time">{data.date}</time>
                <p className="timeline_item_title">{data.title}</p>
                {!data.video ? (
                    <img className="timeline_item_img" src={data.img} alt="Project screen"></img>
                ) : (
                    <video
                        className="timeline_item_img"
                        src={data.img}
                        muted
                        onMouseOver={(event) => event.target.play()}
                    />
                )}
                <div className="timeline_item_button-wrapper">
                    <a href={data.link.url1} target="_blank" rel="noopener noreferrer">
                        <button className="timeline_item_button"> {data.link.button1}</button>
                    </a>
                    <a href={data.link.url2} target="_blank" rel="noopener noreferrer">
                        <button className="timeline_item_button"> {data.link.button2}</button>
                    </a>
                </div>
                <p className="timeline_item_text">{data.text}</p>
                <span className="square" />
            </article>
        </section>
    );
};

export default TimelineItem;
