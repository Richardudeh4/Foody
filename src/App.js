import React from 'react';
import {
    Aboutus,
    Menu,
    Reservation,
    Reviews,
    Services,
    Team,
    Hero,
    Footer
} from './section';
import { Nav } from './component';
import './App.css';
const App = () => {
  return (
    <div>
      <main className='relative'>
      <Nav />
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='padding bg-gradient-to-r from-[#d3cce3] to-[#e9e4f0] '>
      <Aboutus/>
      </section>
      <section className='padding'>
       <Services/>
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
      <Menu/>
      </section>
      <section className='padding-x py-10 '>
     <Team/>
      </section>
      <section className='padding bg-gradient-to-r from-[#c9d6ff] to-[#e2e2e2]'>
        <Reservation/>
      </section>
      <section className=' padding'>
       <Reviews/>
      </section>
     
      <section className=' bg-black padding-x padding-t pb-8'>
     <Footer/>
      </section>
    </main>
    </div>
  )
}

export default App
