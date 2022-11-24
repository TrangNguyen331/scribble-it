import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'

import IndexPage from '@page/IndexPage'
import AboutPage from "@page/AboutPage"

export default function App() {

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