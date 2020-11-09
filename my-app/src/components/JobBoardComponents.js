import React from 'react';

const JobBoardComponent = ({
    job: {
        company,
        logo,
        featured,
        position,
        role,
        level,
        postedAt,
        contract,
        location,
        languages,
        tools,
        isNew
    },

}) => {

    const tags = [role, level];

    if(languages) {
        tags.push(...languages);
    }
   
    if(tools) {
        tags.push(...tools);
    }

    



    return(
        <div className='flex bg-white shadow-lg m-4 p-6 rounded'>
            <div>
                <img src={logo} alt={company} />
            </div>
            <div className='flex flex-col ml-4'>
                <h3 className='font-bold text-teal-500'>
                    {company}
                    {isNew && (<span>NEW</span>)}
                    {isNew && (<span>NEW</span>)}
                </h3>

                <h2 className='font-bold text-xl'>{position}</h2>

                <p>
                    {postedAt} · {contract} · {location}
                </p>
            </div>
            <div className = 'flex items-center ml-auto'>
                {tags ?
                    tags.map((tag) => 
                    <span className = 'flex font-bold bg-teal-100 text-teal-500 m-2 p-2 rounded'>{tag}</span>) : ''}


       </div>
        </div>
    )};

export default JobBoardComponent;