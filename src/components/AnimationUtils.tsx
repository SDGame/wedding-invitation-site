import React, { useEffect, useRef, ReactNode } from 'react';

// Компонент для анимации при прокрутке
interface FadeInProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  threshold?: number;
  className?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  direction = 'up',
  delay = 0,
  threshold = 0.1,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (ref.current) {
              ref.current.classList.add('visible');
            }
          }
        });
      },
      { threshold }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);
  
  const getAnimationClass = () => {
    switch (direction) {
      case 'up':
        return 'transform translate-y-16';
      case 'down':
        return 'transform -translate-y-16';
      case 'left':
        return 'transform translate-x-16';
      case 'right':
        return 'transform -translate-x-16';
      default:
        return 'transform translate-y-16';
    }
  };
  
  const delayStyle = delay ? { transitionDelay: `${delay}ms` } : {};
  
  return (
    <div 
      ref={ref} 
      className={`animate-on-scroll opacity-0 ${getAnimationClass()} ${className}`}
      style={delayStyle}
    >
      {children}
    </div>
  );
};

// Компонент для пульсирующей анимации
interface PulseProps {
  children: ReactNode;
  intensity?: 'soft' | 'medium' | 'hard';
  className?: string;
}

export const Pulse: React.FC<PulseProps> = ({
  children,
  intensity = 'soft',
  className = '',
}) => {
  const getIntensityClass = () => {
    switch (intensity) {
      case 'soft':
        return 'animate-pulse-soft';
      case 'medium':
        return 'animate-pulse';
      case 'hard':
        return 'animate-ping';
      default:
        return 'animate-pulse-soft';
    }
  };
  
  return (
    <div className={`${getIntensityClass()} ${className}`}>
      {children}
    </div>
  );
};

// Компонент для анимированной волнистой линии
interface WavyLineProps {
  width?: string;
  className?: string;
}

export const WavyLine: React.FC<WavyLineProps> = ({
  width = 'w-1/2',
  className = '',
}) => {
  return (
    <div className={`wavy-line ${width} mx-auto ${className}`}></div>
  );
};

export default { FadeIn, Pulse, WavyLine };