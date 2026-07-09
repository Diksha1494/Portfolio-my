import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import { useRef } from "react";

const colors = ["#64e4ff", "#7cf2c3", "#b0c6ff", "#95f2ff"];

const OrbitingSkill = ({ label, index, total }) => {
  const groupRef = useRef(null);
  const orbRef = useRef(null);
  const radius = 1.7 + (index % 2) * 0.35;
  const speed = 0.45 + (index % 3) * 0.08;
  const offset = (index / total) * Math.PI * 2;

  useFrame(({ clock }, delta) => {
    if (!groupRef.current || !orbRef.current) return;

    const elapsed = clock.getElapsedTime() * speed + offset;
    groupRef.current.position.x = Math.cos(elapsed) * radius;
    groupRef.current.position.z = Math.sin(elapsed) * radius;
    groupRef.current.position.y = Math.sin(elapsed * 1.8) * 0.38;
    orbRef.current.rotation.y += delta * 0.7;
  });

  return (
    <group ref={groupRef}>
      <Float speed={2.4} floatIntensity={0.42} rotationIntensity={0.3}>
        <mesh ref={orbRef}>
          <sphereGeometry args={[0.13, 18, 18]} />
          <meshStandardMaterial
            color={colors[index % colors.length]}
            emissive={colors[index % colors.length]}
            emissiveIntensity={0.35}
            roughness={0.3}
            metalness={0.5}
          />
        </mesh>
        <Html transform distanceFactor={10} position={[0, 0.2, 0]}>
          <span className="rounded-full border border-cyan-200/25 bg-black/75 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-cyan-100">
            {label}
          </span>
        </Html>
      </Float>
    </group>
  );
};

const CoreCluster = ({ skills }) => {
  const coreRef = useRef(null);
  const shellRef = useRef(null);

  useFrame((_, delta) => {
    if (!coreRef.current) return;
    coreRef.current.rotation.y += delta * 0.35;
    if (shellRef.current) {
      shellRef.current.rotation.x += delta * 0.18;
      shellRef.current.rotation.z += delta * 0.12;
    }
  });

  return (
    <group>
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.55, 0]} />
        <meshStandardMaterial
          color="#0e3044"
          emissive="#2f9ad3"
          emissiveIntensity={0.22}
          roughness={0.4}
          metalness={0.4}
        />
      </mesh>
      <mesh ref={shellRef} rotation={[0.8, 0.2, 0.4]}>
        <torusGeometry args={[1.1, 0.025, 20, 120]} />
        <meshStandardMaterial color="#d946ef" emissive="#d946ef" emissiveIntensity={0.45} />
      </mesh>
      {skills.map((skill, index) => (
        <OrbitingSkill key={skill} label={skill} index={index} total={skills.length} />
      ))}
    </group>
  );
};

const SkillsOrbitScene = ({ skills }) => {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.52} />
      <directionalLight position={[2.5, 2.5, 2]} intensity={1} color="#96edff" />
      <pointLight position={[-2, -1.5, 1.5]} intensity={0.8} color="#82ffd8" />
      <CoreCluster skills={skills} />
    </Canvas>
  );
};

export default SkillsOrbitScene;
