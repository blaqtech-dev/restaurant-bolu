import {motion} from 'motion/react'
import Animated from '../../components/animated/animated'
import { dishes } from '../../data/data'
import { useState } from 'react'

const Dishes=()=>{

    const [rotate,setRotate]=useState({})
    return(

        <section id='dishes' className='px-auto mt-44'>
            <div className='text-center mt-16'>
                <Animated delay={0.3}>
                    <p className='text-blue-500 font-medium uppercase mb-3.5'>
                        chef's signature selection
                    </p>
                </Animated>

                  <Animated>
                    <p className='text-4xl md:text-5xl max-w-lg mx-auto text-balance'>
                        Discover our signature dishes
                    </p>
                </Animated>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4 mt-12 gap-12 md:gap-18 max-w-5xl mx-auto'>
{dishes.map((dish,index)=>(
    <Animated key={index} y={80} delay={index*0.1}  
    className=' flex flex-col items-center text-center shrink-0 cursor-pointer' 
    onMouseEnter={()=>setRotate((prev)=>({...prev,[index]:(prev[index]||0)+180}))}
    >

<motion.div animate={{rotate:rotate[index]||0}}
transition={{type:'spring',stiffness:80, damping:15}}

>
<img src={dish.img} alt={dish.title} className='size-30 md:35 object-cover'/>
</motion.div>

<h3 className='mt-5'>{dish.title}</h3>
<p className='mt-2 text-zinc-600'>{dish.price}</p>
    </Animated>
))}
            </div>
        </section>
    )
}

export default Dishes