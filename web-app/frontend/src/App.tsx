import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Cursor } from "@comp/Cursor"
import IndexPage from '@page/IndexPage'

export default function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<IndexPage/>}/>
        </Routes>
      </Router>
      <Cursor/>
    </>
  )
}