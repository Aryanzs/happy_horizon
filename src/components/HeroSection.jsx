import React, { useState, useEffect, useRef } from 'react';
import { Search, Sparkles, Crown, ChevronRight, Play, ArrowDown, Users, Star, Target } from 'lucide-react';

// —————————————————————————————————————————————
//  Optimized Parallax hook with requestAnimationFrame
// —————————————————————————————————————————————
const useParallax = () => {
  const [scrollY, setScrollY] = useState(0);
  const rafRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      rafRef.current = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);
  
  return scrollY;
};

// —————————————————————————————————————————————
//  Optimized Floating particles with CSS transforms
// —————————————————————————————————————————————
const FloatingParticles = () => {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    animationDelay: Math.random() * 10,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.4 + 0.1,
    duration: Math.random() * 4 + 6
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute bg-white rounded-full will-change-transform"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animationDelay: `${particle.animationDelay}s`,
            animationDuration: `${particle.duration}s`,
            filter: 'blur(0.5px)'
          }}
        />
      ))}
    </div>
  );
};

// —————————————————————————————————————————————
//  CTA buttons
// —————————————————————————————————————————————
const ctaButtons = [
  {
    id: 'primary',
    text: 'Start Your Transformation',
    icon: Sparkles,
    classes: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-2xl hover:shadow-purple-500/25 border-0',
    iconClasses: 'w-5 h-5'
  },
  {
    id: 'secondary',
    text: 'Watch Success Story',
    icon: Play,
    classes: 'bg-white/10 backdrop-blur-xl text-white border border-white/20 hover:bg-white/20 shadow-xl hover:shadow-2xl',
  }
];

// —————————————————————————————————————————————
//  Social proof
// —————————————————————————————————————————————
const socialProof = [
  {
    id: 'lives',
    number: '5,000+',
    text: 'Lives transformed',
    icon: Users,
    gradient: 'from-purple-500 to-pink-500',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20'
  },
  {
    id: 'rating',
    number: '4.9',
    text: 'Average rating',
    icon: Star,
    gradient: 'from-yellow-500 to-orange-500',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/20'
  },
  {
    id: 'success',
    number: '95%',
    text: 'Success rate',
    icon: Target,
    gradient: 'from-green-500 to-emerald-500',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20'
  }
];

// —————————————————————————————————————————————
//  Transformation pillars
// —————————————————————————————————————————————
const pillars = [
  {
    id: 'leadership',
    title: 'Inner Leadership',
    Icon: Crown,
    desc: 'Master your thoughts, emotions, and actions to lead from within',
    gradient: 'from-purple-500 to-pink-500',
    number: '01'
  },
  {
    id: 'growth',
    title: 'Healing & Growth',
    Icon: Sparkles,
    desc: 'Transform limiting beliefs into empowering truths that serve you',
    gradient: 'from-pink-500 to-yellow-500',
    number: '02'
  },
  {
    id: 'life',
    title: 'Extraordinary Life',
    Icon: ChevronRight,
    desc: 'Step into your power and create the life you truly desire',
    gradient: 'from-yellow-500 to-purple-500',
    number: '03'
  }
];

// —————————————————————————————————————————————
//  HeroSection Component
// —————————————————————————————————————————————
export default function HeroSection() {
  const scrollY = useParallax();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Optimized CSS with better performance */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-15px) rotate(180deg); 
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 30px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translate3d(-50px, 0, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translate3d(50px, 0, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale3d(0.8, 0.8, 1);
          }
          to {
            opacity: 1;
            transform: scale3d(1, 1, 1);
          }
        }
        
        @keyframes pulse {
          0%, 100% { 
            transform: scale3d(1, 1, 1); 
          }
          50% { 
            transform: scale3d(1.05, 1.05, 1); 
          }
        }
        
        @keyframes gentleFloat {
          0%, 100% { 
            transform: translateY(0px); 
          }
          50% { 
            transform: translateY(-10px); 
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-fadeInUp-delay-200 {
          animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards;
        }
        
        .animate-fadeInUp-delay-400 {
          animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s forwards;
        }
        
        .animate-fadeInUp-delay-600 {
          animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s forwards;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-pulse-custom {
          animation: pulse 3s ease-in-out infinite;
        }
        
        .animate-gentle-float {
          animation: gentleFloat 3s ease-in-out infinite;
        }
        
        .animate-particles {
          animation: float linear infinite;
        }
        
        .glass-effect {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        
        .gradient-border {
          position: relative;
          background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
          border: 1px solid rgba(255,255,255,0.2);
        }
        
        .gradient-border::before {
          content: '';
          position: absolute;
          inset: 0;
          padding: 1px;
          background: linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1));
          border-radius: inherit;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: subtract;
        }
        
        .will-change-transform {
          will-change: transform;
        }
        
        .parallax-bg {
          will-change: transform;
        }
        
        /* Smooth scrolling optimization */
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .smooth-transform {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `}</style>

      {/* Background Layers - Optimized */}
      <div className="absolute inset-0 smooth-transform">
        {/* Main background image with optimized parallax */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax-bg"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
            transform: `translate3d(0, ${scrollY * 0.3}px, 0)`,
            filter: 'brightness(0.4)',
            backgroundAttachment: 'fixed'
          }}
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        {/* Secondary layer - mountains/clouds with reduced parallax */}
        <div 
          className="absolute inset-0 opacity-40 parallax-bg"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1464822759844-d150baec4738?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translate3d(0, ${scrollY * 0.2}px, 0)`,
            filter: 'brightness(0.3)'
          }}
        />
        
        {/* Simplified animated mesh gradient overlay */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-10 left-10 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-custom" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-custom" 
               style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-custom" 
               style={{ animationDelay: '2s' }} />
        </div>
      </div>

      {/* Optimized Floating particles */}
      <FloatingParticles />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20 text-center">
        
        {/* Badge */}
        <div className={`mb-8 flex items-center gap-2 bg-white/10 backdrop-blur-xl text-white border border-white/20 text-sm font-medium px-6 py-3 rounded-full shadow-2xl hover:bg-white/20 transition-all duration-300 will-change-transform ${isVisible ? 'animate-fadeInUp opacity-0' : ''}`}>
          <Crown className="w-4 h-4 text-yellow-400 animate-gentle-float" />
          <span>Awaken the Inner CEO™</span>
        </div>

        {/* Main headline */}
        <h1 className={`text-white text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight max-w-6xl ${isVisible ? 'animate-fadeInUp-delay-200 opacity-0' : ''}`}>
          <span className="block mb-2">Step Beyond the</span>
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
              Ordinary
            </span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 rounded-full animate-pulse-custom" />
          </span>
        </h1>

        {/* Subtext */}
        <p className={`text-white/90 text-xl md:text-2xl mb-4 max-w-4xl font-light leading-relaxed ${isVisible ? 'animate-fadeInUp-delay-400 opacity-0' : ''}`}>
          Your transformative journey begins here. Unlock your inner potential, heal from within, and become the CEO of your own life.
        </p>
        <p className={`text-purple-200/80 text-lg mb-12 max-w-3xl ${isVisible ? 'animate-fadeInUp-delay-400 opacity-0' : ''}`}>
          Join thousands who've transformed their mindset and stepped into their power
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 mb-12 w-full max-w-2xl ${isVisible ? 'animate-fadeInUp-delay-600 opacity-0' : ''}`}>
          {ctaButtons.map((btn) => {
            const Icon = btn.icon;
            return (
              <button
                key={btn.id}
                className={`flex-1 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 group hover:scale-105 will-change-transform ${btn.classes}`}
              >
                <Icon className={`w-5 h-5 ${btn.iconClasses || ''} group-hover:scale-110 transition-transform duration-300`} />
                {btn.text}
                {btn.id === 'primary' && <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />}
              </button>
            );
          })}
        </div>

        {/* Enhanced Search/Assessment */}
        <div className={`w-full max-w-2xl mb-12 ${isVisible ? 'animate-fadeInUp-delay-600 opacity-0' : ''}`}>
          <div className="relative flex items-center bg-white/95 backdrop-blur-xl rounded-2xl p-2 shadow-2xl hover:shadow-3xl transition-all duration-300 border border-white/20">
            <div className="flex items-center gap-3 px-4 flex-1">
              <Search className="w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="What area of your life needs transformation?"
                className="flex-1 py-3 bg-transparent focus:outline-none text-gray-800 placeholder-gray-500 text-lg"
              />
            </div>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 group">
              <Sparkles className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Assess Now
            </button>
          </div>
        </div>

        {/* Enhanced Social proof */}
        <div className={`flex flex-col sm:flex-row items-center gap-8 mb-16 ${isVisible ? 'animate-fadeInUp-delay-600 opacity-0' : ''}`}>
          {socialProof.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id} 
                className={`group relative ${item.bg} ${item.border} border backdrop-blur-xl rounded-2xl p-6 text-center hover:scale-105 transition-all duration-500 glass-effect gradient-border min-w-[200px] will-change-transform`}
                style={{ 
                  animationDelay: `${0.6 + index * 0.1}s`,
                  animation: isVisible ? `scaleIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${0.6 + index * 0.1}s forwards` : 'none',
                  opacity: isVisible ? 0 : 1
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-r ${item.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300 animate-pulse-custom`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <div className="relative z-10">
                  <div className="text-white text-3xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                    {item.number}
                  </div>
                  <div className="text-white/80 text-sm font-medium">
                    {item.text}
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
              </div>
            );
          })}
        </div>

        {/* Enhanced Transformation pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
          {pillars.map(({ id, title, Icon, desc, gradient, number }, index) => (
            <div 
              key={id} 
              className={`group relative text-center p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 will-change-transform ${isVisible ? 'animate-fadeInUp-delay-600 opacity-0' : ''}`}
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <div className="absolute top-4 right-4 text-white/20 font-bold text-sm">{number}</div>
              
              <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-gradient-to-r ${gradient} shadow-lg group-hover:shadow-xl transition-all duration-300 animate-gentle-float`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-white font-bold text-xl mb-3">{title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
              
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 rounded-3xl transition-all duration-500" />
            </div>
          ))}
        </div>



      </div>
    </section>
  );
}