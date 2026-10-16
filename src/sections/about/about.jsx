import React from 'react'
import Animated from '../../components/animated/animated'


const About=()=>{
    return(
        <section id='about' className=' px-8 md:px-22 mt-44'>
            <div className='flex flex-col md:flex-row gap-14 md:gap-18 max-w-7xl mx-auto'>

                {/*left of about */}

                <Animated scale={0.8} y={0}>
<img src='/assets/dish7.jpeg' alt='dish' className='max-w-137 w-full h-full object-cover rounded-3xl' />
                </Animated>

                {/*right of about */}
                <div>

                <Animated scale={0.8} y={0} className='flex items-center gap-2'>
                    <img src='/assets/iconL.png' alt='iconLeft' />
                    <span className='font-medium uppercase'>
                        Crafted with passion
                    </span>
                     <img src='/assets/iconR.png' alt='iconright' />
                </Animated>

                  <Animated scale={0.8} y={0} className='flex items-center gap-2'>

                    <h2 className='mt-5 text-4xl md:text-5xl text-balance'>
                        Experience dining beyong expectation
                    </h2>
                </Animated>


                  <Animated delay={0.2}>

                    <p className='mt-4.5 text-zinc-600 max-w-sm'>
                       we combine fresh local ingredients, creative recipes and elegant presentation to deliver a memorable experience
                       with every visit
                    </p>
                </Animated>
                
                  <Animated className='mt-9 bg-red-600 text-white p-2 pr-8 rounded-lg flex items-center gap-3 w-fit'>
<img src='/assets/dish7.jpeg' className='size-15 rounded-lg object-cover shrink-0' alt='location review '/>

<div className='flex flex-col gap-2'>
<p className='font-medium'>Bistro Royale, NY</p>
<a href='#'>View on Map</a>
</div>
                </Animated>
                </div>


            </div>
        </section>
    )
}

export default About