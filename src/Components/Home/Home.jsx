import React, { useState } from 'react';
import Navber from '../Navber';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import ContestCard from './ContestCard';
import Advertise from '../Advertise/Advertise';
import Slider from '../Slider/Slider';
import Testimonial from '../Testimnial/Testimonial';
import Contact from '../Contact/Contact';

const Home = () => {
 
    const {result}=useLoaderData();
    const slicedData = result.slice(0, 5);
    return (
        <div>
            <Navber></Navber>
            <Banner></Banner>
            <div>
                <h1 className='font-bold lg:text-6xl md:text-6xl text-[43px] text-center mt-20 mb-16'>Our <span className='text-red-500'>Popular</span> Contest </h1>
            </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-6'>
            {
                slicedData.map(sort=><ContestCard key={sort._id} data={sort}></ContestCard>)
            }
             
           </div>
           <Advertise></Advertise>
           <div className='mt-32 max-w-6xl mx-auto'>
           <h1 className='font-bold lg:text-6xl md:text-6xl text-[43px] text-center mt-20 mb-16'>Our <span className='text-red-500'>Best</span> Creator </h1>
           <Slider></Slider>
           </div>
          <div className='mb-16'>
          <h1 className='font-bold  lg:text-6xl md:text-6xl text-[43px] text-center mt-20 mb-16'>Our <span className='text-red-500'>Winner</span> review </h1>
          <Testimonial></Testimonial>
          </div>
          <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;