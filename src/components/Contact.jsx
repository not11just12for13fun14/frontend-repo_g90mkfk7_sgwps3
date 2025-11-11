import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);
  const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

  const submit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(`${base}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || 'Failed');
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (e) {
      setStatus('error');
      console.error(e);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-[#090e1b] text-white">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-semibold">Contact</h2>
        <p className="text-white/70 mt-2">Have a project, collaboration, or speaking invite? Let's talk.</p>
        <form onSubmit={submit} className="mt-8 grid gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input required value={form.name} onChange={e=>setForm({ ...form, name: e.target.value })} placeholder="Name" className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400" />
            <input required type="email" value={form.email} onChange={e=>setForm({ ...form, email: e.target.value })} placeholder="Email" className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400" />
          </div>
          <input value={form.subject} onChange={e=>setForm({ ...form, subject: e.target.value })} placeholder="Subject (optional)" className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400" />
          <textarea required rows={6} value={form.message} onChange={e=>setForm({ ...form, message: e.target.value })} placeholder="Message" className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400" />
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center justify-center rounded-md bg-white text-gray-900 px-5 py-2.5 font-medium hover:bg-white/90 transition" disabled={status==='sending'}>
              {status==='sending' ? 'Sending…' : 'Send message'}
            </button>
            {status==='sent' && <span className="text-emerald-400">Sent! I'll reply soon.</span>}
            {status==='error' && <span className="text-rose-400">Something went wrong. Try again.</span>}
          </div>
        </form>
      </div>
    </section>
  );
}
