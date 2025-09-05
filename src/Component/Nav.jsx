import React, { useState } from 'react'
import { Link } from "react-scroll"
import {useGSAP} from "@gsap/react"
import gsap from 'gsap'

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  useGSAP(()=>{
    let tl = gsap.timeline()
   tl.from("nav h2" , {
      y:-100,
      duration:0.8,
      opacity:0
      
    })
 

  })


  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4 flex justify-between items-center bg-black">
      {/* Logo */}
      <h2 className="font-bold text-xl bg-gradient-to-r from-[rgb(53,150,172)] to-white bg-clip-text text-transparent">
        PORTFOLIO
      </h2>

      {/* Desktop Menu */}
      <ul className="hidden md:flex text-white gap-6 font-bold">
        <Link to="Home" smooth duration={500} spy activeClass="active-link">
          <li  className="cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-cyan-400 hover:text-cyan-400 transition">
            Home
          </li>
        </Link>
        <Link to="About" smooth duration={500} spy activeClass="active-link">
          <li  className="cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-cyan-400 hover:text-cyan-400 transition">
            About
          </li>
        </Link>
        <Link to="Contact" smooth duration={800} spy activeClass="active-link">
          <li className="cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-cyan-400 hover:text-cyan-400 transition">
            Contact
          </li>
        </Link>
        <Link to="Project" smooth duration={1000} spy activeClass="active-link">
          <li className="cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-cyan-400 hover:text-cyan-400 transition">
            Project
          </li>
        </Link>
      </ul>

      {/* Hamburger → X (Mobile Only, Top Right) */}
      <div
        className="md:hidden flex flex-col justify-center transition-all durection-[5000] items-center gap-1 cursor-pointer w-[30px] h-[24px] relative z-[60]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Line 1 */}
        <span
          className={`block h-[3px] w-full bg-white rounded transition-all duration-300 
          ${isOpen ? "rotate-45 translate-y-[9px]" : ""}`}
        ></span>
        {/* Line 2 */}
        <span
          className={`block h-[3px] w-full bg-white rounded transition-all duration-300 
          ${isOpen ? "opacity-0" : "opacity-100"}`}
        ></span>
        {/* Line 3 */}
        <span
          className={`block h-[3px] w-full bg-white rounded transition-all duration-300 relative 
          ${isOpen ? "-rotate-45 -translate-y-[12px]  relative top-[8px]"  : ""}`}
        ></span>
      </div>

      {/* Overlay Blur Background */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"></div>
      )}

      {/* Side Drawer (Mobile Menu) */}
      <div
        className={`fixed top-0 left-0 h-full w-[70%] bg-black/50 backdrop-blur-md border-r border-white/20 text-white transform transition-transform duration-300 z-50 md:hidden 
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col justify-center items-center h-full gap-8 font-bold text-xl">
          <Link to="Home" smooth duration={500} spy activeClass="active-link" onClick={() => setIsOpen(false)}>
            <p className="cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-cyan-400 hover:text-cyan-400 transition">
              Home
            </p>
          </Link>
          <Link to="About" smooth duration={500} spy activeClass="active-link" onClick={() => setIsOpen(false)}>
            <p className="cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-cyan-400 hover:text-cyan-400 transition">
              About
            </p>
          </Link>
          <Link to="Contact" smooth duration={500} spy activeClass="active-link" onClick={() => setIsOpen(false)}>
            <p className="cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-cyan-400 hover:text-cyan-400 transition">
              Contact
            </p>
          </Link>
          <Link to="Project" smooth duration={500} spy activeClass="active-link" onClick={() => setIsOpen(false)}>
            <p className="cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-cyan-400 hover:text-cyan-400 transition">
              Project
            </p>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav
