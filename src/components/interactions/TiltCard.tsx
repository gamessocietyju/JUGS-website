import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = "" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Normalized cursor coordinates [-0.5, 0.5]
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { damping: 22, stiffness: 140 });
  const springY = useSpring(y, { damping: 22, stiffness: 140 });

  // Rotate x maps to vertical mouse position (Y delta creates rotation around X axis)
  const rotateX = useTransform(springY, [-0.5, 0.5], [5, -5]);
  // Rotate y maps to horizontal mouse position (X delta creates rotation around Y axis)
  const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalized offset relative to card center
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    x.set(mouseX / width);
    y.set(mouseY / height);
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
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`transition-all duration-300 ${className}`}
      whileHover={{
        y: -4,
        boxShadow: "0 15px 35px rgba(0, 212, 255, 0.08)",
      }}
    >
      {children}
    </motion.div>
  );
}
