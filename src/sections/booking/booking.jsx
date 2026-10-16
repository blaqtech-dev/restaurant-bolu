import React from 'react'
import Animated from '../../components/animated/animated'
import { bookingSteps, bookingTestimonial } from '../../data/data'
import { Star } from 'lucide-react'


const BookingProcess=()=>{
    return(
        <section  id='booking-process' className='px-auto mt-44'>
<div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-25'>
    {/*left side */}
<div className='flex flex-col text-center md:text-left'>
    <Animated delay={0.2}>
<p className='text-red-600 font-medium uppercase mb-4'>
table reservation process
</p>
    </Animated>


     <Animated delay={0.2}>
<h2 className='text-4xl md:text-5xl mb-16'>
reserve your table in 3 simple ways
</h2>
    </Animated>


  <Animated delay={0.2}>
<h2 className='flex gap-0.5 mb-6 justify-center md:justify-start'>
{[...Array(bookingTestimonial.rating).map((_,i)=>(
<Star key={i} className='size-4 fill-red-600 text-red-600'/>
))]}
</h2>
    </Animated>


     <Animated delay={0.2}>
<p className='text-zinc-600 max-w-xs max-md:mx-auto  mb-4 '>
"{bookingTestimonial.quote}"
</p>
    </Animated>


  <Animated className='flex items-center justify-center md:justify-start gap-3'>
<img src='/assets/user-2.jpg' alt={bookingTestimonial.authorName}
className='size-12 rounded-full object-cover'
/>

<span className='text-lg '>
    {bookingTestimonial.authorName}
</span>
    </Animated>

</div>




    {/*right side */}

    <div className='space-y-14 text-left mx-6'>
        {
            bookingSteps.map((steps,index)=>(
              <Animated key={index} y={150} delay={index*0.15} className='flex items-start gap-9'>
<span className='text-red-500 font-medium text-lg shrink-0'>
{steps.number}
</span>
<div className='flex flex-col'>
    <h3 className='text-xl mb-5'>{steps.title}</h3>
    <p className='text-zinc-600'>{steps.description}</p>
</div>
              </Animated>  
            ))
        }
    </div>
</div>
        </section>
    )
}

export default BookingProcess