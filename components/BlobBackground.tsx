"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Environment, Float, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedBlob() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
            <Sphere ref={meshRef} args={[1, 128, 128]} scale={2.8}>
                <MeshDistortMaterial
                    color="#0d1f2d"
                    attach="material"
                    distort={0.4}
                    speed={1.5}
                    roughness={0.1}
                    metalness={1}
                    iridescence={1}
                    iridescenceIOR={1.5}
                    iridescenceThicknessRange={[100, 400]}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                />
            </Sphere>
        </Float>
    );
}

export default function BlobBackground() {
    return (
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
            >
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
                <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#4f46e5" />
                <pointLight position={[0, 5, 5]} intensity={1} color="#eab308" />

                <Environment preset="city" />

                {/* Subtle background particles */}
                <Sparkles
                    count={150}
                    scale={15}
                    size={0.6}
                    speed={0.2}
                    opacity={0.3}
                    color="#ffffff"
                />

                <AnimatedBlob />
            </Canvas>

            {/* Soft gradient overlays to blend edges */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#03050C_70%)] opacity-80 z-10" />
        </div>
    );
}
