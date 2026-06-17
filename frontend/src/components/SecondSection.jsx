import { motion } from 'framer-motion'

const SecondSection = ({ img, topText, bottomText, linkText }) => {
  return (
    <div
      style={{
        backgroundColor: '#f5f3ef',
        fontFamily: 'Cormorant Garamond, serif'
      }}
      className="w-full px-10 py-20"
    >
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }}
        style={{
          fontSize: '28px',
          fontWeight: '300',
          color: '#1f1f1f',
          maxWidth: '650px',
          lineHeight: '1.3',
          letterSpacing: '0.2px',
          marginLeft: '60px'
        }}
      >
        {topText}
      </motion.p>
      <div className="mt-16 flex items-end gap-10">
        <motion.img
          src={img}
          alt=""
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          style={{ width: '55%', objectFit: 'cover' }}
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.5 }}
          style={{ maxWidth: '320px', paddingBottom: '20px' }}
        >
          <p
            style={{
              fontSize: '18px',
              fontWeight: '400',
              color: '#1f1f1f',
              lineHeight: '1.3',
              letterSpacing: '0.2px'
            }}
          >
            {bottomText}
          </p>
          <p
            className="inline-block mt-6 cursor-pointer border-b border-[#888] pb-[2px] hover:border-[#2c2c2c] transition-colors"
            style={{
              fontSize: '11px',
              letterSpacing: '3px',
              color: '#555'
            }}
          >
            {linkText}
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default SecondSection