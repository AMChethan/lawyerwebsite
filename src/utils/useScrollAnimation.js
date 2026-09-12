import { useEffect } from 'react';

/**
 * Custom hook to trigger fade-in / slide-up animations when elements enter the viewport.
 */
export const useScrollAnimation = () => {
  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Optional: keep observing or unobserve once revealed
          // observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll('.animate-on-scroll');

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};
