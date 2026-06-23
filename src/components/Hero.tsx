import { useEffect, useState, useRef } from 'react';
import { Github, Linkedin, Mail, Phone, Download, ArrowRight, ChevronDown } from 'lucide-react';

const TITLES = [
  'Full Stack Developer',
  'Machine Learning Enthusiast',
  'Computer Vision Researcher',
  'CSE Undergraduate',
];

export default function Hero() {
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);
  const timeoutRef = useRef<number>(0);

  useEffect(() => {
    const current = TITLES[titleIdx];
    if (!deleting && charIdx < current.length) {
      timeoutRef.current = window.setTimeout(() => setCharIdx(c => c + 1), 80);
    } else if (!deleting && charIdx === current.length) {
      timeoutRef.current = window.setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIdx > 0) {
      timeoutRef.current = window.setTimeout(() => setCharIdx(c => c - 1), 45);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setTitleIdx(i => (i + 1) % TITLES.length);
    }
    setDisplayed(current.slice(0, charIdx));
    return () => clearTimeout(timeoutRef.current);
  }, [charIdx, deleting, titleIdx]);

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center section-pad">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text side */}
          <div className="flex-1 text-center lg:text-left fade-in">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{
                background: 'rgba(168,85,247,0.12)',
                border: '1px solid rgba(168,85,247,0.3)',
                color: 'var(--primary)',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for Internships &amp; Opportunities
            </div>

            <h1 className="font-black leading-tight mb-2" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--text)' }}>
              Hi, I&apos;m
            </h1>
            <h1
              className="font-black gradient-text leading-tight mb-4"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              Juvvanapudi Mahimanvitha
            </h1>

            <div
              className="font-semibold mb-6"
              style={{ fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', color: 'var(--secondary)', fontFamily: 'JetBrains Mono', minHeight: '2rem' }}
            >
              &gt; {displayed}<span className="typewriter-cursor" />
            </div>

            <p className="text-base leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0" style={{ color: 'var(--text2)' }}>
              B.Tech CSE student at VR Siddhartha Engineering College passionate about
              Full Stack Development, Machine Learning, AI, and Computer Vision research.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <a
                href="mailto:mahimanvitha10@gmail.com"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))', boxShadow: '0 4px 20px rgba(168,85,247,0.4)' }}
              >
                <Mail size={18} />
                Contact Me
              </a>
              <button
                onClick={() => handleNav('#about')}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  background: 'var(--glass)',
                  border: '1px solid var(--glass-border)',
                  color: 'var(--text)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <Download size={18} />
                Download Resume
              </button>
            </div>

            {/* Social links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {[
                { icon: Github, label: 'GitHub', href: 'https://github.com' },
                { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
                { icon: Mail, label: 'Email', href: 'mailto:mahimanvitha10@gmail.com' },
                { icon: Phone, label: 'Phone', href: 'tel:+917416062005' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  title={label}
                  className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    background: 'var(--glass)',
                    border: '1px solid var(--glass-border)',
                    color: 'var(--primary)',
                  }}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Stat chips */}
          <div className="flex-shrink-0 flex flex-wrap gap-4 justify-center fade-in delay-200">
            {[
              { val: '8.0', label: 'CGPA' },
              { val: '3+', label: 'Projects' },
              { val: '6+', label: 'Certs' },
              { val: '10+', label: 'Weeks Intern' },
            ].map(s => (
              <div
                key={s.label}
                className="glass-card px-6 py-5 text-center"
                style={{ minWidth: '90px' }}
              >
                <div className="text-2xl font-black counter-num gradient-text">{s.val}</div>
                <div className="text-xs mt-1" style={{ color: 'var(--text2)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs" style={{ color: 'var(--text2)' }}>Scroll down</span>
          <ChevronDown size={20} style={{ color: 'var(--primary)' }} />
        </div>
      </div>


    </section>
  );
}
