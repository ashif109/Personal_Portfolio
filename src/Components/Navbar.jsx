import React, { useState } from 'react'
import { Link } from 'react-router'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    return (
        <>
       
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/60 border-b border-white/10">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
                <Link to="/" className="text-xl sm:text-2xl bg-linear-to-r from-red-500 to-orange-500 bg-clip-text text-transparent font-bold tracking-wide hover:text-red-600">
                    ASHIF.Dev
                </Link>

                {/* Mobile menu button */}
                <button 
                    className="md:hidden text-white text-2xl"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    ☰
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="text-white flex flex-wrap items-center gap-4 lg:gap-6 text-xs sm:text-sm font-semibold">
                        <li>
                            <a href="#" className="hover:text-amber-400 transition">
                                Home
                            </a>
                        </li>
                        <li>
                          <a href="#skills" className="hover:text-amber-400 transition">
                               My Skills
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="hover:text-amber-400 transition">
                                Projects
                            </a>
                        </li>
                        <li>
                          <a href="#about"  className="hover:text-amber-400 transition">
                                About Me
                           </a>
                        </li>
                        <li>
                           <a href="#contact"className="hover:text-amber-400 transition">
                                Contact me
                           </a> 
                        </li>
                        <li>
                             <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ashifansari04704@gmail.com&su=Hiring%20Inquiry&body=Hello%20Ashif,%20I%20want%20to%20work%20with%20you." target="_blank">
                            <button className="rounded-full bg-amber-500 px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold text-slate-900 transition hover:bg-amber-400">
                                Hire me
                            </button>
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="relative z-10 top-full left-0 w-full bg-black/95 md:hidden border-t border-white/10">
                        <ul className="text-white flex flex-col items-start gap-2 text-sm font-semibold px-4 py-4">
                            <li>
                                 <a href="/" className="hover:text-amber-400 transition block py-2" onClick={() => setIsMenuOpen(false)}>
                                    Home
                                </a> 
                            </li>
                            <li>
                               <a href="#skills"  className="hover:text-amber-400 transition block py-2" onClick={() => setIsMenuOpen(false)}>
                                    Skills
                                </a>
                            </li>
                            <li>
                              <a href="#projects"  className="hover:text-amber-400 transition block py-2" onClick={() => setIsMenuOpen(false)}>
                                    Projects
                                </a>
                            </li>
                            <li>
                               <a href="#about" className="hover:text-amber-400 transition block py-2" onClick={() => setIsMenuOpen(false)}>
                                    About Me
                                </a> 
                            </li>
                            <li>
                            <a href="#contact" className="hover:text-amber-400 transition block py-2" onClick={() => setIsMenuOpen(false)}>
                                    Contact me
                               </a> 
                            </li>
                            <li className="w-full">
                                  <a className='relative z-10'  href="https://mail.google.com/mail/?view=cm&fs=1&to=ashifansari04704@gmail.com&su=Hiring%20Inquiry&body=Hello%20Ashif,%20I%20want%20to%20work%20with%20you." target="_blank">
      <button className="justify-center w-fit rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-400">
        Hire me
      </button>
      </a>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
        </header>
        </>
    
    )
}

export default Navbar
