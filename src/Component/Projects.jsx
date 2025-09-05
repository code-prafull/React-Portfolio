import React from "react";
import ai from "../assets/AIAAs.webp";
import chat from "../assets/CHat.webp";
import food from "../assets/FoodDELI.jpg";
import pay from "../assets/Razorpay.jpg";
import pass from "../assets/Password Generator.jpg"
import Dis from "../assets/Discord.jpg"
import "./Project.css";
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger)

function Projects() {
  useGSAP(() => {
       gsap.from(".Project", {
            x: -100,
            duration: 1,
            opacity: 0,
            scrollTrigger: {
              trigger: ".Project",
              scroller: "body",   // ✅ fixed (scroll ❌ → scroller ✅)
              scrub: 2,
              start: "top 80%",   // ✅ animation start point
              end: "top 30%", 
 
              start: "Top 10%",
              end: "Top 30%"    // ✅ animation end point
            }
          })
  }, [])
  const projectData = [
    { id: 1, title: "AI Assistant", img: ai },
    { id: 2, title: "Chat App", img: chat },
    { id: 3, title: "Food Delivery", img: food },
    { id: 4, title: "Razorpay Clone", img: pay },
    { id: 5, title: "Password Generator", img: pass },
    { id: 6, title: "Discord Clone", img: Dis },
//     { id: 7, title: "Blog Platform", img: food },
//     { id: 8, title: "Music Player", img: pay },
   ];

  return (
    <section id="Project" className="w-full py-10 ">
      <h2 className="text-center text-2xl font-bold  bg-gradient-to-r from-[rgb(175,24,54)] to-white bg-clip-text text-transparent ">
        2+ YEARS EXPERIENCE IN PROJECTS
      </h2>

      {/* Sirf is box me horizontal scroll */}
      <div className="mx-auto mt-6 w-full max-w-6xl overflow-x-auto overflow-y-hidden scrollbar-hide">
        {/* IMPORTANT: w-max -> content jitna hai utna expand hoga, tabhi scroll aayega */}
        <div className="w-max flex gap-6 px-4 py-6 snap-x snap-mandatory">
          {projectData.map((p) => (
            <div
              key={p.id}
              className="shrink-0 snap-center h-[200px] w-[300px] rounded-xl bg-[#171b1ca4] 
                         drop-shadow-lg hover:shadow-sky-500 hover:shadow-md 
                         transition-all duration-500 flex flex-col items-center justify-center"
            >
              <h3 className="text-xl font-semibold text-center mb-3 
                             bg-gradient-to-r from-[rgb(222,22,62)] to-white 
                             bg-clip-text text-transparent">
                {p.title}
              </h3>
              <img src={p.img} alt={p.title} className="h-[100px] object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

