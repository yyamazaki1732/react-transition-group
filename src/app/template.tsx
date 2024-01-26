'use client';

import { TransitionGroup } from 'react-transition-group';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TransitionGroup>{children}</TransitionGroup>
    </>
  );
}
