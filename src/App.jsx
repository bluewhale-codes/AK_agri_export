import { useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import AboutUs from './pages/AboutUs'
import Footer from './pages/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
       <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/aboutUs" element={<AboutUs/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
