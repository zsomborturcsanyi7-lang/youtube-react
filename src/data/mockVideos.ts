export interface Video {
  id: string;
  youtubeId: string;
  channelName: string;
  description: string;
  likes: string;
  comments: string;
  category: 'News' | 'Science' | 'Gaming';
}

export const mockVideos: Video[] = [
  {
    id: '1',
    youtubeId: 'W3O3h9-1eYk',
    channelName: 'Veritasium',
    description: 'The illusion of the shadow.',
    likes: '1.2M',
    comments: '5K',
    category: 'Science',
  },
  {
    id: '2',
    youtubeId: 'bUaQ2Z8p7iQ',
    channelName: 'Physics Girl',
    description: 'Why is the sky blue?',
    likes: '850K',
    comments: '2K',
    category: 'Science',
  },
  {
    id: '3',
    youtubeId: 'C7S4_R2e8bE',
    channelName: 'IGN',
    description: 'Big gaming news!',
    likes: '400K',
    comments: '1K',
    category: 'Gaming',
  },
  {
    id: '4',
    youtubeId: 'xP8_P0qN-jQ',
    channelName: 'ABC News',
    description: 'Latest global headlines.',
    likes: '200K',
    comments: '500',
    category: 'News',
  },
  {
    id: '5',
    youtubeId: 'P_3M9h-Xk1c',
    channelName: 'Kurzgesagt',
    description: 'What if you were born in space?',
    likes: '900K',
    comments: '3K',
    category: 'Science',
  }
];
