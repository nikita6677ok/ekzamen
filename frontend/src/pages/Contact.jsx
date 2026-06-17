import { useState } from 'react'
import { motion } from 'framer-motion'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    topic: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <div
      style={{
        backgroundColor: '#7a6e66',
        fontFamily: 'Cormorant Garamond, serif',
      }}
      className="min-h-screen"
    >
      <NavBar isDark={false} />

      <motion.div
        className="flex flex-col items-center px-6 pt-32 pb-20"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p
          style={{
            fontSize: '11px',
            letterSpacing: '4px',
            color: 'rgba(255,255,255,0.7)',
          }}
        >
          CONTACT US
        </p>

        <h1
          style={{
            fontSize: '32px',
            fontWeight: '300',
            color: '#fff',
            textAlign: 'center',
            lineHeight: '1.4',
            maxWidth: '600px',
            marginTop: '16px',
          }}
        >
          We look forward to welcoming you into the Omai world. Our team is here
          to assist with any enquiries.
        </h1>

        <form
          onSubmit={handleSubmit}
          className="w-full mt-12"
          style={{
            maxWidth: '512px',
            fontFamily: 'Jost, sans-serif',
          }}
        >
          <label
            style={{
              fontSize: '11px',
              letterSpacing: '2px',
              color: 'rgba(255,255,255,0.8)',
            }}
          >
            YOUR NAME <span style={{ color: '#e0d6c8' }}>*</span>
          </label>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full bg-transparent outline-none mt-2 mb-6 px-3 py-2"
            style={{
              border: '1px solid rgba(255,255,255,0.4)',
              color: '#fff',
            }}
          />

          <label
            style={{
              fontSize: '11px',
              letterSpacing: '2px',
              color: 'rgba(255,255,255,0.8)',
            }}
          >
            YOUR E-MAIL <span style={{ color: '#e0d6c8' }}>*</span>
          </label>

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full bg-transparent outline-none mt-2 mb-6 px-3 py-2"
            style={{
              border: '1px solid rgba(255,255,255,0.4)',
              color: '#fff',
            }}
          />

          <label
            style={{
              fontSize: '11px',
              letterSpacing: '2px',
              color: 'rgba(255,255,255,0.8)',
            }}
          >
            TOPIC
          </label>

          <input
            type="text"
            name="topic"
            value={form.topic}
            onChange={handleChange}
            className="w-full bg-transparent outline-none mt-2 mb-6 px-3 py-2"
            style={{
              border: '1px solid rgba(255,255,255,0.4)',
              color: '#fff',
            }}
          />

          <label
            style={{
              fontSize: '11px',
              letterSpacing: '2px',
              color: 'rgba(255,255,255,0.8)',
            }}
          >
            MESSAGE
          </label>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="w-full bg-transparent outline-none mt-2 mb-8 px-3 py-2 resize-none"
            style={{
              border: '1px solid rgba(255,255,255,0.4)',
              color: '#fff',
            }}
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="w-full py-3"
            style={{
              backgroundColor: '#ede8e0',
              fontSize: '12px',
              letterSpacing: '2px',
              fontWeight: '600',
              color: '#1f1f1f',
            }}
          >
            SEND MESSAGE
          </motion.button>
        </form>
      </motion.div>

      <Footer />
    </div>
  )
}

export default Contact