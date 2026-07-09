import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Grid } from "@react-three/drei";

export default function NeonGrid() {
  const gridRef = useRef<any>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Slowly shift the grid position along the Z axis to create a "scrolling coordinate floor" movement
    if (gridRef.current) {
      gridRef.current.position.z = (t * 0.4) % 0.5;
    }
  });

  return (
    <group ref={gridRef} position={[0, -2.2, 0]} rotation={[0.2, 0, 0]}>
      <Grid
        args={[25, 25]}
        cellSize={0.5}
        cellColor="#5B5FFF"
        cellThickness={0.8}
        sectionSize={2.5}
        sectionColor="#00D4FF"
        sectionThickness={1.2}
        fadeDistance={15}
        infiniteGrid
      />
    </group>
  );
}
