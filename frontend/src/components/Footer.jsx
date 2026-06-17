import { motion } from "framer-motion";
import img1 from "../assets/Footer.jpg";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-white">
      <img
        src={img1}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 py-24">

        <motion.div
          className="grid md:grid-cols-[1fr_1px_1fr] items-center min-h-[500px] border-b border-white/20 pb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <motion.div
            className="flex flex-col items-center text-center"
            variants={fadeUp}
          >
            <h2 className="text-[32px] md:text-[48px] font-light leading-[1.15] mb-12">
              Begin your journey into
              <br />
              destination living
            </h2>

            <button className="bg-white text-black px-20 py-5 uppercase tracking-[0.2em] text-sm font-semibold hover:bg-neutral-200 transition">
              Make an enquiry
            </button>
          </motion.div>

          <div className="h-80 w-px bg-white/20 mx-auto" />

          <motion.div
            className="flex flex-col items-center text-center"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-[32px] md:text-[48px] font-light leading-[1.15] mb-12">
              Stay connected to the
              <br />
              Omai world
            </h2>

            <form className="flex w-full max-w-md">
              <input
                type="email"
                placeholder="E-mail"
                className="flex-1 border border-white/20 bg-transparent px-6 py-5 outline-none placeholder:text-white/60"
              />

              <button
                type="submit"
                className="bg-white text-black px-8 uppercase tracking-[0.2em] text-sm font-semibold hover:bg-neutral-200 transition"
              >
                Join
              </button>
            </form>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-16 mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: 0.3 }}
        >
          <motion.div variants={fadeUp}>
            <h2 className="text-[48px] font-light tracking-[0.15em] mb-6">
              OMAI
            </h2>

            <p className="text-2xl leading-relaxed text-white/90">
              Destination living,
              <br />
              redefined
            </p>
          </motion.div>

          <motion.div variants={fadeUp} transition={{ delay: 0.1 }}>
            <h3 className="text-3xl font-light text-white/70 mb-6">
              Omai
            </h3>

            <ul className="space-y-4 uppercase tracking-[0.15em] text-sm font-semibold">
              <li><a href="#">About</a></li>
              <li><a href="#">Destinations</a></li>
              <li><a href="#">Experiences</a></li>
              <li><a href="#">Omai Studio</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} transition={{ delay: 0.2 }}>
            <h3 className="text-3xl font-light text-white/70 mb-6">
              Villas
            </h3>

            <ul className="space-y-4 uppercase tracking-[0.15em] text-sm font-semibold">
              <li><a href="#">Omai Zilé</a></li>
              <li><a href="#">Omai Kaya</a></li>
              <li><a href="#">Omai St Barth</a></li>
              <li><a href="#">Omai Grey</a></li>
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} transition={{ delay: 0.3 }}>
            <h3 className="text-3xl font-light text-white/70 mb-6">
              Follow us
            </h3>

            <a
              href="#"
              className="uppercase tracking-[0.15em] text-sm font-semibold"
            >
              Instagram
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-24 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: 0.5 }}
        >
          <span>Cookie Information</span>

          <span>
            Brand identity & website:
            <a href="#" className="ml-1 underline">
              UNT + CO.
            </a>
          </span>
        </motion.div>
      </div>
    </footer>
  );
}