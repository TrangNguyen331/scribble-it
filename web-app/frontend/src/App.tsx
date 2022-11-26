import React, { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'

import IndexPage from '@page/IndexPage'
import AboutPage from "@page/AboutPage"

export default function App() {
  useEffect(() => { 
    console.log('%c   🎄🎄❄️⛄️🤶 Merry Christmas 🎅⛄️❄️🎄🎄   ', 'background: #1d2d44; color: #29bf12');
    console.log('%c   🎄 20110580 - Nguyễn Thị Thùy Trang  🎄   ', 'background: #1d2d44; color: #29bf12');
    console.log('%c   🎄 20110135 - Lê Thị Thanh Tuyết     🎄   ', 'background: #1d2d44; color: #29bf12');
  }, [])

  return (
    <>
      <Router>
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<IndexPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
          </Routes>
        </AnimatePresence>
      </Router>
    </>
  )
}