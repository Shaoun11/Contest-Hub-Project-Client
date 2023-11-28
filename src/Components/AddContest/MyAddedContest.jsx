import React, { useContext, useEffect, useState } from 'react';

import { useLoaderData } from 'react-router-dom';


import Footer from '../Footer/Footer';
import { Authcontext } from '../AuthProvider/AuthProvider';
import { FaEdit, FaTrashAlt, FaUsers } from 'react-icons/fa';


const MyAddedContest = () => {
    const [contest,setcontest]=useState([]);
    const {result}=useLoaderData();


    const {user}=useContext(Authcontext);
    const addedcart=user?.email;

    useEffect(()=>{
        const addedcontestfilter=result?.filter(cart=>cart?.useremail==addedcart)
        setcontest(addedcontestfilter)
    },[addedcart,result])

    console.log(contest);

    return (
        <div>
             
            <div>
                <h1 className='text-5xl font-semibold text-center'>My Added <span className='text-red-500'>Contest</span></h1>
            </div>
            <div className='max-w-5xl mx-auto mt-20 mb-28  grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6'>
               
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Contest Name</th>
                            <th>Contest Image</th>
                            <th>Edit</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                    contest.map((foods,index)=> <tr key={foods._id}>
                        <th>{index + 1}</th>
                        <td className='text-lg font-semibold'>{foods.title}</td>
                        <td><img className='w-20 h-20 rounded-md' src={foods.image} alt="" /></td>
                        <td>
                        <button
                              
                              className="btn btn-ghost btn-lg">
                              <FaEdit className="text-red-600 text-xl -ml-5"></FaEdit>
                          </button>
                           
                        </td>
                        <td>
                            <button
                              
                                className="btn btn-ghost btn-lg">
                                <FaTrashAlt className="text-red-600"></FaTrashAlt>
                            </button>
                        </td>
                    </tr>)
                }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAddedContest;