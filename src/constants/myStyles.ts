export const MyStyles = {
  숲1: { background: 'green', btnColor: 'white', textColor: 'white' },
  숲2: { background: 'green', btnColor: 'white', textColor: 'white' },
  무인도1: { background: 'blue', btnColor: 'white', textColor: 'white' },
  무인도2: { background: 'blue', btnColor: 'white', textColor: 'white' },
  사막1: { background: 'goldenrod', btnColor: 'black', textColor: 'black' },
  사막2: { background: 'goldenrod', btnColor: 'black', textColor: 'black' },
  설원1: { background: 'black', btnColor: 'white', textColor: 'black' },
  설원2: { background: 'black', btnColor: 'white', textColor: 'black' },
  기본: { background: 'gray', btnColor: 'white', textColor: 'black' },
} as const;

export type TypeKey = keyof typeof MyStyles;
