import React from 'react'
import bhrt from "../assets/videos/Screen Recording 2025-08-24 021249.mp4"
import netf from "../assets/videos/Screen Recording 2025-08-24 021524.mp4"
import knn from "../assets/videos/Screen Recording 2025-08-24 022334.mp4"
import { useEffect } from 'react'
const Projects = () => {

    return (
        <div>
            <div className='text-center px-4 py-10'>
                <div className='mx-auto max-w-5xl space-y-6 text-center mb-10'>
                    {/* <h2 className='text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-950'>MY SKILLS</h2> */}
                    <h2 className='text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-950'>MY PROJECTS</h2>
                    <p className='mx-auto max-w-3xl text-gray-300 text-lg leading-relaxed'>Here are some of my best projects showcasing creativity, clean code, and real-world problem solving, reflecting my growth as a developer and ability to deliver impactful solutions.</p>
                </div>

                <div className='grid w-full gap-6 rounded-3xl p-6 shadow-lg sm:grid-cols-3'>
                    <div className='flex flex-col items-center gap-4 rounded-3xl bg-slate-900/60 p-6 text-center'>
                        <span className='flex  w-90 items-center justify-center'>
                            <video
                                src={netf}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </span>
                        <h3 className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 text-4xl tracking-wide'>NETFILX CLONE</h3>
                        <p className='text-gray-300 text-lg leading-relaxed'>A fully responsive Netflix-style web app with modern UI, dynamic movies, smooth navigation, and streaming-like interface.</p>
                        <br />
                        <a
                            href="https://netflix-clone-i33kc2lg9-ashif109s-projects.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-400 inline-block"
                        >
                            See Details
                        </a>
                    </div>
                    <div className='flex flex-col items-center gap-4 rounded-3xl bg-slate-900/60 p-6 text-center'>
                        <span className='flex  w-90 items-center justify-center'>
                            <video
                                src={bhrt}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </span>
                        <h3 className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 text-4xl tracking-wide'>BHARAT VERSE</h3>
                        <p className='text-gray-300 text-lg leading-relaxed'>An interactive platform with a clickable India map, showcasing state-wise culture, history, and information in an engaging way.</p>
                        <br />
                        <a href="https://sparkling-cranachan-241e96.netlify.app/" target="_blank"
                            rel="noopener noreferrer">
                            <button className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-400">
                                See Details
                            </button>
                        </a>
                    </div>
                    <div className='flex flex-col items-center gap-4 rounded-3xl bg-slate-900/60 p-6 text-center'>
                        <span className='flex  w-90 items-center justify-center'>
                            <video
                                src={knn}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover rounded-xl"
                            /> </span>
                        <h3 className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 text-4xl tracking-wide'>KANOON MITRA</h3>
                        <p className='text-gray-300 text-lg leading-relaxed'>A legal aid platform that helps users access case details, rights, and resources in a simple and user-friendly way.</p>
                        <br />
                        <a href="https://kanoon-mitra-project.vercel.app/" target="_blank"
                            rel="noopener noreferrer">
                            <button className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-400">
                                See Details
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
