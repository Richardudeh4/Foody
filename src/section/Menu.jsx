import React from 'react';
import { menu ,secmenu} from '../constants';

const Menu = () => {
  return (
 <section
 id="menu"
 className="max-container w-full"
 >
<div className="mt-0">
  <div className="flex flex-col gap-10 justify-center ">
<h1 className="font-oswald font-thin text-4xl md:text-8xl text-center ">Popular Dishes</h1>
<p className='text-center font-montserrat text-sm md:text-xl font-light '>Morbi in sed enim viverra aenean amet. A commodo nunc mauris, in accumsan facilisi <br/>montes, neque venenatis.</p>
</div>
<div className="grid grid-cols-2 mt-20 gap-6 sm:grid-cols-4">
{
 menu.map((item,index)=> (
  <div key={index}>
    <img src={item.img} alt="items" width={250} height={250} className='m-0 hover:' object-contain="fill"/>
   
    <h1 className=" pt-4 font-oswald font-bold text-xl">{item.food}</h1>
    <div className="flex flex-row flex-1 gap-2 mt-6">
      <img src={item.icon} alt="time icon" width={25} height={25} object-contain="fill"/>
      <p className='font-oswald font-normal text-sm text-gray-400'>{item.time}</p>
    </div>
  
  </div>
 ))
}
</div>
</div>
 </section>
  )
}

export default Menu
// https://uploads-ssl.webflow.com/6248082014e58d2a19c26cac/624808d40fc1ebfa1a8db7e8_img-p-500.png
// https://uploads-ssl.webflow.com/6248082014e58d2a19c26cac/6248085c0f614430c9e3d13d_unsplash_1rCjpJ6GFXw-p-500.png
// https://uploads-ssl.webflow.com/6248082014e58d2a19c26cac/6248088e53c8eb19ead6c157_unsplash_JIjtV1gmfxo-p-500.png
// https://uploads-ssl.webflow.com/6248082014e58d2a19c26cac/624808757fb7c9d4cbb00b04_unsplash_gyt0s3wR1YM-p-500.png
// https://uploads-ssl.webflow.com/6248082014e58d2a19c26cac/624809223d6897c1b57378e8_img55652dfg-p-500.png
// next one
// https://uploads-ssl.webflow.com/6236be9ba964064c0ce400f8/62583016cffb5c9f54bdf814_counterimages.png