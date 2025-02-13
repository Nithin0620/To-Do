import React from 'react'
import { MdDeleteForever } from "react-icons/md";


const Plan = (props) => {
   const item = props.item;
   const index = props.index;
   const handleDelete = props.handleDelete;
   
   

return (
   <div className=" transition ease-in-out flex text-white justify-between items-center w-[500px]  hover:shadow-[0px_0px_15px_24px_rgba(255,_255,_255,_0.05)] shadow-[0px_0px_10px_2px_rgba(147,_51,_234,_0.5)] duration-300 p-4 rounded-[20px] mt-4">
      <span className='w-[30px] text-[20px] aspect-square border flex justify-center align-center border-yellow-100 rounded-full'>{index + 1}</span>
      <p className='text-[25px] capitalize text-cyan-100'>{item}</p>
      <button onClick={() => handleDelete(index)}
         className='text-red-700 text-[30px]'
         ><MdDeleteForever />
      </button>
   </div>
)
}

export default Plan
