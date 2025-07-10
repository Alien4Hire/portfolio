'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedLetter from './AnimatedLetter';

// Typing logic hook
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

// Lines with image marker
const LINES = [
  'Hi,',
  "I'm ⊞ason,",
  'Web Developer'
];

const TypingHero = () => {
  const { displayedLines, isFinished } = useTypingEffect(LINES);

  // Cursor blinking after typing ends
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
    <div className="p-4 md:p-8">
      <div className="relative">
        {/* Layout stabilizer */}
        <div className="text-5xl md:text-7xl font-bold leading-tight invisible">
          {LINES.map((line, idx) => (
            <div key={idx} className="whitespace-nowrap">{line.replace('⊞', 'J')}</div>
          ))}
        </div>

        {/* Typing output */}
        <h1
          className="absolute top-0 left-0 text-5xl md:text-7xl font-bold text-white leading-tight"
          style={{ minHeight: '90px' }}
        >
          {displayedLines.map((line, lineIndex) => (
            <div key={lineIndex} className="whitespace-nowrap">
              {line.split('').map((char, charIndex) => {
                if (lineIndex === 1 && char === '⊞') {
                  return (
                    <span
                      key="j-img-wrapper"
                      className="inline-block relative top-[-12px] ml-5.5"
                      style={{ verticalAlign: 'bottom' }}
                    >
                      <Image
                        src="/images/J-logo.png"
                        alt="J"
                        width={60}
                        height={85}
                        className="inline-block"
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

      {/* Subtitle and CTA */}
      <div className={`mt-4 transition-opacity duration-1000 ${isFinished ? 'opacity-100' : 'opacity-0'}`}>
        <p className="mt-6 text-base text-gray-400 tracking-wider">
          Front End Developer / WordPress Expert
        </p>
        <div className="mt-12">
          <Link
            href="/contact"
            className="border-2 border-[#08d665] text-white hover:bg-[#08d665] transition-colors duration-300 px-8 py-3 tracking-widest"
          >
            Contact me!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TypingHero;
