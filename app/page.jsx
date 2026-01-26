'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  BookOpen,
  Users,
  Phone,
  Mail,
  MapPin,
  Target,
  Brain,
  Heart,
  Zap,
  ExternalLink
} from 'lucide-react';

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
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-30"
      />

      {/* Nav */}
      <nav className="fixed w-full bg-slate-950/80 backdrop-blur-xl z-50 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center gap-4">
              <img
                src="LOGO-removebg-preview (1).png"
                alt="After School Coaching Classes in Goa Logo"
                className="h-16 w-16"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
              <div>
                <div className="text-2xl font-black bg-gradient-to-r from-blue-400 via-yellow-400 to-blue-400 bg-clip-text text-transparent">
                  AFTER-SCHOOL
                </div>
                <div className="text-sm text-blue-300 font-semibold">
                  COACHING CLASSES
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="relative pt-32 pb-20 px-4 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full text-center relative z-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="block text-white">
              After School Coaching Classes in Goa
            </span>
            <span className="block bg-gradient-to-r from-blue-400 via-yellow-400 to-blue-400 bg-clip-text text-transparent">
              For Classes IX–XII, NEET & JEE
            </span>
          </h1>

          {/* Local SEO text (hidden visually, readable by Google) */}
          <p className="sr-only">
            After School Goa is a trusted after school coaching center in Valpoi,
            Goa offering coaching for Classes 9, 10, 11, and 12 along with NEET and
            JEE entrance exam preparation.
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative py-24 px-4 bg-slate-900/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Why Choose Our After School Coaching in Goa?
          </h2>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            After School Coaching Programs in Goa
          </h2>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-24 px-4 bg-slate-900/30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Contact After School Coaching Classes in Valpoi, Goa
          </h2>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950/80 border-t border-blue-500/20 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-black bg-gradient-to-r from-blue-400 via-yellow-400 to-blue-400 bg-clip-text text-transparent mb-2">
            AFTER-SCHOOL COACHING CLASSES
          </div>
          <p className="text-gray-400">
            © 2026 After-School Goa. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            After School Coaching Classes in Valpoi, Goa • Classes IX–XII • NEET • JEE
          </p>
        </div>
      </footer>
    </div>
  );
}
