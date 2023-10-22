import React from 'react';
import Button from '../component/Button';


const Reservation = () => {
  return (
   <section
   id="reservation"
   className="max-container"
   >
<div className="mt-12 flex flex-col sm:flex-row sm:space-x-96 ">
  <div>
<img src="https://uploads-ssl.webflow.com/6236be9ba964064c0ce400f8/62583084adf179bd0fb23e92_food.png" alt="reservation-meal" width={400} height={400} layout="fill"/>
</div>
<div className="px-12 py-16 flex flex-col gap-6 border-white bg-white rounded-lg">
<h1 className="capitalize text-center font-oswald font-thin text-4xl ">Make a Reservation</h1>
<p className="text-center text-lg font-syne font-thin pt-4">For Further Questions, Please Call</p>
<input type="text" placeholder='firstName' className="bg:transparent outline-none border-b-2 text-gray-600 placeholder-gray-400"/>
<input type="text" placeholder='lastName' className="bg:transparent outline-none border-b-2 text-gray-600 placeholder-gray-400"/>
<input type="date" placeholder='Date' className=" bg:transparent outline-none border-b-2 text-gray-600 placeholder-gray-400"/>
<input type="time" placeholder='Time' className="bg:transparent outline-none border-b-2 text-gray-600 placeholder-gray-400"/>

<input type="email" placeHolder="E-mail" className=" bg:transparent outline-none border-b-2 text-gray-600 placeholder-gray-400"/>
<input type="text" placeHolder="Phone no." className=" bg:transparent outline-none border-b-2 text-gray-600 placeholder-gray-400"/>
<Button label="Reserve Now"
backgroundColor="transparent"
iconURL ="https://uploads-ssl.webflow.com/6236be9ba964064c0ce400f8/6247f3ac0fc1ebda858d58d4_arrow.svg"
textColor="black" 
className="flex items-center w-12"/>
</div> 
</div>
   </section>
  )
}

export default Reservation

