import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Wifi, Activity, BatteryCharging } from 'lucide-react';

const TechSpecs: React.FC = () => {
  const specs = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "O Link",
      value: "1024",
      unit: "Canais",
      desc: "Capaz de gravar de 1024 eletrodos distribuídos em 64 fios ultraflexíveis."
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Bio-Amplificador",
      value: "< 1ms",
      unit: "Latência",
      desc: "Processamento de picos neurais em tempo real com rejeição de ruído avançada."
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Conectividade",
      value: "BT 5.3",
      unit: "Low Energy",
      desc: "Transmissão sem fio criptografada de alta largura de banda para dispositivos externos."
    },
    {
      icon: <BatteryCharging className="w-8 h-8" />,
      title: "Autonomia",
      value: "24h",
      unit: "Ciclo de uso",
      desc: "Bateria de longa duração com carregamento indutivo compacto e invisível."
    }
  ];

  return (
    <section id="technology" className="py-32 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
            <div className="max-w-xl">
                <h2 className="text-4xl md:text-5xl font-medium mb-4">Engenharia de Precisão</h2>
                <p className="text-gray-400 font-light">
                    O N1 Implant é totalmente invisível cosmeticamente. É selado em um invólucro biocompatível que suporta condições fisiológicas adversas.
                </p>
            </div>
            <div className="mt-6 md:mt-0 font-mono text-sm text-gray-500">
                SPEC_SHEET_V2.0.4
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-black p-8 hover:bg-zinc-900 transition-colors duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                 {spec.icon}
              </div>
              
              <div className="text-white/40 mb-12 group-hover:text-white transition-colors duration-300">
                {spec.icon}
              </div>
              
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">{spec.title}</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-light text-white">{spec.value}</span>
                <span className="text-xs font-mono text-gray-400">{spec.unit}</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed font-light">
                {spec.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;