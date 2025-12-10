import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html, Float, Stars, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// --- Data ---
const SKILL_ORBITS = [
    {
        radius: 2.8,
        speed: 1.2,
        rotation: [Math.PI / 3, Math.PI / 6, 0],
        items: [
            { name: "React", color: "#61dafb" },
            { name: "JavaScript", color: "#f7df1e" },
            { name: "HTML/CSS", color: "#e34c26" }
        ]
    },
    {
        radius: 3.8,
        speed: 1,
        rotation: [-Math.PI / 3, -Math.PI / 6, Math.PI / 4],
        items: [
            { name: "Python", color: "#3776ab" },
            { name: "Java", color: "#f89820" },
            { name: "Node.js", color: "#68a063" }
        ]
    },
    {
        radius: 4.8,
        speed: 0.8,
        rotation: [Math.PI / 8, Math.PI, Math.PI / 8],
        items: [
            { name: "TensorFlow", color: "#ff6f00" },
            { name: "MySQL", color: "#00758f" },
            { name: "MongoDB", color: "#47a248" }
        ]
    }
];

// --- Shared Reusable Assets (Performance Boost) ---
const sharedSphereGeo = new THREE.SphereGeometry(0.35, 16, 16); // Lower polygon count

// --- 1. The Skill Sphere ---
const SkillSphere = ({ radius, speed, angle, color, name }) => {
    const sphereRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime() * speed;
        const x = radius * Math.cos(t + angle);
        const z = radius * Math.sin(t + angle);

        if (sphereRef.current) {
            sphereRef.current.position.set(x, 0, z);
            sphereRef.current.rotation.y += 0.02;
        }
    });

    return (
        <group>
            <mesh
                ref={sphereRef}
                geometry={sharedSphereGeo} // Reusing geometry
            >
                {/* Using meshStandardMaterial is fine, but we optimize by not recreating it 
                   if we didn't have dynamic colors. Since colors vary, we keep it inline,
                   but the low-poly geometry saves us here.
                */}
                <meshStandardMaterial
                    color={color}
                    metalness={0.6}
                    roughness={0.2}
                    emissive={color}
                    emissiveIntensity={0.4}
                />

                {/* occlusion adds performance by hiding HTML when behind objects */}
                <Html position={[0, 0.5, 0]} center distanceFactor={10} zIndexRange={[100, 0]} occlusion>
                    <div className="bg-black/60 dark:bg-black/80 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/10 text-white text-[10px] md:text-xs font-semibold whitespace-nowrap select-none shadow-lg pointer-events-none">
                        {name}
                    </div>
                </Html>
            </mesh>
        </group>
    );
};

// --- 2. The Orbit Ring ---
const OrbitPath = ({ radius, color }) => {
    return (
        <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[radius - 0.02, radius + 0.02, 48]} /> {/* Reduced segments from 64 to 48 */}
            <meshBasicMaterial color={color} opacity={0.15} transparent side={THREE.DoubleSide} />
        </mesh>
    );
};

// --- 3. The Central Core ---
const AtomCore = () => {
    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
            <mesh scale={[1.2, 1.2, 1.2]}>
                <icosahedronGeometry args={[1, 0]} /> {/* 0 detail level = lowest poly count */}
                <meshStandardMaterial
                    color="#3b82f6"
                    emissive="#3b82f6"
                    emissiveIntensity={1}
                    wireframe
                    transparent
                    opacity={0.2}
                />
            </mesh>
            <mesh>
                <sphereGeometry args={[0.6, 16, 16]} /> {/* Reduced segments */}
                <meshStandardMaterial
                    color="#60a5fa"
                    emissive="#2563eb"
                    emissiveIntensity={1.5}
                    toneMapped={false}
                />
            </mesh>
            <pointLight distance={8} intensity={4} color="#3b82f6" />
        </Float>
    );
};

// --- 4. The Main 3D Scene ---
const TechScene = () => {
    const { viewport } = useThree();
    const isMobile = viewport.width < 5;
    const scale = isMobile ? 0.6 : 0.9;

    return (
        <>
            {/* Optimized Lighting: Ambient + one main light is usually enough for this style */}
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />

            <group scale={scale}>
                <AtomCore />
                {SKILL_ORBITS.map((orbit, i) => (
                    <group key={i} rotation={orbit.rotation}>
                        <OrbitPath radius={orbit.radius} color="#ffffff" />
                        {orbit.items.map((item, j) => {
                            const angleStep = (Math.PI * 2) / orbit.items.length;
                            return (
                                <SkillSphere
                                    key={j}
                                    radius={orbit.radius}
                                    speed={orbit.speed}
                                    angle={j * angleStep}
                                    color={item.color}
                                    name={item.name}
                                />
                            );
                        })}
                    </group>
                ))}
            </group>

            {/* Reduced count and depth for performance */}
            <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />

            <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.5}
                maxPolarAngle={Math.PI / 1.2}
                minPolarAngle={Math.PI / 6}
            />
        </>
    );
};

// --- 5. Exported Component ---
const TechStack = () => {
    return (
        <section className="relative w-full h-[600px] md:h-[800px] bg-gray-50 dark:bg-black overflow-hidden flex flex-col items-center justify-center">
            <div className="absolute top-10 z-10 text-center px-4 pointer-events-none">
                <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
                    Tech Universe
                </h2>
                <p className="mt-2 text-gray-500 font-mono text-sm dark:text-gray-400">
                    // Revolving around Intelligence
                </p>
            </div>

            <div className="w-full h-full absolute inset-0 cursor-move">
                {/* dpr={[1, 2]} clamps pixel ratio to avoid over-rendering on high-res screens */}
                <Canvas camera={{ position: [0, 2, 9], fov: 50 }} dpr={[1, 2]}>
                    <TechScene />
                </Canvas>
            </div>
        </section>
    );
};

export default TechStack;