import React from 'react';
import { ChevronDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <header className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content animate-fade-in">
        <h2 className="hero-subtitle text-gold">A Journey of Friendship</h2>
        <h1 className="hero-title">Happy Birthday<br/><span className="hero-name">Aadhya Matur</span></h1>
        <p className="hero-text">Celebrating a beautiful year of memories, from First PU to where we are today.</p>
        
        <a href="#chapter-one" className="scroll-indicator">
          <span className="scroll-text">Begin the Story</span>
          <ChevronDown size={28} className="scroll-icon" />
        </a>
      </div>
    </header>
  );
};

export default Hero;
