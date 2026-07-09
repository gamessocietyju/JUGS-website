import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function SceneLights() {
  const cyanLightRef = useRef<THREE.PointLight>(null);
  const purpleLightRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Slowly float point lights around the scene
    if (cyanLightRef.current) {
      cyanLightRef.current.position.x = Math.sin(t * 0.5) * 3;
      cyanLightRef.current.position.y = Math.cos(t * 0.3) * 2;
    }
    if (purpleLightRef.current) {
      purpleLightRef.current.position.x = Math.cos(t * 0.4) * 3;
      purpleLightRef.current.position.y = Math.sin(t * 0.6) * 2;
    }
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 8, 5]} intensity={0.8} color="#ffffff" />
      
      {/* Neon glowing point lights */}
      <pointLight 
        ref={cyanLightRef} 
        position={[3, 2, 2]} 
        intensity={3.0} 
        distance={15} 
        color="#00D4FF" 
      />
      <pointLight 
        ref={purpleLightRef} 
        position={[-3, -2, 2]} 
        intensity={3.0} 
        distance={15} 
        color="#8B5CF6" 
      />
    </>
  );
}
