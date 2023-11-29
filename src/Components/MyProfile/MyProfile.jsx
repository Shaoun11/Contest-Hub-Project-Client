import React, { useContext } from 'react';
import { Authcontext } from '../AuthProvider/AuthProvider';
import {  Cell, PieChart, Pie, Legend } from 'recharts';
const COLORS = [ '#FFBB28','#ff444a'];
import { useLoaderData } from 'react-router-dom';
const MyProfile = () => {
    const {result}=useLoaderData();
   
    const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  }

     
  const data = [
    
    { value:38 }, { value: 12 },
    
    ];
    const{user}=useContext(Authcontext)
    return (
        <div>

            <div
                className="h-full flex flex-col  overflow-y-scroll">
             
                <div className="bg-green-300  pb-3 rounded-b-3xl">
                    <div
                        className="flex  rounded-b-3xl bg-red-200 space-y-5 flex-col items-center py-7">
                        <img className="h-28 border-8 border-green-300 w-28 rounded-full"
                            src={user.photoURL}
                            alt="User" />
                        <a href="#"> <span
                            className="text-h1">{user.displayName}</span></a>
                    </div>

                    <div
                        className="grid px-7 py-2  items-center justify-around grid-cols-3 gap-4 divide-x divide-solid ">
                        <div className="col-span-1 flex flex-col items-center ">
                            <span className="text-2xl font-bold dark:text-gray-500">4</span>
                            <span className="text-lg font-medium 0">Ranking</span>
                        </div>
                        <div className="col-span-1 px-3 flex flex-col items-center ">
                            <span className="text-2xl font-bold dark:text-gray-500">
                                2</span>
                            <span className="text-lg font-medium">Wining</span>
                        </div>
                        <div className="col-span-1 px-3 flex flex-col items-center ">
                            <span className="text-2xl font-bold dark:text-gray-500">
                                546</span>
                            <span className="text-lg font-medium">Points</span>
                        </div>
                    </div>

                </div>
   
                <PieChart className='lg:ml-[400px] ml-3 md:ml-[210px] mb-14 mt-28'  lg:width={1800}  lg:height={600} width={300} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={140}
          fill="#8884d8"
          dataKey="value"
        >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
     
      </PieChart>
     
                        
                </div>
                <div className='lg:flex md:flex gap-20 lg:ml-[390px] md:ml-28 ml-4 mb-8 text-[#0B0B0B] text-base font-medium'>
        <div >
        <h1 className='flex gap-2' >Your Wining percentage : <img className='mt-1' src="https://i.ibb.co/N7FBTnP/icon.png" alt="" /> </h1>
        </div>

        <div>
      
        </div>
      </div>

            </div>
       
    );
};

export default MyProfile;