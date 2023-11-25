import { FiSearch } from 'react-icons/fi';
const Banner = () => {
    return (
        <div id="slide1" className=" relative sm:w-full w-[410px] h-[500px] sm:h-[600px] ">
        <img src='https://i.ibb.co/VS0QFBH/slide.png' className="sm:w-full object-cover w-[410px] h-[500px] sm:h-[600px]  " />
        <div className="absolute bg-gradient-to-r from-[#151519] to-rgba(21, 21, 21, 0.00) 100%)  flex h-full  top-0 left-0 items-center  ">
        <div className=' pl-16 lg:space-y-7 md:space-y-5  space-y-3 w-1/2'>
        <h2 className='lg:text-5xl md:text-4xl  text-white font-bold ' >Skills speak louder than words</h2>
         <p className='lg:text-lg md:text-base text-xs  font-light  text-[#FFF]'>We help companies develop the strongest tech teams around. We help candidates sharpen their tech skills and pursue job opportunities.</p>
         <div className="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-2 justify-between">
                                    <input
                                        className="text-base text-gray-400 flex-grow outline-none px-2"
                                        type="text"
                                        name='search'
                                        
                                        // onChange={(e) => setsearch(e.target.value)}
                                        placeholder="Search your Contest  Name"
                                    />
                                    <div className="ms:flex items-center px-2 py-1  rounded-lg space-x-4 mx-auto">

                                        <FiSearch className='text-xl' ></FiSearch>
                                    </div>
                                </div>
        </div>
        </div>
       
      </div>
    );
};

export default Banner;