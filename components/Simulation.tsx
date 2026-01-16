import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Simulation: React.FC = () => {
  // Generate random data for the graph
  const [points, setPoints] = useState<number[]>([]);

  useEffect(() => {
    // Fill initial
    const initial = Array.from({ length: 50 }, () => 50);
    setPoints(initial);

    const interval = setInterval(() => {
      setPoints(prev => {
        const next = [...prev.slice(1)];
        // Simulate a "spike" randomly
        const isSpike = Math.random() > 0.9;
        const val = isSpike 
            ? Math.random() * 80 + 10 
            : 40 + Math.random() * 20;
        next.push(val);
        return next;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const pathD = `M ${points.map((p, i) => `${i * 20},${100 - p}`).join(' L ')}`;

  return (
    <section id="applications" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div>
           <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
           >
            <h2 className="text-4xl md:text-6xl font-medium mb-6">Controle Digital</h2>
            <p className="text-xl text-gray-300 font-light mb-8">
                Imagine controlar seu computador ou dispositivo móvel apenas pensando. Nossos algoritmos decodificam potenciais de ação em comandos digitais em tempo real.
            </p>

            <ul className="space-y-4 font-mono text-sm text-gray-500">
                <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    DECODIFICAÇÃO NEURAL ATIVA
                </li>
                <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    LATÊNCIA DE LOOP FECHADO: 23ms
                </li>
                <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    1024 CANAIS DE TRANSMISSÃO
                </li>
            </ul>
           </motion.div>
        </div>

        <div className="relative border border-white/20 bg-zinc-900/50 rounded-lg overflow-hidden h-80 backdrop-blur-sm shadow-2xl shadow-blue-900/10">
            {/* Grid background */}
            <div className="absolute inset-0" 
                style={{ 
                    backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    opacity: 0.1
                }} 
            />
            
            <div className="absolute inset-0 flex items-center">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 100">
                    <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
                            <stop offset="50%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#60a5fa" />
                        </linearGradient>
                    </defs>
                    <motion.path 
                        d={pathD} 
                        fill="none" 
                        stroke="url(#lineGradient)" 
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>

            {/* Scanning line */}
            <motion.div 
                className="absolute top-0 bottom-0 w-px bg-white/50 shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                animate={{ left: ['0%', '100%'] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />

            <div className="absolute bottom-4 left-4 font-mono text-xs text-blue-400">
                LIVE_FEED :: SIGNAL_STRENGTH_98%
            </div>
        </div>

      </div>
    </section>
  );
};

export default Simulation;