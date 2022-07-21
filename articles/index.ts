import { Article } from '../types/article';

export const articles: { [id: string]: Article } = {
  tonvo: {
    id: 'tonvo',
    title: 'Tonvo',
    tags: ['Web', 'Game', 'ThreeJS'],
    summary:
      'Web based metaverse to host difficult conversations about race and religion.',
    body: 'Tonvo is a web based metaverse created to host difficult conversations about race and religion. The app features 3D graphics supported across all modern browsers, including mobile devices, as well as voice chat functionality.',
    thumbnailUrl: '/screenshots/tonvo.jpg',
  },
  loki: {
    id: 'loki',
    title: 'Loki - typing project',
    tags: ['Web', 'Game'],
    summary:
      'Typing test game where players can build their own virtual keyboard',
    body: 'Loki is a web based typing game where players can earn scrap to unlock cosmetic effects to decorate their game. Loki features a weekly and all time leaderboard, as well as multiplayer to compete for the best score. Loki reached 30,000 unique users within 6 months of its launch, and peaked at 100 CCU. Visit Loki [here](https://loki.katto.studio).',
    thumbnailUrl: '/screenshots/loki.jpg',
  },
};

export const articlesList = Object.values(articles);
