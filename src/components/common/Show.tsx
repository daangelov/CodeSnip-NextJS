interface ShowProps {
  when: string | false | undefined
  fallback?: JSX.Element | null,
  children: JSX.Element,
}

export default function Show({when, fallback = null, children}: ShowProps) {
  if (when) {
    return children;
  }

  return fallback;
}
