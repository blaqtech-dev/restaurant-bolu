import React from 'react'
import Animated from '../../components/animated/animated'
import { timingData } from '../../data/data'


const Timing=()=>{
    return(
        <>
        <section id='timing' className='px-auto mt-66'>
<Animated scale={0.8} y={0}
className='w-full max-w-5xl h-162.5 rounded-3xl overflow-hidden bg-center flex items-center justify-center
 md:justify-start px-6 md:px-14 
 mx-auto bg-[url("/assets/restro-timing.png")]
'
>

    <div  className='bg-white rounded-3xl p-8  w-full max-w-xs'>
<Animated delay={0.3}>
<h3 className='text-xl mb-8 font-medium'>opening time:</h3>
</Animated>

<div className='space-y-5'>
{timingData.map((item,index)=>(
<Animated key={index} delay={index *0.15} className='flex justify-between items-center'>
<span className='font-medium text-zinc-500'>{item.day}</span>
<span className={`font medium ${item.hours==='closed'?'text-zinc-300':'text-zinc-500'}`}>{item.hours}</span>
</Animated>
))}
</div>


<Animated className='mt-12' delay={0.4}  >
    <a href='#booking-process' className='bg-red-500 capitalize text-white hover:bg-red-700 
    cursor-pointer px-6 py-4 rounded-2xl ease-in-out transition-all '>
        book a table
    </a>
</Animated>
    </div>

</Animated>
        </section>
</>

    )
}

export default Timing