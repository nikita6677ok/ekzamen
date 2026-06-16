import { useRef } from 'react'
import { motion } from 'framer-motion'
import img1 from '../assets/omai_zile.jpg'
import img2 from '../assets/omai_grey.jpeg'
import img3 from '../assets/omai_reva.jpg'

const villas = [
  { img: img1, name: 'Omai Zilé', bedrooms: '6 BEDROOMS', location: 'ST BARTH' },
  { img: img2, name: 'Omai Grey', bedrooms: '10 BEDROOMS', location: 'IBIZA' },
  { img: img3, name: 'Omai Reva', bedrooms: '6 BEDROOMS', location: 'OPENING NOV 2026' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] }
  }
}

const fade = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2 }
  }
}

export default function ThirdSection() {
  const ref = useRef(null)
  const dragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const scroll = (d) => {
    ref.current?.scrollBy({ left: d * 600, behavior: 'smooth' })
  }

  const dragStart = (e) => {
    dragging.current = true
    startX.current = e.pageX - ref.current.offsetLeft
    scrollLeft.current = ref.current.scrollLeft
  }

  const dragEnd = () => {
    dragging.current = false
  }

  const dragMove = (e) => {
    if (!dragging.current) return
    e.preventDefault()
    const x = e.pageX - ref.current.offsetLeft
    const walk = (x - startX.current) * 1.5
    ref.current.scrollLeft = scrollLeft.current - walk
  }

  return (
    <div className="w-full py-24 relative bg-[#f5f3ef] font-[Cormorant_Garamond]">


      <button
        onClick={() => scroll(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-[44px] h-[44px] border bg-white/70 hover:bg-white text-[20px] text-[#555]"
      >
        ‹
      </button>

      <button
        onClick={() => scroll(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-[44px] h-[44px] border bg-white/70 hover:bg-white text-[20px] text-[#555]"
      >
        ›
      </button>


      <div
        ref={ref}
        onMouseDown={dragStart}
        onMouseUp={dragEnd}
        onMouseLeave={dragEnd}
        onMouseMove={dragMove}
        className="flex gap-12 overflow-x-auto px-20 scroll-smooth"
        style={{
          cursor: 'grab',
          userSelect: 'none',
          WebkitUserSelect: 'none',
          scrollbarWidth: 'none'
        }}
      >

  
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="min-w-[420px] flex flex-col justify-between"
        >
          <div>
            <p className="text-[11px] tracking-[3px] text-gray-500">VILLAS</p>

            <motion.h2 variants={fadeUp} className="text-[42px] font-light leading-[1.1] mt-4">
              Architectural sanctuaries designed for destination living
            </motion.h2>
          </div>

          <motion.p variants={fade} className="text-[13px] text-[#444] font-semibold leading-[1.4]">
            Conceived in close collaboration with leading architects such as SAOTA, Omai villas are architectural statements of balance and beauty, each thoughtfully placed within its unique landscape. Expansive terraces invite the outdoors in, while refined interiors offer elegant ease. These private sanctuaries are designed entirely around your way of life.
          </motion.p>
        </motion.div>


        {villas.map((v, i) => (
          <motion.div
            key={v.name}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 1 }}
            className="min-w-[calc(50vw-120px)]"
          >
            <motion.img
              src={v.img}
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
              className="w-full h-[650px] object-cover select-none pointer-events-none"
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
            />

            <motion.p variants={fade} className="text-[22px] mt-4">
              {v.name} ›
            </motion.p>

            <motion.p variants={fade} className="text-[10px] tracking-[2px] text-gray-500 mt-1">
              {v.bedrooms} · {v.location}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}