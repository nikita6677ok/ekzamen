import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Lenis from 'lenis'

import Home from './pages/Home'
import About from './pages/About'
import Collections from './pages/Collections'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id


            if (id === 'hero') {
              setIsDark(false)
            } else {
              setIsDark(true)
            }
          }
        })
      },
      { threshold: 0.6 }
    )

    const sections = document.querySelectorAll('section')
    sections.forEach(sec => observer.observe(sec))

    return () => observer.disconnect()
  }, [])

  return (
    <BrowserRouter>
      <NavBar isDark={isDark} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App