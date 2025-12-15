import React from 'react';
import { Box, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
      <footer className="py-12 border-t border-slate-200 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
                <Box size={20} className="text-indigo-600" />
                <span className="font-semibold text-slate-700">WooContext AI</span>
            </div>
            <div className="flex gap-6">
                <Link to="/privacy" className="hover:text-indigo-600">Privacy Policy</Link> 
                <Link to="/terms" className="hover:text-indigo-600">Terms of Service</Link>
                <a href="/#how-it-works" className="hover:text-indigo-600">Documentation</a>
            </div>
        </div>
      </footer>
  );
};