'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ScrollNavigator = () => {
  const router = useRouter();
  const pages = ['/', '/about', '/skills', '/work', '/contact', '/blog'];

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      const currentPath = window.location.pathname;
      const currentIndex = pages.indexOf(currentPath);
      const direction = e.deltaY > 0 ? 'down' : 'up';

      let nextIndex = currentIndex;

      if (direction === 'down') {
        nextIndex = Math.min(pages.length - 1, currentIndex + 1);
      } else {
        nextIndex = Math.max(0, currentIndex - 1);
      }

      if (nextIndex !== currentIndex) {
        router.push(pages[nextIndex]);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => window.removeEventListener('wheel', handleWheel);
  }, [router]);

  return null;
};

export default ScrollNavigator;
