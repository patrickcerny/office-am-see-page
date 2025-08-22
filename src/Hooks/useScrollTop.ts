import { useSyncExternalStore } from 'react';

type ScrollPosition = {
  scrollX: number;
  scrollY: number;
};

function getScrollPosition(): ScrollPosition {
  const { scrollX, scrollY } = window;
  return { scrollX, scrollY };
}

const listeners = new Set<() => void>();

function onScroll() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  if (listeners.size === 0) {
    window.addEventListener('scroll', onScroll, { passive: true });
  }
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) {
      window.removeEventListener('scroll', onScroll);
    }
  };
}

export default function useScrollTop(): ScrollPosition {
  return useSyncExternalStore(subscribe, getScrollPosition, getScrollPosition);
}
