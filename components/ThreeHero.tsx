import React, { useRef } from 'react';
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber';
import { OrbitControls, Stars, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { COLORS } from '../constants';

// Fix for TypeScript errors: Property 'mesh' does not exist on type 'JSX.IntrinsicElements'
// Augment the JSX namespace to include Three.js elements
declare global {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {}
  }
}

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} scale={2.2}>
        <icosahedronGeometry args={[1, 64]} />
        <MeshDistortMaterial
          color={COLORS.blue}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      <mesh scale={2.25} rotation={[Math.PI / 2, 0, 0]}>
         <torusGeometry args={[1.2, 0.02, 16, 100]} />
         <meshStandardMaterial color={COLORS.red} emissive={COLORS.red} emissiveIntensity={2} />
      </mesh>
      <mesh scale={2.5} rotation={[0, Math.PI / 4, 0]}>
         <torusGeometry args={[1.5, 0.01, 16, 100]} />
         <meshStandardMaterial color={COLORS.gold} emissive={COLORS.gold} emissiveIntensity={1} />
      </mesh>
    </Float>
  );
};

export const ThreeHero = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color={COLORS.gold} />
        <pointLight position={[-10, -10, -10]} intensity={1} color={COLORS.red} />
        
        <AnimatedSphere />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};