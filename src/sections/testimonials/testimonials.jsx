import React from 'react'
import Animated from '../../components/animated/animated'
import { testimonials } from '../../data/data'
import { StarIcon } from 'lucide-react'



const Testimonials=()=>{
    return(
        <>
    <section id='testimonials' className='mt-44 px-auto'>

        <Animated delay={0.2}>
            <p className='text-red-500 font-medium text-center uppercase mb-4'>
                loved by food lover
            </p>
            </Animated>


               <Animated delay={0.2}>
            <h2 className='  text-4xl text-center capitalize md:5xl max-w-lg mx-auto text-balance font-medium '>
              what our guest say
            </h2>
            </Animated>


<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto'>
    {
testimonials.map((testify,index)=>(
    <Animated key={index} delay={index*0.1} className='border border-slate-200 hover:bg-slate-50/50 rounded-2xl p-6 flex flex-col 
    justify-between text-left
    '  y={80}>

<div>
    <div className='flex gap-0.5  mb-4 items-center'>
{
    [...Array(testify.rating)].map((_,i)=>(
      <StarIcon key={i} className='size-4 fill-red-600 text-red-700'/>
    ))
}
    </div>

    <p className='text-zinc-600 leading-relaxed mb-6'>
"{testify.review}"
    </p>
</div>


<div className='flex items-center gap-4 mt-auto'>
    <img src={testify.avatar} alt={testify.name} className='size-11 rounded-full object-cover shrink-0'/>
    <div>
        <p className='mb-1 font-medium leading-tight'>{testify.name}</p>
        <p className='text-zinc-700'>{testify.location}</p>
    </div>
</div>


    </Animated>
))
    }
</div>
            
          
    </section>
    
    </>
    )
}

export default Testimonials 