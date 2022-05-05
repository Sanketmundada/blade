import type { ReactElement } from 'react';

export type GProps = {
  children: ReactElement | ReactElement[];
  clipPath?: string;
  fill?: string;
};

export { default } from './G.web';
