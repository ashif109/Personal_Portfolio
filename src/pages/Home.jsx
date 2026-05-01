import React from 'react'
import insta from "../assets/icons/instagram-logo-duotone-svgrepo-com.svg"
import linkdin from "../assets/icons/linkedin-svgrepo-com (1).svg"
import git from "../assets/icons/github-svgrepo-com.svg"
import leet from "../assets/icons/programming-svgrepo-com.svg"
import imge from "../assets/images/ChatGPT Image Apr 30, 2026, 03_51_42 PM.png"
import { Link } from 'react-router'
import { useEffect } from 'react'
import { ReactTyped } from "react-typed";


const Home = () => {

  const socialLinks = [
    {
      icon: insta,
      url: "https://www.instagram.com/_asifansari_09/?utm_source=ig_web_button_share_sheet",
      alt: "Instagram"
    },
    {
      icon: linkdin,
      url: "https://www.linkedin.com/in/ashif-ansari-777ba9298",
      alt: "LinkedIn"
    },
    {
      icon: git,
      url: "https://github.com/ashif109",
      alt: "GitHub"
    },
    {
      icon: leet,
      url: "https://leetcode.com/u/asifansari_09/",
      alt: "LeetCode"
    }
  ]
  return (
    <>
      <div className="flex flex-col md:flex-row gap-12 items-center justify-center px-14 py-40 xl:px-20">
        <div className="flex flex-col-reverse md:flex-row w-full max-w-7xl items-center gap-30">
          <div className="order-2 md:order-1  flex w-full max-w-2xl flex-col gap-8">
            <div className="space-y-4">
              <h3 className="text-gray-400 text-xl tracking-wide">  <ReactTyped
                strings={["Hi, I am"]}
                typeSpeed={80}
                showCursor={false}
              /></h3>
              <h2 className="text-gray-500 text-4xl font-semibold">  <ReactTyped
                strings={["Ashif Ansari"]}
                typeSpeed={70}
                startDelay={1500}
                showCursor={false}
              /></h2>
              <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-red-500 to-orange-500">
                <ReactTyped
                  strings={["Full Stack Developer"]}
                  typeSpeed={80}
                  startDelay={2700}
                  
                />
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-600 bg-slate-950"
                >
                  <img
                    src={item.icon}
                    alt={item.alt}
                    className="h-7 w-7 object-contain filter invert opacity-80"
                  />
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">

             <a className='relative z-10'  href="https://mail.google.com/mail/?view=cm&fs=1&to=ashifansari04704@gmail.com&su=Hiring%20Inquiry&body=Hello%20Ashif,%20I%20want%20to%20work%20with%20you." target="_blank">
      <button className="justify-center w-fit rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-400">
        Hire me
      </button>
      </a>
              <a className="relative z-10 rounded-full border-2 relative z-10 border-gray-500 bg-transparent px-6 py-3 text-sm font-semibold text-gray-300 transition hover:bg-gray-700" href="https://docs.google.com/document/d/1SWp0JxNDVKpVG-X4pvWCfTpJDnrfLBxd/edit?usp=drive_link&ouid=118297924681860671333&rtpof=true&sd=true" target='_blank'>
             
                  Download Resume
               
              </a>
            </div>

            <div className="relative z-10 grid w-full gap-4 rounded-3xl bg-gray-950 p-6 shadow-lg sm:grid-cols-3">
              <div className="flex flex-col gap-2 rounded-3xl bg-slate-900/60 p-5">
                <span className="text-3xl font-semibold text-transparent bg-clip-text bg-linear-to-r from-red-500 to-orange-500">
                  1+
                </span>
                <p className="text-gray-300 text-lg">Experience</p>
              </div>
              <div className="flex flex-col gap-2 rounded-3xl bg-slate-900/60 p-5">
                <span className="text-3xl font-semibold text-transparent bg-clip-text bg-linear-to-r from-red-500 to-orange-500">
                  10+
                </span>
                <p className="text-gray-300 text-lg">Projects done</p>
              </div>
              <div className="flex flex-col gap-2 rounded-3xl bg-slate-900/60 p-5">
                <span className="text-3xl font-semibold text-transparent bg-clip-text bg-linear-to-r from-red-500 to-orange-500">
                  140+
                </span>
                <p className="text-gray-300 text-lg">DSA Questions Solve</p>
              </div>
            </div>
          </div>
          <div className=" order-1 md:order-2 relative inline-block rounded-3xl overflow-hidden bg-black">

            <img
              src={imge}
              alt="profile"
              className="block max-w-105 w-full"
            />

          </div>

        </div>
      </div>
    </>
  )
}

export default Home
