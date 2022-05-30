import { MouseEventHandler } from 'react';

export const openInNewTab =
  (url: string): MouseEventHandler =>
  (e) => {
    e.stopPropagation();
    if (e.button === 1) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };
