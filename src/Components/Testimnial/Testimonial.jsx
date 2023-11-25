
import { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonial = () => {
    const [review,setreview]=useState([]);

useEffect(()=>{
    fetch("./reviews.json")
    .then(res=>res.json())
    .then(data=>setreview(data))
},[])
    return (
        <div className='max-w-6xl mx-auto'>
           
            <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
     {
    review.map(review => <SwiperSlide
        key={review._id}
    >
        <div className="flex flex-col items-center text-center mx-24 my-16">
            
            <img className='mt-8 w-40 h-40 rounded-full object-cover mb-4' src={review.image} alt="" />
            <p className="py-8">{review.details}</p>
            <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
            />
            <h3 className="text-2xl text-orange-400">{review.name}</h3>
            
        </div>
    </SwiperSlide>)
}
      </Swiper>
        </div>
    );
};

export default Testimonial;