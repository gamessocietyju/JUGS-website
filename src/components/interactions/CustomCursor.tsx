import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouseCoords = useRef({ x: 0, y: 0 });
  const ringCoords = useRef({ x: 0, y: 0 });
  const cursorState = useRef({ isHovering: false, isClicking: false, isHidden: true });

  useEffect(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Detect touch device
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    // Hide default desktop cursor
    document.body.style.cursor = "none";
    
    // Add dynamic stylesheet rule to hide browser cursor for clickable/hoverable items
    const style = document.createElement("style");
    style.id = "custom-cursor-hide-rules";
    style.innerHTML = `
      a, button, [role="button"], .card-premium, input, select, textarea, .cursor-pointer {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    const handleMouseMove = (e: MouseEvent) => {
      mouseCoords.current.x = e.clientX;
      mouseCoords.current.y = e.clientY;
      if (cursorState.current.isHidden) {
        cursorState.current.isHidden = false;
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "1";
      }
    };

    const handleMouseDown = () => {
      cursorState.current.isClicking = true;
    };

    const handleMouseUp = () => {
      cursorState.current.isClicking = false;
    };

    const handleMouseLeaveWindow = () => {
      cursorState.current.isHidden = true;
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    const handleMouseEnterWindow = () => {
      cursorState.current.isHidden = false;
      if (dotRef.current) dotRef.current.style.opacity = "1";
      if (ringRef.current) ringRef.current.style.opacity = "1";
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.addEventListener("mouseenter", handleMouseEnterWindow);

    // Event delegation to detect hovering over interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      const checkInteractive = (el: HTMLElement | null): boolean => {
        if (!el) return false;
        const tag = el.tagName.toLowerCase();
        if (
          tag === "a" || 
          tag === "button" || 
          el.classList.contains("card-premium") || 
          el.classList.contains("btn-premium-primary") ||
          el.classList.contains("btn-premium-secondary") ||
          el.classList.contains("btn-premium-accent") ||
          el.classList.contains("cursor-pointer") ||
          el.hasAttribute("data-hover") ||
          el.getAttribute("role") === "button"
        ) {
          return true;
        }
        return checkInteractive(el.parentElement);
      };

      if (checkInteractive(target)) {
        cursorState.current.isHovering = true;
      } else {
        cursorState.current.isHovering = false;
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    // High performance animation loop using requestAnimationFrame
    let animationFrameId: number;
    const updatePosition = () => {
      const dot = dotRef.current;
      const ring = ringRef.current;
      
      if (!dot || !ring) {
        animationFrameId = requestAnimationFrame(updatePosition);
        return;
      }

      // Smooth lag / interpolation for outer ring
      const ease = 0.15;
      ringCoords.current.x += (mouseCoords.current.x - ringCoords.current.x) * ease;
      ringCoords.current.y += (mouseCoords.current.y - ringCoords.current.y) * ease;

      // Render coordinates
      dot.style.transform = `translate3d(${mouseCoords.current.x - 3}px, ${mouseCoords.current.y - 3}px, 0)`;
      ring.style.transform = `translate3d(${ringCoords.current.x - 18}px, ${ringCoords.current.y - 18}px, 0)`;

      // Apply interaction scaling styles
      let ringScale = 1;
      let dotScale = 1;

      if (cursorState.current.isHovering) {
        ringScale = 1.5;
        dotScale = 0.5;
        ring.style.borderColor = "#00D4FF";
        ring.style.backgroundColor = "rgba(0, 212, 255, 0.08)";
      } else {
        ring.style.borderColor = "#00D4FF";
        ring.style.backgroundColor = "transparent";
      }

      if (cursorState.current.isClicking) {
        ringScale *= 0.75;
        dotScale *= 0.75;
      }

      ring.style.transform += ` scale(${ringScale})`;
      dot.style.transform += ` scale(${dotScale})`;

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      document.body.style.cursor = "default";
      const styleEl = document.getElementById("custom-cursor-hide-rules");
      if (styleEl) styleEl.remove();
      
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <noscript>
        <style>{`body { cursor: default !important; }`}</style>
      </noscript>
      {/* Tiny inner center dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#00D4FF] rounded-full pointer-events-none z-[9999] opacity-0 transition-opacity duration-300 shadow-[0_0_8px_#00D4FF]"
      />
      {/* Trailing outer glow ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-9 h-9 border border-[#00D4FF] rounded-full pointer-events-none z-[9998] opacity-0 transition-all duration-150 ease-out shadow-[0_0_12px_rgba(0,212,255,0.25)]"
      />
    </>
  );
}
