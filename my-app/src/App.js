import React, { useState, useEffect } from 'react';
import JobBoardComponent from './components/JobBoardComponents';
import data from './assets/static-job-listings-master/data.json';



function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => { setJobs(data); }, []);

  const filterFunc = ({ role, level, tools, languages }) => {


    if (filters.length === 0) {
      return true;
    }

    const tags = [role, level];


    if (tools) {
      tags.push(...tools);
    }

    if (languages) {
      tags.push(...languages);
    }


    return tags.some(tag => filters.includes(tag));
  }

  const handleTagClick = (tag) => {
    if (filters.includes(tag)) return;
    setFilters([...filters, tag])
  }

  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter((f) => f !== passedFilter));
  }


  const clearFilters = () => {
    setFilters([]);
  }

  const filteredJobs = jobs.filter(filterFunc);



  return (
    <div className="App">
      <header className='bg-teal-400 mb-12'>
        <img className = 'w-full' src='./images/bg-header-desktop.svg' alt='bg-pic' />
      </header>


      {filters.length > 0 &&
        <div className={`flex bg-white shadow-lg my-16 mx-10 p-6 rounded `}>{filters.map((filter) =>
          <span className='flex font-bold cursor-pointer bg-teal-100 text-teal-500 m-2 p-2 mr-4 mb-4 rounded sm:mb-0'
            onClick={() => handleFilterClick(filter)}> × {filter}</span>
        )}

          <button onClick = {clearFilters} className = 'font-bold text-gray-700 ml-auto'>
            Clear
          </button>

        </div >
      }

      {
        jobs.length === 0 ? (
          <p>fetching jobs...</p>
        ) : (
            filteredJobs.map(job => (
              <JobBoardComponent
                job={job}
                key={job.id}
                handleTagClick={handleTagClick}
              />
            ))
          )
      }

    </div >
  );
}

export default App;
