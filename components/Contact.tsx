import React from 'react';
import { Mail, Linkedin, Twitter } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Pronto para escalar sua produtividade?</h2>
          <p className="text-xl text-slate-400">
            Não deixe sua empresa ficar para trás na revolução da IA. Agende uma conversa hoje mesmo.
          </p>
        </div>

        <div className="bg-slate-800/30 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm max-w-2xl mx-auto">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Nome</label>
                <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Seu nome" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">E-mail Corporativo</label>
                <input type="email" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none" placeholder="voce@empresa.com" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Qual seu maior desafio hoje?</label>
              <select className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none">
                <option>Selecione uma opção</option>
                <option>Processos manuais excessivos</option>
                <option>Implementação de Agentes AI</option>
                <option>Treinamento da equipe</option>
                <option>Outro</option>
              </select>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-lg transition-colors text-lg shadow-lg">
              Solicitar Contato
            </button>
          </form>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm">
            © 2024 AI Productivity Solutions. Todos os direitos reservados.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Mail /></a>
          </div>
        </div>
      </div>
    </section>
  );
};