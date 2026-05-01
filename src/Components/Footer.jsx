import React from 'react'
import insta from "../assets/icons/instagram-logo-duotone-svgrepo-com.svg"
import linkdin from "../assets/icons/linkedin-svgrepo-com (1).svg"
import git from "../assets/icons/github-svgrepo-com.svg"
import leet from "../assets/icons/programming-svgrepo-com.svg"
import { Link } from 'react-router'
const Footer = () => {
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
        <div className='right-0 bg-gray-950 py-6 sm:py-8 px-4 sm:px-6 md:px-10 text-center w-full'>
            <div className="text-xl sm:text-2xl bg-linear-to-r from-red-500 to-orange-500 bg-clip-text text-transparent font-bold tracking-wide hover:text-red-600 mb-4 sm:mb-6">
                ASHIF.Dev</div>

            <div className='text-gray-500 mb-4 sm:mb-6'>
                <ul className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 md:gap-6 text-xs sm:text-sm font-semibold">
                    <li>
                        <a href="#" className="hover:text-amber-400">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#skills"className="hover:text-amber-400">
                            Services
                        </a> 
                    </li>
                    <li>
                       <a href="#projects" className="hover:text-amber-400">
                            About me
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="hover:text-amber-400">
                            Portfolio
                        </a>
                    </li>
                    <li>
                       <a href="#contact"className="hover:text-amber-400">
                            Contact me
                        </a> 
                    </li>
                </ul>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-full border border-gray-600 bg-slate-950 transition-transform hover:scale-110"
              >
                <img
                  src={item.icon}
                  alt={item.alt}
                  className="h-6 sm:h-7 w-6 sm:w-7 object-contain filter invert opacity-80"
                />
              </a>
            ))}
          </div>
            <div className="text-white flex flex-col gap-3 sm:gap-4 md:gap-8 md:flex-row justify-center items-center mb-3 sm:mb-4">
                <h3 className="flex items-center gap-2 text-xs sm:text-sm">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 640 640" 
                      style={{ width: "16px", height: "16px", minWidth: "16px", filter: "invert(1)" }}
                    >
                      <path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z"/>
                    </svg>
                    <span className="truncate">+91 8887553473</span>
                </h3>

                <h3 className="flex items-center gap-2 text-xs sm:text-sm">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 640 640" 
                      style={{ width: "16px", height: "16px", minWidth: "16px", filter: "invert(1)" }}
                    >
                      <path d="M128.4 239.8L320 97.9L511.6 239.8L353.5 357C343.8 364.2 332.1 368 320 368C307.9 368 296.2 364.1 286.5 357L128.4 239.8zM320 32C307.9 32 296.2 35.9 286.5 43L89.9 188.7C73.6 200.8 64 219.8 64 240.1L64 480C64 515.3 92.7 544 128 544L512 544C547.3 544 576 515.3 576 480L576 240.1C576 219.8 566.4 200.7 550.1 188.7L353.5 43C343.8 35.8 332.1 32 320 32z"/>
                    </svg>
                    <span className="truncate">ashifansari04704@gmail.com</span>
                </h3>

                <h3 className="flex items-center gap-2 text-xs sm:text-sm">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 640 640" 
                      style={{ width: "16px", height: "16px", minWidth: "16px", filter: "invert(1)" }}
                    >
                      <path d="M96 128C60.7 128 32 156.7 32 192L32 256C32 264.8 39.4 271.7 47.7 274.6C66.5 281.1 80 299 80 320C80 341 66.5 358.9 47.7 365.4C39.4 368.3 32 375.2 32 384L32 448C32 483.3 60.7 512 96 512L544 512C579.3 512 608 483.3 608 448L608 384C608 375.2 600.6 368.3 592.3 365.4C573.5 358.9 560 341 560 320C560 299 573.5 281.1 592.3 274.6C600.6 271.7 608 264.8 608 256L608 192C608 156.7 579.3 128 544 128L96 128zM448 400L448 240L192 240L192 400L448 400z"/>
                    </svg>
                    <span className="truncate">Open Source Contributions</span>
                </h3>
            </div>
            <hr className="border-gray-600 mb-3 sm:mb-4" />
            <h3 className='text-gray-700 text-xs sm:text-sm'>Developed & Designed by-@Ashif_Ansari</h3>
        </div>
    )
}

export default Footer
