import { useEffect, useCallback } from "react";

const useInfiniteScroll = (scrollRef: any, dispatch: any) => {
  const scrollObserver = useCallback(
    (node) => {
      const options = {
        root: null,
        rootMargin: "20px",
        threshold: 0.9,
      };
      new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.intersectionRatio > 0) {
            dispatch((page: number) => page + 1);
          }
        });
      }, options).observe(node);
    },
    [dispatch]
  );

  useEffect(() => {
    if (scrollRef.current) {
      scrollObserver(scrollRef.current);
    }
  }, [scrollObserver, scrollRef]);
};

export default useInfiniteScroll;
