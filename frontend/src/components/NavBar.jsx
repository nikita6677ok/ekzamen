import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const NavBar = ({ isDark }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const color = isDark ? '#000000' : '#ffffff'

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 flex items-center justify-between px-10 py-6 z-50">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-xs tracking-widest flex items-center gap-3"
          style={{ color }}
        >
          <div className="flex flex-col gap-[3px]">
            <span className="block w-[10px] h-px" style={{ backgroundColor: color }} />
            <span className="block w-[10px] h-px" style={{ backgroundColor: color }} />
          </div>
          MENU
        </button>
        <div
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            letterSpacing: '0.4em',
            fontSize: '28px',
            color,
            fontWeight: '300'
          }}
        >
          OMAI
        </div>
        <button
          className="text-xs tracking-widest"
          style={{ fontFamily: 'Jost, sans-serif', color }}
        >
          ENQUIRE
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: -340 }}
            animate={{ x: 0 }}
            exit={{ x: -340 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed top-0 left-0 h-full bg-white z-50 overflow-y-auto"
            style={{ width: '340px', fontFamily: 'Jost, sans-serif' }}
          >
            <div className="px-8 py-6">
              <button onClick={() => setMenuOpen(false)} className="flex items-center gap-3 text-xs tracking-widest text-black">
                <span>✕</span> MENU
              </button>
              <div className="mt-10 flex flex-col gap-6">
                <Link to="/home" className="text-sm font-medium tracking-wide text-black">HOME</Link>
                <a href="#" className="text-sm font-medium tracking-wide text-black">ABOUT</a>
                <a href="#" className="text-sm font-medium tracking-wide text-black">DESTINATIONS</a>
                <div className="mt-2">
                  <p className="text-[10px] tracking-widest text-gray-400 mb-3">VILLAS</p>
                  <div className="flex flex-col gap-4">
                    <a href="#" className="text-sm font-medium tracking-wide text-black">OMAI ZILÉ</a>
                    <a href="#" className="text-sm font-medium tracking-wide text-black">OMAI KAYA</a>
                    <a href="#" className="text-sm font-medium tracking-wide text-black">OMAI ST BARTH</a>
                    <a href="#" className="text-sm font-medium tracking-wide text-black">OMAI GREY</a>
                  </div>
                </div>
                <a href="#" className="text-sm font-medium tracking-wide text-black mt-2">EXPERIENCES</a>
                <a href="#" className="text-sm font-medium tracking-wide text-black">OMAI STUDIO</a>
                <Link to="/contact" className="text-sm font-medium tracking-wide text-black">CONTACT</Link>
              </div>
              <div className="mt-20">
                <p className="text-[10px] tracking-widest text-gray-400">@OMAIVILLAS</p>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', fontWeight: '300', color: '#1f1f1f', marginTop: '12px', lineHeight: '1.3' }}>
                  Destination living, redefined
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default NavBar