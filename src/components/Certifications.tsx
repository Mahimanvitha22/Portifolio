import { BadgeCheck } from 'lucide-react';

const certs = [
  { name: 'Foundations in R Software', issuer: 'NPTEL', color: 'var(--primary)', bg: 'rgba(168,85,247,0.1)' },
  { name: 'Programming Through Java', issuer: 'NPTEL', color: 'var(--primary)', bg: 'rgba(168,85,247,0.1)' },
  { name: 'Linux Essentials', issuer: 'Cisco', color: 'var(--secondary)', bg: 'rgba(56,189,248,0.1)' },
  { name: 'Introduction to Cybersecurity', issuer: 'Cisco', color: 'var(--secondary)', bg: 'rgba(56,189,248,0.1)' },
  { name: 'Programming in C and Python', issuer: 'Cisco', color: 'var(--secondary)', bg: 'rgba(56,189,248,0.1)' },
  {
    name: 'CCNA: Switching, Routing and Wireless Essentials',
    issuer: 'Cisco',
    color: 'var(--accent)',
    bg: 'rgba(244,114,182,0.1)',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 fade-in">
          <h2 className="text-4xl font-black mb-3">
            <span className="section-title" style={{ color: 'var(--text)' }}>Certifications</span>
          </h2>
          <p style={{ color: 'var(--text2)' }}>Credentials &amp; credentials</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((cert, i) => (
            <div
              key={cert.name}
              className={`glass-card cert-card fade-in delay-${((i % 4) + 1) * 100}`}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: cert.bg, border: `1px solid ${cert.color}33` }}
              >
                <BadgeCheck size={22} style={{ color: cert.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm leading-tight" style={{ color: 'var(--text)' }}>
                  {cert.name}
                </p>
                <span
                  className="inline-block mt-1.5 text-xs px-2.5 py-0.5 rounded-full font-medium"
                  style={{ background: cert.bg, color: cert.color }}
                >
                  {cert.issuer}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
