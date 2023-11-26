import React from 'react';

const Loading = () => {
    return (
        <div className="max-h-screen ml-[690px] pt-[360px] ">
            <span className="loading text-red-500 ml-8 loading-ring loading-lg"></span>
            <h1 className='text-4xl'>Loading.....</h1>
        </div>
    );
};

export default Loading;