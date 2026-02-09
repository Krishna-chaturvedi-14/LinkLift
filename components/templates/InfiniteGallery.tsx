"use client";

import React, { useRef, useState, useMemo, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { ResumeData } from "@/lib/types";

const WALL_ANGLE = -0.25;
const SPACING = 45;
const PLANE_WIDTH = 14;
const PLANE_HEIGHT = 18;

// Simple Error Boundary for Three.js components
class LocalErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    render() {
        if (this.state.hasError) return null;
        return this.props.children;
    }
}

function PaintingContent({ index, project, scroll, totalWidth }: {
    index: number,
    project: any,
    scroll: React.MutableRefObject<number>,
    totalWidth: number
}) {
    const groupRef = useRef<THREE.Group>(null);
    const originalX = index * SPACING;

    // Fallback texture or color if image is missing
    const texture = project.image ? useTexture(project.image) as any : null;

    useFrame(() => {
        if (!groupRef.current) return;

        const distFromCam = scroll.current - originalX;
        const shift = Math.round(distFromCam / totalWidth) * totalWidth;
        groupRef.current.position.x = originalX + shift;
    });

    return (
        <group ref={groupRef}>
            {/* Shadow */}
            <mesh position={[0.8, -0.8, -0.5]}>
                <planeGeometry args={[PLANE_WIDTH, PLANE_HEIGHT]} />
                <meshBasicMaterial color="black" transparent opacity={0.15} />
            </mesh>

            {/* Artwork Frame */}
            <mesh position={[0, 0, -0.1]}>
                <planeGeometry args={[PLANE_WIDTH + 0.5, PLANE_HEIGHT + 0.5]} />
                <meshBasicMaterial color="#1a1a1a" />
            </mesh>

            {/* Artwork */}
            <mesh>
                <planeGeometry args={[PLANE_WIDTH, PLANE_HEIGHT]} />
                {texture ? (
                    <meshBasicMaterial map={texture} />
                ) : (
                    <meshBasicMaterial color="#333" />
                )}
            </mesh>

            {/* Info Overlay (Visible when close) */}
            <Html position={[0, -PLANE_HEIGHT / 2 - 2, 0]} center distanceFactor={15}>
                <div className="bg-black/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-white min-w-[200px] pointer-events-none select-none">
                    <h3 className="text-xl font-bold mb-1">{project.title || "Untitled Project"}</h3>
                    <p className="text-sm text-white/60 line-clamp-2">{project.description}</p>
                    <div className="flex gap-2 mt-3">
                        {(project.technologies || []).slice(0, 3).map((t: string) => (
                            <span key={t} className="text-[10px] px-2 py-0.5 bg-white/10 rounded-full border border-white/5 uppercase tracking-widest">{t}</span>
                        ))}
                    </div>
                </div>
            </Html>
        </group>
    );
}

function Painting(props: any) {
    return (
        <LocalErrorBoundary>
            <Suspense fallback={null}>
                <PaintingContent {...props} />
            </Suspense>
        </LocalErrorBoundary>
    );
}

function WallLines() {
    const count = 100;
    const lines = useMemo(() => {
        const positions = [];
        for (let i = 0; i < count; i++) {
            const x = (i - count / 2) * 20;
            positions.push(new THREE.Vector3(x, 15, 0));
            positions.push(new THREE.Vector3(x, -15, 0));
        }
        return positions;
    }, []);

    return (
        <group>
            {/* Top Line */}
            <mesh position={[0, 15, 0]} rotation={[0, 0, 0]}>
                <planeGeometry args={[2000, 0.1]} />
                <meshBasicMaterial color="#333" />
            </mesh>
            {/* Bottom Line */}
            <mesh position={[0, -15, 0]} rotation={[0, 0, 0]}>
                <planeGeometry args={[2000, 0.1]} />
                <meshBasicMaterial color="#333" />
            </mesh>
        </group>
    );
}

function Gallery({ projects }: { projects: any[] }) {
    const scroll = useRef(0);
    const targetScroll = useRef(0);
    const totalWidth = Math.max(projects.length, 5) * SPACING;

    // Handle scroll input
    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            targetScroll.current += e.deltaY * 0.05;
        };
        window.addEventListener("wheel", handleWheel);
        return () => window.removeEventListener("wheel", handleWheel);
    }, []);

    useFrame((state) => {
        // Smooth lerp
        scroll.current = THREE.MathUtils.lerp(scroll.current, targetScroll.current, 0.06);

        // Move Camera along the angled wall path
        const xMove = scroll.current * Math.cos(WALL_ANGLE);
        const zMove = scroll.current * Math.sin(WALL_ANGLE);

        state.camera.position.x = xMove;
        state.camera.position.z = 35 - zMove;
        state.camera.lookAt(xMove + 10, 0, -zMove - 5);
    });

    return (
        <group rotation-y={WALL_ANGLE} position-z={-10}>
            <WallLines />
            {projects.map((project, i) => (
                <Painting
                    key={i}
                    index={i}
                    project={project}
                    scroll={scroll}
                    totalWidth={totalWidth}
                />
            ))}

            {/* Ambient dynamic elements */}
            <fog attach="fog" args={["#050505", 10, 120]} />
        </group>
    );
}

// Fixed UI Overlay
function Header({ data }: { data: ResumeData }) {
    return (
        <div className="fixed inset-0 pointer-events-none z-50 flex flex-col p-12 justify-between">
            <div className="flex justify-between items-start">
                <div className="space-y-2">
                    <h1 className="text-4xl font-black tracking-tighter text-white uppercase italic leading-none">
                        {data.name || "Portfolio"}
                    </h1>
                    <p className="text-sm font-mono text-white/50 tracking-[0.3em] uppercase">
                        {data.role || "Creative Developer"}
                    </p>
                </div>
                <div className="text-right font-mono text-[10px] text-white/30 uppercase tracking-widest leading-loose">
                    [ Scroll to Explore ] <br />
                    [ Infinitely Tileable Gallery ]
                </div>
            </div>

            <div className="flex justify-between items-end">
                <div className="max-w-md">
                    <p className="text-lg text-white/80 font-serif italic leading-tight">
                        {data.bio || "Crafting digital experiences through a fusion of code and creativity."}
                    </p>
                </div>
                <div className="text-sm font-mono text-white underline underline-offset-4 pointer-events-auto cursor-pointer hover:text-white/70 transition-colors uppercase">
                    Connect With Me
                </div>
            </div>
        </div>
    );
}

export default function InfiniteGallery({ data }: { data: ResumeData }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    const projects = data.projects || [];

    // Fallback placeholders
    const displayProjects = projects.length > 0 ? projects : [
        {
            title: "Project Alpha",
            description: "Immersive 3D Experience",
            technologies: ["Three.js", "React"],
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80"
        },
        {
            title: "Beta Platform",
            description: "Full-stack Innovation",
            technologies: ["Next.js", "Tailwind"],
            image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&q=80"
        },
        {
            title: "Gamma System",
            description: "Design Orchestration",
            technologies: ["GSAP", "Framer"],
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
        },
        {
            title: "Delta Module",
            description: "Cloud Infrastructure",
            technologies: ["AWS", "Node"],
            image: "https://images.unsplash.com/photo-1460666819451-e16104c8605c?w=800&q=80"
        },
        {
            title: "Epsilon Core",
            description: "Architectural Clarity",
            technologies: ["Postgres", "Redis"],
            image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&q=80"
        },
    ];

    if (!mounted) return <div className="h-screen w-full bg-[#050505]" />;

    return (
        <div className="h-screen w-full bg-[#050505] overflow-hidden">
            <Header data={data} />

            <Canvas camera={{ fov: 45, near: 0.1, far: 1000 }}>
                <color attach="background" args={["#050505"]} />
                <LocalErrorBoundary>
                    <Suspense fallback={null}>
                        <Gallery projects={displayProjects} />
                    </Suspense>
                </LocalErrorBoundary>
            </Canvas>

            {/* Grain Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-40" />
        </div>
    );
}
