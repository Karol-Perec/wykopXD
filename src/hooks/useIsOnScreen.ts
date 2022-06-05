import { RefObject, useEffect, useState } from 'react';

const useIsOnScreen = (ref: RefObject<HTMLElement>) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting));

  useEffect(() => {
    if (!ref.current) return;
    observer.observe(ref.current);
    return () => observer.disconnect();
  });

  return isIntersecting;
};

export default useIsOnScreen;
