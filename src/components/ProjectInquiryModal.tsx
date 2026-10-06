import React, { useState, useEffect } from 'react';
import { X, Check, ArrowRight, Sparkles, Building, Mail, Phone, Calendar, Send } from 'lucide-react';
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

  const toggleService = (s: string) => {
    if (selectedServices.includes(s)) {
      setSelectedServices(selectedServices.filter(item => item !== s));
    } else {
      setSelectedServices([...selectedServices, s]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-zinc-950 border border-white/10 rounded-3xl max-w-2xl w-full p-6 sm:p-10 shadow-2xl relative my-auto max-h-[92vh] overflow-y-auto no-scrollbar"
      >
        <button
          onClick={onClose}
          type="button"
          className="absolute top-6 right-6 p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-700"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#dfff24] mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>START A PROJECT · BRIEFING ROOM</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                Let’s create something worth experiencing.
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Tell us about your brand, campaign, or product. We’ll respond within 24 hours.
              </p>
            </div>

            {/* 1. Services Selection */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 block">
                1. What services are you interested in?
              </label>
              <div className="flex flex-wrap gap-2">
                {availableServices.map((srv) => {
                  const isChecked = selectedServices.includes(srv);
                  return (
                    <button
                      key={srv}
                      type="button"
                      onClick={() => toggleService(srv)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer flex items-center gap-2 border ${
                        isChecked
                          ? 'bg-[#dfff24] text-black border-[#dfff24] font-semibold'
                          : 'bg-zinc-900/90 text-zinc-400 hover:text-white border-zinc-800 hover:bg-zinc-850'
                      }`}
                    >
                      {isChecked && <Check className="w-3.5 h-3.5" />}
                      <span>{srv}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Budget Range */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 block">
                2. Approximate Project Budget
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {budgetOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setBudget(opt)}
                    className={`py-2 px-3 rounded-xl text-xs font-medium text-center transition-all cursor-pointer border ${
                      budget === opt
                        ? 'bg-zinc-800 text-white border-[#dfff24]'
                        : 'bg-zinc-900/60 text-zinc-400 border-zinc-800 hover:text-white'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Expected Timeline */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 block">
                3. Expected Launch Timeline
              </label>
              <div className="grid grid-cols-2 gap-2">
                {timelineOptions.map((tl) => (
                  <button
                    key={tl}
                    type="button"
                    onClick={() => setTimeline(tl)}
                    className={`py-2 px-3 rounded-xl text-xs font-medium text-left transition-all cursor-pointer border ${
                      timeline === tl
                        ? 'bg-zinc-800 text-white border-[#dfff24]'
                        : 'bg-zinc-900/60 text-zinc-400 border-zinc-800 hover:text-white'
                    }`}
                  >
                    {tl}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Client Info Form */}
            <div className="space-y-4 pt-2 border-t border-zinc-800">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-zinc-400 block mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Radini Jayawardene"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-[#dfff24]"
                  />
                </div>
                <div>
                  <label className="text-xs text-zinc-400 block mb-1">Brand or Company *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dilmah Tea / Luxury Boutique"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-[#dfff24]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-zinc-400 block mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@brand.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-[#dfff24]"
                  />
                </div>
                <div>
                  <label className="text-xs text-zinc-400 block mb-1">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    placeholder="+94 77 ..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-[#dfff24]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-zinc-400 block mb-1">Brief Description of Project</label>
                <textarea
                  rows={3}
                  placeholder="Share details about your deliverables, goals, or aesthetic references..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-[#dfff24] resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full bg-[#dfff24] text-black font-bold text-sm uppercase tracking-wider hover:bg-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <span>Submit Project Brief</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        ) : (
          <div className="text-center py-10 space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#dfff24]/20 border border-[#dfff24] text-[#dfff24] flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-display font-black text-white">
                Brief Received, {formData.name || 'Friend'}!
              </h3>
              <p className="text-sm text-zinc-300 max-w-md mx-auto">
                Thank you for considering Visual Studios+. Our creative production leads in Colombo 04 will review your requirements for <span className="text-[#dfff24]">{formData.company || 'your brand'}</span> and reach out at <span className="text-white font-medium">{formData.email}</span>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400 max-w-md mx-auto space-y-1 text-left">
              <p className="text-zinc-500 uppercase tracking-wider">Submission Snapshot:</p>
              <p><span className="text-zinc-300">Services:</span> {selectedServices.join(', ') || 'Custom Solution'}</p>
              <p><span className="text-zinc-300">Budget:</span> {budget}</p>
              <p><span className="text-zinc-300">Timeline:</span> {timeline}</p>
            </div>

            <div className="pt-4 flex justify-center gap-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
