import React, { useEffect, useState, useRef } from 'react';
import { TerminalLog } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const MOCK_LOGS: Omit<TerminalLog, 'id' | 'timestamp'>[] = [
  { type: 'process', message: '[QueueWorker] Initializing batch process #402...' },
  { type: 'info', message: '[System] PHP 8.1 Strict Mode active.' },
  { type: 'info', message: '[ActionScheduler] Found 10,000 pending products.' },
  { type: 'process', message: '[OpenAI] Connecting to gpt-4o-mini...' },
  { type: 'success', message: '[Generated] Product #1042 "Ergonomic Chair" complete.' },
  { type: 'process', message: '[Generating] Product #1043 "Standing Desk" description...' },
  { type: 'info', message: '[OpenAI] Model: gpt-4o-mini. Tokens used: 450.' },
  { type: 'success', message: '[Success] Description saved. HTML formatted.' },
  { type: 'warning', message: '[RateLimit] Optimizing request flow. Sleeping 0.1s.' },
  { type: 'process', message: '[Generating] Product #1044 "Monitor Arm"...' },
  { type: 'success', message: '[Success] Product #1044 saved.' },
  { type: 'info', message: '[Status] Batch 45/1000 Completed.' },
  { type: 'process', message: '[ACF] Reading custom fields for specs...' },
];

export const TerminalAnimation: React.FC = () => {
  const [logs, setLogs] = useState<TerminalLog[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const logIndex = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextLog = MOCK_LOGS[logIndex.current % MOCK_LOGS.length];
      const newLog: TerminalLog = {
        ...nextLog,
        id: Math.random().toString(36).substr(2, 9),
        timestamp: new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })
      };

      setLogs(prev => {
        const updated = [...prev, newLog];
        if (updated.length > 8) updated.shift(); // Keep only last 8 lines
        return updated;
      });

      logIndex.current++;
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-lg mx-auto bg-slate-950 rounded-xl shadow-2xl border border-slate-800 overflow-hidden font-mono text-xs md:text-sm relative">
      <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-slate-400 ml-2 text-xs">worker-node-v0.1.0 — zsh</span>
      </div>
      
      <div className="p-4 h-[320px] flex flex-col justify-end" ref={scrollRef}>
        <AnimatePresence mode="popLayout">
          {logs.map((log) => (
            <motion.div
              key={log.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mb-1.5 break-all"
            >
              <span className="text-slate-500 mr-2">[{log.timestamp}]</span>
              <span className={`${
                log.type === 'success' ? 'text-emerald-400' :
                log.type === 'warning' ? 'text-amber-400' :
                log.type === 'process' ? 'text-blue-400' :
                'text-slate-300'
              }`}>
                {log.message}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
        <motion.div 
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-2 h-4 bg-slate-400 inline-block align-middle mt-1"
        />
      </div>
      
      {/* Glossy overlay */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/5 to-transparent pointer-events-none" />
    </div>
  );
};
