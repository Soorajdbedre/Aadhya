import React, { useState } from 'react';
import './Chapter.css';

const MemoryCard = ({ photoUrl, title, hiddenText, index }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div 
      className={`memory-card animate-fade-in`} 
      style={{ animationDelay: `${index * 0.2}s` }}
      onClick={() => setIsRevealed(!isRevealed)}
    >
      <div className={`memory-card-inner ${isRevealed ? 'revealed' : ''}`}>
        <div className="memory-card-front" style={{ backgroundImage: `url(${photoUrl})` }}>
          <div className="memory-card-gradient">
            <h4 className="memory-card-title">{title}</h4>
            <p className="memory-card-hint">Click to reveal</p>
          </div>
        </div>
        <div className="memory-card-back">
          <p className="memory-hidden-text">{hiddenText}</p>
        </div>
      </div>
    </div>
  );
};

const Chapter = ({ id, title, subtitle, description, memories, align = "left" }) => {
  return (
    <section id={id} className={`section chapter-section align-${align}`}>
      <div className="container">
        <div className="chapter-header animate-fade-in">
          <h3 className="chapter-subtitle text-terracotta">{subtitle}</h3>
          <h2 className="chapter-title">{title}</h2>
          <p className="chapter-description">{description}</p>
        </div>
        
        <div className="memories-grid">
          {memories.map((memory, index) => (
            <MemoryCard 
              key={index} 
              index={index}
              photoUrl={memory.photoUrl} 
              title={memory.title} 
              hiddenText={memory.hiddenText} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chapter;
