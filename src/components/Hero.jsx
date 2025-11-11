import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-[#0b1020] via-[#0a0f1e] to-[#0b1020] text-white">
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-500/40 to-fuchsia-500/30 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-indigo-500/30 to-emerald-500/30 blur-3xl" />
      </div>

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Content Creator • Tech Educator • Full‑Stack Dev
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
            Innovative storytelling that teaches and inspires
          </h1>
          <p className="mt-4 text-white/80 leading-relaxed">
            I craft cinematic learning experiences at the intersection of code and creativity. From interactive narratives to developer education, I bring ideas to life with clarity, playfulness, and technical depth.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="inline-flex items-center justify-center rounded-md bg-white text-gray-900 px-5 py-2.5 font-medium hover:bg-white/90 transition">View Work</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-white/20 px-5 py-2.5 font-medium hover:bg-white/10 transition">Contact</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
