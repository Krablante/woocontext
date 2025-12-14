import React, { useState } from 'react';
import { generateDescription } from '../services/geminiService';
import { motion } from 'framer-motion';
import { Loader2, Sparkles, BrainCircuit } from 'lucide-react';

export const DemoPlayground: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  
  // Inputs
  const [prompt, setPrompt] = useState('');

  const checkApiKey = async () => {
    try {
      if (window.aistudio && window.aistudio.hasSelectedApiKey) {
        const hasKey = await window.aistudio.hasSelectedApiKey();
        if (!hasKey) {
            await window.aistudio.openSelectKey();
        }
        return true;
      }
      return true; // Fallback if not in specific environment
    } catch (e) {
      console.error("API Key check failed", e);
      return false;
    }
  };

  const handleGenerate = async () => {
    await checkApiKey();
    setLoading(true);
    setResult(null);
    try {
      const res = await generateDescription(prompt, "Premium quality, Eco-friendly materials");
      setResult(res);
    } catch (err) {
      alert("Generation failed. See console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="demo" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
            WooContext Lab
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Experience the efficiency of our GPT-4o integration. Generate descriptions in real-time.
            </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col md:flex-row min-h-[500px]">
          {/* Controls Sidebar */}
          <div className="w-full md:w-1/3 bg-slate-50 border-r border-slate-200 p-6 flex flex-col">
             <div className="mb-6">
                <div className="flex items-center gap-2 text-indigo-600 font-bold text-lg mb-4">
                   <BrainCircuit size={24} />
                   <span>Description Generator</span>
                </div>
                <p className="text-sm text-slate-500">
                   Test our prompt engineering. We automatically format HTML, handle lists, and optimize for SEO.
                </p>
             </div>

             <div className="space-y-6 flex-grow">
                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Product Name</label>
                    <textarea 
                        className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm min-h-[100px]"
                        placeholder="e.g. Ergonomic Standing Desk Pro..."
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                    />
                </div>
                
                <div className="bg-slate-100 p-3 rounded-lg border border-slate-200">
                    <div className="flex justify-between text-xs text-slate-500 mb-1">
                        <span>Model</span>
                        <span className="font-mono text-slate-700">gpt-4o-mini</span>
                    </div>
                    <div className="flex justify-between text-xs text-slate-500">
                        <span>Temperature</span>
                        <span className="font-mono text-slate-700">0.7</span>
                    </div>
                </div>
             </div>

             <button
                onClick={handleGenerate}
                disabled={loading || !prompt}
                className="w-full mt-6 bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-indigo-200 transition-all"
             >
                {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={18} />}
                {loading ? 'Generating...' : 'Generate Description'}
             </button>
          </div>

          {/* Preview Area */}
          <div className="w-full md:w-2/3 bg-slate-900/5 p-6 flex items-center justify-center">
             {loading ? (
                 <div className="text-center">
                    <div className="inline-block w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mb-4"></div>
                    <p className="text-slate-500 font-medium">Processing...</p>
                 </div>
             ) : result ? (
                 <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full h-full overflow-auto p-4"
                 >
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 w-full max-w-2xl prose prose-indigo mx-auto">
                        <h3 className="text-lg font-bold mb-2 text-indigo-900">Result</h3>
                        <div className="whitespace-pre-wrap text-slate-700">{result}</div>
                    </div>
                 </motion.div>
             ) : (
                 <div className="text-center text-slate-400">
                    <div className="bg-white w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-sm border border-slate-200">
                        <BrainCircuit className="text-indigo-400" />
                    </div>
                    <p>Enter a product name to see the magic</p>
                 </div>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};
