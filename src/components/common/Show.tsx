import {type PropsWithChildren, ReactElement} from 'react';

interface ShowProps {
  when: string | false | undefined
  fallback?: ReactElement | null,
}

export default function Show({when, fallback = null, children}: PropsWithChildren<ShowProps>) {
  if (when) {
    return children;
  }

  return fallback;
}
