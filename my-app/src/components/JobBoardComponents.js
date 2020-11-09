import React from 'react';

const JobBoardComponent = (props) => (
    <div>
        <h1>{props.job.company}</h1>
        <p>This is the Job Board!</p>
    </div>
)

export default JobBoardComponent;