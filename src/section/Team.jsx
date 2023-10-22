import React from 'react';
import {team} from '../constants'

const Team = () => {
  return (
   <section
   id="team"
   className="mt-24 max-container"
   >
<div className='relative'>
  <h1 className="font-oswald text-4xl font-semibold sm:font-thin text-center sm:text-8xl"> Our Team </h1>
  <p className='text-center font-montserrat text-sm md:text-xl font-light pt-10'>Morbi in sed enim viverra aenean amet. A commodo nunc mauris, in accumsan facilisi <br/> montes, neque venenatis.</p>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mt-16 mx-6">
{
team.map((item) => (
<div key={item.post}>
  <img src={item.img} alt="staff-photo" width={250} height={250} classname="rounded-full" layout="fill" object-contain="cover"/>
  <h1 className="font-oswald text-2xl font-semibold pt-10 text-center">{item.name}</h1>
  <p className="text-center text-lg font-ubuntu pt-6 ">{item.post}</p>
  </div>
))
}
  </div>
</div>
   </section>
  )
}

export default Team
