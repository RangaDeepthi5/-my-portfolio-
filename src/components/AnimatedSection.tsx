
import React, { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-up' | 'fade-in' | 'fade-down' | 'slide-in-right' | 'slide-in-left' | 'fade-right' | 'fade-left';
  threshold?: number;
  id?: string;
}

const AnimatedSection = ({
  children,
  className,
  delay = 0,
  animation = 'fade-up',
  threshold = 0.2,
  id,
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const animationStyles = isVisible 
    ? `animate-${animation}` 
    : 'opacity-0';

  const delayStyle = delay > 0 
    ? { animationDelay: `${delay}ms`, style: { animationDelay: `${delay}ms` } } 
    : {};

  return (
    <div 
      ref={sectionRef}
      id={id}
      className={cn(
        isVisible ? animationStyles : 'opacity-0',
        className
      )}
      style={delay > 0 ? { animationDelay: `${delay}ms` } : {}}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
