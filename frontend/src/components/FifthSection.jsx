import { motion } from 'framer-motion'
import img1 from '../assets/omai51.jpg'
import img2 from '../assets/omai52.jpg'
import img3 from '../assets/omai53.jpg'

export default function FifthSection() {
  return (
    <div
      style={{
        backgroundColor: '#f5f3ef',
        fontFamily: 'Cormorant Garamond, serif',
      }}
      className="w-full px-[8vw] py-28"
    >
      <div className="flex gap-16 items-start">


        <div className="w-[38%] flex flex-col gap-14">

          <div>
            <p style={{ fontSize: '11px', letterSpacing: '3px', color: '#888', marginBottom: '18px' }}>
              EXPERIENCES
            </p>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{
                fontSize: '28px',
                fontWeight: '300',
                lineHeight: '1.5',
                color: '#1f1f1f',
              }}
            >
              Every Omai experience is made to measure — from curated wellness
              and your personal padel court to fine dining with a gastronomic
              chef and celebrations that leave a lasting impression — all
              shaped around the way you live, gather, and host.
            </motion.p>
          </div>

          <motion.img
            src={img1}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            style={{
              width: '100%',
              height: '1100px',
              objectFit: 'cover',
            }}
          />
        </div>


        <div className="w-[62%] flex flex-col gap-14">


          <motion.img
            src={img2}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            style={{
              width: '100%',
              height: '1150px',
              objectFit: 'cover',
            }}
          />


          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ maxWidth: '520px' }}
          >
            <p
              style={{
                fontSize: '16px',
                lineHeight: '1.9',
                color: '#1f1f1f',
                fontWeight: '300',
              }}
            >
              Gastronomy, wellness, and celebration unfold effortlessly: private chefs,
              serene spa rituals, curated entertainment, and spectacular settings designed
              for dining, dancing, or simply being — all shaped entirely around you.
            </p>

            <p
              style={{
                marginTop: '24px',
                fontSize: '10px',
                letterSpacing: '3px',
                color: '#888',
                borderBottom: '1px solid #cfcfcf',
                paddingBottom: '4px',
                display: 'inline-block',
                cursor: 'pointer',
              }}
            >
              EXPLORE THE POSSIBILITIES
            </p>
          </motion.div>


          <div className="mt-12">
            <p
              style={{
                fontSize: '11px',
                letterSpacing: '3px',
                color: '#888',
                marginBottom: '10px',
              }}
            >
              OMAI STUDIO
            </p>

            <h2
              style={{
                fontSize: 'clamp(34px, 3.2vw, 54px)',
                fontWeight: '300',
                lineHeight: '1.1',
                color: '#1f1f1f',
                maxWidth: '600px',
              }}
            >
              Design that defines
              <br />
              the Omai world
            </h2>
          </div>


          <motion.img
            src={img3}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            style={{
              width: '100%',
              height: '1020px',
              objectFit: 'cover',
              alignSelf: 'flex-start',
            }}
          />

          {/* FINAL TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ maxWidth: '520px' }}
          >
            <p
              style={{
                fontSize: '16px',
                lineHeight: '1.9',
                color: '#1f1f1f',
                fontWeight: '300',
              }}
            >
              Omai Studio is the creative force behind each villa’s refined atmosphere —
              a Paris-based interior design practice shaping spatial narratives through
              bespoke architecture and thoughtful details that express the brand’s
              signature balance of elegance, ease, and deep sense of place.
            </p>

            <p
              style={{
                marginTop: '28px',
                fontSize: '10px',
                letterSpacing: '3px',
                color: '#888',
                borderBottom: '1px solid #cfcfcf',
                paddingBottom: '4px',
                display: 'inline-block',
                cursor: 'pointer',
              }}
            >
              ENTER OMAI STUDIO
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  )
}