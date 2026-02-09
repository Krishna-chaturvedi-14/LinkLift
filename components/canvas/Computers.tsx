
"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Loader2 } from "lucide-react";

// Fallback loader for 3D elements
const CanvasLoader = () => {
    return (
        <div className="flex justify-center items-center h-full w-full">
            <span className="text-white text-sm font-bold flex gap-2">
                <Loader2 className="animate-spin" size={16} /> Loading 3D Model...
            </span>
        </div>
    );
};

const Computers = ({ isMobile }: { isMobile: boolean }) => {
    return (
        <group>
            <hemisphereLight intensity={0.15} groundColor='black' />
            <pointLight intensity={1} />
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />

            {/* Procedural Laptop */}
            <group
                position={[0, isMobile ? -1.5 : -1, 0]}
                scale={isMobile ? 0.6 : 0.75}
                rotation={[0.1, -0.2, 0]}
            >
                {/* Laptop Base */}
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[3.2, 0.2, 2.2]} />
                    <meshStandardMaterial color="#1a1a1a" roughness={0.5} metalness={0.8} />
                </mesh>

                {/* Laptop Screen Pivot */}
                <group position={[0, 0.1, -1]} rotation={[-0.25, 0, 0]}>
                    {/* Screen Frame */}
                    <mesh position={[0, 1, 0]}>
                        <boxGeometry args={[3.2, 2.1, 0.1]} />
                        <meshStandardMaterial color="#1a1a1a" roughness={0.5} metalness={0.8} />
                    </mesh>
                    {/* Screen Display (Emissive to look like it's on) */}
                    <mesh position={[0, 1, 0.06]}>
                        <planeGeometry args={[3, 1.9]} />
                        <meshStandardMaterial color="#000000" emissive="#3b0764" emissiveIntensity={0.5} />
                    </mesh>
                    {/* Logo on back */}
                    <mesh position={[0, 1, -0.06]} rotation={[0, Math.PI, 0]}>
                        <circleGeometry args={[0.3, 32]} />
                        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.2} />
                    </mesh>
                </group>

                {/* Keyboard Area (Texture placeholder) */}
                <mesh position={[0, 0.11, 0.3]} rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[2.8, 1.2]} />
                    <meshStandardMaterial color="#000000" metalness={0.8} roughness={0.2} />
                </mesh>
            </group>
        </group>
    );
};

const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");
        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event: MediaQueryListEvent) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <Canvas
            frameloop='demand'
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={null}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computers isMobile={isMobile} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default ComputersCanvas;
