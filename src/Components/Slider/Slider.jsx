
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';



const Slider = () => {
    const [data,setdata]=useState([]);

    useEffect(()=>{
   fetch("http://localhost:5000/allcontest")
   .then(res=>res.json())
   .then(data=>setdata(data))
    },[])
    const {result}=data;

    
    return (
        <div>
             <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
        <SwiperSlide> <div className="bg-white flex justify-center items-center min-h-screen">
    <div className="w-full ml-1 mr-1 flex flex-col justify-center items-center sm:w-96 border-gray-700 text-center">
        <div className="w-full rounded-2xl  p-8 text-white bg-gradient-to-br from-[#5f99f9] to-[#8868dc] pb-44 relative">
            <h1 className="text-2xl font-semibold mb-4">Coding Challenge</h1>
            <p>Welcome to Coding Challenge an exhilarating coding challenge designed to test your programming skills and problem-solving abilities! Whether you're a seasoned developer or a coding enthusiast, this challenge is your chance to showcase your talent, tackle intriguing problems, and level up your coding expertise</p>
        </div>
        <div className="text-center bg-white shadow-lg w-[80%] rounded-xl -mt-32 z-10 p-1 flex items-center flex-col">
            <h2 className="font-semibold text-xl"></h2>
            <img className='h-32 w-32 rounded-full object-cover'  src="https://danbrown.com/wp-content/uploads/2017/07/DB-Author-Photo-Credit-Dan-Courter-20170530_034-Edit.jpg"/>
            <p className="mt-3 font-semibold text-lg">Emma Wilson</p>
            <span className="text-slate-500 rounded-xl border-slate-100 text-sm mt-2 pl-3 pr-3 border-[1px]">
                <span className="bg-green-500 w-2 h-2 rounded-full mt-0.5 inline-block"></span> Top Creator
            </span>
            <button className="w-full gradient rounded-md text-white p-4 mt-4 hover:shadow-xl transition-all duration-200 ease-in">Send a message</button>
        </div>
    </div>
</div>
         </SwiperSlide>
         <SwiperSlide> <div className="bg-white flex justify-center items-center min-h-screen">
    <div className="w-full ml-1 mr-1 flex flex-col justify-center items-center sm:w-96 border-gray-700 text-center">
        <div className="w-full rounded-2xl p-8 text-white bg-gradient-to-br from-[#5f99f9] to-[#8868dc] pb-44 relative">
            <h1 className="text-2xl font-semibold mb-4">Content Writing Contest</h1>
            <p>Welcome to WordCraft, a platform for wordsmiths, storytellers, and creative minds to showcase their talent, originality, and storytelling prowess! Whether you're an established writer or just beginning your journey in content creation, this contest invites you to unleash your creativity and captivate audiences with your words</p>
        </div>
        <div className="text-center bg-white shadow-lg w-[80%] rounded-xl -mt-32 z-10 p-1 flex items-center flex-col">
            <h2 className="font-semibold text-xl"></h2>
            <img className='h-32 w-32 rounded-full object-cover'  src="https://images.unsplash.com/photo-1613742743080-a59851f3008d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjBtYW58ZW58MHx8MHx8fDA%3D"/>
            <p className="mt-3 font-semibold text-lg">Linda Brown</p>
            <span className="text-slate-500 rounded-xl border-slate-100 text-sm mt-2 pl-3 pr-3 border-[1px]">
                <span className="bg-green-500 w-2 h-2 rounded-full mt-0.5 inline-block"></span> Top Creator
            </span>
            <button className="w-full gradient rounded-md text-white p-4 mt-4 hover:shadow-xl transition-all duration-200 ease-in">Send a message</button>
        </div>
    </div>
</div>
         </SwiperSlide>
         <SwiperSlide> <div className="bg-white flex justify-center items-center min-h-screen">
    <div className="w-full ml-1 mr-1 flex flex-col justify-center items-center sm:w-96 border-gray-700 text-center">
        <div className="w-full rounded-2xl p-8 text-white bg-gradient-to-br from-[#5f99f9] to-[#8868dc] pb-44 relative">
            <h1 className="text-2xl font-semibold mb-4">Vediography Contest</h1>
            <p>Welcome to VisualVista,a captivating videography contest that celebrates the artistry, storytelling, and creative prowess of videographers! Whether you're a seasoned professional or an aspiring filmmaker, this contest invites you to showcase your talent, vision, and storytelling through the lens of a camera.</p>
        </div>
        <div className="text-center bg-white shadow-lg w-[80%] rounded-xl -mt-32 z-10 p-1 flex items-center flex-col">
            <h2 className="font-semibold text-xl"></h2>
            <img className='h-32 w-32 rounded-full object-cover'  src="https://img.freepik.com/premium-photo/portrait-happy-young-casual-businessman-office_484651-6336.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699833600&semt=ais"/>
            <p className="mt-3 font-semibold text-lg">Linda Brown</p>
            <span className="text-slate-500 rounded-xl border-slate-100 text-sm mt-2 pl-3 pr-3 border-[1px]">
                <span className="bg-green-500 w-2 h-2 rounded-full mt-0.5 inline-block"></span> Top Creator
            </span>
            <button className="w-full gradient rounded-md text-white p-4 mt-4 hover:shadow-xl transition-all duration-200 ease-in">Isabella Scott</button>
        </div>
    </div>
</div>
         </SwiperSlide>

      </Swiper>
        </div>
    );
};

export default Slider;