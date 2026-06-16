import { useEffect, useRef, useState } from 'react'
import bg from '../assets/omai1.jpg'
import SecondSection from '../components/SecondSection'
import ThirdSection from '../components/ThirdSection'
import FourthSection from '../components/FourthSection'
import FifthSection from '../components/FifthSection'
import NavBar from '../components/NavBar'
import { motion } from 'framer-motion'


const Home = () => {
  const heroRef = useRef(null)
  const secondRef = useRef(null)
  const thirdRef = useRef(null)

  const [isDark, setIsDark] = useState(false)
  const [visible, setVisible] = useState(true)


  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY <= 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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

    const sections = [heroRef, secondRef, thirdRef]

    sections.forEach(ref => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative w-full overflow-hidden bg-white">

      <NavBar isDark={isDark} />


      <section ref={heroRef} id="hero" className="relative h-screen">

        <div className="absolute bottom-94 left-10 z-10">

          <motion.h1
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
            className="text-5xl font-light leading-tight text-black"
            initial={{ color: "#000000" }}
            animate={{ color: "#ffffff" }}
            transition={{ duration: 2.5, delay: 2 }}
          >
            <motion.span
              initial={{ x: -80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ display: "inline-block", marginRight: "10px" }}
            >
              Welcome
            </motion.span>

            <motion.span
              initial={{ x: -80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              style={{ display: "inline-block", marginRight: "10px" }}
            >
              home
            </motion.span>

            <br />

            <motion.span
              initial={{ x: -80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ display: "inline-block", marginRight: "10px" }}
            >
              to the
            </motion.span>

            <motion.span
              initial={{ x: -80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              style={{ display: "inline-block" }}
            >
              extraordinary
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
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          animate={{
            opacity: visible ? 1 : 0,
            y: visible ? 0 : 20
          }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          <span className="text-white text-xs tracking-widest">
            SCROLL FOR MORE
          </span>
          <div className="w-px h-8 bg-white/60" />
        </motion.div>

      </section>

      <section ref={secondRef} id="second">
        <SecondSection />
      </section>

      <section ref={thirdRef} id="third">
        <ThirdSection />
      </section>


        <FourthSection
          onFinish={() => {
            document.getElementById('five')?.scrollIntoView({
              behavior: 'smooth'
            })
          }}
        />


      <section ref={FifthSection} id="five">
        <FifthSection />
      </section>

    </div>
  )
}

export default Home