export type Difficulty = "Easy" | "Medium" | "Hard";

export interface Problem {
  id: string;
  title: string;
  difficulty: Difficulty;
  tags: string[];
  description: string;
  sampleInput: string;
  sampleOutput: string;
  constraints: string[];
  timeLimit: string;
  memoryLimit: string;
}

export interface Submission {
  id: string;
  problemId: string;
  problemTitle: string;
  status: "Accepted" | "Wrong Answer" | "Time Limit Exceeded" | "Runtime Error" | "Compilation Error";
  language: string;
  timestamp: string;
  runtime: string;
  memory: string;
}

export interface DashboardStats {
  problemsSolved: number;
  totalProblems: number;
  currentRating: number;
  maxRating: number;
  currentStreak: number;
  longestStreak: number;
  totalSubmissions: number;
  acceptanceRate: number;
}

export interface RatingPoint {
  date: string;
  rating: number;
  contest: string;
}

export interface ActivityDay {
  date: string;
  count: number;
}

export interface AlgorithmNote {
  id: string;
  title: string;
  category: string;
  summary: string;
  topics: string[];
  complexity: string;
}
