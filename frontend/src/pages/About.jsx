import bg from '../assets/About_bg.jpg'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import AboutContent from '../components/AboutContent'
import { useState } from 'react'

const About = () => {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className="relative w-full overflow-hidden bg-white">
      <NavBar isDark={isDark} />
      <Hero bg={bg} line1="Welcome" line2="home" line3="to the" line4="extraordinary" />
      <AboutContent />
    </div>
  )
}

export default About