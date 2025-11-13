import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Contract from './Components/Contract/Contract'
import Footer from './Components/Footer/Footer'
import Work from './Components/Work/Work'
import Education from './Components/Education/Education'


const App = () => {
  return (
    <div className='bg-[#050412]'>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">

      </div>
      <div className='relative pt-20'>
        <Navbar/>
        <About/>
        <Education/>
        <Skills/>
        <Work/>
        <Contract/>
        <Footer/>
      </div>
    </div>
  )
}

export default App