import React from 'react';
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div>
  
        <img className='pl-[350px]  bg-cover pt-20 ' src='https://i.ibb.co/ZmGtggZ/404-error-dribbble-800x600.gif' alt="" />
    
          <h1 className='text-6xl font-bold text-center text-gray-700'>Sorry,Page Not Found</h1>
         <div className='flex mt-5 justify-center' >
        <Link to={"/"}>           <button   className='btn btn-outline btn-warning '> Go to Home </button></Link>
         </div>
      </div>
    );
};

export default Errorpage;