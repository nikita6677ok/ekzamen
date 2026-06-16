import { useState } from 'react'

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
          style={{
            fontFamily: 'Jost, sans-serif',
            color
          }}
        >
          ENQUIRE
        </button>

      </nav>

      {menuOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center gap-8">

          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 left-10 text-white text-xs tracking-widest flex items-center gap-3"
          >
            ✕ CLOSE
          </button>

          {['Home', 'About', 'Collections', 'Contact'].map(item => (
            <a
              key={item}
              href="#"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
              className="text-white text-4xl font-light tracking-widest hover:text-gray-300"
            >
              {item}
            </a>
          ))}

        </div>
      )}
    </>
  )
}

export default NavBar