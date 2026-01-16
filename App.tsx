import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechSpecs from './components/TechSpecs';
import Simulation from './components/Simulation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <TechSpecs />
      
      {/* Immersive visual section break */}
      <div className="w-full h-40 bg-gradient-to-b from-zinc-950 to-black"></div>
      
      <Simulation />
      
      {/* Call to Action Section */}
      <section className="py-32 bg-black flex flex-col items-center justify-center text-center px-4 relative">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-black to-black pointer-events-none" />
         
         <h2 className="text-4xl md:text-7xl font-medium mb-8 relative z-10">
            Junte-se à Missão
         </h2>
         <p className="max-w-2xl text-gray-400 mb-10 text-lg relative z-10 font-light">
            Estamos procurando pessoas excepcionais em diversas áreas de engenharia, científica e operacional para ajudar a desenvolver tecnologias de interface cérebro-máquina.
         </p>
         <button className="relative z-10 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-transform duration-300 hover:scale-105 active:scale-95">
            Ver Vagas Abertas
         </button>
      </section>

      <Footer />
    </div>
  );
}

export default App;