import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Code2 } from 'lucide-react';

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#publications', label: 'Publications' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
];

interface Props {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      // Determine active section
      const sections = NAV_LINKS.map(l => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 navbar-blur"
      style={{ transition: 'all 0.3s', boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={e => { e.preventDefault(); handleNav('#home'); }}
            className="flex items-center gap-2 font-bold text-lg gradient-text"
          >
            <Code2 size={22} style={{ color: 'var(--primary)' }} />
            <span style={{ color: 'var(--text)', fontFamily: 'JetBrains Mono' }}>
              Mahimanvitha
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={e => { e.preventDefault(); handleNav(link.href); }}
                className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200"
                style={{
                  color: active === link.href.slice(1) ? 'var(--primary)' : 'var(--text2)',
                  background: active === link.href.slice(1) ? 'rgba(168,85,247,0.12)' : 'transparent',
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="toggle-track"
              title={isDark ? 'Light mode' : 'Dark mode'}
            >
              <div className="toggle-thumb flex items-center justify-center">
                {isDark
                  ? <Sun size={10} color="#fff" />
                  : <Moon size={10} color="#fff" />
                }
              </div>
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg transition-colors"
              style={{ color: 'var(--text)', background: 'var(--glass)' }}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu open lg:hidden px-4 pb-4 gap-1">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={e => { e.preventDefault(); handleNav(link.href); }}
              className="px-4 py-2.5 rounded-lg text-sm font-medium"
              style={{
                color: active === link.href.slice(1) ? 'var(--primary)' : 'var(--text)',
                background: active === link.href.slice(1) ? 'rgba(168,85,247,0.12)' : 'transparent',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
