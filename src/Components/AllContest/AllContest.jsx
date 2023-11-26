import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import {Helmet} from "react-helmet";
import ContestCard from '../Home/ContestCard';
import Navber from '../Navber';
import { FiSearch } from 'react-icons/fi';


const AllContest = () => {
    const [search,setsearch]=useState('');

    // const { total } = useLoaderData();
   const searchQuery = search.toLowerCase(); 
    const [page,setpage]=useState(0);
    const [loader,setloader]=useState(true);
     console.log(page);

     const {data:{result,total},isLoading,isError}=useQuery({
        queryKey:['allfoods',page,loader ],
        queryFn:async ()=>{
            const response=await fetch(`http://localhost:5000/allcontest?page=${page}`)
            const data=await  response.json()
           setloader(false,)
            return data;
         
        },
        initialData:{result:[],total:0}
    })

    
    const numberofpage=Math.ceil(total/9);

    const pages=[... Array(numberofpage).keys()]

    return (
        <div>
            <Helmet>
                <title>Contest Hub | All Contest</title>

            </Helmet>
            <Navber></Navber>
            <div className='sm:w-full  w-[410px] flex lg:flex-row md:flex-row flex-col justify-between lg:gap-6 md:gap-4 gap-5 h-[500px] sm:h-[500px] bg-[#df6363]'>
                <div>
                    <div className=" lg:pt-16 lg:pl-16 md:pl-6 md:pt-16  bg-[#df6363] flex justify-center items-center">
                        <div className="container mx-auto bg-gray-200 rounded-lg p-14">
                            <form >
                                <h1 className="text-center font-bold text-gray-900 text-4xl">
                                    Find your favourite Contest do you like...!
                                </h1>
                                <p className="mx-auto font-normal text-sm my-6 max-w-lg">
                                    Enter the Contest name correctly to find the Contest you searched for. Searched Contest will not be found if your Contest names are incorrect.
                                </p>
                                <div className="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
                                    <input
                                     onChange={(e) => setsearch(e.target.value)}
                                        className="text-base text-gray-400 flex-grow outline-none px-2"
                                        type="text"
                                        name='search'
                                        
                                        
                                        placeholder="Search your Food name"
                                    />
                                    <div className="ms:flex items-center px-2 py-1  rounded-lg space-x-4 mx-auto">
                                    <FiSearch className='text-xl' ></FiSearch>
                                       
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className=' lg:pt-8 lg:mr-4 md:pt-36'>
                    <img className='w-[600px] h-600px] rounded-md' src="https://i.ibb.co/r6KvxGT/61a2261ddfe918edd50d591b-f-MNtx8k-MR7i-Owgv-Hmg-Ap-E4e-Gn-J8zo5v-Bch9knvp-JVRWWQw-TZa-QH2xf-Qbcc-SM4.jpg" alt="" />
                </div>
            </div>
            <h1 className='text-6xl lg:mt-10 md:mt-10 mt-[400px] mb-16 font-bold text-center' >  ALL <span className='text-red-500'>Contest</span> </h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-6'>
            {
                    result.filter((item)=>{
                        return  item.title.toLowerCase().includes(searchQuery);
                    }).map(food => <ContestCard key={food._id} data={food} > </ContestCard>)
                }

            </div>
          
            <div className='flex join justify-center mt-12 mb-16' >
                {
                    pages.map((item,index)=><button onClick={()=>setpage(index)} className=  { ` ${page == index ?"bg-red-500 text-white":"bg-yellow-400 text-white"} lock h-8 w-10 rounded border border-gray-100  text-center leading-8 `} >{index+1}</button>)
                }
            </div>
             <Footer></Footer>
        </div>
    );
};

export default AllContest;