export interface HealthMetrics {
  heartRate: number;
  steps: number;
  calories: number;
  hydration: number;
  sleep: number;
  stress: number;
  mood: 'happy' | 'neutral' | 'sad' | 'stressed';
}

export interface WorkoutRoutine {
  id: string;
  name: string;
  duration: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  type: 'yoga' | 'gym' | 'cardio';
  exercises: Exercise[];
}

export interface Exercise {
  id: string;
  name: string;
  duration: number;
  sets?: number;
  reps?: number;
  description: string;
  videoUrl?: string;
}

export interface MeditationSession {
  id: string;
  name: string;
  duration: number;
  type: 'guided' | 'unguided' | 'breathing';
  description: string;
  audioUrl?: string;
}

export interface DietPlan {
  id: string;
  name: string;
  type: 'weight-loss' | 'muscle-gain' | 'maintenance';
  meals: Meal[];
  calories: number;
  macros: {
    protein: number;
    carbs: number;
    fats: number;
  };
}

export interface Meal {
  id: string;
  name: string;
  type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  calories: number;
  ingredients: string[];
  recipe: string;
  image?: string;
}

export interface CommunityPost {
  id: string;
  userId: string;
  title: string;
  content: string;
  category: 'success-story' | 'question' | 'tip' | 'discussion';
  likes: number;
  comments: Comment[];
  createdAt: Date;
}

export interface Comment {
  id: string;
  userId: string;
  content: string;
  likes: number;
  createdAt: Date;
}

export interface LocalClass {
  id: string;
  name: string;
  type: 'yoga' | 'gym' | 'fitness';
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  rating: number;
  price: number;
  schedule: ClassSchedule[];
}

export interface ClassSchedule {
  id: string;
  dayOfWeek: number;
  startTime: string;
  endTime: string;
  instructor: string;
  availableSpots: number;
}