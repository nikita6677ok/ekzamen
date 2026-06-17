import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Hero = ({ bg, line1, line2, line3, line4 }) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY <= 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="hero" className="relative h-screen">
      <div className="absolute bottom-94 left-10 z-10">
        <motion.h1
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
          className="text-5xl font-light leading-tight text-black"
          initial={{ color: '#000000' }}
          animate={{ color: '#ffffff' }}
          transition={{ duration: 2.5, delay: 2 }}
        >
          <motion.span
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ display: 'inline-block', marginRight: '10px' }}
          >
            {line1}
          </motion.span>
          <motion.span
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            style={{ display: 'inline-block', marginRight: '10px' }}
          >
            {line2}
          </motion.span>
          <br />
          <motion.span
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ display: 'inline-block', marginRight: '10px' }}
          >
            {line3}
          </motion.span>
          <motion.span
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            style={{ display: 'inline-block' }}
          >
            {line4}
          </motion.span>
        </motion.h1>
      </div>

      <motion.img
        src={bg}
        alt="bg"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5, delay: 2 }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <motion.div
        className="absolute inset-0 bg-black/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 2 }}
      />

      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
      >
        <span className="text-white text-xs tracking-widest">SCROLL FOR MORE</span>
        <div className="w-px bg-white/60" style={{ height: '60px' }} />
      </motion.div>
    </section>
  )
}

export default Hero