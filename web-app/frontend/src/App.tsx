import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Cursor } from "@comp/Cursor"
import IndexPage from '@page/IndexPage'
import AboutPage from "@page/AboutPage"

export default function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<IndexPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
        </Routes>
      </Router>
      <Cursor/>
    </>
  )
}