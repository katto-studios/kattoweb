const TAGS_LIST = ['Web', 'Game', 'ThreeJS'] as const;

export type Tag = typeof TAGS_LIST[number];

export const Tags: string[] = [...TAGS_LIST];
