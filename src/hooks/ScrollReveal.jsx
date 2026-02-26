import { useEffect } from "react";

export const useScrollReveal = (ref) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("visible");
          observer.unobserve(element);
        }
      },
      { threshold: 0.15 } // porcentaje visible para disparar
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref]);
};