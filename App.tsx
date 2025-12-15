import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="antialiased text-slate-900 bg-white">
        <Navbar />
        <Routes>
           <Route path="/" element={<LandingPage />} />
           <Route path="/privacy" element={<PrivacyPolicy />} />
           <Route path="/terms" element={<TermsOfService />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;