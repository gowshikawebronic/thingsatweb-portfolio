'use client';

import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows, MeshTransmissionMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import * as THREE from 'three';
import Image from 'next/image';
import Link from 'next/link';
// Assuming LeadModal is in the same directory or adjust path accordingly
import LeadModal from './LeadModal'; 

const COLORS = {
    blue: '#007AFF',
    green: '#00CC66',
    light: '#ffffff', // Primary Background
    dark: '#0f172a',  // Primary Text/Accents
    slate: '#64748b', // Muted Text
};

// --- 3D COMPONENTS (From Reference) ---

function GeometricField() {
    const groupRef = useRef<THREE.Group>(null);
    const particleCount = 25;

    const particles = useMemo(() => {
        return new Array(particleCount).fill(0).map(() => ({
            position: [
                (Math.random() - 0.5) * 15,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10
            ] as [number, number, number],
            scale: 0.2 + Math.random() * 0.4,
            rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0] as [number, number, number],
            geometryType: Math.floor(Math.random() * 3)
        }));
    }, []);

    useFrame((state) => {
        if (!groupRef.current) return;
        const { pointer } = state;
        // Subtle mouse interaction
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, pointer.y * 0.15, 0.05);
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, pointer.x * 0.15, 0.05);
    });

    return (
        <group ref={groupRef}>
            {/* Main Floating Geometric Core */}
            <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.5}>
                <mesh>
                    <icosahedronGeometry args={[2, 0]} />
                    <MeshTransmissionMaterial
                        backside
                        samples={8}
                        thickness={1}
                        chromaticAberration={0.2}
                        anisotropy={0.1}
                        color={COLORS.blue}
                        roughness={0.05}
                        transmission={1}
                    />
                </mesh>
                <mesh scale={1.03}>
                    <icosahedronGeometry args={[2, 0]} />
                    <meshBasicMaterial color={COLORS.dark} wireframe transparent opacity={0.05} />
                </mesh>
            </Float>

            {/* Scattered Particles */}
            {particles.map((data, i) => (
                <Particle key={i} data={data} />
            ))}
        </group>
    );
}

function Particle({ data }: { data: any }) {
    return (
        <Float
            speed={1 + Math.random()}
            rotationIntensity={2}
            floatIntensity={1}
            position={data.position}
        >
            <mesh scale={data.scale} rotation={data.rotation}>
                {data.geometryType === 0 && <boxGeometry />}
                {data.geometryType === 1 && <icosahedronGeometry args={[0.8, 0]} />}
                {data.geometryType === 2 && <tetrahedronGeometry />}
                <meshStandardMaterial
                    color={Math.random() > 0.5 ? COLORS.blue : COLORS.green}
                    roughness={0.2}
                    metalness={0.8}
                />
            </mesh>
        </Float>
    );
}

function Scene() {
    return (
        <Canvas camera={{ position: [0, 0, 12], fov: 45 }} dpr={[1, 2]}>
            <ambientLight intensity={1.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color={COLORS.blue} />
            <pointLight position={[-10, -10, -10]} intensity={1} color={COLORS.green} />
            <Environment preset="apartment" />
            <GeometricField />
            <ContactShadows position={[0, -4.5, 0]} opacity={0.2} scale={20} blur={3} far={4.5} color={COLORS.dark} />
        </Canvas>
    );
}

// --- MAIN HERO COMPONENT ---

export default function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="relative h-screen w-full mt-10 bg-white text-[#0f172a] flex overflow-hidden">
            
            {/* Sidebar Navigation */}
            <motion.div
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="hidden md:flex flex-col justify-between items-center w-24 h-full border-r border-slate-100 bg-white/80 backdrop-blur-md z-20 py-10"
            >
                {/* Logo */}
                
                    <div className="relative bg-slate-400/20 rounded-sm top-20 flex items-center justify-center overflow-hidden transition-transform duration-300 hover:scale-110 ">
                        <Image
                            src="./assets/logo/thingsatweb.png"
                            alt="ThingsAtWeb Logo"
                            width={40}
                            height={40}
                            className="object-contain p-1.5"
                        />
                    </div>
                

                {/* Vertical Social Links */}
                <div className="flex flex-col gap-6 items-center text-slate-400">
                    <div className="writing-vertical-rl rotate-180 text-xs font-mono tracking-widest uppercase hover:text-black cursor-pointer transition-colors">
                        Connect
                    </div>
                    <div className="w-[1px] h-16 bg-slate-200" />
                    <div className="flex flex-col gap-4">
                        <Linkedin size={18} className="hover:text-[#007AFF] cursor-pointer transition-colors" />
                        <Twitter size={18} className="hover:text-[#007AFF] cursor-pointer transition-colors" />
                        <Instagram size={18} className="hover:text-pink-500 cursor-pointer transition-colors" />
                    </div>
                </div>
            </motion.div>

            {/* MAIN CONTENT AREA */}
            <div className="flex-1 relative flex flex-col md:flex-row">

                <div className="relative z-10 w-full md:w-[60%] h-full flex flex-col justify-center px-8 md:px-20 pt-24 md:pt-0">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight mb-8"
                    >
                        Is it <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007AFF] to-[#00CC66]">
                            You’re Looking For?
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-slate-600 text-lg md:text-xl max-w-xl leading-relaxed mb-10"
                    >
                        Whether you need a new website, app, marketing campaign, SEO, or IoT for your company, 
                        the key to success is a creative and well-thought-out plan. 
                        <span className="block mt-4 font-semibold text-dark italic">Things at Web is a world-class web agency.</span>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-wrap items-center gap-4"
                    >
                        <button 
                            onClick={() => setIsModalOpen(true)}
                            className="h-14 px-8 bg-[#0f172a] cursor-pointer rounded text-white font-bold hover:bg-black transition-all flex items-center gap-3 group shadow-lg shadow-blue-900/10 hover:bg-white hover:text-black duration-300  ease-in"
                        >
                            Create Free Website
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        
                        <button 
                            onClick={() => setIsModalOpen(true)}
                            className="h-14 px-8 border-2 border-slate-200 cursor-pointer rounded text-[#0f172a] font-bold transition-colors hover:bg-black hover:text-white duration-300  ease-in  "
                        >
                            Free Website Analysis
                        </button>
                    </motion.div>
                </div>

                {/* 3D Scene Wrapper */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="absolute top-0 right-0 w-full md:w-[50%] h-full z-0"
                >
                    <div className="w-full h-full relative">
                        {/* Light Gradient Overlay for blending */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent z-10 pointer-events-none" />
                        
                        {/* Render the 3D Scene */}
                        <Scene />
                    </div>
                </motion.div>
            </div>

         

            {/* Lead Modal Integration */}
            <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        </section>
    );
}