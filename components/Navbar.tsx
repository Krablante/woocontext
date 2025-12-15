import React from 'react';
import { Box } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-900">
                <Box className="text-indigo-600" />
                <span>WooContext<span className="text-indigo-600">AI</span></span>
            </Link>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                <a href="/#features" className="hover:text-indigo-600 transition-colors">Features</a>
                <a href="/#how-it-works" className="hover:text-indigo-600 transition-colors">How it Works</a>
                <a href="/#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a>
            </div>
            <a href="/#pricing" className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors">
                Get Started
            </a>
        </div>
      </nav>
  );
};