import React from 'react'
import img from "../assets/CAll-removebg-preview.png";
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger)

function Contact() {
  useGSAP(() => {
      gsap.from(".leftcontact", {
        x: -100,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          trigger: ".leftcontact",
          scroller: "body",   // ✅ fixed (scroll ❌ → scroller ✅)
          scrub: 2,
          start: "top 80%",   // ✅ animation start point
          end: "top 60%", 
          
          start: "Top 50%",
          end: "Top 30%"    // ✅ animation end point
        }
      })
      gsap.from(".rightcontact", {
        x: 100,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          trigger: ".rightcontact",
          scroller: "body",   // ✅ fixed (scroll ❌ → scroller ✅)
          scrub: 2,
          start: "top 80%",   // ✅ animation start point
          end: "top 60%", 
          
          start: "Top 50%",
          end: "Top 30%"    // ✅ animation end point
        }
      })
      }, [])
  return (
    <div id='Contact' className='flex flex-col sm:flex-row justify-center items-center pb-20 pt-10 gap-15'>
        <div className="leftcontact ">
            <img src={img} alt="" />
        </div>
        <div className="rightcontact  justify-center items-center flex bg-black flex-row shadow-lg shadow-sky-500 ">
            <form className='flex flex-col p-4  items-center justify-cente ' action="https://getform.io/f/bolzznya" method='POST'>
            <input className='border rounded-xl bg-amber-50 placeholder-slate-600  placeholder:p-2 m-2 placeholder:font-semibold text-black p-2 '  type="text" placeholder='Name' />
            <input className='border rounded-xl bg-amber-50 placeholder-slate-600  placeholder:p-2 m-2 placeholder:font-semibold text-black p-2 '  type="text" placeholder='Email' />
            <textarea className='bg-amber-50 rounded-xl w-50 mt-3  placeholder-slate-600  m-2 placeholder:font-semibold text-black p-2  ' placeholder='Message Me' name="Message Me" id=""></textarea>
            <button className='w-[80px] py-1 bg-sky-500 rounded mt-3'>Sumit</button>
            </form>
            

            

        </div>
    </div>
  )
}

export default Contact