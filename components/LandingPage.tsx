import React from 'react';
import { motion } from 'framer-motion';
import { TerminalAnimation } from './TerminalAnimation';
import { 
  Database,
  ShieldCheck, 
  Settings2, 
  CheckCircle2, 
  Cpu
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  return (
    <div className="bg-white selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 md:pt-48 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
                    Bulk Generate <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">10,000+ Descriptions.</span><br/>
                    Zero Hallucinations.
                </h1>
                <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                    Powered by Action Scheduler & OpenAI. The only AI plugin that processes huge catalogs in the background without server timeouts or memory leaks.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <a href="#pricing" className="px-8 py-3.5 rounded-lg bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all text-center">
                        Get Started
                    </a>
                    <a href="#how-it-works" className="px-8 py-3.5 rounded-lg bg-white text-slate-700 border border-slate-200 font-semibold hover:bg-slate-50 transition-all text-center">
                        How it Works
                    </a>
                </div>
                <div className="mt-8 flex items-center gap-6 text-sm text-slate-500 font-medium">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-500" /> PHP 8.1 Strict
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-500" /> ACF Compatible
                    </div>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
            >
                <div className="absolute -top-10 -right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <TerminalAnimation />
            </motion.div>

        </div>
      </section>

      {/* Bento Grid Features */}
      <section id="features" className="py-24 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Technical Excellence</h2>
                <p className="mt-4 text-lg text-slate-600">Built by senior engineers for high-volume stores.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Large Card */}
                <motion.div 
                    whileHover={{ y: -5 }}
                    className="md:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between overflow-hidden relative group"
                >
                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 text-indigo-600">
                            <Database size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Enterprise Stability</h3>
                        <p className="text-slate-600 max-w-md">
                            We utilize the Action Scheduler library to process queue items in the background. 
                            This means zero timeout errors, even on shared hosting. 100% PHP 8.1+ Strict Mode compatible.
                        </p>
                    </div>
                    <div className="absolute right-0 bottom-0 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Database size={200} />
                    </div>
                </motion.div>

                {/* Tall Card */}
                <motion.div 
                    whileHover={{ y: -5 }}
                    className="md:row-span-2 bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col relative overflow-hidden"
                >
                    <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6 text-purple-600">
                        <Cpu size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Model Control</h3>
                    <p className="text-slate-600 mb-6">
                        Uses <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-800 text-sm">gpt-4o-mini</code> for high-volume speed and <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-800 text-sm">gpt-4o</code> for creative precision.
                    </p>
                    <div className="mt-auto space-y-3">
                        <div className="flex justify-between text-sm border-b border-slate-100 pb-2">
                            <span className="text-slate-500">Temperature</span>
                            <span className="font-mono text-slate-900">0.7</span>
                        </div>
                        <div className="flex justify-between text-sm border-b border-slate-100 pb-2">
                            <span className="text-slate-500">Top P</span>
                            <span className="font-mono text-slate-900">1.0</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-500">Context</span>
                            <span className="font-mono text-slate-900">128k</span>
                        </div>
                    </div>
                </motion.div>

                {/* Small Card 1 */}
                <motion.div 
                     whileHover={{ y: -5 }}
                    className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200"
                >
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 text-blue-600">
                        <Settings2 size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">Smart Context</h3>
                    <p className="text-slate-600 text-sm mt-2">Reads ACF fields & Product Attributes. We don't just guess; we read the data.</p>
                </motion.div>

                 {/* Small Card 2 */}
                 <motion.div 
                     whileHover={{ y: -5 }}
                    className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200"
                >
                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4 text-green-600">
                        <ShieldCheck size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">Zero Hallucinations</h3>
                    <p className="text-slate-600 text-sm mt-2">Strict system prompts ensure the AI never invents features your product lacks.</p>
                </motion.div>
            </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
             <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">Workflow Automation</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 relative">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -z-10 hidden md:block transform -translate-y-1/2"></div>
                
                {[
                    { step: "01", title: "Configure", desc: "Set tone (Professional, Witty etc.) and target length." },
                    { step: "02", title: "Select", desc: "Choose Global Generation or filter specific categories." },
                    { step: "03", title: "Process", desc: "Queue runs in background." }
                ].map((item, idx) => (
                    <div key={idx} className="bg-white p-6 text-center">
                        <div className="w-16 h-16 rounded-full bg-white border-2 border-indigo-100 text-indigo-600 flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-sm">
                            {item.step}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-600">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-slate-900 text-white px-6">
        <div className="max-w-7xl mx-auto">
             <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight">Simple Pricing</h2>
                <p className="mt-4 text-slate-400">Stop paying monthly subscriptions for text generation.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Solo */}
                <div className="bg-slate-800/50 backdrop-blur border border-slate-700 p-8 rounded-2xl flex flex-col">
                    <h3 className="text-2xl font-bold mb-2">Solopreneur</h3>
                    <div className="text-4xl font-extrabold mb-6">$49<span className="text-lg font-normal text-slate-400">/year</span></div>
                    <ul className="space-y-4 mb-8 text-slate-300 flex-grow">
                        <li className="flex gap-3"><CheckCircle2 size={20} className="text-indigo-400" /> 1 WordPress Site</li>
                        <li className="flex gap-3"><CheckCircle2 size={20} className="text-indigo-400" /> Bulk Generation</li>
                        <li className="flex gap-3"><CheckCircle2 size={20} className="text-indigo-400" /> Standard Support</li>
                    </ul>
                    <a href="https://woocontext.lemonsqueezy.com/buy/561d6199-6c96-42f5-b8b1-af142f043aef" className="w-full py-3 rounded-lg border border-slate-600 hover:bg-slate-700 font-medium transition-colors text-center">
                        Buy Pro
                    </a>
                </div>

                {/* Agency */}
                <div className="bg-gradient-to-b from-indigo-900/40 to-slate-800/50 backdrop-blur border border-indigo-500/30 p-8 rounded-2xl flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-indigo-600 text-xs font-bold px-3 py-1 rounded-bl-lg">BEST VALUE</div>
                    <h3 className="text-2xl font-bold mb-2 text-white">Agency / LTD</h3>
                    <div className="text-4xl font-extrabold mb-6">$149<span className="text-lg font-normal text-slate-400">/lifetime</span></div>
                    <ul className="space-y-4 mb-8 text-slate-300 flex-grow">
                        <li className="flex gap-3"><CheckCircle2 size={20} className="text-indigo-400" /> Unlimited Sites</li>
                        <li className="flex gap-3"><CheckCircle2 size={20} className="text-indigo-400" /> White Label Ready</li>
                        <li className="flex gap-3"><CheckCircle2 size={20} className="text-indigo-400" /> Source Code Access</li>
                        <li className="flex gap-3"><CheckCircle2 size={20} className="text-indigo-400" /> Priority Queue Logic</li>
                    </ul>
                    <a href="https://woocontext.lemonsqueezy.com/buy/b0fc79f6-4f42-4327-9618-e7d2128a2118" className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors shadow-lg shadow-indigo-900/20 text-center">
                        Get Lifetime Access
                    </a>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};
