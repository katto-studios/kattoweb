import { Tag } from './tag';

export type Article = {
  id: string;
  title: string;
  summary: string;
  body: string;
  thumbnailUrl: string;
  tags: Tag[];
};
