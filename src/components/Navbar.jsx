import { Menu, Github, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-white/10 backdrop-blur supports-[backdrop-filter]:bg-white/10 text-white px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-500" />
            <span className="font-semibold">Creator.dev</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-1.5 text-sm hover:bg-white/10">
              <Mail size={16} /> <span className="hidden sm:inline">Say hi</span>
            </a>
            <a href="https://github.com" target="_blank" className="inline-flex items-center gap-2 rounded-md bg-white text-gray-900 px-3 py-1.5 text-sm hover:bg-white/90">
              <Github size={16} /> <span className="hidden sm:inline">GitHub</span>
            </a>
            <button className="md:hidden p-2 rounded-md hover:bg-white/10">
              <Menu />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
