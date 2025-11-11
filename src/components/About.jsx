import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#090e1b] text-white">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold">About</h2>
          <p className="mt-4 text-white/80 leading-relaxed">
            I'm a content creator and tech educator who loves translating complex topics into memorable stories. My work blends production-quality visuals, interactive demos, and hands-on code to make learning feel cinematic and fun.
          </p>
          <p className="mt-3 text-white/80">
            I focus on web technologies, design systems, developer tools, and platform storytelling — crafting narratives that teach through doing.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-sm">
            {['React', 'FastAPI', 'TypeScript', 'MongoDB', 'Design Systems', 'Framer Motion', 'Education'].map(s => (
              <span key={s} className="rounded-md bg-white/10 border border-white/10 px-3 py-1 text-white/80">{s}</span>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-6"
        >
          <div className="aspect-video rounded-xl bg-slate-950/40 border border-white/10" />
          <p className="mt-4 text-sm text-white/70">Highlight reel, talk clips, or behind-the-scenes coming soon.</p>
        </motion.div>
      </div>
    </section>
  );
}
