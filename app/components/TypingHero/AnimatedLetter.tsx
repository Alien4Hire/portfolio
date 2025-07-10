import React, { useState } from 'react';

// Individual animated letters
const AnimatedLetter = ({
  char,
  isFinished
}: {
  char: string;
  isFinished: boolean;
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  // Trigger animation manually on hover
  const handleMouseEnter = () => {
    if (!isFinished) return;

    setIsAnimating(false);
    // Use next tick to re-trigger animation
    requestAnimationFrame(() => setIsAnimating(true));
  };

  return (
    <span
      onMouseEnter={handleMouseEnter}
      onAnimationEnd={() => setIsAnimating(false)}
      className="inline-block text-white transition-colors duration-300 cursor-default"
      style={{
        animation: isAnimating ? 'rubberBand 1s ease' : undefined,
        color: isAnimating ? '#08fdd8' : undefined,
        willChange: isAnimating ? 'transform' : undefined
      }}
    >
      {char}
    </span>
  );
};

export default AnimatedLetter;
