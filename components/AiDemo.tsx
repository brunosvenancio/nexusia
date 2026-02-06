import React, { useState } from 'react';
import { Sparkles, Send, Loader2 } from 'lucide-react';
import { getQuickDiagnosis } from '../services/geminiService';

export const AiDemo: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleDiagnose = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setResponse(null);
    const result = await getQuickDiagnosis(input);
    setResponse(result);
    setLoading(false);
  };

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <div className="bg-slate-900 p-8">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="text-purple-400" />
                <h2 className="text-2xl font-bold text-white">Demonstração de Diagnóstico IA</h2>
              </div>
              
              <p className="text-slate-400 mb-6">
                Experimente o poder da consultoria automatizada. Descreva um gargalo operacional da sua empresa abaixo e veja como a IA pode ajudar.
              </p>

              <div className="flex flex-col gap-4">
                <textarea
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-4 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none h-32"
                  placeholder="Ex: Minha equipe de vendas perde 2 horas por dia preenchendo relatórios no CRM manualmente..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                
                <div className="flex justify-end">
                  <button
                    onClick={handleDiagnose}
                    disabled={loading || !input}
                    className="px-6 py-3 bg-purple-600 hover:bg-purple-500 disabled:bg-slate-700 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-all flex items-center gap-2"
                  >
                    {loading ? <Loader2 className="animate-spin" /> : <Send size={18} />}
                    {loading ? 'Analisando...' : 'Gerar Solução Instantânea'}
                  </button>
                </div>
              </div>

              {response && (
                <div className="mt-8 pt-8 border-t border-slate-800 animate-fade-in">
                  <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-3">Sugestão da IA</h3>
                  <div className="prose prose-invert prose-p:text-slate-300 max-w-none bg-slate-950 p-6 rounded-lg border border-slate-800/50">
                    {response.split('\n').map((line, i) => (
                      <p key={i} className="mb-2 last:mb-0">{line}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};