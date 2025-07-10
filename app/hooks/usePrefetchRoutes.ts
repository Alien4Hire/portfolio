'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const usePrefetchRoutes = () => {
  const router = useRouter();

  useEffect(() => {
    const pages = ['/', '/about', '/skills', '/work', '/contact', '/blog'];

    pages.forEach((page) => {
      router.prefetch(page);
    });
  }, [router]);
};

export default usePrefetchRoutes;
