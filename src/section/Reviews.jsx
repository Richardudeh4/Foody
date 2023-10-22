import React from 'react'
import { review } from '../constants'
const Reviews = () => {
  return (
   <section
   id="review"
   className="max-container w-full"
   >
<div className="mt-16 ">
<h1 className=" font-thin text-center font-oswald text-3xl sm:text-8xl">CUSTOMERS REVIEW</h1>
<p className='text-center font-montserrat text-sm sm:text-xl font-light pt-10'>Morbi in sed enim viverra aenean amet. A commodo nunc mauris, in accumsan facilisi <br/> montes, neque venenatis.</p>

<div className="mt-10 py-20 flex flex-col mx-2  flex-1 sm:flex-row gap-16 sm:space-x-12">
{
review.map((item) => (
  <div key={item.name}>
    <div className="relative">
      <div className="border border-gray-200 mx-2 sm:mx-auto rounded-lg shadow-lg pb-8 pt-16 px-2">
      <img src={item.img} width={80} alt="items" height={80} className='rounded-full absolute -top-10 ml-2 z-10' layout="fill" object-contain="cover"/>
      <p className="text-gray-900 font-syne font-thin">{item.text}</p>
      <div className='mt-4 border-t border-gray-300'>
  <div className="mt-4 flex flex-row space-x-16 ">
    <h1 className="font-ubuntu font-thin text-xl ">{item.name}</h1>
    <img src={item.star} width={80} height={80} alt="star image" layout="fill"/>
  </div>
      </div>
      </div>
    </div>
  </div>
))
}
</div>
</div>
   </section>
  )
}

export default Reviews
// https://uploads-ssl.webflow.com/6236be9ba964064c0ce400f8/62481fac28d1e87aeae77f29_avatar.png
// https://uploads-ssl.webflow.com/6236be9ba964064c0ce400f8/62481fac821f214026075986_avatar-1.png