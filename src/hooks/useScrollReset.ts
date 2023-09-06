import { MutableRefObject, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollReset = (ref: MutableRefObject<HTMLElement>) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (ref.current) ref.current.scrollTop = 0;
    else window.scrollTo(0, 0);
  }, [pathname, ref]);
};
