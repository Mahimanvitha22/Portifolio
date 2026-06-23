import { Trophy, Globe, Dumbbell, Users } from 'lucide-react';

const achievements = [
  {
    rank: '2nd',
    title: 'Innovation Day – EPICS Project',
    org: 'Siddhartha Academy of Higher Education',
    type: 'Academic',
    icon: Trophy,
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.1)',
    rankBg: 'rgba(245,158,11,0.15)',
  },
  {
    rank: 'Part.',
    title: 'One Earth International Hackathon 2025',
    org: 'International Event',
    type: 'Hackathon',
    icon: Globe,
    color: 'var(--secondary)',
    bg: 'rgba(56,189,248,0.1)',
    rankBg: 'rgba(56,189,248,0.15)',
  },
  {
    rank: '1st',
    title: 'Netball – SGFI Under-19 Women',
    org: 'School Games Federation of India',
    type: 'Sports',
    icon: Trophy,
    color: '#34D399',
    bg: 'rgba(52,211,153,0.1)',
    rankBg: 'rgba(52,211,153,0.15)',
  },
  {
    rank: '2nd',
    title: 'Basketball – SGFI Under-19 Women',
    org: 'School Games Federation of India',
    type: 'Sports',
    icon: Dumbbell,
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.1)',
    rankBg: 'rgba(245,158,11,0.15)',
  },
  {
    rank: 'Rep.',
    title: 'South Zone Inter-University Basketball',
    org: 'University Sports Federation',
    type: 'Sports',
    icon: Dumbbell,
    color: 'var(--primary)',
    bg: 'rgba(168,85,247,0.1)',
    rankBg: 'rgba(168,85,247,0.15)',
  },
  {
    rank: 'Rep.',
    title: 'All India Inter-University Netball',
    org: 'University Sports Federation',
    type: 'Sports',
    icon: Users,
    color: 'var(--accent)',
    bg: 'rgba(244,114,182,0.1)',
    rankBg: 'rgba(244,114,182,0.15)',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section-pad">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 fade-in">
          <h2 className="text-4xl font-black mb-3">
            <span className="section-title" style={{ color: 'var(--text)' }}>Achievements</span>
          </h2>
          <p style={{ color: 'var(--text2)' }}>Milestones &amp; honours</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((ach, i) => (
            <div
              key={ach.title}
              className={`glass-card p-6 flex flex-col gap-4 fade-in delay-${((i % 3) + 1) * 100}`}
            >
              <div className="flex items-start gap-4">
                <div
                  className="achievement-rank"
                  style={{ background: ach.rankBg, color: ach.color, border: `1px solid ${ach.color}44` }}
                >
                  {ach.rank}
                </div>
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: ach.bg }}
                >
                  <ach.icon size={20} style={{ color: ach.color }} />
                </div>
              </div>
              <div>
                <h3 className="font-bold leading-snug mb-1" style={{ color: 'var(--text)' }}>
                  {ach.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--text2)' }}>{ach.org}</p>
              </div>
              <span
                className="self-start text-xs px-2.5 py-1 rounded-full font-medium"
                style={{ background: ach.bg, color: ach.color }}
              >
                {ach.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
