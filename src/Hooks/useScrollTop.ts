import { useState, useEffect } from 'react';

function getScrollTop() {
  const { scrollY, scrollX } = window;

  return {
    scrollX,
    scrollY,
  };
}

export default function useScrollTop() {
  const [windowDimensions, setWindowDimensions] = useState(getScrollTop());

  useEffect(() => {
    function handleScroll() {
      setWindowDimensions(getScrollTop());
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return windowDimensions;
}
