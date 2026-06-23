import { useEffect, useRef } from 'react';

const skillGroups = [
  {
    category: 'Languages',
    color: 'var(--primary)',
    bg: 'rgba(168,85,247,0.1)',
    skills: [
      { name: 'C', level: 80 },
      { name: 'Java', level: 78 },
      { name: 'Python', level: 85 },
    ],
  },
  {
    category: 'Web Technologies',
    color: 'var(--secondary)',
    bg: 'rgba(56,189,248,0.1)',
    skills: [
      { name: 'HTML / CSS', level: 90 },
      { name: 'JavaScript', level: 80 },
      { name: 'React', level: 75 },
      { name: 'Bootstrap', level: 82 },
      { name: 'Django', level: 70 },
    ],
  },
  {
    category: 'Database',
    color: 'var(--accent)',
    bg: 'rgba(244,114,182,0.1)',
    skills: [
      { name: 'SQL', level: 78 },
      { name: 'Oracle SQL', level: 72 },
    ],
  },
  {
    category: 'Tools & Platforms',
    color: '#34D399',
    bg: 'rgba(52,211,153,0.1)',
    skills: [
      { name: 'Git', level: 82 },
      { name: 'Streamlit', level: 76 },
      { name: 'Android Studio', level: 65 },
      { name: 'UiPath Studio', level: 60 },
    ],
  },
];

const coreBadges = [
  'Machine Learning', 'Computer Vision', 'Deep Learning', 'Full Stack Development',
  'Android Development', 'Research', 'Data Analysis', 'YOLOv8',
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !animated.current) {
          animated.current = true;
          document.querySelectorAll('.skill-bar-fill').forEach(el => {
            const target = (el as HTMLElement).dataset.level || '0';
            (el as HTMLElement).style.width = target + '%';
          });
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section-pad" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 fade-in">
          <h2 className="text-4xl font-black mb-3">
            <span className="section-title" style={{ color: 'var(--text)' }}>Skills</span>
          </h2>
          <p style={{ color: 'var(--text2)' }}>Technologies I work with</p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
          {skillGroups.map((group, gi) => (
            <div
              key={group.category}
              className={`glass-card p-6 fade-in delay-${(gi + 1) * 100}`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ background: group.color, boxShadow: `0 0 8px ${group.color}` }}
                />
                <h3 className="font-bold text-sm uppercase tracking-wide" style={{ color: group.color }}>
                  {group.category}
                </h3>
              </div>
              <div className="space-y-4">
                {group.skills.map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>{skill.name}</span>
                      <span className="text-xs font-medium" style={{ color: 'var(--text2)' }}>{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full" style={{ background: group.bg }}>
                      <div
                        className="skill-bar-fill"
                        data-level={skill.level}
                        style={{
                          background: `linear-gradient(90deg, ${group.color}, ${group.color}cc)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core Areas */}
        <div className="glass-card p-6 fade-in delay-500">
          <h3 className="text-sm font-bold uppercase tracking-wide mb-4" style={{ color: 'var(--text2)' }}>
            Core Areas
          </h3>
          <div className="flex flex-wrap gap-3">
            {coreBadges.map(badge => (
              <span key={badge} className="tech-tag">{badge}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
