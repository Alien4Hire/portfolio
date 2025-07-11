'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedLetter from './AnimatedLetter';

// Typing logic hook (no changes needed)
const useTypingEffect = (lines: string[], speed = 50) => {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (isFinished) return;

    const currentLine = lines[lineIndex];
    const timeout = setTimeout(() => {
      if (charIndex < currentLine.length) {
        setCharIndex(prev => prev + 1);
      } else if (lineIndex < lines.length - 1) {
        setLineIndex(prev => prev + 1);
        setCharIndex(0);
      } else {
        setIsFinished(true);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, lineIndex, lines, speed, isFinished]);

  const displayedLines = lines.map((line, i) =>
    i < lineIndex
      ? line
      : i === lineIndex
      ? line.substring(0, charIndex)
      : ''
  );

  return { displayedLines, isFinished };
};

// Lines with image marker (no changes needed)
const LINES = [
  'Hi,',
  "I'm ⊞ason,",
  'Web Developer'
];

const TypingHero = () => {
  const { displayedLines, isFinished } = useTypingEffect(LINES);

  // Cursor blinking after typing ends (no changes needed)
  const [, setBlinkCount] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (!isFinished) return;

    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
      setBlinkCount(prev => {
        if (prev >= 6) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 400);

    return () => clearInterval(interval);
  }, [isFinished]);

  return (
    <div className="w-full max-w-lg md:max-w-none mx-auto md:mx-0">
      <div className="relative">
        {/*
          minHeight is critical for preventing layout shift.
          text-5xl for mobile is restored, sm:text-6xl for intermediate, md:text-7xl for desktop.
          Explicit line-height `leading-[1.2]` helps stabilize.
        */}
        <div
          className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight leading-[1.2] invisible"
          style={{ minHeight: '160px' }} // Keep this min-height as it's proven to prevent shifts
        >
          {LINES.map((line, idx) => (
            <div key={idx} className="whitespace-nowrap">{line.replace('⊞', 'J')}</div>
          ))}
        </div>

        {/* Typing output: Apply same font sizes and line-height as invisible div */}
        <h1
          // *** CRITICAL FIX: Adjust 'top' position for mobile screens ***
          // Default top-0 for mobile, md:top-0 for desktop (no change needed for desktop here)
          className="absolute top-0 left-0 text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight leading-[1.2]"
          style={{ minHeight: '160px' }} // Match stabilizer height for smooth animation
        >
          {displayedLines.map((line, lineIndex) => (
            <div key={lineIndex} className="whitespace-nowrap">
              {line.split('').map((char, charIndex) => {
                if (lineIndex === 1 && char === '⊞') {
                  return (
                    <span
                      key="j-img-wrapper"
                      // *** CRITICAL FIX: Re-calibrated positioning for J-logo on mobile ***
                      // top-[-15px] ml-3 for very small mobile, sm:top-[-20px] sm:ml-4 for slightly larger mobile,
                      // md:top-[-12px] md:ml-5.5 to restore desktop values.
                      className="inline-block relative top-[-15px] ml-3 sm:top-[-20px] sm:ml-4 md:top-[-12px] md:ml-5.5"
                      style={{ verticalAlign: 'baseline' }} // Using baseline for better text alignment
                    >
                      <Image
                        src="/images/J-logo.png"
                        alt="J"
                        width={50} // Base width for mobile
                        height={70} // Base height for mobile
                        className="inline-block md:w-[60px] md:h-[85px]" // Desktop override for J-logo size
                        priority
                      />
                    </span>
                  );
                }

                return (
                  <AnimatedLetter key={`char-${lineIndex}-${charIndex}`} char={char} isFinished={isFinished} />
                );
              })}
              {lineIndex === displayedLines.filter(Boolean).length - 1 && (
                <span className={`transition-opacity duration-200 ${showCursor ? 'opacity-75' : 'opacity-0'}`}>
                  _
                </span>
              )}
            </div>
          ))}
        </h1>
      </div>

      {/* Subtitle and CTA: Adjusted margins and font sizes for mobile */}
      <div className={`mt-4 sm:mt-6 transition-opacity duration-1000 ${isFinished ? 'opacity-100' : 'opacity-0'}`}>
        <p className="mt-4 text-sm sm:text-base text-gray-400 tracking-wider">
          Front End Developer / WordPress Expert
        </p>
        <div className="mt-8 sm:mt-10">
          <Link
            href="/contact"
            className="border-2 border-[#08d665] text-white hover:bg-[#08d665] transition-colors duration-300 px-6 py-2.5 tracking-widest text-sm sm:px-8 sm:py-3 sm:text-base"
          >
            Contact me!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TypingHero;