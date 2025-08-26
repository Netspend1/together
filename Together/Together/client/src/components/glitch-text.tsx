import { useEffect, useRef } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
  color?: string;
}

export default function GlitchText({ text, className = "", color = "text-forest-green" }: GlitchTextProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const element = textRef.current;
    
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.1) { // 10% chance to glitch
        element.style.animation = 'none';
        element.offsetHeight; // Trigger reflow
        element.style.animation = 'glitch 0.3s ease-in-out';
      }
    }, 2000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div
      ref={textRef}
      className={`glitch-text ${color} ${className}`}
      data-text={text}
    >
      {text}
    </div>
  );
}
