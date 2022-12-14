import React, { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'
import { QueryClientProvider, QueryClient } from "react-query"

import IndexPage from '@page/IndexPage'
import SecondPage from '@page/SecondPage'
import AboutPage from "@page/AboutPage"

export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  })

  useEffect(() => { 
    console.log('%c   ððâï¸âï¸ð¤¶ Merry Christmas ðâï¸âï¸ðð   ', 'background: #1d2d44; color: #29bf12');
    console.log('%c   ð 20110580 - Nguyá»n Thá» ThÃ¹y Trang  ð   ', 'background: #1d2d44; color: #29bf12');
    console.log('%c   ð 20110135 - LÃª Thá» Thanh Tuyáº¿t     ð   ', 'background: #1d2d44; color: #29bf12');
  }, [])

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <AnimatePresence>
            <Routes>
              <Route path="/" element={<IndexPage/>}/>
              <Route path="/characters" element={<IndexPage/>}/>
              <Route path="/digits" element={<SecondPage/>}/>
              <Route path="/about" element={<AboutPage/>}/>
            </Routes>
          </AnimatePresence>
        </Router>
      </QueryClientProvider>
    </>
  )
}