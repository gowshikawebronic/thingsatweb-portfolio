'use client';

import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  Float, 
  Environment, 
  ContactShadows, 
  MeshDistortMaterial, 
  Sphere,
  Stars
} from '@react-three/drei';
import * as THREE from 'three';
import { 
  motion, 
  useInView, 
  useScroll, 
  useSpring,
  Variants,
} from 'framer-motion';
import { 
  Target, Users, Shield, Rocket, CheckCircle, Star, Award, 
  Globe, TrendingUp, Linkedin, Twitter, Github, ArrowRight, Zap 
} from 'lucide-react';
import LeadModal from '@/components/LeadModal';

// --- Global Styles & Constants ---

const COLORS = {
  blue: '#4F86E8', 
  green: '#16A34A', 
  dark: '#0F172A',
  light: '#ffffff',
  accent: '#38bdf8' // Light Sky Blue for highlights
};

const GlobalStyles = () => (
  <style jsx global>{`
    :root {
      --font-poppins: 'Poppins', sans-serif;
      --color-primary-blue: #4F86E8;
      --color-brand-green: #16A34A;
      --color-nav-text: #475569;
      --color-page-bg: #FAF7F6;
      --color-heading: #0F172A;
    }
  `}</style>
);

// --- NEW 3D DESIGN: Liquid Digital Core ---

function LiquidCore() {
  const sphereRef = useRef<THREE.Mesh>(null);
  const shellRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!sphereRef.current || !shellRef.current) return;
    const { clock } = state;
    // Rotate the shell slowly
    shellRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    shellRef.current.rotation.z = clock.getElapsedTime() * 0.05;
  });

  return (
    <group>
      {/* Inner Liquid Sphere (Blue) */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <Sphere ref={sphereRef} args={[1.4, 64, 64]}>
          <MeshDistortMaterial
            color={COLORS.blue}
            envMapIntensity={1}
            clearcoat={1}
            clearcoatRoughness={0}
            metalness={0.1}
            roughness={0.1}
            distort={0.4} // Strength of the liquid effect
            speed={2}     // Speed of the liquid movement
          />
        </Sphere>
      </Float>

      {/* Outer Wireframe Shell (Green) */}
      <Float speed={3} rotationIntensity={1.5} floatIntensity={0.5}>
        <Sphere ref={shellRef} args={[2.2, 32, 32]}>
          <meshStandardMaterial 
            color={COLORS.green} 
            wireframe 
            transparent 
            opacity={0.1} 
          />
        </Sphere>
      </Float>
    </group>
  );
}

function DataPackets() {
  // Generate random positions for floating cubes
  const count = 40;
  const positions = useMemo(() => {
    return new Array(count).fill(0).map(() => ({
      position: [
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 10
      ] as [number, number, number],
      scale: Math.random() * 0.2 + 0.05,
    }));
  }, []);

  return (
    <group>
      {positions.map((props, i) => (
        <Float 
          key={i} 
          speed={1 + Math.random()} 
          rotationIntensity={2} 
          floatIntensity={2} 
          position={props.position}
        >
          <mesh>
            <boxGeometry args={[props.scale, props.scale, props.scale]} />
            <meshStandardMaterial 
              color={i % 2 === 0 ? COLORS.dark : COLORS.accent} 
              transparent 
              opacity={0.6}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color={COLORS.light} />
      <pointLight position={[-10, -10, -5]} intensity={1} color={COLORS.blue} />
      <spotLight position={[0, 5, 0]} intensity={2} angle={0.5} penumbra={1} />
      
      {/* Environment for reflections */}
      <Environment preset="city" />
      
      {/* 3D Elements */}
      <LiquidCore />
      <DataPackets />
      
      {/* Background Stars for depth (Optional, can remove for cleaner look) */}
      <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />

      {/* Ground Shadow */}
      <ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={20} blur={2.5} far={4} color="#000" />
    </Canvas>
  );
}

// --- Helper Components ---

function Counter({ value, suffix = "", duration = 2 }: { value: number, suffix?: string, duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalFrames = duration * 60;
      const increment = end / totalFrames;
      let currentFrame = 0;
      const timer = setInterval(() => {
        currentFrame++;
        start += increment;
        if (currentFrame >= totalFrames) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
}

// --- Main Page Component ---

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Data
  const stats = [
    { value: 200, suffix: "+", label: "Projects Delivered", icon: CheckCircle },
    { value: 50, suffix: "+", label: "Experts", icon: Users },
    { value: 98, suffix: "%", label: "Client Retention", icon: Star },
    { value: 10, suffix: "+", label: "Years of Trust", icon: Award }
  ];

  const teamMembers = [
    { name: "Alex Morgan", role: "Lead Developer", expertise: "Full Stack & AI", icon: Globe },
    { name: "Sarah Chen", role: "UX Director", expertise: "Product Design", icon: Linkedin }, 
    { name: "Marcus Rivera", role: "Data Scientist", expertise: "Machine Learning", icon: Twitter },
    { name: "Elena Petrova", role: "DevOps Lead", expertise: "Cloud Infrastructure", icon: Github }
  ];

  const testimonials = [
    { quote: "The platform's AI capabilities have revolutionized our development workflow.", name: "David Thompson", role: "VP Engineering, Intel" },
    { quote: "Exceptional scalability and performance. This team understands enterprise.", name: "Michael Wilson", role: "Cloud Architect, AWS" },
    { quote: "The analytics insights provided were immediate and actionable.", name: "Emily Rodriguez", role: "Data Lead, Google Cloud" }
  ];

  // Animation Variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-[var(--color-page-bg)] font-[family-name:var(--font-poppins)] overflow-x-hidden selection:bg-[var(--color-primary-blue)] selection:text-white">
      <GlobalStyles />
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-brand-green)] to-[var(--color-primary-blue)] transform origin-left z-50"
        style={{ scaleX }}
      />

      {/* --- HERO SECTION WITH 3D --- */}
      <section className="relative h-screen w-full flex flex-col md:flex-row overflow-hidden bg-white/50">
        
        {/* Left: Text Content */}
        <div className="relative z-10 w-full md:w-[55%] h-full flex flex-col justify-center px-8 md:px-20 pt-24 md:pt-0">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                <motion.h1 
                    variants={fadeInUp}
                    className="text-5xl lg:text-7xl font-bold text-[var(--color-heading)] leading-[1.1] mb-8 tracking-tight"
                >
                    Everything needed <br />
                    to go{' '}
                    <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-blue)] to-[var(--color-brand-green)]">
                    Digital
                    </span>
                </motion.h1>

                <motion.p 
                    variants={fadeInUp}
                    className="text-xl text-[var(--color-nav-text)] leading-relaxed mb-10 max-w-lg"
                >
                    Things at Web is a premier IT powerhouse. We blend artistic innovation with engineering precision to create unique digital solutions for forward-thinking enterprises.
                </motion.p>

                <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4">
                    <button 
                        onClick={() => setIsModalOpen(true)}
                        className="h-14 px-8 bg-[var(--color-heading)] text-white font-bold hover:bg-black transition-all flex items-center gap-3 group shadow-lg shadow-blue-900/10 rounded-lg"
                    >
                        Start Your Journey
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    <button 
                        onClick={() => setIsModalOpen(true)}
                        className="h-14 px-8 border-2 border-slate-200 text-[var(--color-heading)] font-bold hover:bg-slate-50 transition-colors rounded-lg"
                    >
                        View Case Studies
                    </button>
                </motion.div>
            </motion.div>
        </div>

        {/* Right: 3D Scene Wrapper */}
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute md:relative top-0 right-0 w-full md:w-[45%] h-full z-0 md:z-0"
        >
            <div className="w-full h-full relative">
                {/* Gradient Overlay for blending into light bg */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-page-bg)] via-transparent to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-page-bg)] via-transparent to-transparent z-10 pointer-events-none md:hidden" />
                
                {/* The 3D Scene */}
                <Scene />
            </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-20 md:translate-x-0 flex items-center gap-4 text-slate-400 text-xs font-mono"
        >
            <span>SCROLL</span>
            <div className="h-[1px] w-12 bg-slate-300" />
        </motion.div>
      </section>

      {/* --- Mission & Technology Cards --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto -mt-20 relative z-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Card 1: Mission */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="group relative bg-white rounded-[2rem] p-10 shadow-xl shadow-gray-100/50 border border-gray-100 overflow-hidden hover:shadow-2xl transition-all"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[var(--color-page-bg)] flex items-center justify-center mb-8">
                  <Target className="w-7 h-7 text-[var(--color-brand-green)]" />
                </div>
                <h3 className="text-3xl font-bold text-[var(--color-heading)] mb-4">Our Mission</h3>
                <p className="text-[var(--color-nav-text)] text-lg leading-relaxed mb-8">
                  We aim to democratize sophisticated technology. By crafting elegant, data-driven resolutions, we assist organizations in performing better.
                </p>
                <div className="flex items-center gap-2 text-[var(--color-brand-green)] font-semibold cursor-pointer">
                  <span>Explore our vision</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>

            {/* Card 2: Technology (Updated to Blue Background) */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              // CHANGED: Using primary blue gradient instead of dark
              className="group relative bg-gradient-to-br from-[var(--color-primary-blue)] to-[#3b82f6] rounded-[2rem] p-10 shadow-xl text-white overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-8 border border-white/10">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Data-Driven Excellence</h3>
                <p className="text-gray-100 text-lg leading-relaxed mb-8">
                  Leveraging cutting-edge analytics and AI to deliver solutions that not only meet expectations but drive tangible results.
                </p>
                <div className="flex flex-wrap gap-3">
                   {['AI/ML', 'Cloud Native', 'Analytics'].map((tag) => (
                     <span key={tag} className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg text-sm">
                       {tag}
                     </span>
                   ))}
                </div>
              </div>
            </motion.div>
          </div>
      </section>

      {/* --- Stats Section --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center group p-6 rounded-2xl hover:bg-[var(--color-page-bg)] transition-colors duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <Icon className="w-8 h-8 text-[var(--color-primary-blue)] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-[var(--color-heading)] mb-2 tracking-tight">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[var(--color-nav-text)] font-medium uppercase tracking-wider text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- Team Section --- */}
      <section className="py-24 px-6 relative overflow-hidden bg-[var(--color-page-bg)]">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-primary-blue)]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-20 md:flex justify-between items-end border-b border-[var(--color-heading)]/5 pb-8"
          >
            <div className="max-w-2xl">
              <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-bold text-[var(--color-heading)] mb-6 tracking-tight">
                Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-green)] to-[var(--color-primary-blue)]">Creators</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-[var(--color-nav-text)] leading-relaxed">
                Our innovative, dynamic, and talented team is the driving force behind our success.
              </motion.p>
            </div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member) => {
              const Icon = member.icon;
              return (
                <motion.div key={member.name} variants={fadeInUp} className="group relative h-[420px] perspective-1000">
                  <div className="absolute inset-0 bg-white rounded-[2rem] shadow-lg shadow-gray-100/50 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 overflow-hidden border border-gray-100/80">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-green)] to-[var(--color-primary-blue)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ padding: '2px' }}>
                      <div className="h-full w-full bg-white rounded-[1.9rem]"></div>
                    </div>
                    <div className="relative h-full flex flex-col items-center justify-center p-8 z-10">
                      <motion.div className="relative mb-8" whileHover={{ scale: 1.1, rotate: 5 }}>
                        <div className="w-24 h-24 rounded-3xl bg-[var(--color-page-bg)] flex items-center justify-center border border-white shadow-inner relative z-10">
                          <Icon className="w-10 h-10 text-[var(--color-nav-text)] group-hover:text-[var(--color-brand-green)] transition-colors duration-300" />
                        </div>
                      </motion.div>
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-[var(--color-heading)] mb-1">{member.name}</h3>
                        <div className="text-sm font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-green)] to-[var(--color-primary-blue)] mb-3">{member.role}</div>
                        <p className="text-[var(--color-nav-text)] text-sm opacity-80">{member.expertise}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* --- Testimonials --- */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-heading)] mb-6">
              Trusted by Industry <span className="text-[var(--color-primary-blue)]">Leaders</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[var(--color-page-bg)] p-8 rounded-2xl relative"
              >
                <span className="text-6xl font-serif text-[var(--color-brand-green)]/20 absolute top-6 left-6">"</span>
                <div className="relative z-10 pt-6">
                  <p className="text-lg text-[var(--color-nav-text)] italic mb-8">{t.quote}</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-brand-green)] to-[var(--color-primary-blue)] flex items-center justify-center text-white font-bold text-lg">
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="font-bold text-[var(--color-heading)]">{t.name}</div>
                      <div className="text-sm text-[var(--color-nav-text)]">{t.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA (Updated to Blue Background) --- */}
      <section className="py-20 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          // CHANGED: bg-[var(--color-heading)] to bg-[var(--color-primary-blue)]
          className="max-w-6xl mx-auto rounded-[3rem] relative overflow-hidden bg-[var(--color-primary-blue)] text-white px-8 py-20 text-center shadow-2xl shadow-blue-500/30"
        >
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
             {/* CHANGED: Adjusted decoration colors to be visible on blue bg */}
             <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] bg-white/10 rounded-full blur-[100px]" />
             <div className="absolute bottom-[-50%] right-[-20%] w-[80%] h-[80%] bg-[var(--color-brand-green)]/30 rounded-full blur-[100px]" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="flex justify-center mb-8">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
              >
                <Globe className="w-12 h-12 text-white" />
              </motion.div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Ready to Transform?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button 
                onClick={() => setIsModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-[var(--color-brand-green)] text-white font-bold rounded-xl shadow-[0_10px_20px_rgba(22,163,74,0.3)] transition-shadow w-full sm:w-auto"
              >
                Start Free Trial
              </motion.button>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-blue-100">
               <span className="flex items-center gap-2"><Shield className="w-4 h-4" /> No credit card required</span>
               <span className="flex items-center gap-2"><Rocket className="w-4 h-4" /> 14-Day free trial</span>
               <span className="flex items-center gap-2"><Zap className="w-4 h-4" /> 24/7 Support</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}