import React from "react";
// import img from "../assets/12img.png";
import img from "../assets/MEN.png";
import { TypeAnimation } from "react-type-animation";
import {useGSAP} from "@gsap/react"
import gsap from 'gsap'

function Home() {
  useGSAP(()=>{
   gsap.from("div img",{
   x:-100,
   duration:1,
   opacity:0
   })
    gsap.from(".sc",{
     y:-100,
   duration:1,
   opacity:0

    })
    gsap.from(".p2",{
     y:-100,
   duration:1,
   opacity:0

    })
    gsap.from(".name",{
     y:-100,
   duration:1,
   opacity:0

    })
  })
  return (
    <>
      <div id="Home" className=" pos flex  pt-28 flex-col sm:flex-row items-center mb-20 ">
        
        {/* Left Section */}
        <div className="text-white hlwww sm:w-[60%] flex flex-col text-center justify-center items-center gap-5 transform scale-100 lg:scale-110 transition-transform duration-500 ">
          <p className="p2">I'm</p>
          <h2 className="text-3xl name font-bold bg-gradient-to-r from-[rgb(53,150,172)] to-white bg-clip-text text-transparent inline-block">
            PRAFULL SINGH
          </h2>

          {/* Typing Effect with TypeAnimation */}
          <div className="sc text-xl font-semibold text-cyan-400">
            <TypeAnimation
              sequence={[
                "WEB DEVELOPER", 2000,
                "SOFTWARE DEVELOPER", 2000,
                "EDITOR", 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <button className="px-6 py-2 mt-4 bg-black border border-cyan-500 text-white rounded-lg shadow-lg hover:bg-cyan-600 transition-colors duration-300 hover:shadow-2xl">
            HIRE ME
          </button>
        </div>

        {/* Right Section */}
        <div className="IMGGG pt-13 transform scale-100 lg:scale-110 transition-transform duration-500">
          <img
            src={img}
            alt="profile"

            className="max-w-sm rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </>
  );
}

export default Home;




