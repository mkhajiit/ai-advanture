export const MyStyles = {
  숲: { background: 'green', color: 'white' },
  무인도: { background: 'blue', color: 'white' },
  사막: { background: 'goldenrod', color: 'black' },
  설원: { background: 'black', color: 'white' },
} as const;

export type TypeKey = keyof typeof MyStyles;
