import React from 'react';
import {service} from '../constants'

const Services = () => {
  return (
 <section
 id="services"
 className="max-container"
 >
<div className='mt-10 mx-auto'>
  <div className="flex flex-col  justify-between gap-6 flex-1 sm:flex-row">
  {
service.map((item,index)=> (
<div key={index}>
  <div className="p-8 flex justify-center  flex-col">
    <img src={item.img} alt="services images" width={100} height={100} className="rounded-full flex mx-auto"/>
<h1 className="mt-10 text-center font-oswald font-bold text-2xl">
  {item.title}
</h1>
<p className="mt-10 text-center font-syne">{item.text}</p>
  </div>
</div>
))
  }
   </div>
</div>
 </section>
  )
}
export default Services
