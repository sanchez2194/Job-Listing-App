import React, {useState, useEffect} from 'react';
import JobBoardComponent from './components/JobBoardComponents';
import data from './assets/static-job-listings-master/data.json';



function App() {
  const [jobs, setJobs] = useState([]);
  useEffect (() => {
      setJobs(data);
    }, []);

    console.log(jobs);

  return (
    <div className="App">
      <h1 className = 'text-4xl' >starting a new app</h1>
      {
         jobs.length === 0 ? (
          <p>fetching jobs...</p>
        ) : (
          jobs.map( job =>
            <JobBoardComponent job ={job} key = {job.id}/>
          ))
      }
      
    </div>
  );
}

export default App;
