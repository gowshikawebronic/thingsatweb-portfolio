'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows, MeshTransmissionMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ArrowDown, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import * as THREE from 'three';

const COLORS = {
    blue: '#007AFF',
    green: '#00CC66',
    dark: '#0f172a',
    light: '#f8fafc',
};


function GeometricField() {
    const groupRef = useRef<THREE.Group>(null);
    const particleCount = 30;

    const particles = useMemo(() => {
        return new Array(particleCount).fill(0).map(() => ({
            position: [
                (Math.random() - 0.5) * 15,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10
            ] as [number, number, number],
            scale: 0.2 + Math.random() * 0.5,
            rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0] as [number, number, number],
            geometryType: Math.floor(Math.random() * 3) // 0: Box, 1: Sphere, 2: Tetra
        }));
    }, []);

    useFrame((state) => {
        if (!groupRef.current) return;
        const { pointer, clock } = state;

        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, pointer.y * 0.1, 0.05);
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, pointer.x * 0.1, 0.05);
    });

    return (
        <group ref={groupRef}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <mesh>
                    <icosahedronGeometry args={[1.8, 0]} />
                    <MeshTransmissionMaterial
                        backside
                        samples={12}
                        thickness={2}
                        chromaticAberration={0.4}
                        anisotropy={0.3}
                        color={COLORS.blue}
                        roughness={0.1}
                        toneMapped={true}
                    />
                </mesh>
                <mesh scale={1.02}>
                    <icosahedronGeometry args={[1.8, 0]} />
                    <meshBasicMaterial color={COLORS.green} wireframe transparent opacity={0.15} />
                </mesh>
            </Float>

            {particles.map((data, i) => (
                <Particle key={i} data={data} delay={i * 0.05} />
            ))}
        </group>
    );
}

function Particle({ data, delay }: { data: any, delay: number }) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
    });

    return (
        <Float
            speed={1 + Math.random()}
            rotationIntensity={1 + Math.random()}
            floatIntensity={2}
            position={data.position}
        >
            <mesh ref={meshRef} scale={data.scale} rotation={data.rotation}>
                {data.geometryType === 0 && <boxGeometry />}
                {data.geometryType === 1 && <icosahedronGeometry args={[0.8, 0]} />}
                {data.geometryType === 2 && <tetrahedronGeometry />}
                <meshStandardMaterial
                    color={Math.random() > 0.5 ? COLORS.blue : COLORS.green}
                    roughness={0.4}
                    metalness={0.6}
                />
            </mesh>
        </Float>
    );
}

function Scene() {
    return (
        <Canvas camera={{ position: [0, 0, 14], fov: 40 }} dpr={[1, 2]}>
            <ambientLight intensity={0.7} />
            <spotLight position={[20, 20, 10]} angle={0.2} penumbra={1} intensity={1.5} color={COLORS.blue} />
            <pointLight position={[-10, -10, -10]} intensity={1} color={COLORS.green} />
            <Environment preset="city" />
            <GeometricField />
            <ContactShadows position={[0, -4, 0]} opacity={0.4} scale={30} blur={2.5} far={5} color="#000" />
        </Canvas>
    );
}


export default function Hero() {
    return (
        <section className="relative h-screen w-full bg-[#0f172a] text-white flex overflow-hidden">

            <motion.div
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="hidden md:flex flex-col justify-between items-center w-24 h-full border-r border-slate-800 bg-[#0f172a]/50 backdrop-blur-md z-20 py-10"
            >
                {/* Logo Mark */}
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#007AFF] to-[#00CC66] flex items-center justify-center font-bold text-lg">
                    N
                </div>

                {/* Vertical Social Text */}
                <div className="flex flex-col gap-6 items-center text-slate-500">
                    <div className="writing-vertical-rl rotate-180 text-xs font-mono tracking-widest uppercase hover:text-white cursor-pointer transition-colors">
                        Follow Us
                    </div>
                    <div className="w-[1px] h-16 bg-slate-800" />
                    <div className="flex flex-col gap-4">
                        <Linkedin size={18} className="hover:text-[#007AFF] cursor-pointer transition-colors" />
                        <Twitter size={18} className="hover:text-[#00CC66] cursor-pointer transition-colors" />
                        <Instagram size={18} className="hover:text-pink-500 cursor-pointer transition-colors" />
                    </div>
                </div>
            </motion.div>

            {/* MAIN CONTENT AREA */}
            <div className="flex-1 relative flex flex-col md:flex-row">

                {/* Text Content */}
                <div className="relative z-10 w-full md:w-[55%] h-full flex flex-col justify-center px-8 md:px-20 pt-24 md:pt-0">
                

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter mb-8"
                    >
                        NEXT <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007AFF] to-[#00CC66]">
                            GEN
                        </span> <br />
                        REALITY
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        className="text-slate-400 text-lg md:text-xl max-w-md leading-relaxed mb-12"
                    >
                        We architect the immersive web. From high-fidelity 3D experiences to enterprise-scale platforms.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.1 }}
                        className="flex items-center gap-6"
                    >
                        <button className="h-14 px-8 rounded-none border-b-2 border-[#00CC66] text-white font-bold hover:bg-[#00CC66]/10 transition-colors flex items-center gap-3 group">
                            Start Project
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>

                {/* 3D Scene Wrapper */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute top-0 right-0 w-full md:w-[60%] h-full z-0 md:mr-[-10%]"
                >
                    <div className="w-full h-full relative">
                        {/* Gradient Overlay for blending */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-transparent to-transparent z-10 pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-transparent to-transparent z-10 pointer-events-none md:hidden" />

                        <Scene />
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-12 right-12 flex items-center gap-4 text-slate-500 text-xs font-mono"
            >
                <span>SCROLL</span>
                <div className="h-[1px] w-12 bg-slate-700" />
            </motion.div>

        </section>
    );
}

// Custom CSS for vertical writing mode tailwind class if not available
// Usually 'writing-mode: vertical-rl'
