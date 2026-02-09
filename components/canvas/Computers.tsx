
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
    // Using a sample GLTF model URL - Replace with actual assets if available
    // For now, using a placeholder box if model fails, or a simple geometry

    return (
        <mesh>
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
            {/* Visual Placeholder for the Computer Desk */}
            <mesh position={[0, -1, 0]} scale={isMobile ? 0.7 : 0.75}>
                <boxGeometry args={[2, 1, 1]} />
                <meshStandardMaterial color="#915eff" />
            </mesh>
        </mesh>
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
