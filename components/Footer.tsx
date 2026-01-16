import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-gray-500 py-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div className="col-span-1 md:col-span-2">
            <h4 className="text-white text-lg font-bold uppercase tracking-wider mb-4">NeuralLink</h4>
            <p className="max-w-md font-light text-sm mb-6">
                Pioneirismo no futuro da engenharia neural. Nossa missão é criar uma interface cerebral generalizada para restaurar a autonomia e desbloquear o potencial humano.
            </p>
            <div className="flex gap-4">
                <Twitter className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                <Github className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
            </div>
        </div>

        <div>
            <h5 className="text-white font-semibold mb-4 text-sm uppercase">Explorar</h5>
            <ul className="space-y-2 text-sm font-light">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Ciência</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Abordagem</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Aplicações</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Carreiras</a></li>
            </ul>
        </div>

        <div>
            <h5 className="text-white font-semibold mb-4 text-sm uppercase">Contato</h5>
            <ul className="space-y-2 text-sm font-light">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Imprensa</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Registro de Pacientes</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Ética Animal</a></li>
            </ul>
        </div>

      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs font-mono">
        <p>&copy; 2024 NeuralLink Corp. Todos os direitos reservados.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacidade</a>
            <a href="#" className="hover:text-white">Termos</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;