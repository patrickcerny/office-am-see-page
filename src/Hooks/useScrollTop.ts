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
    function handleResize() {
      setWindowDimensions(getScrollTop());
    }

    window.addEventListener('scroll', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
