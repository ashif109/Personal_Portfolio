import React from 'react'
import imgee from "../assets/images/ChatGPT Image Apr 30, 2026, 09_04_53 PM.png"
// import { useEffect } from 'react';
const About = () => {
 
  return (
    <div id='#about'>
      <div className='text-center px-4 py-10'>
        <div className='mx-auto max-w-5xl text-center mb-10'>
          <h2 className='text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-950'>About Me</h2>
          <p className='mx-auto max-w-3xl text-gray-300 text-lg leading-relaxed'>Passionate about building impactful solutions, here’s a closer look at my journey, skills, and what drives me as a developer</p>
        </div>

        <div className="px-8 py-12 xl:px-20 flex justify-center">
  
  <div className="flex flex-col md:flex-row w-full max-w-7xl items-center gap-12">
    
    {/* Image */}
    <div className="relative rounded-3xl overflow-hidden bg-black flex-shrink-0">
      <img
        src={imgee}
        alt="profile"
        className="block max-w-105 w-full"
      />
    </div>

    {/* Text */}
    <div className="flex flex-col gap-6">
      <div className="text-white space-y-6 font-sans text-lg leading-relaxed">
        <p>
          <span className='text-amber-400 text-4xl font-bold'>"</span>
                           {' '}A passionate and driven Full Stack Developer with a strong inclination toward building intelligent, scalable, and impactful digital solutions. With a foundation in modern web technologies and a growing expertise in AI integration, I specialize in crafting seamless user experiences backed by robust and efficient backend systems. My approach to development goes beyond writing code—I focus on solving real-world problems through thoughtful design, clean architecture, and performance-oriented implementation. Whether it's developing dynamic web applications, integrating AI-driven features, or optimizing system workflows, I strive to deliver solutions that are both innovative and practical. I continuously explore emerging technologies to stay ahead in this rapidly evolving digital landscape, with a commitment to learning, improving, and adapting. My work reflects a balance of creativity and logic, where every project is an opportunity to build something meaningful and impactful. With a strong problem-solving mindset and a dedication to excellence, I aim to contribute to forward-thinking teams and organizations where technology is used to create real value and lasting impact.

          <span className='text-amber-400 text-4xl font-bold'>"</span>
        </p>
      
<a className='relative z-10' href="https://mail.google.com/mail/?view=cm&fs=1&to=ashifansari04704@gmail.com&su=Hiring%20Inquiry&body=Hello%20Ashif,%20I%20want%20to%20work%20with%20you." target="_blank">
      <button className="justify-center w-fit rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-400">
        Hire me
      </button>
      </a>
       </div>
    </div>

  </div>


        </div>
      </div>
    </div>
  )
}

export default About
