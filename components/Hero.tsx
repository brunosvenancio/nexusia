import React from 'react';
import { ArrowRight, Bot } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Gradient Mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[128px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-blue-400 text-sm font-medium mb-8 animate-fade-in-up">
          <Bot size={16} />
          <span>Consultoria Especializada em IA</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight max-w-4xl mx-auto">
          Transforme IA em <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Produtividade Real</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Menos processos manuais, mais escala. Implemento fluxos de trabalho inteligentes e automações com IA que reduzem custos operacionais e liberam seu time para o que realmente importa.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all shadow-lg shadow-blue-900/20 flex items-center gap-2 w-full sm:w-auto justify-center">
            Agendar Diagnóstico Gratuito
            <ArrowRight size={20} />
          </a>
          <a href="#services" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-all border border-slate-700 w-full sm:w-auto justify-center">
            Ver Soluções
          </a>
        </div>
      </div>
    </section>
  );
};