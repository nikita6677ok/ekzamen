import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import img1 from '../assets/slide1.jpg'
import img2 from '../assets/slide2.jpg'

const slides = [
  {
    type: 'intro',
    title: 'Fabled locations chosen for their innate charisma',
    subtitle: 'DESTINATIONS',
    bg: '#7a6e66',
  },
  {
    type: 'image',
    title: 'The spirit of St Barth, elevated',
    desc: "Perched above the Caribbean's most storied shores.",
    img: img1,
  },
  {
    type: 'image',
    title: 'A quieter side of Ibiza, made yours',
    desc: "Set above the southern coastline.",
    img: img2,
  },
]

export default function FourthSection({ onFinish }) {
  const [current, setCurrent] = useState(0)
  const sectionRef = useRef(null)
  const lock = useRef(false)
  const active = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => (active.current = entry.isIntersecting),
      { threshold: 0.6 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleWheel = (e) => {
      if (!active.current || lock.current) return

      const dir = Math.sign(e.deltaY)

      if (dir > 0) {
        if (current < slides.length - 1) {
          e.preventDefault()
          lock.current = true
          setCurrent((p) => p + 1)
          setTimeout(() => (lock.current = false), 900)
        } else {
          active.current = false
          onFinish?.()
        }
      }

      if (dir < 0 && current > 0) {
        e.preventDefault()
        lock.current = true
        setCurrent((p) => p - 1)
        setTimeout(() => (lock.current = false), 900)
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [current])

  const slide = slides[current]

  return (
    <div
      ref={sectionRef}
      style={{
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
        fontFamily: 'Cormorant Garamond, serif',
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="w-full h-full"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >

          {slide.type === 'intro' ? (
            <div
              className="w-full h-full flex flex-col justify-center"
              style={{
                backgroundColor: slide.bg,
                paddingLeft: '10vw',
                paddingRight: '10vw',
              }}
            >
              <p className="text-[11px] tracking-[4px] text-white/70">
                {slide.subtitle}
              </p>

              <h2
                className="text-white font-light leading-[1.1]"
                style={{
                  fontSize: 'clamp(32px, 4vw, 56px)',
                  maxWidth: '700px',
                  marginTop: '20px',
                }}
              >
                {slide.title}
              </h2>
            </div>
          ) : (

            <div className="relative w-full h-full">

             
              <motion.img
                src={slide.img}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2 }}
              />

              <div className="absolute inset-0 bg-black/35" />

              
              <motion.div
                className="absolute bottom-20 right-[10vw] text-white"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                style={{ maxWidth: '420px' }}
              >
                <h3
                  className="font-light leading-[1.15]"
                  style={{ fontSize: 'clamp(24px, 2.5vw, 38px)' }}
                >
                  {slide.title}
                </h3>

                <p className="text-[13px] text-white/85 leading-[1.7] mt-4">
                  {slide.desc}
                </p>

                <div className="mt-6 text-[10px] tracking-[3px] border-b border-white/40 inline-block pb-1">
                  EXPLORE
                </div>
              </motion.div>

            </div>
          )}

        </motion.div>
      </AnimatePresence>
    </div>
  )
}