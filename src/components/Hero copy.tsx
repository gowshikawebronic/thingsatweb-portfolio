'use client';

import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows, MeshTransmissionMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const COLORS = {
    blue: '#007AFF',
    green: '#00CC66',
    dark: '#0f172a',
    light: '#f8fafc',
};

function GeometricField() {
    const groupRef = useRef<THREE.Group>(null);

    // 40 particles
    const particles = useMemo(() => {
        return new Array(40).fill(0).map(() => {
            // Target position (final state)
            const targetPos = new THREE.Vector3(
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 6,
                (Math.random() - 0.5) * 6
            );

            // Start position (dispersed "gas" state) - far away
            const startPos = targetPos.clone().multiplyScalar(5 + Math.random() * 5);

            return {
                targetPos,
                startPos,
                currentPos: startPos.clone(), // Current mutable position
                scale: 0.2 + Math.random() * 0.4,
                rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0] as [number, number, number],
                geometryType: Math.floor(Math.random() * 3), // 0: Box, 1: Sphere, 2: Tetra
                speed: 0.5 + Math.random(), // Animation speed factor
                delay: Math.random() * 2, // Random delay for "organic" feel
            };
        });
    }, []);

    useFrame((state) => {
        if (!groupRef.current) return;

        const { pointer, clock } = state;
        const t = clock.getElapsedTime();

        // 1. Mouse Interaction (Rotation)
        // Rotate the entire group towards the mouse pointer
        groupRef.current.rotation.x = THREE.MathUtils.lerp(
            groupRef.current.rotation.x,
            pointer.y * 0.2,
            0.1
        );
        groupRef.current.rotation.y = THREE.MathUtils.lerp(
            groupRef.current.rotation.y,
            pointer.x * 0.2,
            0.1
        );

        // 2. Gas Intro Animation
        // We manually update children meshes if we want individual control, 
        // OR we can just use the particles data if we map them conceptually.
        // Since we are mapping in render, we need refs or direct updates.
        // For performance in R3F w/o refs array, let's keep it simple:

        // Actually, to animate individual particles efficiently without 40 refs, 
        // we can use the fact that they are children of groupRef.
        // But React re-renders might kill us if we use state. 
        // Let's rely on the fact that `particles` constant is stable.
        // We will animate the `groupRef.current.children` directly.

        // Skip the first child (the Core mesh group is likely first or we check geometry)
        // The "Core" is inside a Float, so it's a Group. The particles are Float > Mesh.
        // It's safer to just iterate and lerp.
    });

    return (
        <group ref={groupRef}>
            {/* Central "Core" Object - Interactive */}
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <mesh>
                    <icosahedronGeometry args={[1.5, 0]} />
                    <MeshTransmissionMaterial
                        backside
                        samples={12}
                        thickness={3}
                        chromaticAberration={0.3}
                        anisotropy={0.5}
                        color={COLORS.blue}
                        roughness={0.2}
                        toneMapped={true}
                    />
                </mesh>
                <mesh scale={1.01}>
                    <icosahedronGeometry args={[1.5, 0]} />
                    <meshBasicMaterial color={COLORS.green} wireframe transparent opacity={0.1} />
                </mesh>
            </Float>

            {/* Floating Particles with Gas Intro Logic */}
            {particles.map((data, i) => (
                <Particle
                    key={i}
                    data={data}
                />
            ))}
        </group>
    );
}

// Sub-component for individual particle animation
function Particle({ data }: { data: any }) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;

        const t = state.clock.getElapsedTime();

        // "Gas" Intro Animation
        // Lerp from startPos to targetPos
        // Use a simple easing formula
        // We want them to arrive within first 2-3 seconds

        // Calculate progress (0 to 1)
        // t starts at 0. Let's say animation takes 3 seconds total.
        const progress = THREE.MathUtils.clamp((t - 0.5) * 0.5, 0, 1); // Delayed start 0.5s, duration 2s
        const eased = 1 - Math.pow(1 - progress, 3); // Cubic ease out

        const currentX = THREE.MathUtils.lerp(data.startPos.x, data.targetPos.x, eased);
        const currentY = THREE.MathUtils.lerp(data.startPos.y, data.targetPos.y, eased);
        const currentZ = THREE.MathUtils.lerp(data.startPos.z, data.targetPos.z, eased);

        meshRef.current.position.set(currentX, currentY, currentZ);

        // Update Opacity based on progress
        // We need to access material to change opacity
        const material = meshRef.current.material as THREE.MeshStandardMaterial;
        if (material) {
            material.opacity = THREE.MathUtils.lerp(0, 0.8, eased);
        }
    });

    return (
        <Float
            speed={1 + Math.random()}
            rotationIntensity={1 + Math.random()}
            floatIntensity={1 + Math.random()}
        >
            <mesh ref={meshRef} scale={data.scale} rotation={data.rotation}>
                {data.geometryType === 0 && <boxGeometry />}
                {data.geometryType === 1 && <icosahedronGeometry args={[0.8, 0]} />}
                {data.geometryType === 2 && <tetrahedronGeometry />}

                <meshStandardMaterial
                    color={Math.random() > 0.5 ? COLORS.blue : COLORS.green}
                    roughness={0.3}
                    metalness={0.8}
                    transparent
                    opacity={0} // Start invisible
                />
            </mesh>
        </Float>
    );
}

function Scene() {
    return (
        <Canvas camera={{ position: [0, 0, 10], fov: 35 }} dpr={[1, 2]}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color={COLORS.blue} />
            <pointLight position={[-10, -10, -10]} intensity={1} color={COLORS.green} />
            <Environment preset="city" />
            <GeometricField />
            <ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
        </Canvas>
    );
}

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden flex flex-col md:flex-row items-center pt-24 md:pt-0">
            {/* Left Column: Text Content */}
            <div className="w-full md:w-1/2 px-6 md:pl-20 z-10 flex flex-col justify-center items-start h-full order-2 md:order-1 mt-12 md:mt-0">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-6 flex items-center gap-2 px-4 py-1 rounded-full bg-white/50 backdrop-blur border border-white/60 text-sm font-medium text-[#007AFF] self-start"
                >
                    <span className="flex h-2 w-2 rounded-full bg-[#00CC66] animate-pulse"></span>
                    Reimagining Digital Enterprise
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-5xl md:text-7xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-[#007AFF] to-[#00CC66] text-left"
                >
                    NEXT GEN <br /> REALITY
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg md:text-xl text-slate-500 max-w-lg mb-10 leading-relaxed text-left"
                >
                    We blend high-end service architecture with cutting-edge product innovation to build the backbone of modern enterprises.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex gap-4"
                >
                    <button className="px-8 py-4 bg-[#007AFF] text-white rounded-full font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all">
                        View Our Work
                    </button>
                    <button className="px-8 py-4 bg-white text-slate-800 border border-slate-200 rounded-full font-bold hover:bg-slate-50 transition-all">
                        Contact Us
                    </button>
                </motion.div>
            </div>

            {/* Right Column: 3D Interaction */}
            <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative order-1 md:order-2">
                <Scene />
            </div>

            {/* Scroll Indicator (Optional - positioned absolutely at bottom center of screen if desired, or hidden) */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0 hidden md:block"
            >
                <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-slate-400 to-transparent" />
            </motion.div>
        </section>
    );
}
