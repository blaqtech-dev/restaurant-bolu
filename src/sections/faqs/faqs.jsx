import React from 'react';
import Animated from '../../components/animated/animated';
import { faqs } from '../../data/data';
import { Plus, X } from 'lucide-react';

const Faqs=()=>{
    return(
        <section id='faq' className='px-auto mt-44'>
<div className='max-w-3xl mx-auto'>
     <div className='text-center mt-16'>
                <Animated delay={0.3}>
                    <p className='text-red-500 font-medium text-2xl uppercase mb-3.5'>
                     FAQs
                    </p>
                </Animated>

                  <Animated>
                    <p className='text-3xl md:text-4xl capitalize max-w-lg mx-auto text-balance'>
                Frequently asked questions
                    </p>
                </Animated>
            </div>

<div className='space-y-3'>
    {
        faqs.map((faq,index)=>(

<Animated key={index} delay={index * 0.15} y={150}>
<details className='border border-slate-200 text-zinc-500 rounded-lg group'>
<summary className='flex items-center justify-between p-4  cursor-pointer list-none hover:bg-slate-50/50 transition-colors
[&::-webkit-details-marker]:hidden
'>
    <span className='text-zinc-700 pr-4'>{faq.question}</span>
    <span className='size-7 rounded-full bg-black/5 grid place-content-center shrink-0'>
    <Plus size={14} className='group-open:hidden'/>
    <X size={14} className='hidden group-open:block'/>
        </span>
</summary>

<p className='px-5 pb-4 leading-relaxed'>
    {faq.answer}
</p>
</details>
</Animated>
        ))
    }
</div>

</div>
        </section>
    )
}

export default Faqs