import React from "react";
import Animated from "../../components/animated/animated";
import { Star } from "lucide-react";

const avatars=[
    '/assets/user-1.jpg',
     '/assets/user-2.jpg',
      '/assets/user-3.jpg',
       '/assets/user-4.jpg',

]

const Hero = () => {


return ( <section
   className='flex flex-col items-center min-h-screen justify-center bg-[url("/assets/heroBanner.jpg")] bg-cover bg-center
    bg-no-repeat px-4 pt-20'
 > 
 <Animated y={-20} delay={0.2}>
    <p className=' text-red-800 font-bold uppercase '>Where Taste Meets Elegance</p>
 </Animated>

 <Animated>
    <h1 className='text-4xl md:text-5xl font-medium max-w-3xl text-center mt-5  uppercase
    font-urbanist text-balance'>Every Meal, A Memorable Moment</h1>
 </Animated>

  <Animated delay={0.2}>
    <p className=' text-zinc-900 mx-w-md text-center mt-3 z-2 px-16 md:px-26'>Experience thoughtfully crafted menus featuring fresh,
      locally sourced ingredients, exquisite flavours,
       and exceptional service in an elegant atmosphere perfect for every occasion and celebration.
    </p>
 </Animated>

 <Animated>
   <a href='#booking-process' className=' capitalize bg-red-500
        hover:bg-red-700 font-medium mt-8 block  text-white px-6 py-3 rounded-full cursor-pointer transition duration-700'>
book a table
       </a>
 </Animated>

 <Animated className='flex items-center justify-center md:justify-start mt-9'>
    <div className='flex -space-x-3.5 pr-3'>
{avatars.map((src,i)=>(
<img key={i} src={src} alt='guest' className='size-10 border-2 border-slice-50 rounded-full hover:-translate-y-px transition'/>
))}
    </div>


    <div>
<div className='flex items-center gap-0.5'>
{[...Array(5)].map((_,i)=>(
<Star key={i} className='size-3.5 fill-red-600 text-red-600'/>
))}
</div>
<p  className='text-zinc-800'> 5.0/5 rating - 10,000 reviews</p>
    </div>

 </Animated>
 
 </section>
);
};

export default Hero;
