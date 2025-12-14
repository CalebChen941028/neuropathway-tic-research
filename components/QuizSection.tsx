import React, { useState } from 'react';
import { QuizQuestion } from '../types';
import { CheckCircle, XCircle, ChevronRight, RotateCw, Lightbulb } from 'lucide-react';

const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "According to the study, what acts as the 'bridge' (mediator) between Tic Severity and Executive Dysfunction?",
    options: [
      "Anxiety levels",
      "Premonitory Urges",
      "Sleep quality",
      "Medication dosage"
    ],
    correctAnswer: 1,
    explanation: "Correct! The study found that Premonitory Urges fully mediate the relationship. It's the sensory urge, not the tic itself, that disrupts cognitive function."
  },
  {
    id: 2,
    question: "How do comorbidities (like ADHD) affect the 'Tic -> Urge' relationship?",
    options: [
      "They weaken the relationship",
      "They have no effect",
      "They act as a buffer",
      "They amplify (strengthen) the relationship"
    ],
    correctAnswer: 3,
    explanation: "Exactly. Comorbidities act as a moderator that amplifies the path. For the same severity of tics, children with ADHD experience significantly more intense urges."
  },
  {
    id: 3,
    question: "Based on these findings, which treatment approach might be most effective for improving Executive Function?",
    options: [
      "Strictly suppressing movements",
      "Ignoring the tics completely",
      "Treating the premonitory urge (e.g., Habit Reversal Training)",
      "Increasing homework load"
    ],
    correctAnswer: 2,
    explanation: "Spot on. Since the Urge is the mediator causing the deficit, therapies targeting urge awareness and regulation (like HRT) are suggested to help improve executive functioning."
  }
];

export const QuizSection: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    if (index === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowSummary(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowSummary(false);
  };

  if (showSummary) {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center border border-slate-100">
        <div className="w-20 h-20 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Lightbulb size={40} />
        </div>
        <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">Knowledge Check Complete!</h3>
        <p className="text-slate-600 mb-8">
          You scored <strong className="text-teal-600 text-xl">{score}</strong> out of <strong>{questions.length}</strong>.
        </p>
        <p className="text-slate-500 mb-8 max-w-md mx-auto">
          {score === questions.length 
            ? "Perfect! You have a solid grasp of how urges and comorbidities interact in Tic Disorders." 
            : "Good effort! Reviewing the model section again might help clarify the role of comorbidities."}
        </p>
        <button 
          onClick={resetQuiz}
          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-colors"
        >
          <RotateCw size={18} />
          Retake Quiz
        </button>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
        {/* Progress Bar */}
        <div className="h-2 bg-slate-100 w-full">
          <div 
            className="h-full bg-teal-500 transition-all duration-500 ease-out"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>

        <div className="p-8 md:p-12">
          <div className="flex justify-between items-center mb-6">
            <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="bg-teal-50 text-teal-700 text-xs px-2 py-1 rounded-full font-medium">
              Interactive Learning
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-8">
            {question.question}
          </h3>

          <div className="space-y-3">
            {question.options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === question.correctAnswer;
              const showCorrectness = isAnswered && (isSelected || isCorrect);
              
              let borderClass = 'border-slate-200 hover:border-teal-300 hover:bg-teal-50/50';
              let icon = null;

              if (isAnswered) {
                if (isCorrect) {
                  borderClass = 'border-teal-500 bg-teal-50 ring-1 ring-teal-500';
                  icon = <CheckCircle className="text-teal-600" size={20} />;
                } else if (isSelected && !isCorrect) {
                  borderClass = 'border-rose-300 bg-rose-50';
                  icon = <XCircle className="text-rose-500" size={20} />;
                } else {
                  borderClass = 'border-slate-100 opacity-50';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(idx)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex justify-between items-center group ${borderClass}`}
                >
                  <span className={`font-medium ${isAnswered && isCorrect ? 'text-teal-800' : 'text-slate-700'}`}>
                    {option}
                  </span>
                  {icon}
                </button>
              );
            })}
          </div>

          {/* Feedback Section */}
          <div className={`mt-8 overflow-hidden transition-all duration-500 ${isAnswered ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className={`p-6 rounded-xl ${selectedOption === question.correctAnswer ? 'bg-teal-50 text-teal-900' : 'bg-rose-50 text-rose-900'}`}>
              <p className="font-bold mb-1">
                {selectedOption === question.correctAnswer ? 'Correct!' : 'Not quite.'}
              </p>
              <p className="text-sm leading-relaxed opacity-90">
                {question.explanation}
              </p>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button 
                onClick={nextQuestion}
                className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-transform hover:translate-x-1"
              >
                {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};