import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, CheckCircle2, AlertCircle } from 'lucide-react';

type FormState = { name: string; email: string; subject: string; message: string };
type Errors = Partial<FormState>;

const info = [
  { icon: Mail, label: 'Email', value: 'mahimanvitha10@gmail.com', href: 'mailto:mahimanvitha10@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 7416062005', href: 'tel:+917416062005' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/mahimanvitha', href: 'https://linkedin.com' },
  { icon: Github, label: 'GitHub', value: 'github.com/mahimanvitha', href: 'https://github.com' },
];

function validate(form: FormState): Errors {
  const errs: Errors = {};
  if (!form.name.trim()) errs.name = 'Name is required';
  if (!form.email.trim()) errs.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email address';
  if (!form.subject.trim()) errs.subject = 'Subject is required';
  if (!form.message.trim()) errs.message = 'Message is required';
  else if (form.message.trim().length < 10) errs.message = 'Message too short (min 10 chars)';
  return errs;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof Errors]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const fields: { name: keyof FormState; label: string; type?: string; rows?: number }[] = [
    { name: 'name', label: 'Your Name' },
    { name: 'email', label: 'Email Address', type: 'email' },
    { name: 'subject', label: 'Subject' },
    { name: 'message', label: 'Message', rows: 5 },
  ];

  return (
    <section id="contact" className="section-pad">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 fade-in">
          <h2 className="text-4xl font-black mb-3">
            <span className="section-title" style={{ color: 'var(--text)' }}>Contact</span>
          </h2>
          <p style={{ color: 'var(--text2)' }}>Let&apos;s connect and collaborate</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Info */}
          <div className="space-y-5 fade-in">
            <div className="glass-card p-8 mb-2">
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text)' }}>Get in touch</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text2)' }}>
                I&apos;m actively seeking internship and research opportunities. Whether you have a project in mind,
                a collaboration idea, or just want to say hello — my inbox is always open!
              </p>
              <div className="space-y-4">
                {info.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="flex items-center gap-4 p-3 rounded-xl transition-all duration-200 hover:scale-[1.02] group"
                    style={{ background: 'rgba(168,85,247,0.06)', border: '1px solid rgba(168,85,247,0.12)' }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(168,85,247,0.15)' }}
                    >
                      <Icon size={18} style={{ color: 'var(--primary)' }} />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide" style={{ color: 'var(--text2)' }}>{label}</p>
                      <p className="text-sm font-medium group-hover:text-[var(--primary)] transition-colors" style={{ color: 'var(--text)' }}>{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="glass-card p-8 fade-in delay-200">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-10">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(52,211,153,0.15)' }}
                >
                  <CheckCircle2 size={32} color="#34D399" />
                </div>
                <h3 className="text-xl font-bold" style={{ color: 'var(--text)' }}>Message Sent!</h3>
                <p className="text-center text-sm" style={{ color: 'var(--text2)' }}>
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-2 px-6 py-2.5 rounded-xl text-sm font-medium text-white"
                  style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))' }}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text)' }}>Send a Message</h3>
                {fields.map(f => (
                  <div key={f.name}>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--text2)' }}>{f.label}</label>
                    {f.rows ? (
                      <textarea
                        name={f.name}
                        value={form[f.name]}
                        onChange={handleChange}
                        rows={f.rows}
                        placeholder={f.label}
                        className="form-input resize-none"
                      />
                    ) : (
                      <input
                        name={f.name}
                        type={f.type || 'text'}
                        value={form[f.name]}
                        onChange={handleChange}
                        placeholder={f.label}
                        className="form-input"
                      />
                    )}
                    {errors[f.name] && (
                      <div className="flex items-center gap-1.5 mt-1">
                        <AlertCircle size={13} color="#F87171" />
                        <span className="text-xs" style={{ color: '#F87171' }}>{errors[f.name]}</span>
                      </div>
                    )}
                  </div>
                ))}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-[1.02] disabled:opacity-70"
                  style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))', boxShadow: '0 4px 20px rgba(168,85,247,0.35)' }}
                >
                  {sending ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
