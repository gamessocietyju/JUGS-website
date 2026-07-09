import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ShardProps {
  type: "triangle" | "cube";
  position: [number, number, number];
  scale: number;
  speed: number;
  color: string;
}

function ShardUnit({ type, position, scale, speed, color }: ShardProps) {
  const ref = useRef<THREE.Mesh>(null);
  const initialY = position[1];

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      // Float drift up/down
      ref.current.position.y = initialY + Math.sin(t * 0.3 * speed + initialY) * 0.35;
      
      // Slow rotation on all 3 axes
      ref.current.rotation.x = t * 0.08 * speed;
      ref.current.rotation.y = t * 0.12 * speed;
      ref.current.rotation.z = t * 0.04 * speed;
    }
  });

  return (
    <mesh ref={ref} position={position} scale={[scale, scale, scale]}>
      {type === "triangle" ? (
        <coneGeometry args={[0.25, 0.6, 3]} />
      ) : (
        <boxGeometry args={[0.3, 0.3, 0.3]} />
      )}
      <meshBasicMaterial 
        color={color} 
        transparent 
        opacity={0.55} 
        wireframe={type === "triangle"} 
      />
    </mesh>
  );
}

interface FloatingShardsProps {
  isMobile: boolean;
}

export default function FloatingShards({ isMobile }: FloatingShardsProps) {
  const shards: ShardProps[] = [
    { type: "triangle", position: [-1.4, 1.6, 1], scale: 1.1, speed: 0.8, color: "#FF3366" },
    { type: "cube", position: [2.3, 1.3, -1], scale: 1.0, speed: 1.0, color: "#00D4FF" },
    { type: "triangle", position: [1.6, -1.6, 2], scale: 0.8, speed: 0.7, color: "#8B5CF6" },
    { type: "cube", position: [-2.6, -0.6, -2], scale: 1.1, speed: 0.9, color: "#5B5FFF" },
    ...(!isMobile ? [
      { type: "triangle", position: [-0.6, -2.2, -1], scale: 0.9, speed: 0.7, color: "#00D4FF" } as ShardProps,
      { type: "cube", position: [1.4, 2.2, 0], scale: 0.7, speed: 1.2, color: "#FF3366" } as ShardProps,
    ] : [])
  ];

  return (
    <group>
      {shards.map((shard, index) => (
        <ShardUnit key={index} {...shard} />
      ))}
    </group>
  );
}
