import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';
        const res = await fetch(`${base}/api/projects`);
        const data = await res.json();
        setProjects(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <section id="work" className="relative py-20 bg-[#0b1020] text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold">Featured Work</h2>
          <p className="text-white/70 mt-2">A mix of interactive products, education tools, and playful experiments.</p>
        </div>
        {loading ? (
          <p className="text-white/70">Loading...</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <motion.a
                key={p.id}
                href={p.url || '#'}
                target={p.url ? '_blank' : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
              >
                <div className="aspect-video rounded-lg bg-gradient-to-br from-slate-700 to-slate-900 mb-4" />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-medium text-lg">{p.title}</h3>
                    <p className="text-sm text-white/70 mt-1">{p.description}</p>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags?.map(t => (
                    <span key={t} className="text-xs rounded-md bg-white/10 border border-white/10 px-2 py-1 text-white/80">{t}</span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
