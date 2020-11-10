import React, { useState, useEffect } from 'react';
import JobBoardComponent from './components/JobBoardComponents';
import data from './assets/static-job-listings-master/data.json';



function App() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    setJobs(data);
  }, []);



  return (
    <div className="App">
      <header className='bg-teal-400 mb-12'>
        <img src='./images/bg-header-desktop.svg' alt='bg-pic' />
      </header>
      {
        jobs.length === 0 ? (
          <p>fetching jobs...</p>
        ) : (
            jobs.map(job =>
              <JobBoardComponent job={job} key={job.id} />
            ))
      }

    </div>
  );
}

export default App;
