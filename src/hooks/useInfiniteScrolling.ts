import { RefCallback, useCallback, useRef } from 'react';

const useInfiniteScrolling = (disable: boolean, callback: () => void): RefCallback<HTMLElement> => {
  const observer = useRef<IntersectionObserver>();

  return useCallback(
    (node) => {
      if (disable) return;

      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          callback();
        }
      });

      if (node) {
        observer.current.observe(node);
      }
    },
    [disable, callback]
  );
};

export default useInfiniteScrolling;
