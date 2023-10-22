import React from 'react'

const Hero = () => {
  return (
   <section
   id="hero"
   className='bg-gradient-to-r from-[#ffffff] to-[#ffefba] max-container'
   >
<div className="py-48 flex flex-col gap-12 items-center justify-center">
<h1 className='font-oswald font-normal  -pl-12 text-4xl sm:text-8xl'>Delicious</h1>
<h1 className="font-syne font-normal text-4xl sm:text-8xl"> Food</h1>
<h1 className="font-palanquin font-normal  text-4xl sm:text-8xl"> Dishes</h1>
</div>
<div className='mx-10 flex flex-1 sm:flex-row flex-col space-y-20 sm:justify-between sm:-mt-96  -mt-36'>
<img src="https://uploads-ssl.webflow.com/6236be9ba964064c0ce400f8/62586003661151454a735e78_2img.png" width={300} height={400} alt="food1" object-contain="fill"/>
<img src="https://uploads-ssl.webflow.com/6236be9ba964064c0ce400f8/625860025aadaa2c6553755d_img.png" width={300} height={400} alt="food2" object-contain="fill"/>
</div>
<div className="flex justify-center mt-16 ">
<img src="https://uploads-ssl.webflow.com/6236be9ba964064c0ce400f8/623c8d03dc7b8e77705cde9a_label.svg" alt="label"/>
</div>
   </section>
  )
}

export default Hero
// https://uploads-ssl.webflow.com/6236be9ba964064c0ce400f8/62586003661151454a735e78_2img.png
// https://uploads-ssl.webflow.com/6236be9ba964064c0ce400f8/625860025aadaa2c6553755d_img.png
// https://uploads-ssl.webflow.com/6236be9ba964064c0ce400f8/623c8d03dc7b8e77705cde9a_label.svg