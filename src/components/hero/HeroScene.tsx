import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useState, useEffect } from "react";
import * as THREE from "three";
import SceneLights from "./SceneLights";
import NeonGrid from "./NeonGrid";
import FloatingHexagons from "./FloatingHexagons";
import EnergyRings from "./EnergyRings";
import FloatingShards from "./FloatingShards";

function CameraController({ isMobile }: { isMobile: boolean }) {
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Slow hovering wave
    const floatY = Math.sin(t * 0.3) * 0.12;
    
    // Mouse parallax details (completely bypassed on mobile devices)
    const targetX = !isMobile ? state.pointer.x * 0.5 : 0;
    const targetY = !isMobile ? state.pointer.y * 0.3 : 0;
    
    // Smooth frame lerping for camera transitions
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetX, 0.04);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, floatY + targetY, 0.04);
    
    // Keep camera focused on target center
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function HeroScene() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-full relative z-10">
      <Canvas
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
        camera={{ position: [0, 0, 6.2], fov: 50 }}
      >
        {/* Soft volumetric depth fog */}
        <fog attach="fog" args={["#070B12", 4.5, 11]} />
        
        <SceneLights />
        
        <Suspense fallback={null}>
          <NeonGrid />
          <EnergyRings />
          <FloatingHexagons isMobile={isMobile} />
          <FloatingShards isMobile={isMobile} />
        </Suspense>
        
        <CameraController isMobile={isMobile} />
      </Canvas>
    </div>
  );
}
