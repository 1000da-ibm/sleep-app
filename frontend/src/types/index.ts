export interface ScheduleItem {
  id: number;
  time: string;
  title: string;
  type: "meeting" | "task" | "personal";
}

export interface ScheduleResponse {
  success: boolean;
  data: ScheduleItem[];
  bedtime?: string;
  message?: string;
}

export interface OnboardingProps {
  onNext: () => void;
  onSkip: () => void;
}

export interface StatsData {
  next_meeting: string;
  sleep_goal: string;
  life_class: string;
  bedtime_suggestion: string;
  sleep_stats: {
    bedtime: string;
    quality: string;
  };
}
