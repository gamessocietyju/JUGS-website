import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface HexagonProps {
  position: [number, number, number];
  scale: number;
  speed: number;
  color: string;
}

function HexagonUnit({ position, scale, speed, color }: HexagonProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      // Slow hovering up and down
      meshRef.current.position.y = initialY + Math.sin(t * 0.4 + initialY) * 0.3;
      // Slow rotation
      meshRef.current.rotation.y = t * 0.12 * speed;
      meshRef.current.rotation.x = t * 0.08 * speed;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={[scale, scale, scale]}>
      {/* 6 radial segments creates a regular hexagon */}
      <cylinderGeometry args={[1, 1, 0.2, 6, 1]} />
      <meshBasicMaterial 
        color={color} 
        wireframe 
        transparent 
        opacity={0.4} 
      />
    </mesh>
  );
}

interface FloatingHexagonsProps {
  isMobile: boolean;
}

export default function FloatingHexagons({ isMobile }: FloatingHexagonsProps) {
  // Conditionally render fewer units on mobile to maximize FPS
  const hexagonData: HexagonProps[] = [
    { position: [-2.5, 1.5, -2], scale: 0.8, speed: 0.8, color: "#5B5FFF" },
    { position: [2.8, -1.0, -1], scale: 1.0, speed: 0.6, color: "#00D4FF" },
    { position: [-1.8, -1.8, 1], scale: 0.7, speed: 0.9, color: "#FF3366" },
    ...(!isMobile ? [
      { position: [2.2, 2.0, -3], scale: 0.9, speed: 0.5, color: "#8B5CF6" } as HexagonProps,
      { position: [0.5, 2.5, -1], scale: 0.6, speed: 0.7, color: "#5B5FFF" } as HexagonProps,
    ] : [])
  ];

  return (
    <group>
      {hexagonData.map((data, index) => (
        <HexagonUnit key={index} {...data} />
      ))}
    </group>
  );
}
