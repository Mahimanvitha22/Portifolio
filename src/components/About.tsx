import { GraduationCap, MapPin, Mail, Phone, BookOpen, Cpu, Globe } from 'lucide-react';

const education = [
  {
    period: '2023 – Present',
    degree: 'B.Tech CSE',
    school: 'VR Siddhartha Engineering College',
    grade: 'CGPA: 8.0/10',
    icon: GraduationCap,
  },
  {
    period: '2021 – 2023',
    degree: 'Intermediate (MPC)',
    school: 'Andhra Loyola College',
    grade: '91.9%',
    icon: BookOpen,
  },
  {
    period: '2020 – 2021',
    degree: 'CBSE Class X',
    school: 'V.S. St. John\'s Higher Secondary School',
    grade: '71.8%',
    icon: BookOpen,
  },
];

const interests = [
  { label: 'Full Stack Dev', icon: Globe },
  { label: 'Machine Learning', icon: Cpu },
  { label: 'Computer Vision', icon: Cpu },
  { label: 'AI Research', icon: BookOpen },
];

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14 fade-in">
          <h2 className="text-4xl font-black mb-3">
            <span className="section-title" style={{ color: 'var(--text)' }}>About Me</span>
          </h2>
          <p style={{ color: 'var(--text2)' }}>Get to know me better</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left — Bio */}
          <div className="glass-card p-8 fade-in">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
              style={{ background: 'rgba(168,85,247,0.15)', color: 'var(--primary)' }}
            >
              <GraduationCap size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text)' }}>
              Juvvanapudi Mahimanvitha
            </h3>
            <p className="leading-relaxed mb-6" style={{ color: 'var(--text2)' }}>
              I&apos;m a 3rd-year Computer Science Engineering undergraduate at VR Siddhartha Engineering College,
              Vijayawada. I have hands-on experience in full-stack web development, machine learning,
              and computer vision, with published research presented at Research Conclave 2026.
            </p>
            <p className="leading-relaxed mb-6" style={{ color: 'var(--text2)' }}>
              Beyond academics, I&apos;m a national-level sportswoman — representing my university in
              South Zone Inter-University Basketball and All India Inter-University Netball tournaments.
            </p>

            <div className="space-y-3">
              {[
                { icon: MapPin, text: 'Vijayawada, Andhra Pradesh' },
                { icon: Mail, text: 'mahimanvitha10@gmail.com' },
                { icon: Phone, text: '+91 7416062005' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <Icon size={16} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  <span className="text-sm" style={{ color: 'var(--text2)' }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Education & Interests */}
          <div className="flex flex-col gap-6">
            {/* Education timeline */}
            <div className="glass-card p-8 fade-in delay-200">
              <h3 className="text-lg font-bold mb-6" style={{ color: 'var(--text)' }}>Education</h3>
              <div className="relative pl-10">
                <div className="timeline-line" />
                <div className="space-y-6">
                  {education.map((edu, i) => (
                    <div key={i} className="relative">
                      <div
                        className="absolute -left-10 top-0 w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ background: 'rgba(168,85,247,0.2)', border: '2px solid var(--primary)' }}
                      >
                        <edu.icon size={14} style={{ color: 'var(--primary)' }} />
                      </div>
                      <div>
                        <span className="text-xs font-medium" style={{ color: 'var(--primary)' }}>{edu.period}</span>
                        <p className="font-semibold" style={{ color: 'var(--text)' }}>{edu.degree}</p>
                        <p className="text-sm" style={{ color: 'var(--text2)' }}>{edu.school}</p>
                        <span
                          className="inline-block mt-1 text-xs px-2 py-0.5 rounded-full font-medium"
                          style={{ background: 'rgba(56,189,248,0.15)', color: 'var(--secondary)' }}
                        >
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="glass-card p-6 fade-in delay-300">
              <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--text)' }}>Interests</h3>
              <div className="grid grid-cols-2 gap-3">
                {interests.map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 p-3 rounded-xl transition-all duration-200 hover:scale-105"
                    style={{ background: 'rgba(168,85,247,0.08)', border: '1px solid rgba(168,85,247,0.15)' }}
                  >
                    <Icon size={16} style={{ color: 'var(--primary)' }} />
                    <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
