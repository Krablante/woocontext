import React from 'react';

export const TermsOfService: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Terms of Service</h1>
        <p className="text-slate-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using WooContext AI ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. 
              In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Description of Service</h2>
            <p>
              WooContext AI provides a WordPress plugin for automated content generation using Artificial Intelligence. 
              You understand and agree that the Service is provided "AS-IS" and that WooContext AI assumes no responsibility for the timeliness, deletion, mis-delivery or failure to store any user communications or personalization settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. User Obligations</h2>
            <p>
              You agree to use the Service only for purposes that are permitted by (a) the Terms and (b) any applicable law, regulation or generally accepted practices or guidelines in the relevant jurisdictions.
              You agree not to access (or attempt to access) any of the Services by any means other than through the interface that is provided by WooContext AI.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Payment and Refund Policy</h2>
            <p>
              Services are billed in advance on a yearly or lifetime basis. There will be no refunds or credits for partial months of service, upgrade/downgrade refunds, or refunds for months unused with an open account.
              However, we offer a 14-day money-back guarantee for new customers who are unsatisfied with the product performance.
            </p>
          </section>

           <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are and will remain the exclusive property of WooContext AI and its licensors. 
              The Service is protected by copyright, trademark, and other laws of both the United Kingdom and foreign countries.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Limitation of Liability</h2>
            <p>
              In no event shall WooContext AI, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Contact Us</h2>
            <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <p className="font-semibold">WooContext AI</p>
                <p>Email: <a href="mailto:support@woocontext.com" className="text-indigo-600 hover:underline">support@woocontext.com</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};