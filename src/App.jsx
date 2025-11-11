import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Projects />
        <About />
        <Contact />
        <footer className="py-10 text-center text-white/60 bg-[#070b16]">
          © {new Date().getFullYear()} Creator.dev — Built with love, code, and good storytelling.
        </footer>
      </main>
    </div>
  )
}

export default App
