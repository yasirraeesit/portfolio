"use client"

import { useRef } from 'react';

const GlowCard = ({ children, identifier }) => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);

  const handlePointerMove = (event) => {
    if (!cardRef.current || !containerRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Set active state
    card.style.setProperty('--active', 1);

    // Calculate angle for the glow from the center of the card
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    let angle = (Math.atan2(event.clientY - centerY, event.clientX - centerX) * 180) / Math.PI;
    angle = (angle < 0 ? angle + 360 : angle);
    
    card.style.setProperty('--start', angle + 90);
  };

  const handlePointerLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty('--active', 0);
  };

  return (
    <div 
      ref={containerRef}
      className={`glow-container-${identifier} glow-container h-full`}
      style={{
        '--gap': '32px',
        '--blur': '12px',
        '--spread': '80px',
        '--direction': 'row'
      }}
    >
      <article 
        ref={cardRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className={`glow-card glow-card-${identifier} h-full cursor-pointer border border-[var(--card-border)] transition-all duration-300 relative bg-[var(--card-bg)] text-[var(--text-secondary)] rounded-xl hover:border-transparent w-full`}
      >
        <div className="glows"></div>
        {children}
      </article>
    </div>
  );
};

export default GlowCard;

