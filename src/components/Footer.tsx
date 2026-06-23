import { Heart, Code2, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      className="relative py-10 mt-4"
      style={{
        borderTop: '1px solid var(--glass-border)',
        background: 'var(--glass)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Code2 size={20} style={{ color: 'var(--primary)' }} />
            <span className="font-bold gradient-text">Mahimanvitha</span>
          </div>

          {/* Links */}
          <div className="flex gap-4">
            {[
              { icon: Github, href: 'https://github.com', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:mahimanvitha10@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                title={label}
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: 'rgba(168,85,247,0.12)', color: 'var(--primary)' }}
              >
                <Icon size={17} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm flex items-center gap-1.5" style={{ color: 'var(--text2)' }}>
            Built with <Heart size={13} style={{ color: 'var(--accent)' }} fill="currentColor" /> by Mahimanvitha
          </p>
        </div>
      </div>
    </footer>
  );
}
