import React from 'react'
import img2 from '../assets/MERN-removebg-preview.png'
import img3 from '../assets/CPP.jpg'
import img4 from '../assets/EE.jpg'
import './Card.css'

function Card() {
  const data = [
    { tittle: "MERN STACK", image: img2 },
    { tittle: "DSA", image: img4 },
    { tittle: "C++", image: img3 },
  ]

  return (
    <>
      {data.map((items, index) => {
        return (
          <div 
            key={index}
            className="md:mr-60 flex card relative overflow-hidden h-[200px] w-[300px] 
                       bg-[#171b1ca4] drop-shadow-lg hover:shadow-sky-500 hover:shadow-md 
                       transition-all duration-500 m-4 sm:items-center sm:justify-center"
          >
            <h2 className="flex text-2xl text-center items-center justify-center m-8 
                           bg-gradient-to-r from-[rgb(222,22,62)] to-white bg-clip-text text-transparent">
              {items.tittle}
            </h2>
            <div className="hovercard">
              <img src={items.image} alt={items.tittle} />
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Card
