import React, { useState, useEffect } from 'react';
import { STUDIO_INFO } from '../data/projectsData.ts';

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectInquiryModal: React.FC<ProjectInquiryModalProps> = ({ isOpen, onClose }) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [budget, setBudget] = useState<string>('$5,000 – $10,000');
  const [timeline, setTimeline] = useState<string>('Within 1 month');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const availableServices = [
    'Videography & TVC Production',
    'Commercial Photography',
    'Digital Social Retainer',
    'Branding & Packaging Design',
    '3D CGI & AI Visuals',
    'Paid Performance Media'
  ];

  const budgetOptions = [
    'Under $2,500',
    '$2,500 – $5,000',
    '$5,000 – $10,000',
    '$10,000+'
  ];

  const timelineOptions = [
    'Immediate (Next 2 weeks)',
    'Within 1 month',
    '2–3 months out',
    'Monthly Retainer'
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const toggleService = (srv: string) => {
    setSelectedServices((prev) =>
      prev.includes(srv) ? prev.filter((s) => s !== srv) : [...prev, srv]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Keep feedback visible
    }, 500);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="glass-panel border border-white/10 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative my-auto"
      >
        {/* Top Header Bar (Zero Icons) */}
        <div className="glass-header px-6 py-4 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#dfff24] animate-pulse" />
            <span className="text-xs font-sans uppercase tracking-widest text-[#dfff24] font-bold">
              Project Briefing Room
            </span>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="px-3 py-1.5 rounded-full glass-card border border-zinc-700 hover:border-white text-zinc-300 hover:text-white transition-colors text-xs font-sans font-bold cursor-pointer"
          >
            CLOSE [ESC]
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto max-h-[85vh]">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#dfff24] text-black font-sans font-bold text-xs uppercase tracking-wider">
                BRIEF TRANSMITTED
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Thank you, {formData.name || 'Partner'}.
              </h3>
              <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                Our creative directors in Colombo 04 will review your project parameters and contact you within 4 business hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-[#dfff24] transition-colors"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Start a Project Brief
                </h2>
                <p className="text-xs text-zinc-400 mt-1">
                  Tell us about your brand goals. We take projects for businesses and engineer verifiable results.
                </p>
              </div>

              {/* Service Selection */}
              <div className="space-y-2">
                <label className="text-xs font-sans uppercase text-zinc-400 block font-bold">
                  01. Select Capabilities Needed
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {availableServices.map((srv) => {
                    const isSelected = selectedServices.includes(srv);
                    return (
                      <button
                        type="button"
                        key={srv}
                        onClick={() => toggleService(srv)}
                        className={`p-3 rounded-xl text-left text-xs font-semibold border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#dfff24] text-black border-[#dfff24] font-bold shadow-md'
                            : 'glass-card border-white/10 text-zinc-300 hover:text-white'
                        }`}
                      >
                        {srv}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Budget Tier */}
              <div className="space-y-2">
                <label className="text-xs font-sans uppercase text-zinc-400 block font-bold">
                  02. Target Budget Range
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {budgetOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setBudget(opt)}
                      className={`py-2 px-3 rounded-xl text-xs font-sans transition-all cursor-pointer border ${
                        budget === opt
                          ? 'bg-white text-black font-bold border-white'
                          : 'glass-card border-white/10 text-zinc-400 hover:text-white'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-3 pt-2 border-t border-white/10">
                <label className="text-xs font-sans uppercase text-zinc-400 block font-bold">
                  03. Your Information
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full glass-card border border-zinc-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#dfff24]"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Work Email *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full glass-card border border-zinc-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#dfff24]"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="tel"
                    placeholder="Contact Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full glass-card border border-zinc-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#dfff24]"
                  />
                  <input
                    type="text"
                    placeholder="Company / Brand"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full glass-card border border-zinc-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#dfff24]"
                  />
                </div>
                <textarea
                  rows={3}
                  placeholder="Tell us about the project goals, deliverables, and vision..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full glass-card border border-zinc-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#dfff24]"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#dfff24] text-black font-black text-xs uppercase tracking-widest hover:bg-white transition-all shadow-xl cursor-pointer"
                >
                  TRANSMIT BRIEF TO CREATIVE DIRECTORS →
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
