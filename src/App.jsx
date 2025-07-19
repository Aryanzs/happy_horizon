// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ScrollIndicator from './components/ScrollIndicator';
import InteractiveOfferingsCarousel from './components/InteractiveOfferingsCarousel';

function App() {
  return (
    <div>
      <Navbar />

      {/* Hero */}
      <HeroSection />

      {/* Static scroll‑cue between hero and main */}
      <ScrollIndicator />
      <InteractiveOfferingsCarousel/>

      {/* The rest of your home page content */}
      <main className="min-h-screen p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Welcome to Happy Horizons</h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          Scroll down to explore more peaceful destinations…
        </p>
        {/* whatever else you have */}
      </main>
    </div>
  );
}

export default App;
