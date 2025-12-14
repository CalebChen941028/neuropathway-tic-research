import React, { useState } from 'react';
import { ArrowRight, Activity, Brain, Zap, Layers } from 'lucide-react';

export const InteractiveModel: React.FC = () => {
  const [comorbidityPresent, setComorbidityPresent] = useState(false);

  return (
    <div className="w-full bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12 transition-all duration-500">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">The Moderated Mediation Model</h3>
          <p className="text-slate-500 text-sm max-w-md">
            Explore how the presence of other conditions (Comorbidities) changes the brain's pathway.
          </p>
        </div>
        
        {/* Toggle Switch */}
        <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-lg">
          <span className={`text-sm font-medium transition-colors ${!comorbidityPresent ? 'text-teal-700' : 'text-slate-400'}`}>No Comorbidities</span>
          <button 
            onClick={() => setComorbidityPresent(!comorbidityPresent)}
            className={`w-14 h-8 rounded-full p-1 transition-colors duration-300 ${comorbidityPresent ? 'bg-teal-600' : 'bg-slate-300'}`}
          >
            <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${comorbidityPresent ? 'translate-x-6' : 'translate-x-0'}`} />
          </button>
          <span className={`text-sm font-medium transition-colors ${comorbidityPresent ? 'text-teal-700' : 'text-slate-400'}`}>With Comorbidities</span>
        </div>
      </div>

      {/* The Diagram */}
      <div className="relative flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 mt-8 min-h-[300px]">
        
        {/* Node 1: Tic Severity */}
        <div className="flex flex-col items-center z-10 w-48 text-center group">
          <div className="w-20 h-20 bg-slate-50 rounded-2xl border-2 border-slate-200 flex items-center justify-center text-slate-400 mb-4 group-hover:border-teal-500 group-hover:text-teal-600 transition-colors bg-white shadow-sm">
            <Activity size={32} />
          </div>
          <h4 className="font-bold text-slate-800">Tic Severity</h4>
          <p className="text-xs text-slate-500 mt-1">YGTSS Score</p>
        </div>

        {/* Path A Visualization (The Variable Arrow) */}
        <div className="flex-1 relative h-32 flex items-center justify-center w-full md:w-auto">
           {/* The Pipe */}
           <div className="relative w-full h-full flex items-center">
              <div 
                className={`w-full bg-teal-100 rounded-full transition-all duration-700 ease-in-out relative overflow-hidden flex items-center justify-center
                ${comorbidityPresent ? 'h-8' : 'h-2'}`}
              >
                {/* Animated Flow Particles */}
                <div className="absolute inset-0 w-full h-full opacity-30">
                   <div className="animate-pulse absolute top-0 left-0 h-full w-1/3 bg-teal-300 blur-xl transform -skew-x-12 translate-x-[-100%] transition-transform duration-[2000ms]" style={{ animation: 'flow 2s infinite linear' }} />
                </div>
              </div>

              {/* Arrow Head */}
              <div className="absolute right-0 text-teal-200">
                <ArrowRight size={comorbidityPresent ? 48 : 24} className="transition-all duration-500"/>
              </div>

              {/* Label for Path A */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-12 bg-white px-3 py-1 rounded-full border border-slate-100 shadow-sm text-xs font-semibold text-teal-700">
                Path A: Mediation
              </div>

              {/* Moderator Influence Visual */}
              <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full transition-all duration-500 flex flex-col items-center ${comorbidityPresent ? 'opacity-100 translate-y-[-20px]' : 'opacity-0 translate-y-0'}`}>
                <div className="bg-rose-50 border border-rose-200 text-rose-700 px-4 py-2 rounded-lg shadow-sm mb-2 flex items-center gap-2">
                  <Layers size={16} />
                  <span className="text-xs font-bold">Comorbidities (ADHD, OCD)</span>
                </div>
                <div className="w-0.5 h-8 bg-rose-300"></div>
                <div className="w-3 h-3 bg-rose-300 rounded-full"></div>
              </div>
           </div>
        </div>

        {/* Node 2: Premonitory Urge */}
        <div className="flex flex-col items-center z-10 w-48 text-center group">
          <div className={`w-20 h-20 rounded-2xl border-2 flex items-center justify-center mb-4 transition-all duration-500 bg-white shadow-sm
            ${comorbidityPresent ? 'border-rose-400 text-rose-500 shadow-rose-100' : 'border-slate-200 text-slate-400'}`}>
            <Zap size={32} />
          </div>
          <h4 className="font-bold text-slate-800">Premonitory Urges</h4>
          <p className="text-xs text-slate-500 mt-1">PUTS Score (The Mediator)</p>
        </div>

        {/* Path B Visualization (Constant) */}
        <div className="flex-1 relative h-32 flex items-center justify-center w-full md:w-auto">
             <div className="w-full h-1 bg-slate-200 rounded-full relative">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-slate-300">
                   <ArrowRight size={20} />
                </div>
             </div>
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-8 text-xs text-slate-400">
                Path B
             </div>
        </div>

        {/* Node 3: Executive Function */}
        <div className="flex flex-col items-center z-10 w-48 text-center group">
          <div className={`w-20 h-20 rounded-2xl border-2 flex items-center justify-center mb-4 transition-all duration-500 bg-white shadow-sm
            ${comorbidityPresent ? 'border-slate-400 text-slate-600' : 'border-slate-200 text-slate-400'}`}>
            <Brain size={32} />
          </div>
          <h4 className="font-bold text-slate-800">Executive Function</h4>
          <p className="text-xs text-slate-500 mt-1">BRIEF Score (Deficits)</p>
        </div>

      </div>

      <div className="mt-12 bg-slate-50 rounded-xl p-6 text-sm text-slate-600 leading-relaxed border-l-4 border-teal-500">
        <span className="font-bold text-teal-800 block mb-1">Interpretation:</span>
        {comorbidityPresent ? (
          <span>
            With comorbidities (like ADHD or OCD), the connection between <strong>Tic Severity</strong> and the <strong>Premonitory Urge</strong> is amplified. This "wider bridge" allows more disruption to flow through to Executive Functioning. The indirect effect is nearly <strong className="text-rose-600">double</strong> that of the non-comorbid group.
          </span>
        ) : (
          <span>
            Without comorbidities, the path exists but is narrower. Tic severity influences urges, which influences executive function, but the intensity of the urge generation is lower relative to the tic severity.
          </span>
        )}
      </div>
      
      <style>{`
        @keyframes flow {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
      `}</style>
    </div>
  );
};