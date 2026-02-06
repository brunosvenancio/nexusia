import React from 'react';
import { Microscope, Bot, GraduationCap, CheckCircle2 } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: <Microscope className="w-10 h-10 text-blue-400" />,
      title: "Diagnóstico de Processos",
      description: "Análise profunda do seu fluxo de trabalho atual para identificar exatamente onde a IA pode gerar impacto imediato e ROI positivo.",
      features: ["Mapeamento de gargalos", "Cálculo de economia potencial", "Roadmap de implementação"]
    },
    {
      icon: <Bot className="w-10 h-10 text-purple-400" />,
      title: "Desenvolvimento de Agentes",
      description: "Criação de assistentes personalizados e agentes autônomos para vendas, suporte ao cliente ou operações internas.",
      features: ["Chatbots inteligentes 24/7", "Automação de e-mails", "Integração com CRM"]
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-emerald-400" />,
      title: "Treinamento Corporativo",
      description: "Capacitação completa do seu time para dominar a engenharia de prompts e utilizar ferramentas de IA no dia a dia.",
      features: ["Workshops práticos", "Material didático", "Suporte pós-treinamento"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-semibold tracking-wider text-sm uppercase">Nossas Soluções</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Como levamos sua empresa ao próximo nível</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300">
              <div className="mb-6 bg-slate-800/50 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-slate-400 mb-8 leading-relaxed min-h-[80px]">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-slate-300 gap-3">
                    <CheckCircle2 size={18} className="text-blue-500 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};