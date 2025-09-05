import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './Component/Nav'
import './App.css'
import Home from './Component/Home'
import About from './Component/About'
import Projects from './Component/Projects'
import Contact from './Component/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Home />
      <About />
      <Projects />
      <Contact />
  
       
    </>
  )
}

export default App
