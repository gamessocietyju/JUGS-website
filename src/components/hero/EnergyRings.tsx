import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function EnergyRings() {
  const outerRingRef = useRef<THREE.Mesh>(null);
  const innerRingRef = useRef<THREE.Mesh>(null);
  const arcRef1 = useRef<THREE.Mesh>(null);
  const arcRef2 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    if (outerRingRef.current) {
      outerRingRef.current.rotation.x = t * 0.06;
      outerRingRef.current.rotation.y = t * 0.09;
      // Pulse scale slightly
      const pulse = 1 + Math.sin(t * 1.2) * 0.015;
      outerRingRef.current.scale.set(pulse, pulse, pulse);
    }
    
    if (innerRingRef.current) {
      innerRingRef.current.rotation.x = -t * 0.08;
      innerRingRef.current.rotation.y = -t * 0.05;
      const pulse = 1 + Math.cos(t * 1.5) * 0.015;
      innerRingRef.current.scale.set(pulse, pulse, pulse);
    }

    if (arcRef1.current) {
      arcRef1.current.rotation.z = t * 0.18;
    }

    if (arcRef2.current) {
      arcRef2.current.rotation.z = -t * 0.12;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Outer Cyan Ring */}
      <mesh ref={outerRingRef}>
        <torusGeometry args={[2.2, 0.02, 8, 48]} />
        <meshBasicMaterial color="#00D4FF" transparent opacity={0.5} />
      </mesh>

      {/* Inner Purple Ring */}
      <mesh ref={innerRingRef}>
        <torusGeometry args={[1.7, 0.02, 8, 48]} />
        <meshBasicMaterial color="#8B5CF6" transparent opacity={0.5} />
      </mesh>

      {/* Futuristic Energy Arc (tilted partial ring) */}
      <mesh ref={arcRef1} rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <ringGeometry args={[2.4, 2.42, 32, 1, 0, Math.PI * 1.3]} />
        <meshBasicMaterial color="#FF3366" side={THREE.DoubleSide} transparent opacity={0.4} />
      </mesh>

      {/* Second partial ring spinning in opposite direction */}
      <mesh ref={arcRef2} rotation={[Math.PI / 4, -Math.PI / 3, 0]}>
        <ringGeometry args={[2.5, 2.51, 32, 1, Math.PI, Math.PI * 0.7]} />
        <meshBasicMaterial color="#00D4FF" side={THREE.DoubleSide} transparent opacity={0.4} />
      </mesh>
    </group>
  );
}
