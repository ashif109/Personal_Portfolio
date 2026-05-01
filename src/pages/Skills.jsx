import React from 'react'
import frnt from "../assets/icons/cloud-data-developer-svgrepo-com.svg"
import dsa from "../assets/icons/problem-solving-skill-svgrepo-com.svg"
import tech from "../assets/icons/technology-pc-computer-microchip-processor-chipset-svgrepo-com.svg"
const Skills = () => {
  
    return (
        <div className='text-center px-4 py-10'>
            <div className='mx-auto max-w-5xl space-y-6 text-center mb-10'>
                <h2 className='text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-950'>MY SKILLS</h2>
                <h2 className='text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-950'>What I Do</h2>
                <p className='mx-auto max-w-3xl text-gray-300 text-lg leading-relaxed'>I specialize in building modern, responsive, and user-friendly web applications. My focus is on clean code, problem-solving, and delivering impactful digital solutions.</p>
            </div>

            <div className='grid w-full gap-6 rounded-3xl p-6 shadow-lg sm:grid-cols-3'>
                <div className='flex flex-col items-center gap-4 rounded-3xl bg-slate-900/60 p-6 text-center'>
                    <span className='flex h-20 w-20 items-center justify-center rounded-full bg-slate-800/80'>
                        <img src={frnt} alt='Full stack Icon' className='h-12 w-12 filter invert' />
                    </span>
                    <h3 className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 text-4xl tracking-wide'>Full Stack Developer</h3>
                    <p className='text-gray-300 text-lg leading-relaxed'>I build scalable, high-performance web applications using modern technologies like HTML, CSS, JavaScript, React.js, Node.js, and databases. My focus is on clean architecture, seamless user experience, and efficient backend systems that power reliable and dynamic applications.</p>
                </div>
                <div className='flex flex-col items-center gap-4 rounded-3xl bg-slate-900/60 p-6 text-center'>
                    <span className='flex h-20 w-20 items-center justify-center rounded-full bg-slate-800/80'>
                        <img src={dsa} alt='Problem Solving Icon' className='h-12 w-12 filter invert' />
                    </span>
                    <h3 className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 text-4xl tracking-wide'>Problem Solving & DSA</h3>
                    <p className='text-gray-300 text-lg leading-relaxed'>Passionate about solving coding challenges on platforms like LeetCode and CodeChef. I focus on Data Structures and Algorithms to sharpen logical thinking and write efficient solutions.</p>
                </div>
                <div className='flex flex-col items-center gap-4 rounded-3xl bg-slate-900/60 p-6 text-center'>
                    <span className='flex h-20 w-20 items-center justify-center rounded-full bg-slate-800/80'>
                        <img src={tech} alt='Technology Stack Icon' className='h-12 w-12 filter invert' />
                    </span>
                    <h3 className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 text-4xl tracking-wide'>Technology Stack</h3>
                    <p className='text-gray-300 text-lg leading-relaxed'>Languages: C, Java, JavaScript<br />Frameworks: React.js, Node.js<br />Databases: MongoDB, MySQL (basic)<br />Tools: Git, GitHub, VS Code</p>
                </div>
            </div>
        </div>
    )
}

export default Skills
