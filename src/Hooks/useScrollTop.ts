import { useSyncExternalStore } from 'react';

type ScrollPosition = {
  scrollX: number;
  scrollY: number;
};

let scrollPosition: ScrollPosition = {
  scrollX: window.scrollX,
  scrollY: window.scrollY,
};

function getSnapshot(): ScrollPosition {
  return scrollPosition;
}

const listeners = new Set<() => void>();

function onScroll() {
  scrollPosition = { scrollX: window.scrollX, scrollY: window.scrollY };
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
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}
