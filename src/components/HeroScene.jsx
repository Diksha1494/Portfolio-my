import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const sceneShapes = [
  { type: "icosahedron", args: [0.82, 0], position: [-2.6, 1.1, -1.6], color: "#2dc8ff" },
  { type: "torus", args: [0.6, 0.18, 18, 52], position: [2.7, -1, -2.1], color: "#7cf2c3" },
  { type: "octahedron", args: [0.66, 0], position: [0.1, 1.9, -2.4], color: "#4ce3ff" },
];

const FloatingMeshes = () => {
  const meshRefs = useRef([]);

  useFrame((state, delta) => {
    meshRefs.current.forEach((mesh, index) => {
      if (!mesh) return;
      mesh.rotation.x += delta * (0.22 + index * 0.05);
      mesh.rotation.y += delta * (0.25 + index * 0.04);
      mesh.position.y += Math.sin(state.clock.elapsedTime * 0.8 + index) * 0.0007;
    });
  });

  return (
    <>
      {sceneShapes.map((shape, index) => (
        <Float
          key={shape.type}
          speed={1.2 + index * 0.3}
          floatIntensity={1.3}
          rotationIntensity={0.5}
        >
          <mesh
            ref={(element) => {
              meshRefs.current[index] = element;
            }}
            position={shape.position}
          >
            {shape.type === "icosahedron" ? <icosahedronGeometry args={shape.args} /> : null}
            {shape.type === "torus" ? <torusGeometry args={shape.args} /> : null}
            {shape.type === "octahedron" ? <octahedronGeometry args={shape.args} /> : null}
            <meshStandardMaterial
              color={shape.color}
              roughness={0.2}
              metalness={0.75}
              emissive={shape.color}
              emissiveIntensity={0.22}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
};

const EnergyCore = () => {
  const outerRef = useRef(null);
  const ringRef = useRef(null);

  useFrame((state, delta) => {
    if (outerRef.current) {
      outerRef.current.rotation.y += delta * 0.25;
      outerRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.18;
    }

    if (ringRef.current) {
      ringRef.current.rotation.x += delta * 0.35;
      ringRef.current.rotation.z += delta * 0.22;
    }
  });

  return (
    <group position={[0.3, 0.1, -0.5]}>
      <Float speed={1.5} floatIntensity={1} rotationIntensity={0.45}>
        <mesh ref={outerRef}>
          <icosahedronGeometry args={[1.18, 7]} />
          <MeshDistortMaterial
            color="#6ee7ff"
            emissive="#60a5fa"
            emissiveIntensity={0.45}
            roughness={0.15}
            metalness={0.55}
            distort={0.35}
            speed={2.5}
            transparent
            opacity={0.78}
          />
        </mesh>
      </Float>
      <mesh ref={ringRef} rotation={[1.1, 0.2, 0.4]}>
        <torusGeometry args={[1.9, 0.03, 24, 180]} />
        <meshStandardMaterial color="#d946ef" emissive="#a855f7" emissiveIntensity={0.85} />
      </mesh>
    </group>
  );
};

const ParticleField = () => {
  const pointsRef = useRef(null);
  const total = 460;

  const positions = useMemo(() => {
    const vertices = new Float32Array(total * 3);

    for (let index = 0; index < total; index += 1) {
      const vertexIndex = index * 3;
      vertices[vertexIndex] = (Math.random() - 0.5) * 18;
      vertices[vertexIndex + 1] = (Math.random() - 0.5) * 10;
      vertices[vertexIndex + 2] = (Math.random() - 0.5) * 18;
    }

    return vertices;
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.015;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.16) * 0.06;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#77e6ff"
        size={0.03}
        sizeAttenuation
        transparent
        depthWrite={false}
        opacity={0.75}
      />
    </points>
  );
};

const CameraDrift = () => {
  const { camera, pointer } = useThree();

  useFrame((_, delta) => {
    const targetX = pointer.x * 0.7;
    const targetY = pointer.y * 0.4;

    camera.position.x = THREE.MathUtils.damp(camera.position.x, targetX, 3.5, delta);
    camera.position.y = THREE.MathUtils.damp(camera.position.y, targetY, 3.5, delta);
    camera.lookAt(0, 0, 0);
  });

  return null;
};

const HeroScene = () => {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <color attach="background" args={["#0a0a0a"]} />
      <fog attach="fog" args={["#0a0a0a", 7.5, 18]} />
      <Suspense fallback={null}>
        <ambientLight intensity={0.45} />
        <directionalLight position={[2.5, 2.5, 3]} intensity={1.25} color="#8deeff" />
        <pointLight position={[-4, -2, -2]} intensity={1.1} color="#66ffd9" />
        <pointLight position={[3, 1, 2]} intensity={0.9} color="#f0abfc" />
        <CameraDrift />
        <ParticleField />
        <EnergyCore />
        <FloatingMeshes />
      </Suspense>
    </Canvas>
  );
};

export default HeroScene;
