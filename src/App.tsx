import { useEffect, useState, useRef } from 'react';
import ThreeBackground from './components/ThreeBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ChevronUp } from 'lucide-react';

function LoadingScreen({ done }: { done: boolean }) {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: '#0F172A',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99999,
        opacity: done ? 0 : 1,
        pointerEvents: done ? 'none' : 'all',
        transition: 'opacity 0.6s ease',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            width: 64,
            height: 64,
            border: '3px solid rgba(168,85,247,0.2)',
            borderTop: '3px solid #A855F7',
            borderRadius: '50%',
            margin: '0 auto 20px',
            animation: 'spin 0.8s linear infinite',
          }}
        />
        <p style={{ color: '#A855F7', fontFamily: 'Inter, sans-serif', fontWeight: 600, letterSpacing: '0.1em' }}>
          LOADING
        </p>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });
  const [loading, setLoading] = useState(true);
  const [scrollPct, setScrollPct] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Loading
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  // Theme persistence
  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.documentElement.className = isDark ? '' : 'light';
  }, [isDark]);

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setScrollPct(pct);
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cursor glow
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  // Intersection observer for fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [loading]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', transition: 'background 0.3s' }}>
      <LoadingScreen done={!loading} />

      {/* Cursor glow */}
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          width: 320,
          height: 320,
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(138,43,226,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1,
          transform: 'translate(-50%, -50%)',
          transition: 'left 0.05s, top 0.05s',
        }}
      />

      {/* Scroll progress bar */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: 3,
          width: `${scrollPct}%`,
          background: 'linear-gradient(90deg, #A855F7, #38BDF8, #F472B6)',
          zIndex: 9999,
          transition: 'width 0.1s',
        }}
      />

      <ThreeBackground isDark={isDark} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar isDark={isDark} toggleTheme={() => setIsDark(d => !d)} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Publications />
          <Certifications />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        title="Back to top"
        style={{
          position: 'fixed',
          bottom: 28,
          right: 28,
          zIndex: 999,
          background: 'linear-gradient(135deg, #A855F7, #38BDF8)',
          border: 'none',
          borderRadius: '50%',
          width: 48,
          height: 48,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: showTop ? 1 : 0,
          transform: showTop ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.3s, transform 0.3s',
          boxShadow: '0 4px 20px rgba(168,85,247,0.4)',
          pointerEvents: showTop ? 'all' : 'none',
        }}
      >
        <ChevronUp size={22} color="white" />
      </button>
    </div>
  );
}
