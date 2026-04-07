'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X, ExternalLink, CheckCircle, Play, Smartphone, ArrowRight, Lightbulb, Stethoscope, Settings, GraduationCap, MapPin, BookOpen, BrainCircuit, Target, Handshake, Heart, Zap, Star, Rocket, FileText, Phone, Mail } from 'lucide-react';

/* ─────────────────────────────────────────────
   BRAND TOKENS  (extracted from logo)
   Primary Blue  : #29ABE2
   Deep Navy     : #0A2A4A
   Accent Yellow : #FFC107
   Accent Orange : #F7941D
   White         : #FFFFFF
   Light BG      : #F0F8FF
───────────────────────────────────────────── */

export default function AfterSchoolGoa() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('classes');
  const heroRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Premium Interactive Constellation Canvas */
  useEffect(() => {
    const canvas = heroRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let mouse = { x: null, y: null };
    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onMouseLeave = () => { mouse.x = null; mouse.y = null; };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];

        // Mouse repulsion
        if (mouse.x !== null) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            p.x += dx * 0.05;
            p.y += dy * 0.05;
          }
        }

        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = '#29ABE2';
        ctx.globalAlpha = 0.4;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          let p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = '#29ABE2';
            ctx.globalAlpha = 1 - dist / 100;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'Why Us' },
    { href: '#programs', label: 'Courses' },
    { href: '#app', label: 'App' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#F0F8FF', color: '#0A2A4A', overflowX: 'hidden' }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body { scroll-behavior: smooth; overflow-x: hidden; width: 100%; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #F0F8FF; }
        ::-webkit-scrollbar-thumb { background: #29ABE2; border-radius: 3px; }
        .serif { font-family: 'Playfair Display', serif; }

        .nav-a {
          color: #0A2A4A; font-weight: 600; font-size: 0.92rem;
          text-decoration: none; position: relative; padding-bottom: 4px;
          transition: color 0.2s;
        }
        .nav-a::after {
          content: ''; position: absolute; bottom: 0; left: 0;
          width: 0; height: 2px; background: #29ABE2;
          border-radius: 2px; transition: width 0.3s ease;
        }
        .nav-a:hover { color: #29ABE2; }
        .nav-a:hover::after { width: 100%; }

        .btn-blue {
          background: #29ABE2; color: #fff; border: none; cursor: pointer;
          padding: 13px 30px; border-radius: 50px; font-weight: 700;
          font-size: 0.95rem; font-family: 'DM Sans', sans-serif;
          text-decoration: none; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.25s ease;
          box-shadow: 0 6px 20px rgba(41,171,226,0.35);
        }
        .btn-blue:hover { background: #1a96cc; transform: translateY(-2px); box-shadow: 0 12px 30px rgba(41,171,226,0.45); }

        .btn-outline {
          background: transparent; color: #29ABE2;
          border: 2px solid #29ABE2; cursor: pointer;
          padding: 12px 30px; border-radius: 50px; font-weight: 700;
          font-size: 0.95rem; font-family: 'DM Sans', sans-serif;
          text-decoration: none; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.25s ease;
        }
        .btn-outline:hover { background: #29ABE2; color: #fff; transform: translateY(-2px); }

        .card {
          background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
          border-radius: 20px; padding: 28px;
          border: 1px solid rgba(214, 238, 250, 0.8);
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease, border-color 0.4s ease;
          box-shadow: 0 4px 16px rgba(41,171,226,0.04);
        }
        .card:hover { 
          transform: translateY(-8px) scale(1.02); 
          box-shadow: 0 22px 48px rgba(41,171,226,0.18), 0 0 0 2px rgba(41,171,226,0.15); 
          border-color: #29ABE2; 
        }

        .badge {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(41,171,226,0.10); border: 1.5px solid rgba(41,171,226,0.25);
          color: #1a96cc; font-size: 0.78rem; font-weight: 700;
          padding: 5px 14px; border-radius: 50px;
          text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 16px;
        }

        .tag {
          display: inline-block; padding: 5px 14px;
          background: rgba(41,171,226,0.08); border: 1.5px solid rgba(41,171,226,0.2);
          color: #1a96cc; border-radius: 50px; font-size: 0.78rem; font-weight: 700;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.9rem, 3.5vw, 2.6rem);
          font-weight: 700; color: #0A2A4A; line-height: 1.2; margin-bottom: 14px;
        }

        .divider {
          width: 52px; height: 4px;
          background: linear-gradient(90deg, #29ABE2, #FFC107);
          border-radius: 2px; margin-bottom: 20px;
        }

        .icon-box {
          width: 54px; height: 54px; border-radius: 15px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.55rem; margin-bottom: 18px;
        }

        .stat-pill {
          background: #fff; border: 1.5px solid #D6EEFA; border-radius: 16px;
          padding: 18px 12px; text-align: center;
          box-shadow: 0 2px 10px rgba(41,171,226,0.06);
          transition: all 0.3s;
        }
        .stat-pill:hover { transform: translateY(-4px); box-shadow: 0 10px 28px rgba(41,171,226,0.14); }

        .prog-card {
          background: #fff; border-radius: 22px; padding: 30px;
          border: 2px solid #D6EEFA;
          box-shadow: 0 2px 14px rgba(41,171,226,0.07);
          transition: all 0.3s;
        }
        .prog-card:hover { border-color: #29ABE2; transform: translateY(-6px); box-shadow: 0 20px 48px rgba(41,171,226,0.15); }

        .testi-card {
          background: #fff; border-radius: 20px; padding: 28px;
          border: 1.5px solid #D6EEFA;
          box-shadow: 0 2px 12px rgba(41,171,226,0.06);
          transition: all 0.3s; position: relative;
        }
        .testi-card:hover { transform: translateY(-4px); box-shadow: 0 14px 36px rgba(41,171,226,0.13); }
        .testi-card::before {
          content: '"'; position: absolute; top: 14px; right: 20px;
          font-family: 'Playfair Display', serif; font-size: 5rem; line-height: 1;
          color: rgba(41,171,226,0.09); font-weight: 700; pointer-events: none;
        }

        .contact-row {
          display: flex; align-items: flex-start; gap: 16px;
          padding: 20px; background: #fff; border-radius: 18px;
          border: 1.5px solid #D6EEFA; text-decoration: none; color: inherit;
          transition: all 0.3s; box-shadow: 0 2px 10px rgba(41,171,226,0.05);
        }
        .contact-row:hover { border-color: #29ABE2; box-shadow: 0 8px 24px rgba(41,171,226,0.12); transform: translateX(4px); }

        @keyframes floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        .float   { animation: floatY 4s ease-in-out infinite; }
        .float-2 { animation: floatY 4s ease-in-out 1.3s infinite; }
        .float-3 { animation: floatY 4s ease-in-out 2.6s infinite; }

        @keyframes fadeUp { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }
        .fade-up  { animation: fadeUp 0.65s ease both; }
        .d1 { animation-delay: 0.12s; }
        .d2 { animation-delay: 0.25s; }
        .d3 { animation-delay: 0.38s; }

        .highlight { position: relative; display: inline-block; color: #29ABE2; }
        .highlight::after {
          content: ''; position: absolute; left: 0; bottom: -3px;
          width: 100%; height: 4px;
          background: linear-gradient(90deg, #FFC107, #F7941D);
          border-radius: 2px;
        }

        .enroll-banner {
          background: linear-gradient(135deg, #0A2A4A 0%, #0e3d6b 100%);
          border-radius: 28px; padding: 56px 40px; text-align: center;
          position: relative; overflow: hidden;
        }
        .enroll-banner::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(circle at 80% 20%, rgba(41,171,226,0.18) 0%, transparent 60%),
                      radial-gradient(circle at 10% 80%, rgba(255,193,7,0.10) 0%, transparent 50%);
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .desk { display: none !important; }
          .mob-menu-btn { display: block !important; }
          .hero-grid, .app-grid, .contact-grid { grid-template-columns: 1fr !important; }
          .hero-right, .app-right { display: none !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 10px !important; }
        }
        @media (min-width: 769px) {
          .mob-menu-btn { display: none !important; }
          .mob-drawer { display: none !important; }
        }
      `}</style>

      {/* ══ NAV ══ */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? 'rgba(240,248,255,0.97)' : 'rgba(240,248,255,0.5)',
        backdropFilter: 'blur(18px)',
        borderBottom: scrolled ? '1.5px solid #D6EEFA' : '1.5px solid transparent',
        transition: 'all 0.3s ease', padding: '0 5%',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70 }}>
          <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <img src="LOGO-removebg-preview (1).png" alt="Logo" style={{ height: 44, width: 44, objectFit: 'contain' }} onError={e => e.target.style.display = 'none'} />
            <div>
              <div style={{ fontFamily: 'Playfair Display,serif', fontSize: '1.1rem', fontWeight: 700, color: '#0A2A4A', lineHeight: 1.1 }}>After-School</div>
              <div style={{ fontSize: '0.62rem', fontWeight: 700, color: '#29ABE2', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Coaching Classes · Goa</div>
            </div>
          </a>

          <div className="desk" style={{ display: 'flex', alignItems: 'center', gap: 34 }}>
            {navLinks.map(l => <a key={l.href} href={l.href} className="nav-a">{l.label}</a>)}
            <a href="#contact" className="btn-blue" style={{ padding: '9px 20px', fontSize: '0.87rem' }}>Enroll Now →</a>
          </div>

          <button className="mob-menu-btn" onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#0A2A4A' }}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="mob-drawer" style={{ background: '#fff', borderTop: '1.5px solid #D6EEFA', padding: '14px 5% 22px' }}>
            {navLinks.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                style={{ display: 'block', padding: '12px 0', color: '#0A2A4A', fontWeight: 600, textDecoration: 'none', borderBottom: '1px solid #EFF8FF', fontSize: '1rem' }}>
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn-blue" style={{ marginTop: 18, justifyContent: 'center', width: '100%' }}>Enroll Now →</a>
          </div>
        )}
      </nav>

      {/* ══ HERO ══ */}
      <section id="home" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '96px 5% 64px', overflow: 'hidden', background: '#F0F8FF' }}>
        <canvas ref={heroRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '8%', right: '3%', width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(41,171,226,0.11) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '4%', left: '-2%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,193,7,0.09) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center', position: 'relative', zIndex: 2 }} className="hero-grid">

          {/* LEFT */}
          <div>
            <div className="badge fade-up">🌟 Est. 2022 · Valpoi, Goa</div>
            <h1 className="fade-up d1" style={{ fontFamily: 'Playfair Display,serif', fontSize: 'clamp(2.2rem, 4.2vw, 3.5rem)', fontWeight: 800, color: '#0A2A4A', lineHeight: 1.15, marginBottom: 20 }}>
              Where Students{' '}
              <span className="highlight">Shine</span>
              {' '}& Futures{' '}
              <span style={{ color: '#F7941D' }}>Get Built</span>
            </h1>
            <p className="fade-up d2" style={{ fontSize: '1.05rem', color: '#4A7A9B', lineHeight: 1.8, marginBottom: 34, maxWidth: 450 }}>
              Expert coaching for Classes IX–XII, NEET & JEE in Goa. We blend academic excellence with life skills, confidence, and critical thinking.
            </p>
            <div className="fade-up d3" style={{ display: 'flex', gap: 13, flexWrap: 'wrap', marginBottom: 48 }}>
              <a href="#contact" className="btn-blue">Enroll Now <Rocket size={16} /></a>
              <a href="#programs" className="btn-outline">Explore Courses</a>
            </div>
            <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12 }}>
              {[{ num: '4+', label: 'Years' }, { num: '1000+', label: 'Students' }, { num: '8+', label: 'Subjects' }, { num: '100%', label: 'Dedication' }].map((s, i) => (
                <div key={i} className="stat-pill">
                  <div style={{ fontFamily: 'Playfair Display,serif', fontSize: '1.65rem', fontWeight: 700, color: '#29ABE2' }}>{s.num}</div>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#94B8CB', marginTop: 2, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-right" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', height: 450 }}>
            <div className="float" style={{ width: 270, height: 270, borderRadius: '50%', background: 'linear-gradient(135deg, #29ABE2 0%, #1a7fb0 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 32px 80px rgba(41,171,226,0.28)' }}>
              <Lightbulb size={120} color="#fff" strokeWidth={1.5} />
            </div>
            {[
              { cls: 'float-2', top: '6%', right: '2%', bg: '#fff', color: '#0A2A4A', border: '2px solid #D6EEFA', shadow: '0 8px 24px rgba(41,171,226,0.16)', icon: <Stethoscope size={16} />, text: 'NEET Coaching' },
              { cls: 'float-3', bottom: '16%', left: '0%', bg: '#fff', color: '#0A2A4A', border: '2px solid #D6EEFA', shadow: '0 8px 24px rgba(41,171,226,0.16)', icon: <Settings size={16} />, text: 'JEE Coaching' },
              { cls: 'float', top: '40%', right: '-6%', bg: 'linear-gradient(135deg,#FFC107,#F7941D)', color: '#fff', border: 'none', shadow: '0 8px 24px rgba(247,148,29,0.30)', icon: <GraduationCap size={16} />, text: 'Class IX–XII' },
              { cls: '', bottom: '4%', right: '8%', bg: '#0A2A4A', color: '#fff', border: 'none', shadow: '0 8px 24px rgba(10,42,74,0.22)', icon: <MapPin size={16} />, text: 'Valpoi, Goa' },
            ].map((b, i) => (
              <div key={i} className={b.cls} style={{ position: 'absolute', top: b.top, right: b.right, bottom: b.bottom, left: b.left, background: b.bg, color: b.color, border: b.border, borderRadius: 16, padding: '12px 16px', boxShadow: b.shadow, fontWeight: 700, fontSize: '0.86rem', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: 6 }}>
                {b.icon} {b.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE US ══ */}
      <section id="about" style={{ padding: '86px 5%', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="badge" style={{ margin: '0 auto 16px' }}>Why AfterSchool?</div>
            <div className="divider" style={{ margin: '0 auto 18px' }} />
            <h2 className="section-title" style={{ textAlign: 'center' }}>More than just coaching</h2>
            <p style={{ color: '#4A7A9B', fontSize: '0.98rem', maxWidth: 500, margin: '0 auto', lineHeight: 1.75 }}>We build students who are confident, curious, and ready for anything — not just exam-ready.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(285px,1fr))', gap: 20 }}>
            {[
              { icon: <BookOpen size={24} color="#29ABE2" />, title: 'Academic Excellence', desc: 'Comprehensive coaching for CBSE, Goa Board, NEET & JEE with expert guidance in Physics, Chemistry, Biology, and Maths.', accent: '#29ABE2' },
              { icon: <BrainCircuit size={24} color="#FFC107" />, title: 'Critical Thinking', desc: 'We develop problem-solving and analytical abilities for board exams, competitive tests, and real-world challenges.', accent: '#FFC107' },
              { icon: <Target size={24} color="#F7941D" />, title: 'Leadership & Confidence', desc: 'Building self-confidence, communication, and interpersonal skills that last a lifetime — not just until exam day.', accent: '#F7941D' },
              { icon: <Handshake size={24} color="#29ABE2" />, title: 'Life Skills', desc: 'Practical skill development in time management, self-discipline, and personal growth that every student needs.', accent: '#29ABE2' },
              { icon: <Heart size={24} color="#FFC107" />, title: 'Personal Attention', desc: 'Individual focus on every student. We genuinely care about your progress and help unlock your full potential.', accent: '#FFC107' },
              { icon: <Zap size={24} color="#F7941D" />, title: 'Proven Results', desc: 'A strong track record of students who cracked NEET, JEE, and board exams with flying colours since 2022.', accent: '#F7941D' },
            ].map((item, i) => (
              <div key={i} className="card">
                <div className="icon-box" style={{ background: `${item.accent}14`, border: `1.5px solid ${item.accent}28` }}>{item.icon}</div>
                <h3 style={{ fontFamily: 'Playfair Display,serif', fontSize: '1.08rem', fontWeight: 700, color: '#0A2A4A', marginBottom: 9 }}>{item.title}</h3>
                <p style={{ color: '#4A7A9B', lineHeight: 1.72, fontSize: '0.91rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ COURSES ══ */}
      <section id="programs" style={{ padding: '88px 5%', background: '#fff' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>

          {/* Header */}
          <div style={{ marginBottom: 48 }}>
            <div className="section-line" />
            <span className="section-label">What We Offer</span>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
              <h2 className="serif" style={{ fontSize: 'clamp(1.8rem,3.5vw,2.5rem)', fontWeight: 700, color: '#0A2A4A', maxWidth: 480 }}>
                Courses Built for Every Goal
              </h2>
              <p style={{ color: '#64748B', fontSize: '.93rem', maxWidth: 360, lineHeight: 1.72 }}>
                From building strong foundations to cracking the toughest entrances — a program for every student.
              </p>
            </div>
          </div>

          {/* ── TABS ── */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 36, background: '#F1F5F9', borderRadius: 10, padding: 6, width: 'fit-content' }}>
            {['Classes', 'Entrance Exams'].map((tab, i) => (
              <button key={i} onClick={() => setActiveTab(i === 0 ? 'classes' : 'entrance')}
                style={{
                  padding: '10px 28px', borderRadius: 7, border: 'none', cursor: 'pointer',
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '.9rem',
                  transition: 'all .22s',
                  background: activeTab === (i === 0 ? 'classes' : 'entrance') ? '#fff' : 'transparent',
                  color: activeTab === (i === 0 ? 'classes' : 'entrance') ? '#0A2A4A' : '#64748B',
                  boxShadow: activeTab === (i === 0 ? 'classes' : 'entrance') ? '0 2px 8px rgba(0,0,0,.10)' : 'none',
                }}>
                {tab}
              </button>
            ))}
          </div>

          {/* ── CLASS CARDS ── */}
          {activeTab === 'classes' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
              {[
                { roman: 'IX', title: 'Class IX', label: 'Secondary', color: '#1565A8', light: '#EFF4FF', tags: ['Goa Board', 'NCERT', 'CBSE', 'NEP'], desc: 'Begin secondary-level learning with structured subject coaching and exam readiness.' },
                { roman: 'X', title: 'Class X', label: 'Board Prep', color: '#0A2A4A', light: '#EEF2FF', tags: ['Goa Board', 'CBSE', 'NEP'], desc: 'Focused board exam preparation with mock tests, full coverage, and personalised attention.' },
                { roman: 'XI', title: 'Class XI', label: 'Senior', color: '#7C3AED', light: '#F5F3FF', tags: ['Physics', 'Chemistry', 'Biology', 'Maths'], desc: 'Transition to senior secondary with stream specialisation and competitive exam groundwork.' },
                { roman: 'XII', title: 'Class XII', label: 'Final Year', color: '#DC2626', light: '#FFF5F5', tags: ['Physics', 'Chemistry', 'Biology', 'Maths', 'JEE', 'NEET'], desc: 'Intensive final year coaching for boards with simultaneous NEET & JEE preparation.' },
              ].map((p, i) => (
                <div key={i} style={{
                  background: '#fff', border: '1.5px solid #E2EBF4', borderRadius: 14,
                  padding: '26px 22px', transition: 'all .25s', position: 'relative', overflow: 'hidden',
                }}
                  onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,.09)'; e.currentTarget.style.borderColor = p.color; }}
                  onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#E2EBF4'; }}>

                  {/* Left color strip */}
                  <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 4, background: p.color, borderRadius: '14px 0 0 14px' }} />

                  {/* Top row */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 14, paddingLeft: 10 }}>
                    <div>
                      <div style={{ fontFamily: 'Playfair Display,serif', fontSize: '1.25rem', fontWeight: 800, color: '#0A2A4A', lineHeight: 1.1 }}>
                        {p.title}
                      </div>
                      <div style={{ fontSize: '.72rem', fontWeight: 700, color: p.color, textTransform: 'uppercase', letterSpacing: '.07em', marginTop: 4 }}>
                        {p.label}
                      </div>
                    </div>
                    {/* Roman numeral pill */}
                    <div style={{ background: p.light, border: `1.5px solid ${p.color}33`, borderRadius: 8, padding: '6px 12px', fontFamily: 'Playfair Display,serif', fontWeight: 800, fontSize: '1rem', color: p.color, lineHeight: 1 }}>
                      {p.roman}
                    </div>
                  </div>

                  {/* Desc */}
                  <p style={{ color: '#64748B', fontSize: '.87rem', lineHeight: 1.72, marginBottom: 18, paddingLeft: 10 }}>{p.desc}</p>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, paddingLeft: 10 }}>
                    {p.tags.map((t, j) => (
                      <span key={j} style={{
                        padding: '4px 11px', borderRadius: 6,
                        background: p.light, border: `1px solid ${p.color}33`,
                        fontSize: '.73rem', fontWeight: 700, color: p.color,
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── ENTRANCE CARDS ── */}
          {activeTab === 'entrance' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
              {[
                {
                  id: 'NEET',
                  title: 'NEET Coaching',
                  subtitle: 'Medical Entrance Exam',
                  color: '#DC2626',
                  light: '#FFF5F5',
                  border: '#FECACA',
                  gradient: 'linear-gradient(135deg, #DC2626, #B91C1C)',
                  desc: 'Specialized preparation for medical entrances with deep, concept-driven coverage of Physics, Chemistry & Biology. Our NEET batch follows a structured timetable with weekly tests, doubt sessions, and exam strategy coaching to maximize your score.',
                  tags: ['Physics', 'Chemistry', 'Biology', 'PCB', 'Medical'],
                  highlights: ['Weekly full syllabus tests', 'Dedicated doubt clearing sessions', 'NCERT-focused approach', 'Previous year paper analysis'],
                },
                {
                  id: 'JEE',
                  title: 'JEE Coaching',
                  subtitle: 'Engineering Entrance Exam',
                  color: '#2563EB',
                  light: '#EFF6FF',
                  border: '#BFDBFE',
                  gradient: 'linear-gradient(135deg, #2563EB, #1D4ED8)',
                  desc: 'Strategic JEE preparation with advanced problem-solving techniques across PCM. We focus on building strong conceptual understanding alongside speed and accuracy — the two pillars of cracking JEE Mains and Advanced.',
                  tags: ['Physics', 'Chemistry', 'Maths', 'PCM', 'Engineering'],
                  highlights: ['Concept-first teaching approach', 'JEE Mains & Advanced coverage', 'Speed & accuracy drills', 'Topic-wise mock tests'],
                },
              ].map((p, i) => (
                <div key={i} style={{
                  background: '#fff', border: `2px solid ${p.border}`,
                  borderRadius: 16, overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,.06)',
                  transition: 'all .28s',
                }}
                  onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = `0 24px 56px ${p.color}22`; }}
                  onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,.06)'; }}>

                  {/* Gradient header */}
                  <div style={{ background: p.gradient, padding: '28px 28px 24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                      <div style={{ background: 'rgba(255,255,255,.18)', border: '1.5px solid rgba(255,255,255,.28)', borderRadius: 8, padding: '6px 14px', fontFamily: 'Playfair Display,serif', fontWeight: 800, fontSize: '1.1rem', color: '#fff', letterSpacing: '.04em' }}>
                        {p.id}
                      </div>
                      <div style={{ fontSize: '.75rem', fontWeight: 700, color: 'rgba(255,255,255,.75)', textTransform: 'uppercase', letterSpacing: '.08em' }}>
                        {p.subtitle}
                      </div>
                    </div>
                    <div style={{ fontFamily: 'Playfair Display,serif', fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}>
                      {p.title}
                    </div>
                  </div>

                  {/* Body */}
                  <div style={{ padding: '24px 28px' }}>
                    <p style={{ color: '#475569', fontSize: '.9rem', lineHeight: 1.78, marginBottom: 22 }}>{p.desc}</p>

                    {/* Highlights */}
                    <div style={{ marginBottom: 22 }}>
                      {p.highlights.map((h, j) => (
                        <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 9 }}>
                          <div style={{ width: 20, height: 20, borderRadius: '50%', background: p.light, border: `1.5px solid ${p.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <div style={{ width: 7, height: 7, borderRadius: '50%', background: p.color }} />
                          </div>
                          <span style={{ fontSize: '.86rem', color: '#334155', fontWeight: 500 }}>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                      {p.tags.map((t, j) => (
                        <span key={j} style={{
                          padding: '5px 13px', borderRadius: 6,
                          background: p.light, border: `1px solid ${p.border}`,
                          fontSize: '.75rem', fontWeight: 700, color: p.color,
                        }}>{t}</span>
                      ))}
                    </div>

                    {/* CTA */}
                    <a href="#contact" style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                      marginTop: 22, padding: '12px', borderRadius: 8,
                      background: p.gradient, color: '#fff',
                      fontWeight: 700, fontSize: '.9rem', textDecoration: 'none',
                      transition: 'opacity .2s',
                    }}
                      onMouseOver={e => e.currentTarget.style.opacity = '.88'}
                      onMouseOut={e => e.currentTarget.style.opacity = '1'}>
                      Enroll in {p.title} <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section style={{ padding: '86px 5%', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="badge" style={{ margin: '0 auto 16px' }}>Student Stories</div>
            <div className="divider" style={{ margin: '0 auto 18px' }} />
            <h2 className="section-title" style={{ textAlign: 'center' }}>What our students say</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(285px,1fr))', gap: 20 }}>
            {[
              { name: 'Priya S.', grade: 'Class XII · NEET Aspirant', quote: 'AfterSchool completely changed how I approach Biology and Chemistry. The personal attention I received here made all the difference for my NEET prep.' },
              { name: 'Rohan N.', grade: 'Class XI · JEE Aspirant', quote: 'Concepts are explained so clearly here. I used to fear Physics, but now it\'s my favourite subject! The teachers are always available and genuinely helpful.' },
              { name: 'Sneha K.', grade: 'Class X · Board Exams', quote: 'I scored 94% in boards thanks to AfterSchool. The study materials, practice tests, and caring teachers made me feel so prepared and confident.' },
            ].map((t, i) => (
              <div key={i} className="testi-card">
                <div style={{ display: 'flex', gap: 2, marginBottom: 13 }}>{[1, 2, 3, 4, 5].map(s => <Star key={s} fill="#FFC107" color="#FFC107" size={16} />)}</div>
                <p style={{ color: '#4A7A9B', lineHeight: 1.78, fontSize: '0.92rem', marginBottom: 20, fontStyle: 'italic' }}>{t.quote}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg,#29ABE2,#1a7fb0)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '0.95rem' }}>{t.name[0]}</div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#0A2A4A', fontSize: '0.9rem' }}>{t.name}</div>
                    <div style={{ fontSize: '0.76rem', color: '#29ABE2', fontWeight: 600 }}>{t.grade}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FACULTY ══ */}
      <section style={{ padding: '88px 5%', background: '#F8FAFC' }}>
        <div style={{ maxWidth: 950, margin: '0 auto' }}>

          <div style={{ marginBottom: 46, textAlign: 'center' }}>
            <div className="section-line" style={{ margin: '0 auto 14px' }} />
            <span className="section-label">Our Team</span>
            <h2 className="serif" style={{ fontSize: 'clamp(1.8rem,3.5vw,2.5rem)', fontWeight: 700, color: '#0A2A4A' }}>
              Learn from the Best
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 20 }}>
            {[
              { image: '/faculty/aamir.jpeg', name: 'Mr. Aamir Jakati', role: 'Founder & CEO', qualification: 'B.Sc-B.Ed, M.Sc (Zoology)', subjects: 'Chemistry & Biology', experience: '10+ Years' },
              { image: '/faculty/ayesh.jpeg', name: 'Mr. Ayesh Jamadar', role: 'Head of Operations', qualification: 'I.T Engineer', subjects: 'Technical Head', experience: '5+ Years' },
              { image: '/faculty/siddhant.jpg', name: 'Mr. Siddhant Salgaonkar', role: 'Branch Head (Sanquelim)', qualification: 'B.Sc-B.Ed, M.Sc (Mathematics)', subjects: 'Chemistry & Maths', experience: '6+ Years' },
              { image: '/faculty/aaisha.jpg', name: 'Mrs. Aaisha Jakati', role: 'Branch Head (Valpoi)', qualification: 'B.Sc-B.Ed (Physics)', subjects: 'Physics & Maths', experience: '6+ Years' },
              { image: '/faculty/faiza.jpg', name: 'Miss. Faiza Khan', role: 'Junior Tutor', qualification: 'B.Sc (Physics)', subjects: 'Science & Maths', experience: '1+ Years' },
            ].map((f, i) => (
              <div key={i}
                style={{ background: '#fff', borderRadius: 12, padding: '32px 22px', textAlign: 'center', border: '1.5px solid #E2EBF4', transition: 'all .25s' }}
                onMouseOver={e => { e.currentTarget.style.boxShadow = '0 12px 32px rgba(41,171,226,.12)'; e.currentTarget.style.borderColor = '#29ABE2'; e.currentTarget.style.transform = 'translateY(-5px)'; }}
                onMouseOut={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#E2EBF4'; e.currentTarget.style.transform = 'translateY(0)'; }}>

                {/* Photo — initials fallback if image missing */}
                <div style={{ width: 100, height: 100, borderRadius: '50%', margin: '0 auto 16px', overflow: 'hidden', border: '3px solid #E2EBF4', boxShadow: '0 8px 20px rgba(41,171,226,.20)', background: 'linear-gradient(135deg,#29ABE2,#1565A8)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img
                    src={f.image}
                    alt={f.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    onError={e => {
                      e.target.style.display = 'none';
                      const initials = f.name.split(' ').slice(1, 3).map(n => n[0]).join('');
                      e.target.parentElement.innerHTML = `<span style="color:#fff;font-weight:800;font-size:1.3rem;font-family:'Playfair Display',serif">${initials}</span>`;
                    }}
                  />
                </div>

                {/* Name */}
                <div style={{ fontFamily: 'Playfair Display,serif', fontSize: '1.05rem', fontWeight: 700, color: '#0A2A4A', marginBottom: 4 }}>
                  {f.name}
                </div>

                {/* Role */}
                <div style={{ fontSize: '.75rem', fontWeight: 700, color: '#29ABE2', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '.06em' }}>
                  {f.role}
                </div>

                {/* Qualification */}
                <div style={{ fontSize: '.85rem', color: '#64748B', marginBottom: 4 }}>
                  {f.qualification}
                </div>

                {/* Subjects */}
                <div style={{ fontSize: '.85rem', color: '#64748B', marginBottom: 4 }}>
                  {f.subjects}
                </div>

                {/* Experience */}
                <div style={{ fontSize: '.78rem', color: '#94A3B8', fontWeight: 600 }}>
                  {f.experience}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ APP ══ */}
      <section id="app" style={{ padding: '86px 5%', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg,#F0F8FF,#E8F4FD)', borderRadius: 28, padding: '56px 44px', border: '2px solid #D6EEFA', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }} className="app-grid">
            <div>
              <div className="badge"><Smartphone size={13} />Learn Anywhere</div>
              <h2 className="section-title" style={{ marginBottom: 13 }}>
                Study smarter with the{' '}
                <span style={{ color: '#29ABE2' }}>AfterSchool App</span>
              </h2>
              <p style={{ color: '#4A7A9B', lineHeight: 1.78, fontSize: '0.96rem', marginBottom: 26 }}>
                Access notes, assignments, announcements, and resources right from your phone. Stay connected beyond the classroom.
              </p>
              <ul style={{ listStyle: 'none', marginBottom: 32 }}>
                {['Study materials & lecture notes', 'Important announcements & updates', 'Easy communication with teachers', 'Built for Classes IX–XII, NEET & JEE'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 10, color: '#0A2A4A', fontSize: '0.91rem', fontWeight: 600 }}>
                    <CheckCircle size={17} color="#29ABE2" strokeWidth={2.5} />{item}
                  </li>
                ))}
              </ul>
              <a href="https://play.google.com/store/apps/details?id=co.marshal.lwakl" target="_blank" rel="noopener noreferrer" className="btn-blue">
                <Play size={17} />Download on Play Store
              </a>
            </div>
            <div className="app-right" style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="float" style={{ position: 'relative' }}>
                <div style={{ width: 230, height: 440, background: '#0A2A4A', borderRadius: 34, border: '4px solid #29ABE2', boxShadow: '0 32px 76px rgba(41,171,226,0.22), 0 0 0 8px rgba(41,171,226,0.07)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ height: 26, background: '#071B33', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <div style={{ width: 60, height: 4, background: '#29ABE2', borderRadius: 2, opacity: 0.4 }} />
                  </div>
                  <img src="/app-screenshot.png" alt="App" style={{ flex: 1, width: '100%', objectFit: 'cover' }}
                    onError={e => { e.target.style.display = 'none'; e.target.parentElement.style.cssText += 'align-items:center;justify-content:center;'; e.target.insertAdjacentHTML('afterend', '<div style="text-align:center;padding:28px;color:#fff"><div style="display:flex;justify-content:center;margin-bottom:10px"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg></div><div style="font-weight:700;font-size:0.9rem">AfterSchool App</div></div>'); }} />
                </div>
                <div className="float-3" style={{ position: 'absolute', top: -14, right: -22, background: '#FFC107', color: '#0A2A4A', borderRadius: 13, padding: '7px 13px', fontWeight: 800, fontSize: '0.78rem', boxShadow: '0 6px 16px rgba(255,193,7,0.35)', display: 'flex', alignItems: 'center', gap: 5 }}>
                  <CheckCircle size={14} /> Free Download
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ══ */}
      <section style={{ padding: '52px 5%', background: '#F0F8FF' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <div className="enroll-banner">
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ marginBottom: 16 }}><Rocket size={40} color="#fff" strokeWidth={1.5} /></div>
              <h2 style={{ fontFamily: 'Playfair Display,serif', fontSize: 'clamp(1.7rem,3.2vw,2.3rem)', fontWeight: 700, color: '#fff', marginBottom: 12 }}>
                Ready to unlock your potential?
              </h2>
              <p style={{ color: '#A8D8F0', fontSize: '0.97rem', marginBottom: 30, maxWidth: 400, margin: '0 auto 30px' }}>
                Join 1000+ students already learning smarter at AfterSchool Goa.
              </p>
              <div style={{ display: 'flex', gap: 13, justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="#contact" className="btn-blue" style={{ background: '#FFC107', color: '#0A2A4A', boxShadow: '0 8px 22px rgba(255,193,7,0.40)' }}>Enroll Today →</a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSd_aFqtfqGMwL8eC-JOp6f0MkaDflytP-pWxCZ53AOy8dxS0w/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.35)', color: '#fff' }}>
                  <FileText size={18} /> Enquiry Form
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CONTACT ══ */}
      <section id="contact" style={{ padding: '86px 5%', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="badge" style={{ margin: '0 auto 16px' }}>Get In Touch</div>
            <div className="divider" style={{ margin: '0 auto 18px' }} />
            <h2 className="section-title" style={{ textAlign: 'center' }}>We'd love to hear from you</h2>
            <p style={{ color: '#4A7A9B', fontSize: '0.98rem', textAlign: 'center' }}>Visit us, call us, or fill out our enquiry form — always here to help!</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 32, alignItems: 'start' }} className="contact-grid">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { icon: <MapPin size={22} color="#29ABE2" />, label: 'Location', lines: ['Valpoi, Goa 403506', 'India'] },
                { icon: <Phone size={22} color="#29ABE2" />, label: 'Phone', lines: ['+91 87881 92982', '+91 92099 47228', 'Mon – Sat'] },
                { icon: <Mail size={22} color="#29ABE2" />, label: 'Email', lines: ['afterschoolgoa@gmail.com'] },
              ].map((c, i) => (
                <div key={i} className="contact-row">
                  <div style={{ width: 46, height: 46, borderRadius: 13, background: 'rgba(41,171,226,0.09)', border: '1.5px solid rgba(41,171,226,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{c.icon}</div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#0A2A4A', fontSize: '0.88rem', marginBottom: 3 }}>{c.label}</div>
                    {c.lines.map((l, j) => <div key={j} style={{ color: '#4A7A9B', fontSize: '0.86rem' }}>{l}</div>)}
                  </div>
                </div>
              ))}
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSd_aFqtfqGMwL8eC-JOp6f0MkaDflytP-pWxCZ53AOy8dxS0w/viewform?usp=header" target="_blank" rel="noopener noreferrer"
                className="contact-row" style={{ background: 'linear-gradient(135deg,#29ABE2,#1a7fb0)', borderColor: '#29ABE2', cursor: 'pointer' }}>
                <div style={{ width: 46, height: 46, borderRadius: 13, background: 'rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><FileText size={22} color="#fff" /></div>
                <div>
                  <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.88rem', marginBottom: 2, display: 'flex', alignItems: 'center', gap: 5 }}>Enquiry Form <ExternalLink size={12} /></div>
                  <div style={{ color: 'rgba(255,255,255,0.72)', fontSize: '0.82rem' }}>Click to fill our online form →</div>
                </div>
              </a>
            </div>

            <div style={{ background: '#F0F8FF', borderRadius: 22, padding: 10, border: '1.5px solid #D6EEFA', boxShadow: '0 4px 18px rgba(41,171,226,0.07)' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.0167922323303!2d74.137749!3d15.5372305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfa1491a81bd9d%3A0xba642ce796da10fa!2sJakati's%20After-School%20Coaching%20Classes%20Valpoi!5e0!3m2!1sen!2sin!4v1769179938168!5m2!1sen!2sin"
                width="100%" height="440"
                style={{ border: 0, borderRadius: 14, display: 'block' }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{ background: '#0A2A4A', color: '#A8D8F0', padding: '44px 5% 28px', textAlign: 'center' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 11, marginBottom: 10 }}>
            <img src="LOGO-removebg-preview (1).png" alt="Logo" style={{ height: 38, width: 38, objectFit: 'contain', filter: 'brightness(0) invert(1)' }} onError={e => e.target.style.display = 'none'} />
            <div style={{ fontFamily: 'Playfair Display,serif', fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>After-School Coaching Classes</div>
          </div>
          <p style={{ color: '#29ABE2', fontWeight: 700, fontSize: '0.79rem', marginBottom: 14, letterSpacing: '0.07em' }}>ESTD: 2022 · VALPOI, GOA · IX · X · XI · XII · NEET · JEE</p>
          <div style={{ height: 1, background: 'rgba(41,171,226,0.18)', maxWidth: 360, margin: '0 auto 14px' }} />
          <p style={{ fontSize: '0.8rem', color: '#4A7A9B' }}>© 2026 AfterSchool Goa. All rights reserved.</p>
          <p style={{ fontSize: '0.76rem', color: '#2D5A7A', marginTop: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>Made with <Heart size={12} color="#EF4444" fill="#EF4444" /> by @inovex_solutions</p>
        </div>
      </footer>

    </div>
  );
}