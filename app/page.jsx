'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X, BookOpen, Users, Phone, Mail, MapPin, GraduationCap, Target, Brain, Heart, Zap, ExternalLink } from 'lucide-react';

export default function AfterSchoolGoa() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
   
    const particles = [];
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        const colors = ['33, 150, 243', '255, 193, 7', '255, 235, 59'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        this.color = `rgba(${color}, ${Math.random() * 0.5 + 0.3})`;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < 80; i++) particles.push(new Particle());

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.update();
        p.draw();
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - p.x;
          const dy = particles[j].y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.strokeStyle = `rgba(33, 150, 243, ${0.15 - dist / 700})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });
      requestAnimationFrame(animate);
    }
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white overflow-hidden">
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-30" />

      {/* Nav */}
      <nav className="fixed w-full bg-slate-950/80 backdrop-blur-xl z-50 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center gap-4">
              <img src="LOGO-removebg-preview (1).png" alt="After School Logo" className="h-16 w-16" onError={(e) => e.target.style.display = 'none'} />
              <div>
                <div className="text-2xl font-black bg-gradient-to-r from-blue-400 via-yellow-400 to-blue-400 bg-clip-text text-transparent">AFTER-SCHOOL</div>
                <div className="text-sm text-blue-300 font-semibold">COACHING CLASSES</div>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-blue-400 transition-all font-medium">Home</a>
              <a href="#about" className="text-gray-300 hover:text-blue-400 transition-all font-medium">About</a>
              <a href="#programs" className="text-gray-300 hover:text-blue-400 transition-all font-medium">Programs</a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-all font-medium">Contact</a>
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-300">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-blue-500/20">
            <div className="px-4 py-6 space-y-4">
              <a href="#home" className="block text-gray-300 hover:text-blue-400 transition-all text-lg">Home</a>
              <a href="#about" className="block text-gray-300 hover:text-blue-400 transition-all text-lg">About</a>
              <a href="#programs" className="block text-gray-300 hover:text-blue-400 transition-all text-lg">Programs</a>
              <a href="#contact" className="block text-gray-300 hover:text-blue-400 transition-all text-lg">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="home" className="relative pt-32 pb-20 px-4 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full text-center relative z-10">
          <div className="inline-block mb-6 px-6 py-2 bg-blue-500/20 border border-blue-400/40 rounded-full backdrop-blur-sm">
            <span className="text-blue-300 font-semibold">💡 Established 2020 • Valpoi, Goa</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="block text-white">Unlock Your</span>
            <span className="block bg-gradient-to-r from-blue-400 via-yellow-400 to-blue-400 bg-clip-text text-transparent">Full Potential</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">Expert Coaching for Classes IX - XII | NEET | JEE</p>
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">Where academic excellence meets life skills, leadership, and confidence building</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#contact" className="group px-10 py-5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-bold text-lg shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:scale-110 flex items-center gap-3 justify-center">
              <span>Enroll Now</span>
              <Zap className="group-hover:rotate-12 transition-transform" size={24} />
            </a>
            <a href="#programs" className="px-10 py-5 bg-transparent border-2 border-blue-400 text-blue-300 rounded-full font-bold text-lg hover:bg-blue-400/10 transition-all transform hover:scale-105">View Programs</a>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[{num: '4+', txt: 'Years'}, {num: '1000+', txt: 'Students'}, {num: '8+', txt: 'Subjects'}, {num: '100%', txt: 'Dedication'}].map((stat, i) => (
              <div key={i} className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20 hover:border-blue-400/50 transition-all transform hover:scale-105">
                <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">{stat.num}</div>
                <div className="text-gray-400 mt-2">{stat.txt}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative py-24 px-4 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">Why Choose Us?</h2>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-400 to-yellow-400 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {icon: BookOpen, title: 'Academic Excellence', desc: 'Comprehensive coaching for CBSE, Goa Board, NEET & JEE. Expert guidance in Physics, Chemistry, Biology, and Mathematics.'},
              {icon: Brain, title: 'Critical Thinking', desc: 'Develop problem-solving skills and analytical abilities for real-world challenges and future opportunities.'},
              {icon: Target, title: 'Leadership & Confidence', desc: 'Building strong leaders with enhanced self-confidence, communication and interpersonal skills.'},
              {icon: Users, title: 'Life Skills', desc: 'Practical skill development focusing on self-development, time management, and personal growth.'},
              {icon: Heart, title: 'Personal Attention', desc: 'Dedicated educator providing individual focus to help unlock each student\'s full potential.'},
              {icon: Zap, title: 'Proven Results', desc: 'Track record of success in helping students achieve their academic goals and secure their future.'}
            ].map((item, i) => (
              <div key={i} className="group bg-gradient-to-br from-slate-900/80 to-blue-900/20 p-8 rounded-3xl border border-blue-500/20 hover:border-yellow-400/60 transition-all transform hover:scale-105 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-yellow-400 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform shadow-lg shadow-blue-500/30">
                  <item.icon className="text-white" size={36} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">Our Programs</h2>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-400 to-yellow-400 mx-auto rounded-full mb-4"></div>
            <p className="text-xl text-gray-400">Comprehensive education for every grade and goal</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {title: 'Class IX', desc: 'Foundation building for CBSE, NCERT & Goa Board. Strong fundamentals in all subjects with focus on board exam preparation.', tags: ['NCERT', 'CBSE', 'Goa Board'], roman: 'IX'},
              {title: 'Class X', desc: 'Board exam preparation with comprehensive coverage of all subjects and practical skill development.', tags: ['Board Exams', 'CBSE', 'Goa Board'], roman: 'X'},
              {title: 'Class XI', desc: 'Advanced preparation laying foundation for Class XII and competitive entrance exams.', tags: ['Physics', 'Chemistry', 'Maths', 'Biology'], roman: 'XI'},
              {title: 'Class XII', desc: 'Final year board preparation with NEET & JEE coaching in PCM and PCB streams.', tags: ['NEET', 'JEE', 'Board Exams'], roman: 'XII'}
            ].map((prog, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-900/40 to-slate-900/60 p-10 rounded-3xl border-2 border-blue-500/30 hover:border-yellow-400/70 transition-all transform hover:scale-105 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-yellow-400 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/40">
                    <span className="text-3xl font-black text-white">{prog.roman}</span>
                  </div>
                  <h3 className="text-3xl font-bold">{prog.title}</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{prog.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {prog.tags.map((tag, j) => (
                    <span key={j} className="px-4 py-2 bg-blue-500/20 border border-blue-400/40 rounded-full text-blue-300 text-sm font-medium">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-yellow-900/30 to-blue-900/40 p-10 rounded-3xl border-2 border-yellow-400/40 hover:border-yellow-400/70 transition-all transform hover:scale-105 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-500/40">
                  <svg className="text-white" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c0 1 2 2 6 2s6-1 6-2v-5"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-yellow-300">NEET Coaching</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">Specialized preparation for medical entrance exams with comprehensive coverage of Physics, Chemistry, and Biology for aspiring doctors.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-yellow-500/20 border border-yellow-400/40 rounded-full text-yellow-300 text-sm font-medium">PCB</span>
                <span className="px-4 py-2 bg-yellow-500/20 border border-yellow-400/40 rounded-full text-yellow-300 text-sm font-medium">Medical</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-900/30 to-blue-900/40 p-10 rounded-3xl border-2 border-yellow-400/40 hover:border-yellow-400/70 transition-all transform hover:scale-105 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-500/40">
                  <svg className="text-white" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2"/>
                    <path d="M16 3v4M8 3v4M2 11h20"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-yellow-300">JEE Coaching</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">Strategic preparation for engineering entrance exams with advanced problem-solving in Physics, Chemistry, and Mathematics.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-yellow-500/20 border border-yellow-400/40 rounded-full text-yellow-300 text-sm font-medium">PCM</span>
                <span className="px-4 py-2 bg-yellow-500/20 border border-yellow-400/40 rounded-full text-yellow-300 text-sm font-medium">Engineering</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-24 px-4 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">Get In Touch</h2>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-400 to-yellow-400 mx-auto rounded-full mb-4"></div>
            <p className="text-xl text-gray-400">Visit us or reach out for inquiries</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-yellow-400 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/30">
                  <MapPin className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Location</h3>
                  <p className="text-gray-400 text-lg">Valpoi, Goa 403506</p>
                  <p className="text-blue-300">India</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-yellow-400 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/30">
                  <Phone className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Phone</h3>
                  <p className="text-gray-400 text-lg">+91 87881 92982</p>
                  <p className="text-gray-400 text-lg">+91 92099 47228</p>
                  <p className="text-blue-300">Available Mon-Sat</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-yellow-400 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/30">
                  <Mail className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Email</h3>
                  <p className="text-gray-400 text-lg">afterschoolgoa@gmail.com</p>
                  <p className="text-blue-300">Response within 24hrs</p>
                </div>
              </div>

              <a href="https://docs.google.com/forms/d/e/1FAIpQLSd_aFqtfqGMwL8eC-JOp6f0MkaDflytP-pWxCZ53AOy8dxS0w/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="flex items-start gap-6 group bg-gradient-to-br from-blue-900/40 to-yellow-900/20 p-6 rounded-2xl border-2 border-blue-400/30 hover:border-yellow-400/60 transition-all transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-yellow-400 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/30">
                  <ExternalLink className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    Enquiry Form
                    <ExternalLink size={20} className="text-yellow-400" />
                  </h3>
                  <p className="text-gray-400 text-lg">Fill our online enquiry form</p>
                  <p className="text-yellow-300 font-semibold">Click to open form →</p>
                </div>
              </a>
            </div>

            {/* Google Maps */}
            <div className="h-full min-h-[500px]">
              <div className="bg-slate-900/50 backdrop-blur-sm p-4 rounded-3xl border-2 border-blue-500/30 hover:border-blue-400/50 transition-all h-full shadow-xl">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.0167922323303!2d74.137749!3d15.5372305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfa1491a81bd9d%3A0xba642ce796da10fa!2sJakati's%20After-School%20Coaching%20Classes%20Valpoi!5e0!3m2!1sen!2sin!4v1769179938168!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '1rem', minHeight: '450px' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950/80 border-t border-blue-500/20 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-black bg-gradient-to-r from-blue-400 via-yellow-400 to-blue-400 bg-clip-text text-transparent mb-2">AFTER-SCHOOL COACHING CLASSES</div>
          <p className="text-gray-400">© 2026 After-School Goa. All rights reserved.</p>
          <p className="text-blue-300 mt-2 font-semibold">ESTD: 2020 • IX, X, XI, XII</p>
        </div>
      </footer>
    </div>
  );
}