import React from 'react'
import { quickLinks, sitemapLinks, socialLinks } from '../../data/data'
import Animated from '../../components/animated/animated'
import { moveItem } from 'motion'
import { Mail, Phone } from 'lucide-react'


const Footer=()=>{
    return(
        <footer className=' px-8 md:px-16 relative mt-44 overflow-hidden'>
<div className='max-w-7xl mx-auto'>
<div className='flex flex-wrap gap-6 justify-between pb-8'>

<div className='flex flex-col items-start text-left'>
    <Animated>
        <img src='assets/bolu-res.png' alt='logo' className='h-16 w-26'/>
    </Animated>

     <Animated  delay={0.4}>
       <p className='mt-3 text-sm/5.5 text-zinc-600 max-w-81.25'>
serving freshly prepared meals with love and passion,our restaurant is a haven for food enthusiats
 seeking for and unforgettable dining experience,where every bite is a celebration of flavor and culinary excelence
        </p>
    </Animated>

    <div className='flex items-center gap-1.5 mt-6'>
        {
            socialLinks.map((socials,index)=>(
                <Animated key={index} delay={index * 0.05}>
<a href={socials.href}  className='size-7.5 rounded-full border border-slate-300 grid place-content-center'>
                    {socials.icon}
                </a>
                </Animated>
            ))
        }
    </div>
</div>


<div>
    <p className='font-medium mb-5 capitalize'>
        quick links
    </p>
    <div className='flex flex-col gap-2.5'>
{
quickLinks.map((link,index)=>(
    <Animated key={link.name} delay={index * 0.05}>
<a href={link.href} className='text-zinc-600 hover:text-zinc-500'>
{link.name}
</a>
    </Animated>
))
}
    </div>
</div>

<div>
    <p className='font-medium capitalize mb-5'>
get in touch
    </p>

    <div className='space-y-2'>
<Animated>
    <a href='mailto:abiolaboluwatife28@gmail.com' className='flex items-center gap-1 text-zinc-600 hover:text-zinc-500'>
<Mail size={16} className='shrink-0'/>
abiolaboluwatife28@gmail.com
    </a>
</Animated>


<Animated>
    <a href='tel:07063367214' className='flex items-center gap-1 text-zinc-600 hover:text-zinc-500'>
<Phone size={16} className='shrink-0'/>
07063367214
    </a>
</Animated>
    </div>
</div>

    <div>
        <p className='font-medium capitalize mb-5'>
            sitemap
        </p>
        <div className='flex flex-col gap-2.5'>
{
    sitemapLinks.map((maps,index)=>(
<Animated key={maps.name} delay={index*0.05} >
<a href={maps.href} className='text-zinc-500 hover:text-zinc-500'>
    {maps.name}
</a>
</Animated>
    ))
}
        </div>
    </div>
    



</div>

<div className='border-t text-zinc-500 border-slate-200 py-4.5 flex justify-between items-center'>
  <p>@ 2026.All Right Reserved.</p>
  <p>Designed by <a href='https://boluseyi.vercel.app' target='_blank' className='text-red-500 hover:text-red-700 capitalize'>boluwatife</a></p>
</div>
</div>
        </footer>
    )
}

export default Footer;