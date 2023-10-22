import React from 'react';
import {Button} from '../component';
import styled, {keyframes} from 'styled-components';


const rotate = keyframes`
100%{
  transform: rotate(1turn);
}`
const ImgContainer = styled.div`

img{
  animation:${rotate} 6s linear infinite reverse;
 
}
`
const Aboutus = () => {
  return (
   <section
   id="aboutus"
   className='max-container max-sm:mt-12 my-16'
   >
    <div className="flex flex-1 flex-col sm:flex-row sm:justify-between ">
      <ImgContainer>
<img src='https://uploads-ssl.webflow.com/6236be9ba964064c0ce400f8/62582f42e219f00753e19da2_about-img.png' alt="first plate" width={400} height={400} object-contain="fill"/>
</ImgContainer>
<div className="pt-16 max-w-[550px]">
<h1 className="sm:text-4xl text-4xl font-ubuntu font-normal">About us</h1>
<p className="font-normal  text-xl font-syne sm:text-2xl truncate pt-6">The only thing we’re serious about is food.</p>
<p className="font-syne sm:text-xl text-sm pt-14">Fusce quam praesent enim enim. Arcu ornare maecenas mauris tellus ut mollis. Laoreet enim amet donec nulla risus erat sed. Scelerisque ac cum nulla massa ultricies etiam augue justo, amet. Fermentum ac viverra tincidunt neque, tristique duis nunc lacus quam. Pharetra, in pharetra</p>
<div className="mt-12">
  <Button
   label="Explore Menu" 
  textColor="black"
   iconURL="https://uploads-ssl.webflow.com/6236be9ba964064c0ce400f8/6247f3ac0fc1ebda858d58d4_arrow.svg"
   backgroundColor="transparent"
   borderColor="black"
   link="#menu"
   />
{/* <div className="py-4 px-8 flex flex-row gap-8 border justify-center rounded-[32px] border-black bg-transparent">
 <p className="font-oswald">Expore Menu</p>
 <img src="https://uploads-ssl.webflow.com/6236be9ba964064c0ce400f8/6247f3ac0fc1ebda858d58d4_arrow.svg" alt="explore logo" width={25} height={25}/>
</div> */}
</div>
</div>

    </div>
  
   </section>
  )
}

export default Aboutus
// https://uploads-ssl.webflow.com/6236be9ba964064c0ce400f8/62582f42e219f00753e19da2_about-img.png