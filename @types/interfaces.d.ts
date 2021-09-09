import { ReactNode } from 'react';

declare global {
  interface HasChildren {
    children: ReactNode;
  }
}
