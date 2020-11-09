import React from 'react';

const JobBoardComponent = ({job}) => (
    <div className = 'flex bg-white shadow-lg m-4 p-4'>
       <div>
           <img src={job.logo} alt={job.company}/>
       </div>
       <div className = 'ml-3'>
           <h3 className = 'font-bold text-teal-500'>{job.company}</h3>

           <h2 className = 'font-bold text-xl'>{job.position}</h2>

           <p>
               {job.postedAt} · {job.contract} · {job.location}
           </p>
       </div>
       <div></div>
    </div>
)

export default JobBoardComponent;