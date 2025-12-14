export interface NavItem {
  id: string;
  label: string;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  fill?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum SectionType {
  INTRO = 'intro',
  CONTEXT = 'context',
  MODEL = 'model',
  RESULTS = 'results',
  IMPLICATION = 'implication'
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}