
import Swal from 'sweetalert2';


import { useContext } from 'react';
import { Authcontext } from '../AuthProvider/AuthProvider';

const AddContest = () => {
    const{user}=useContext(Authcontext);
    const handleform=e=>{
        e.preventDefault();
        const form=e.target;
        const title=form.contestName.value;
        const image=form.contestImage.value;
        const startDate=form.startdate.value;
        const endDate=form.startdate.value;
        const participants=form.participants.value;
        const prizes=form.Prize.value;
        const description=form.description.value;
        const price=form.Price.value;
       const author_image=user?.photoURL;
       const useremail=user?.email;
       const author_name=user?.displayName;
        const data={title,image,startDate,endDate,participants,prizes,description,useremail,author_image,author_name,price}
       console.log(data);
        fetch('https://12-server-site-assignment.vercel.app/allcontest',{
            method:"post",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
        })
        .then(res=>res.json())
        .then(value=>{
            console.log(value);
            if (value.insertedId) {
                Swal.fire({
                    title: 'success',
                    text: 'you contest added succesfully',
                    icon: 'success',
                    confirmButtonText: 'Thank you'
                  })
               form.reset() ;
            }
        })
    
    
    
    
      }
    return (
        <div>
             
        <div className="lg:flex   md:flex items-center justify-center">
        <div>
            <img className="h-[400px]" src="https://i.ibb.co/HnP9Qdj/360-F-254878309-P62oik-Pc8zu9-TQjr4j2-Xp-Ekl5d-FBa6ep-removebg-preview.png" alt="" />
        </div>
          <div className="flex  items-center justify-center p-12">

<div className="mx-auto w-full max-w-[550px]">
<h1 className="text-3xl text-center font-semibold">Add Your New Contest</h1>
  <form onSubmit={handleform}  >
    <div className="mb-5">
      <label
        for="name"
        className="mb-3 block text-base font-medium text-[#07074D]"
      >
    Contest Name
      </label>
      <input
        type="text"
        name="contestName"
        id="name"
        placeholder="Type Your Contest Name"
        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
      />
    </div>
    <div className="mb-5">
      <label
        for="img"
        className="mb-3 block text-base font-medium text-[#07074D]"
      >
       Contest URL
      </label>
      <input
        type="text"
        name="contestImage"
        id="img"
        placeholder=" Contest Image URL"
        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
      />
    </div>
    <div className="-mx-3 flex flex-wrap">
      <div className="w-full px-3 sm:w-1/2">
        <div className="mb-5">
          <label
            for="fName"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
           Start Date
          </label>
          <input
            type="date"
            name="startdate"
            id="fName"
            placeholder="Food Category"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
      </div>
      
        <div className="mb-5">
          <label
            for="fName"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            End Date
          </label>
          <input
            type="date"
            name="enddate"
            id="fName"
            placeholder="Quantity"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

      <div className="w-full px-3 sm:w-1/2">
        <div className="mb-5">
          <label
            for="lName"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
           Participantes
          </label>
          <input
            type="number"
            name="participants"
            id="price"
            placeholder="Participants"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label
            for="lName"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
           Price
          </label>
          <input
            type="text"
            name="Price"
            id="price"
            placeholder="Entry Free"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
      </div>
      <div className="w-full px-3 sm:w-1/2">
        <div className="mb-5">
          <label
            for="lName"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
         1st Prize
          </label>
          <input
            type="number"
            name="Prize"
            id="price"
            placeholder="1st Prize"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
      </div>
      
      
     
    </div>
    <div className="mb-5">
      <label
        for="message"
        className="mb-3 block text-base font-medium text-[#07074D]"
      >
     Short Descriptin
      </label>
      <textarea
        rows="4"
       name="description"
        id="description"
        placeholder="Type your description"
        className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
      ></textarea>
    </div>
    <div>
      <button
        className="hover:shadow-form rounded-md bg-red-500 py-3 px-8 text-base font-semibold text-white outline-none"
      >
       Add Contest
      </button>
    </div>
  </form>
</div>

</div>

      </div>


 </div>
    );
};

export default AddContest;