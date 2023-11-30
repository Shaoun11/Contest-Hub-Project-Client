import React, { useContext, useEffect, useState } from 'react';

import { useLoaderData } from 'react-router-dom';

import { MdDoneAll } from "react-icons/md";
import Footer from '../Footer/Footer';
import { Authcontext } from '../AuthProvider/AuthProvider';
import { FaEdit, FaTrashAlt, FaUsers } from 'react-icons/fa';


const ManageContest = () => {
    const [contest,setcontest]=useState([]);
    const {result}=useLoaderData();


    const {user}=useContext(Authcontext);
    const addedcart=user?.email;

    

    console.log(contest);

    return (
        <div>
             
            <div>
                <h1 className='text-5xl font-semibold text-center'>Manage <span className='text-red-500'>Contest</span></h1>
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
                            <th>Accept</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                    result.map((contest,index)=> <tr key={contest._id}>
                        <th>{index + 1}</th>
                        <td className='text-lg font-semibold'>{contest.title}</td>
                        <td><img className='w-20 h-20 rounded-md object-cover' src={contest.image} alt="" /></td>
                        <td>
                        <button
                              
                              className="btn btn-ghost btn-lg">
                              <MdDoneAll className="text-green-600 text-xl -ml-5"></MdDoneAll>
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

export default ManageContest;