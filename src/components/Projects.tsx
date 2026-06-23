import { Github, ExternalLink, Satellite, Users, Ship } from 'lucide-react';

const projects = [
  {
    title: 'Waste Dump Detection System',
    subtitle: 'EPICS Project',
    description:
      'Satellite-image-based web system to detect illegal waste dumping across 10+ monitored locations. Processes environmental data and visualizes dumping areas through an interactive dashboard.',
    tech: ['Python', 'Machine Learning', 'Satellite Imagery', 'Web Interface', 'EPICS'],
    icon: Satellite,
    color: 'var(--primary)',
    bg: 'rgba(168,85,247,0.1)',
    img: 'https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=600',
    highlights: ['10+ monitored locations', '3-member team', 'Environmental monitoring'],
  },
  {
    title: 'TechConnect',
    subtitle: 'College Event Management',
    description:
      'Platform to manage and discover 30+ college events. Implemented registration and notification features using React and Firebase for seamless event management.',
    tech: ['React', 'Firebase', 'JavaScript', 'CSS', 'Bootstrap'],
    icon: Users,
    color: 'var(--secondary)',
    bg: 'rgba(56,189,248,0.1)',
    img: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600',
    highlights: ['30+ events managed', 'Real-time notifications', 'Event registration'],
  },
  {
    title: 'Ship Detection in SAR Imagery',
    subtitle: 'YOLOv8-Nano Model',
    description:
      'Trained a YOLOv8-Nano model for SAR ship detection with 98.6% mAP@50 accuracy. Developed a Streamlit-based application for real-time ship detection and vessel counting on Sentinel-1 SAR imagery.',
    tech: ['YOLOv8', 'Python', 'Streamlit', 'Deep Learning', 'Computer Vision'],
    icon: Ship,
    color: 'var(--accent)',
    bg: 'rgba(244,114,182,0.1)',
    img: 'https://images.pexels.com/photos/1007973/pexels-photo-1007973.jpeg?auto=compress&cs=tinysrgb&w=600',
    highlights: ['98.6% mAP@50', 'Sentinel-1 SAR imagery', 'Real-time detection'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 fade-in">
          <h2 className="text-4xl font-black mb-3">
            <span className="section-title" style={{ color: 'var(--text)' }}>Projects</span>
          </h2>
          <p style={{ color: 'var(--text2)' }}>Things I&apos;ve built</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <div
              key={proj.title}
              className={`glass-card overflow-hidden flex flex-col fade-in delay-${(i + 1) * 100}`}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(15,23,42,0.85))' }}
                />
                {/* Icon badge */}
                <div
                  className="absolute top-3 right-3 w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: proj.bg, border: `1px solid ${proj.color}44` }}
                >
                  <proj.icon size={20} style={{ color: proj.color }} />
                </div>
                <div className="absolute bottom-3 left-4">
                  <span className="text-xs font-medium" style={{ color: proj.color }}>{proj.subtitle}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text)' }}>{proj.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text2)' }}>{proj.description}</p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.highlights.map(h => (
                    <span
                      key={h}
                      className="text-xs px-2 py-1 rounded-lg"
                      style={{ background: proj.bg, color: proj.color, border: `1px solid ${proj.color}33` }}
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {proj.tech.map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105"
                    style={{
                      background: 'var(--glass)',
                      border: '1px solid var(--glass-border)',
                      color: 'var(--text)',
                    }}
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                  <a
                    href="#"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium text-white transition-all duration-200 hover:scale-105"
                    style={{ background: `linear-gradient(135deg, ${proj.color}, ${proj.color}99)` }}
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
