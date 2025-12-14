import React from 'react';
import { Navigation } from './components/Navigation';
import { Section } from './components/Section';
import { InteractiveModel } from './components/InteractiveModel';
import { FindingsChart } from './components/FindingsChart';
import { ChatWidget } from './components/ChatWidget';
import { QuizSection } from './components/QuizSection';
import { ArrowDown, Quote, BookOpen, Activity, Zap, Brain, School, AlertCircle, CheckCircle2 } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="font-sans text-slate-800">
      <Navigation />
      <ChatWidget />

      {/* Intro Section */}
      <Section id="intro" className="min-h-screen">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-semibold tracking-wide uppercase border border-teal-100">
              <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
              Research Highlight 2025
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 leading-tight">
              Beyond the <span className="text-teal-600 italic">Tic</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              It’s not just about the movement. It’s about the urge before it. 
              Discover how premonitory urges bridge the gap between tic severity and executive dysfunction in children.
            </p>
            <div className="pt-4">
              <button 
                onClick={() => document.getElementById('context')?.scrollIntoView({behavior: 'smooth'})}
                className="group flex items-center gap-2 text-slate-900 font-medium hover:text-teal-600 transition-colors"
              >
                Start the journey 
                <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
          <div className="relative hidden md:block animate-in fade-in duration-1000 delay-300">
             <div className="absolute inset-0 bg-gradient-to-tr from-teal-100 to-slate-50 rounded-full blur-3xl opacity-60"></div>
             <img 
               src="https://picsum.photos/600/600?grayscale" 
               alt="Abstract representation of mind" 
               className="relative rounded-2xl shadow-2xl object-cover grayscale hover:grayscale-0 transition-all duration-700"
             />
             <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl border border-slate-50 max-w-xs">
               <Quote size={24} className="text-teal-500 mb-2 opacity-50" />
               <p className="text-xs text-slate-500 italic">
                 "The premonitory urge fully mediated the association between tic severity and executive functioning."
               </p>
               <p className="text-xs font-bold text-slate-900 mt-2">— Lu et al.</p>
             </div>
          </div>
        </div>
      </Section>

      {/* Context Section (The Cards) */}
      <Section id="context" bg="gray">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-serif font-bold mb-4">The Missing Link</h2>
          <p className="text-slate-600">
            Scientists knew tics were linked to executive function problems (like planning and focus). 
            But they didn't know <em>how</em>. This study of 154 children reveals the hidden mechanism.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Activity size={32} />,
              title: "The Tic",
              desc: "Repetitive, rapid movements or vocalizations. Measured by the YGTSS scale.",
              example: "Examples: Rapid eye blinking, head jerking, shoulder shrugging, or frequent throat clearing."
            },
            {
              icon: <div className="animate-pulse"><Zap size={32} /></div>, 
              title: "The Urge",
              desc: "An uncomfortable sensory phenomenon preceding the tic. Like an itch that demands a scratch.",
              highlight: true,
              example: "Examples: A mounting pressure in the throat, a burning sensation in the eyes, or an internal feeling of tension."
            },
            {
              icon: <Brain size={32} />, 
              title: "The Dysfunction",
              desc: "Difficulties in behavioral regulation and metacognition (planning, monitoring).",
              example: "Examples: Forgetting homework instructions, emotional outbursts when plans change, or trouble keeping a backpack organized."
            }
          ].map((item, idx) => (
            <div key={idx} className={`flex flex-col p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${item.highlight ? 'bg-white border-teal-200 ring-4 ring-teal-50 shadow-lg' : 'bg-white border-slate-100'}`}>
              <div className={`mb-6 ${item.highlight ? 'text-teal-600' : 'text-slate-400'}`}>
                 {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">{item.desc}</p>
              
              <div className={`mt-auto pt-4 border-t ${item.highlight ? 'border-teal-100' : 'border-slate-100'}`}>
                <p className={`text-xs font-medium italic ${item.highlight ? 'text-teal-700' : 'text-slate-500'}`}>
                  {item.example}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* The Model Section */}
      <Section id="model">
        <div className="mb-12">
           <h2 className="text-3xl font-serif font-bold mb-4">The Moderated Mediation Model</h2>
           <p className="text-slate-600 max-w-2xl">
             The study proposes that the "Urge" is the bridge. But crucially, this bridge changes 
             shape depending on whether the child has other conditions (Comorbidities).
           </p>
        </div>
        <InteractiveModel />
      </Section>

      {/* Results Section */}
      <Section id="results" bg="gray">
        <div className="max-w-6xl mx-auto space-y-16">
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">The "Vicious Cycle"</h2>
              <div className="space-y-6 text-slate-600">
                <p>
                  <strong>The Core Finding:</strong> Comorbidities (like ADHD or OCD) act as a moderator. 
                  They independently predict higher urges, but they also <em>intensify</em> the relationship 
                  between tic severity and those urges.
                </p>
                <p>
                  This suggests a biological overlap. For example, the inattention of ADHD might make it 
                  harder to "gate" sensory information, making the premonitory urge feel more intense 
                  for the same amount of motor tic activity.
                </p>
                <div className="bg-white p-6 rounded-xl border-l-4 border-rose-500 shadow-sm mt-8">
                  <h4 className="font-bold text-slate-900 mb-2">Statistically Speaking</h4>
                  <p className="text-sm">
                    The indirect effect on metacognition was <span className="font-bold text-rose-600">nearly double</span> (0.165 vs 0.084) 
                    for children with comorbidities compared to those without.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
               <h3 className="font-bold text-slate-800 mb-6 text-center">Strength of Indirect Effect on Metacognition</h3>
               <FindingsChart />
            </div>
          </div>

          {/* New Case Study Comparison Block */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl">
            <div className="flex items-center gap-3 mb-8">
              <School className="text-teal-600" size={28} />
              <h3 className="text-2xl font-serif font-bold text-slate-900">In the Classroom: A Case Study</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 relative">
              {/* Divider Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2"></div>
              
              {/* Case 1 */}
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="text-slate-400" size={20} />
                  <h4 className="font-bold text-slate-700">Student A (Tics Only)</h4>
                </div>
                <p className="text-sm text-slate-600 mb-4 italic">"I feel a tickle in my eye."</p>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></span>
                    <span>Experience: The sensory urge is annoying but manageable.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></span>
                    <span>Reaction: Blinks rapidly (tic) to relieve it.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></span>
                    <span>Result: Mild distraction. Quickly returns focus to the math test.</span>
                  </li>
                </ul>
              </div>

              {/* Case 2 */}
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <AlertCircle className="text-rose-500" size={20} />
                  <h4 className="font-bold text-rose-700">Student B (Tics + ADHD)</h4>
                </div>
                <p className="text-sm text-slate-600 mb-4 italic">"The tickle feels like fire. I can't ignore it."</p>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0"></span>
                    <span>Experience: <strong className="text-rose-600">Amplified Urge</strong>. The brain fails to filter the sensation due to comorbidities.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0"></span>
                    <span>Reaction: Focus shifts entirely to fighting the urge or performing the tic repeatedly.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0"></span>
                    <span>Result: <strong className="text-rose-600">Executive Dysfunction</strong>. Forgets the test instructions completely.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </Section>

      {/* Quiz Section */}
      <Section id="quiz">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-serif font-bold mb-4">Test Your Understanding</h2>
          <p className="text-slate-600">
            Let's reinforce what you've learned. Answer these questions to see if you've mastered the concepts of the Moderated Mediation Model.
          </p>
        </div>
        <QuizSection />
      </Section>

      {/* Implications Section */}
      <Section id="implication" bg="gray">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-8">Clinical Implications</h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-teal-50 p-8 rounded-2xl shadow-sm border border-teal-100">
              <h3 className="font-bold text-teal-900 text-lg mb-3">Treat the Urge</h3>
              <p className="text-teal-800 text-sm leading-relaxed">
                Since the urge mediates the cognitive deficits, therapies like <strong>Habit Reversal Training (HRT)</strong> that target urge awareness might also improve executive functioning, not just tic reduction.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
               <h3 className="font-bold text-slate-900 text-lg mb-3">Screen Comorbidities</h3>
               <p className="text-slate-700 text-sm leading-relaxed">
                 Children with ADHD/OCD are at significantly higher risk for this specific pathway of impairment. They require a more stratified, comprehensive care approach.
               </p>
            </div>
          </div>
          
          <div className="mt-16 pt-16 border-t border-slate-200">
            <p className="text-slate-400 text-sm">
              <strong>Source:</strong> Lu et al. (2025). <em>Tic severity and executive functioning in children and adolescents: a moderated mediation model of premonitory urges and comorbidity</em>. Child and Adolescent Psychiatry and Mental Health.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default App;