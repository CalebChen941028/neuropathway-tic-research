import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import { Menu, X, BrainCircuit } from 'lucide-react';

const navItems: NavItem[] = [
  { id: 'intro', label: 'Introduction' },
  { id: 'context', label: 'The Gap' },
  { id: 'model', label: 'The Model' },
  { id: 'results', label: 'Key Findings' },
  { id: 'quiz', label: 'Knowledge Check' },
  { id: 'implication', label: 'Impact' },
];

export const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('intro');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('intro')}>
          <div className="p-2 bg-teal-600 rounded-lg text-white">
            <BrainCircuit size={20} />
          </div>
          <span className={`font-serif font-bold text-lg ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
            NeuroPathway
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-sm font-medium transition-colors ${
                activeSection === item.id 
                  ? 'text-teal-600' 
                  : isScrolled ? 'text-slate-600 hover:text-teal-600' : 'text-slate-600 hover:text-teal-600'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 p-6 flex flex-col gap-4 shadow-lg md:hidden">
           {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-left text-sm font-medium ${activeSection === item.id ? 'text-teal-600' : 'text-slate-600'}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};