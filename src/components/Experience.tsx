import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const highlights = [
  'Completed a 10-week virtual internship in Python Full Stack Development',
  'Engineered 5+ responsive web modules using HTML, CSS, JavaScript, Django, SQL, and Git',
  'Integrated frontend, backend, and SQL database functionalities in full-stack web applications',
];

const techStack = ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'SQL', 'Git'];

export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 fade-in">
          <h2 className="text-4xl font-black mb-3">
            <span className="section-title" style={{ color: 'var(--text)' }}>Experience</span>
          </h2>
          <p style={{ color: 'var(--text2)' }}>Professional journey</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative pl-14 fade-in">
            {/* Timeline line */}
            <div
              className="absolute left-5 top-0 bottom-0 w-0.5 rounded-full"
              style={{ background: 'linear-gradient(180deg, var(--primary), transparent)' }}
            />

            {/* Node */}
            <div
              className="absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center glow-primary"
              style={{
                background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
              }}
            >
              <Briefcase size={18} color="white" />
            </div>

            <div className="glass-card p-8">
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold" style={{ color: 'var(--text)' }}>
                    Python Full Stack Virtual Intern
                  </h3>
                  <p className="font-semibold mt-1" style={{ color: 'var(--primary)' }}>
                    AICTE EduSkills
                  </p>
                </div>
                <div
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm"
                  style={{
                    background: 'rgba(56,189,248,0.12)',
                    border: '1px solid rgba(56,189,248,0.25)',
                    color: 'var(--secondary)',
                  }}
                >
                  <Calendar size={14} />
                  Mar 2026 · 10 weeks
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-3 mb-6">
                {highlights.map((h, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle2 size={18} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: 1 }} />
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text2)' }}>{h}</p>
                  </div>
                ))}
              </div>

              {/* Tech stack */}
              <div>
                <p className="text-xs uppercase tracking-wide font-semibold mb-3" style={{ color: 'var(--text2)' }}>
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {techStack.map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
