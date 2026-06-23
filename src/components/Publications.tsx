import { BookOpen, Award, ExternalLink } from 'lucide-react';

export default function Publications() {
  return (
    <section id="publications" className="section-pad">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 fade-in">
          <h2 className="text-4xl font-black mb-3">
            <span className="section-title" style={{ color: 'var(--text)' }}>Publications</span>
          </h2>
          <p style={{ color: 'var(--text2)' }}>Research work and contributions</p>
        </div>

        <div className="max-w-3xl mx-auto fade-in">
          <div className="glass-card p-8 relative overflow-hidden">
            {/* Accent gradient */}
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)',
                transform: 'translate(30%, -30%)',
              }}
            />

            <div className="flex items-start gap-5 relative z-10">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(168,85,247,0.15)', border: '1px solid rgba(168,85,247,0.3)' }}
              >
                <BookOpen size={26} style={{ color: 'var(--primary)' }} />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span
                    className="text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wide"
                    style={{ background: 'rgba(168,85,247,0.15)', color: 'var(--primary)' }}
                  >
                    Research Paper
                  </span>
                  <span
                    className="text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wide"
                    style={{ background: 'rgba(56,189,248,0.12)', color: 'var(--secondary)' }}
                  >
                    Springer LNCS
                  </span>
                </div>

                <h3 className="text-xl font-bold leading-snug mb-3" style={{ color: 'var(--text)' }}>
                  Intelligent Environmental Surveillance using Deep Learning and Satellite Imagery
                </h3>

                <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text2)' }}>
                  This paper presents a deep learning-based approach for automated environmental surveillance
                  using satellite imagery, targeting illegal waste dumping detection and environmental monitoring
                  at scale. The system integrates computer vision techniques with geospatial data analysis.
                </p>

                <div className="flex flex-wrap gap-4 items-center">
                  <div className="flex items-center gap-2">
                    <Award size={16} style={{ color: 'var(--accent)' }} />
                    <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>
                      Presented at Research Conclave 2026
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ExternalLink size={16} style={{ color: 'var(--secondary)' }} />
                    <span className="text-sm" style={{ color: 'var(--text2)' }}>
                      Submitted for Springer LNCS Publication
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {['Deep Learning', 'Computer Vision', 'Satellite Imagery', 'Environmental AI', 'YOLOv8'].map(t => (
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
