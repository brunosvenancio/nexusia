import React from 'react';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Services } from './components/Services';
import { AiDemo } from './components/AiDemo';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500/30 selection:text-blue-200">
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Nexus IA
          </span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-white transition-colors">Serviços</a>
            <a href="#contact" className="hover:text-white transition-colors">Contato</a>
          </div>
          <a 
            href="#contact" 
            className="px-4 py-2 bg-slate-100 text-slate-900 rounded-md font-semibold text-sm hover:bg-white transition-colors"
          >
            Fale Conosco
          </a>
        </div>
      </nav>

      <main>
        <Hero />
        <PainPoints />
        <Services />
        <AiDemo />
        <Contact />
      </main>
    </div>
  );
};

export default App;