import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

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

function Slide({ slide, index, scrollYProgress, total }) {
  const step = 1 / total
  const start = index * step
  const end = start + step
  const fadeIn = start + step * 0.15
  const fadeOut = end - step * 0.15
  const mid = start + step * 0.5

  const opacity = useTransform(
    scrollYProgress,
    [start, fadeIn, fadeOut, end],
    [index === 0 ? 1 : 0, 1, 1, index === total - 1 ? 1 : 0]
  )

  const textY = useTransform(
    scrollYProgress,
    [start, mid, end],
    [60, 0, -60]
  )

  return (
    <motion.div style={{ opacity, position: 'absolute', inset: 0 }} className="w-full h-full">
      {slide.type === 'intro' ? (
        <div
          className="w-full h-full flex flex-col justify-center"
          style={{ backgroundColor: slide.bg, paddingLeft: '10vw', paddingRight: '10vw' }}
        >
          <motion.p style={{ y: textY }} className="text-[11px] tracking-[4px] text-white/70">
            {slide.subtitle}
          </motion.p>
          <motion.h2
            style={{ y: textY, fontSize: 'clamp(32px, 4vw, 56px)', maxWidth: '700px', marginTop: '20px' }}
            className="text-white font-light leading-[1.1]"
          >
            {slide.title}
          </motion.h2>
        </div>
      ) : (
        <div className="relative w-full h-full">
          <img src={slide.img} className="absolute inset-0 w-full h-full object-cover" alt="" />
          <div className="absolute inset-0 bg-black/35" />
          <motion.div
            style={{ y: textY, maxWidth: '420px' }}
            className="absolute bottom-20 right-[10vw] text-white"
          >
            <h3 className="font-light leading-[1.15]" style={{ fontSize: 'clamp(24px, 2.5vw, 38px)' }}>
              {slide.title}
            </h3>
            <p className="text-[13px] text-white/85 leading-[1.7] mt-4">{slide.desc}</p>
            <div className="mt-6 text-[10px] tracking-[3px] border-b border-white/40 inline-block pb-1">
              EXPLORE
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  )
}


export default function FourthSection() {
  const containerRef = useRef(null)
  const [isPinned, setIsPinned] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  useEffect(() => {
    const checkPin = () => {
      const el = containerRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const shouldPin = rect.top <= 0 && rect.bottom > window.innerHeight
      setIsPinned(shouldPin)
    }

    checkPin()
    window.addEventListener('scroll', checkPin, { passive: true })
    window.addEventListener('resize', checkPin)
    const interval = setInterval(checkPin, 16)

    return () => {
      window.removeEventListener('scroll', checkPin)
      window.removeEventListener('resize', checkPin)
      clearInterval(interval)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        height: `${slides.length * 100}vh`,
        position: 'relative',
        fontFamily: 'Cormorant Garamond, serif',
      }}
    >
      <div
        style={{
          position: isPinned ? 'fixed' : 'absolute',
          top: isPinned ? 0 : 'auto',
          bottom: isPinned ? 'auto' : 0,
          left: 0,
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          zIndex: isPinned ? 30 : 1,
        }}
      >
        {slides.map((slide, i) => (
          <Slide key={i} slide={slide} index={i} total={slides.length} scrollYProgress={scrollYProgress} />
        ))}
      </div>
    </div>
  )
}