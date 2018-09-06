import React from 'react';

const CourseData = (props) => (
    <div className="card" style={{'width': '100%', 'marginTop': '10px'}}>
        <div className="card-body">
        <h5 className="card-title">{props.CourseData.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">by {props.CourseData.author}</h6>
        <p className="card-text">{props.CourseData.description}</p>
        <a href={props.CourseData.url} className="card-link">Go to CourseData ...</a>
        </div>
    </div>
);

export default CourseData;
