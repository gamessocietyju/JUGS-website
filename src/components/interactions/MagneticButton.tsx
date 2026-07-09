import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function MagneticButton({ children, className = "" }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Motion values to animate position without state updates
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Soft elastic spring values matching premium feedback
  const springX = useSpring(x, { damping: 15, stiffness: 150 });
  const springY = useSpring(y, { damping: 15, stiffness: 150 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Magnetic force vector relative to center
    const pullX = (clientX - centerX) * 0.18;
    const pullY = (clientY - centerY) * 0.18;
    
    // Clamp to 8px max offset to keep it premium and subtle
    const distance = Math.sqrt(pullX * pullX + pullY * pullY);
    const maxPull = 8;
    
    if (distance > maxPull) {
      const angle = Math.atan2(pullY, pullX);
      x.set(Math.cos(angle) * maxPull);
      y.set(Math.sin(angle) * maxPull);
    } else {
      x.set(pullX);
      y.set(pullY);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
