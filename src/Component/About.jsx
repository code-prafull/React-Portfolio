import React from 'react'
import Card from './Card'
import mern from '../assets/MERN-removebg-preview.png'
import dsa from '../assets/EE.jpg'
import cpp from '../assets/CPP.jpg'
import './About.css'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger)

function ABB() {
  useGSAP(() => {
    gsap.utils.toArray(".circle").forEach((el) => {
      gsap.from(el, {
        x: -100,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          trigger: el,        
          scroller: "body",
          start: "top 80%",
          end: "top 30%",
          scrub: 2,                // ✅ scrub enabled
          toggleActions: "play none none reverse",
          // markers: true          // debugging ke liye
        }
      })
    })

    gsap.from(".edu", {
      x: 100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".edu",
        scroller: "body",
        start: "top 85%",
        scrub: 2,                  // ✅ scrub added
        toggleActions: "play none none reverse"
      }
    });

    gsap.from(".skills", {
      x: 50,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".skills",
        scroller: "body",
        start: "top 85%",
        scrub: 2,                  // ✅ scrub added
        toggleActions: "play none none reverse"
      }
    });

    gsap.from(".personal", {
      x: 100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".personal",
        scroller: "body",
        start: "top 85%",
        scrub: 2,                  // ✅ scrub added
        toggleActions: "play none none reverse"
      }
    });

    gsap.from(".card", {
      y: 100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 85%",
        scrub: 2,                  // ✅ scrub added
        toggleActions: "play none none reverse"
      }
    });
  }, []);


  return (
    <div id='About' className='About grid grid-cols-1 h-screen w-screen gap-10 overflow-x-hidden sm:grid-cols-2'>
      <div className="left flex items-center justify-center ">

        {/* circle */}
        <div className='circle flex flex-col items-center pl-8'>
          <div className="circle h-[60px] w-[60px] bg-sky-400 shadow-lg shadow-sky-400  rounded-full rotate-45"></div>
          <div className="circle-line h-[90px] w-[2px] bg-sky-400 shadow-lg shadow-sky-400  flex items-center justify-center"></div>
          <div className="circle h-[60px] w-[60px] bg-sky-400 shadow-lg shadow-sky-400  rounded-full rotate-45"></div>
          <div className="circle-line h-[90px] w-[2px] bg-sky-400 shadow-lg shadow-blue-200  flex items-center justify-center"></div>
          <div className="circle h-[60px] w-[60px] bg-sky-400 shadow-lg shadow-sky-400 rounded-full rotate-45"></div>
        </div>

        {/* card */}
        <div className="info gap-5">
         
          {/* Education */}
          <div className= 'edu pb-6 pl-2 '>
            <h2 className='text-2xl  bg-gradient-to-r from-[rgb(222,22,62)] to-white bg-clip-text text-transparent inline-block'>Education</h2>
            <ul>
              <li><span className='text-sky-300 font-bold '>DEGREE </span>: B.TECH</li>
              <li><span className='text-sky-300 font-bold '>BRANCH </span>: COMPUTER SCIENCE & ENGINEERING</li>
              <li><span className='text-sky-300 font-bold '>SGPA </span>: 7.51</li>
            </ul>
          </div>

          {/* skill */}
          <div className= 'skills pt-5 pl-2'>
            <h2 className='text-2xl  bg-gradient-to-r from-[rgb(222,22,62)] to-white bg-clip-text text-transparent inline-block'>Skills</h2>
            <ul>
              <li>MERN STACK WEB DEVELOPER</li>
              <li>C++</li>
              <li>DSA</li>
            </ul>
          </div>

          {/* personal */}
          <div className='personal mt-6 pl-2'>
            <h2 className='text-2xl  bg-gradient-to-r from-[rgb(222,22,62)] to-white bg-clip-text text-transparent inline-block'>Personal Info</h2>
            <ul>
              <li><span className='text-sky-300 font-bold '>Location : </span> Satna, Madhya Pradesh, India</li>
              <li><span className='text-sky-300 font-bold '>Profession : </span> Web Developer | Software Engineer Aspirant</li>
              <li><span className='text-sky-300 font-bold '>Email : </span>prafull.singh.cs@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right Side - Project Card */}
      <div className=' card flex justify-center items-center '>
        <div>
          <Card tittle="MERN STACK WEB DEVELOPMENT " image={mern}/>
          {/* agar chaho to aur bhi project cards yaha add kar sakte ho */}
        </div>
      </div>
    </div>
  )
}

export default ABB

