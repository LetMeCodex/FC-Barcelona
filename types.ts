export interface Player {
  id: number;
  name: string;
  number: number;
  position: string;
  image: string;
  stats: {
    pace: number;
    shooting: number;
    passing: number;
    dribbling: number;
  };
}

export interface Trophy {
  id: number;
  name: string;
  count: number;
  year: string;
  description: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum Section {
  HERO = 'hero',
  SQUAD = 'squad',
  HISTORY = 'history',
  AI = 'ai'
}