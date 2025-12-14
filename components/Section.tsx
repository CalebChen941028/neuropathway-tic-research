import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  bg?: 'white' | 'gray';
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children, bg = 'white' }) => {
  return (
    <section 
      id={id} 
      className={`min-h-screen py-24 flex items-center relative overflow-hidden ${bg === 'white' ? 'bg-white' : 'bg-slate-50'} ${className}`}
    >
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        {children}
      </div>
    </section>
  );
};