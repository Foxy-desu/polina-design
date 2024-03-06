import {useEffect} from "react";

export function useIntersectionObserver(section, setIsVisible, threshold) {
  useEffect(()=> {

    const observer = new IntersectionObserver(
      ([entry])=> {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: threshold,
      }
    );

    if(section.current) {
      observer.observe(section.current);
    }

    return ()=> {
      if(section.current) {
        observer.unobserve(section.current);
      }
    };
  }, []);
}