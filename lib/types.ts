export type Story = {
  id: string;
  category: string;
  headline: string;
  summary: string;
  angle: string;
  question: string;
  score: number;
  status: 'ready' | 'review' | 'live';
};

export type Segment = {
  time: string;
  duration: string;
  title: string;
  detail: string;
  status: 'ready' | 'next' | 'live' | 'done';
};
