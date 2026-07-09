import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";

const Crystal = () => {
  const crystalRef = useRef(null);
  const ringRef = useRef(null);

  useFrame((_, delta) => {
    if (crystalRef.current) {
      crystalRef.current.rotation.x += delta * 0.22;
      crystalRef.current.rotation.y += delta * 0.42;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z -= delta * 0.2;
    }
  });

  return (
    <group>
      <Float speed={2.4} floatIntensity={1.1} rotationIntensity={0.6}>
        <mesh ref={crystalRef}>
          <dodecahedronGeometry args={[1.08, 0]} />
          <meshStandardMaterial
            color="#4ecfff"
            metalness={0.58}
            roughness={0.24}
            emissive="#1f7ba8"
            emissiveIntensity={0.28}
          />
        </mesh>
      </Float>
      <mesh ref={ringRef} rotation={[1.1, 0.4, 0.2]}>
        <torusGeometry args={[1.82, 0.03, 14, 100]} />
        <meshBasicMaterial color="#90ffe0" transparent opacity={0.35} />
      </mesh>
    </group>
  );
};

const AboutScene = () => {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 4], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.55} />
      <pointLight intensity={1.2} position={[2, 2, 3]} color="#86e9ff" />
      <pointLight intensity={0.9} position={[-2, -1, -2]} color="#8bffd6" />
      <Crystal />
    </Canvas>
  );
};

export default AboutScene;
