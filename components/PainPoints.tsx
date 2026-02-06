import React from 'react';
import { Clock, TrendingDown, FileQuestion } from 'lucide-react';

export const PainPoints: React.FC = () => {
  const problems = [
    {
      icon: <Clock className="w-8 h-8 text-red-400" />,
      title: "Equipes Sobrecarregadas",
      description: "Seu time gasta horas em tarefas repetitivas e manuais que poderiam ser resolvidas em segundos."
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-orange-400" />,
      title: "Defasagem Tecnológica",
      description: "Dificuldade em acompanhar e implementar as novas ferramentas de IA que seus concorrentes já usam."
    },
    {
      icon: <FileQuestion className="w-8 h-8 text-yellow-400" />,
      title: "Processos Desestruturados",
      description: "Falta de clareza sobre como usar ChatGPT, Claude e Agentes de forma segura e eficiente na empresa."
    }
  ];

  return (
    <section className="py-20 bg-slate-900/50 border-y border-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Sua empresa está travada no passado?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A inteligência artificial não é mais o futuro, é o presente. Ignorar essas ferramentas está custando tempo e dinheiro.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item, index) => (
            <div key={index} className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="bg-slate-900 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};