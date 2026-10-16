

import './App.css'
import Navbar from './components/navbar/navbar'
import Hero from './sections/hero/hero'
import About from './sections/about/about'
import Stats from './sections/stats/stats'
import Dishes from './sections/dish/dish'
import Features from './sections/features/features'
import BookingProcess from './sections/booking/booking'
import Timing from './sections/timing/timing'
import Testimonials from './sections/testimonials/testimonials'
import Faqs from './sections/faqs/faqs'
import CTA from './sections/cta/cta'
import Footer from './sections/footer/footer'
import LenisScroll from './components/lenisscroll/lenisscroll'


function App() {

  return (
    <>
    <LenisScroll/>
    <Navbar/>
   <Hero/>
<About/>
<Stats/>
<Dishes/>
<Features/>
<BookingProcess/>
<Timing/>
<Testimonials/>
<Faqs/>
<CTA/>
<Footer/>
    </>
  )
}

export default App
