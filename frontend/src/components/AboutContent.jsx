import { motion } from 'framer-motion'
import img from '../assets/About1.jpg'

const AboutContent = () => {
  return (
    <div style={{ backgroundColor: '#ebe7e1', fontFamily: 'Cormorant Garamond, serif' }}>
      <div className="w-full px-10 py-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ fontSize: '11px', letterSpacing: '3px', color: '#a8967f', marginBottom: '24px' }}
        >
          ABOUT OMAI
        </motion.p>
        <div className="flex gap-16">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{ fontSize: '17px', fontWeight: '400', color: '#1f1f1f', lineHeight: '1.6', maxWidth: '420px' }}
          >
            Devoted to the art of destination living, Omai is a curated collection of architecturally significant private villas, each designed in harmony with its surroundings. Set in exquisite natural settings in storied enclaves, every Omai residence is conceived as an expression of place, harmonising architecture, atmosphere, and service to create an extraordinary sense of belonging.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            style={{ fontSize: '17px', fontWeight: '400', color: '#1f1f1f', lineHeight: '1.6', maxWidth: '420px' }}
          >
            More than a stay, an Omai villa is a complete experience. Impeccably appointed and intuitively serviced, each residence becomes a private world unto itself, setting the scene for life to unfold at its finest. Every detail, from the noble materials that define the space to the tailored experiences that bring it to life, reflects a deep discernment of what makes luxury truly meaningful.
          </motion.p>
        </div>
      </div>

      <div className="w-full flex" style={{ minHeight: '900px', padding: '40px' }}>
        <div style={{ width: '55%', overflow: 'hidden' }}>
          <motion.img
            src={img}
            alt=""
            initial={{ opacity: 0, scale: 1.15 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            style={{ width: '100%', height: '600px', objectFit: 'cover', display: 'block' }}
          />
        </div>
        <div className="flex-1 flex flex-col justify-center px-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{ fontSize: '44px', fontWeight: '300', color: '#1f1f1f', marginBottom: '24px' }}
          >
            Omai
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ fontSize: '16px', fontWeight: '400', color: '#1f1f1f', lineHeight: '1.7', maxWidth: '320px' }}
          >
            'Om' — a tranquil breath of calm. 'Ai' — the Japanese word for love. Joined, they form a name that speaks in a gentle cadence of serene welcome and cultivated care.
          </motion.p>
        </div>
      </div>
    </div>
  )
}

export default AboutContent