import React from 'react'
import Animated from '../../components/animated/animated'
import { ArrowRight } from 'lucide-react'


const floatingDishes=[
     {
        src:'/assets/dish10.jpeg',alt:'dish1', className:'top-6 left-4 md:top-10 md:left-[6%] lg:left-[10%]'
    },
     {
        src:'/assets/dish2.jpeg',alt:'dish2', className:'bottom-6 left-6 md:bottom-10 md:left-[10%] lg:left-[14%]'
    },
     {
        src:'/assets/dish3.jpeg',alt:'dish3', className:'top-6 right-4 md:top-10 md:right-[6%] lg:right-[10%]'
    },
    {
        src:'/assets/dish4.jpeg',alt:'dish4', className:'bottom-6 right-6 md:bottom-10 md:right-[10%] lg:right-[14%]'
    }

]



const CTA=()=>{


    return(
        <section className='relative overflow-hidden bg-red-600 px-6 flex flex-col justify-between items-center min-h-100
        md:min-h-110 mt-44'>

<div className='absolute inset-0 w-full max-w-7xl mx-auto pointer-events-none'>
{
    floatingDishes.map((dish)=>(
        <img src={dish.src} key={dish.src} alt={dish.alt} className={`absolute size-20 md:size-28 lg:size-35
            rounded-full object-cover pointer-events-auto transition-all duration-300 hover:scale-105 ${dish.className}
            `}/>
    ))
}
</div>


<div className='relative z-10 text-center mt-26 max-w-2xl mx-auto'>
    <Animated>
        <h1 className='text-2xl capitalize md:text-[40px] mt-2 font-medium text-white font-urbanist text-balance'>
every meal is made to be remembered
        </h1>
    </Animated>


      <Animated delay={0.2} y={20}>
        <p className='mt-4 text-white max-w-sm mx-auto'>
join us for fresh ingredients,signature recipes and an unforgettable dining experience
        </p>
    </Animated>

<Animated delay={0.2} className='flex items-center justify-center'>
<a href='#booking-process' className='flex capitalize items-center gap-2.5 bg-white text-black pl-5 pr-2 py-2 rounded-full
mt-5.5 transition
'>
book your table
<span className='size-7 rounded-full bg-black text-white grid place-content-center'>
    <ArrowRight  size={15}/>
</span>
</a>
</Animated>
</div>
        </section>
    )
}

export default CTA