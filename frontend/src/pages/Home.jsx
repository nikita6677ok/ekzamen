import { useEffect, useRef, useState } from 'react'
import bg from '../assets/omai1.jpg'
import lifestyleImg from '../assets/omailifestyle.jpg'
import Hero from '../components/Hero'
import SecondSection from '../components/SecondSection'
import ThirdSection from '../components/ThirdSection'
import FourthSection from '../components/FourthSection'
import FifthSection from '../components/FifthSection'
import NavBar from '../components/NavBar'

const Home = () => {
  const heroRef = useRef(null)
  const secondRef = useRef(null)
  const thirdRef = useRef(null)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsDark(entry.target.id !== 'hero')
          }
        })
      },
      { threshold: 0.6 }
    )
    const sections = [heroRef, secondRef, thirdRef]
    sections.forEach(ref => { if (ref.current) observer.observe(ref.current) })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative w-full bg-white">
      <NavBar isDark={isDark} />

      <section ref={heroRef} id="hero">
        <Hero bg={bg} line1="Welcome" line2="home" line3="to the" line4="extraordinary" />
      </section>

      <section ref={secondRef} id="second">
        <SecondSection
          img={lifestyleImg}
          topText="Omai redefines destination living with an evolving ensemble of private villas, architecturally designed in harmony with their fabled locations. Impeccably appointed residences set the scene for rarefied experiences, realised through five-star service tailored only to you."
          bottomText="Nature, architecture and understated luxury converge to create immersive sanctuaries, offering space to breathe, reflect, and reconnect. With every detail considered and five-star service intuitively delivered, Omai reimagines destination living as a deeply personal and effortlessly elevated experience."
          linkText="DISCOVER OUR PHILOSPHY"
        />
      </section>

      <section ref={thirdRef} id="third">
        <ThirdSection />
      </section>

      <FourthSection />

      <section id="five">
        <FifthSection />
      </section>
    </div>
  )
}

export default Home