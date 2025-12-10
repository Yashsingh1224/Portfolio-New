import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

function AnimatedSphere() {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <Sphere args={[1, 100, 200]} scale={2.4} ref={meshRef}>
            <MeshDistortMaterial
                color="#3b82f6"
                attach="material"
                distort={0.5}
                speed={1.5}
                roughness={0}
                metalness={0.9}
                wireframe={true}
            />
        </Sphere>
    );
}

const Hero3D = () => {
    return (
        <div className="h-[400px] w-full lg:h-[600px] lg:w-[600px] relative cursor-move">
            <Canvas className="canvas" dpr={[1, 1.5]}>
                <ambientLight intensity={1} />
                <directionalLight position={[3, 2, 1]} />
                <AnimatedSphere />
                <OrbitControls enableZoom={false} autoRotate={false} />
            </Canvas>
        </div>
    );
};

export default Hero3D;