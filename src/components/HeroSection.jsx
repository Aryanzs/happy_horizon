// src/components/HeroSection.jsx
import React from 'react';
import { Search, Sparkles, Crown, ChevronRight } from 'lucide-react';

// —————————————————————————————————————————————
//  Background blobs & floating dots
// —————————————————————————————————————————————
const blobs = [
  { pos: 'top-20 left-20', size: 'w-96 h-96', color: 'bg-purple-400', delay: 'delay-0' },
  { pos: 'top-40 right-20', size: 'w-80 h-80', color: 'bg-pink-400',   delay: 'delay-1000' },
  { pos: 'bottom-20 left-1/2', size: 'w-72 h-72', color: 'bg-indigo-400', delay: 'delay-500' },
];

const dots = [
  { pos: 'top-1/4 left-1/4',   size: 'w-3 h-3', color: 'bg-yellow-300/60', delay: 'delay-300' },
  { pos: 'top-1/3 right-1/3',  size: 'w-2 h-2', color: 'bg-purple-300/80', delay: 'delay-700' },
  { pos: 'bottom-1/4 left-1/3',size: 'w-4 h-4', color: 'bg-pink-300/50',   delay: 'delay-1000' },
  { pos: 'top-1/2 right-1/4',  size: 'w-1 h-1', color: 'bg-white/70',      delay: 'delay-500' },
];

// —————————————————————————————————————————————
//  CTA buttons
// —————————————————————————————————————————————
const ctaButtons = [
  {
    id: 'primary',
    text: 'Start Your Transformation',
    icon: Sparkles,
    classes: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-2xl hover:shadow-3xl',
    iconClasses: 'w-5 h-5'
  },
  {
    id: 'secondary',
    text: 'Free Discovery Call',
    classes: 'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 shadow-xl hover:shadow-2xl',
  }
];

// —————————————————————————————————————————————
//  Social proof & pillars
// —————————————————————————————————————————————
const socialProof = [
  {
    id: 'lives',
    avatars: ['purple','pink','yellow'],
    text: '5,000+ transformed lives'
  },
  {
    id: 'stars',
    stars: 5,
    text: 'Life‑changing results'
  },
  {
    id: 'method',
    icon: '✓',
    text: 'Proven methodology',
    color: 'green'
  }
];

const pillars = [
  {
    id: 'leadership',
    title: 'Inner Leadership',
    Icon: Crown,
    desc: 'Master your thoughts, emotions, and actions',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'growth',
    title: 'Healing & Growth',
    Icon: Sparkles,
    desc: 'Transform limiting beliefs into empowering truths',
    gradient: 'from-pink-500 to-yellow-500'
  },
  {
    id: 'life',
    title: 'Extraordinary Life',
    Icon: ChevronRight,
    desc: 'Step into your power and create lasting change',
    gradient: 'from-yellow-500 to-purple-500'
  }
];

// —————————————————————————————————————————————
//  HeroSection Component
// —————————————————————————————————————————————
export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
      
      {/* Background blobs */}
      <div className="absolute inset-0 opacity-30">
        {blobs.map(({ pos, size, color, delay }) => (
          <div
            key={pos}
            className={`absolute ${pos} ${size} ${color} rounded-full mix-blend-multiply filter blur-3xl animate-pulse ${delay}`}
          />
        ))}
      </div>

      {/* Floating dots */}
      <div className="absolute inset-0 pointer-events-none">
        {dots.map(({ pos, size, color, delay }) => (
          <div
            key={pos}
            className={`absolute ${pos} ${size} ${color} rounded-full animate-pulse ${delay}`}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20 text-center">
        
        {/* Badge */}
        <div className="mb-8 flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md text-white border border-white/20 text-sm font-medium px-6 py-3 rounded-full shadow-lg hover:from-purple-600/30 hover:to-pink-600/30 transition-all duration-300">
          <Crown className="w-4 h-4 text-yellow-400" />
          <span>Awaken the Inner CEO™</span>
        </div>

        {/* Headline */}
        <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight max-w-6xl">
          <span className="block mb-2">Step Beyond the</span>
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
              Ordinary
            </span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 rounded-full animate-pulse" />
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-white/80 text-xl md:text-2xl mb-4 max-w-4xl font-light">
          Your transformative journey begins here. Unlock your inner potential, heal from within, and become the CEO of your own life.
        </p>
        <p className="text-purple-200/70 text-lg mb-12 max-w-3xl">
          Join thousands who've transformed their mindset and stepped into their power
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full max-w-2xl">
          {ctaButtons.map((btn) => {
            const Icon = btn.icon;
            return (
              <button
                key={btn.id}
                className={`flex-1 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 group ${btn.classes}`}
              >
                {Icon && <Icon className={`w-5 h-5 ${btn.iconClasses || ''} group-hover:scale-110`} />}
                {btn.text}
                {btn.id === 'primary' && <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              </button>
            );
          })}
        </div>

        {/* Search / Assessment */}
        <div className="w-full max-w-2xl mb-8">
          <div className="relative flex items-center bg-white/95 backdrop-blur-md rounded-2xl p-2 shadow-2xl hover:shadow-3xl transition-all duration-300 border border-white/20">
            <div className="flex items-center gap-3 px-4 flex-1">
              <Search className="w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="What area of your life needs transformation?"
                className="flex-1 py-3 bg-transparent focus:outline-none text-gray-800 placeholder-gray-500 text-lg"
              />
            </div>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 group">
              <Sparkles className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Assess Now
            </button>
          </div>
        </div>

        {/* Social proof */}
        <div className="flex flex-col sm:flex-row items-center gap-8 text-white/60 text-sm">
          {socialProof.map((item) => (
            <div key={item.id} className="flex items-center gap-2">
              {item.avatars && (
                <div className="flex -space-x-2">
                  {item.avatars.map((clr) => (
                    <div
                      key={clr}
                      className={`w-8 h-8 bg-gradient-to-r from-${clr}-400 to-${clr}-300 rounded-full border-2 border-white`}
                    />
                  ))}
                </div>
              )}
              {item.stars && (
                <div className="flex">
                  {[...Array(item.stars)].map((_, i) => (
                    <Sparkles key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              )}
              {item.icon && (
                <span className={`px-4 py-2 bg-${item.color}-500/20 rounded-full border border-${item.color}-400/30`}>
                  {item.icon}
                </span>
              )}
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Transformation pillars */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
          {pillars.map(({ id, title, Icon, desc, gradient }) => (
            <div key={id} className="text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-r ${gradient}`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
              <p className="text-white/60 text-sm">{desc}</p>
            </div>
          ))}
        </div>

      </div>


    </section>
  );
}
