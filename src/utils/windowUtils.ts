import { MouseEventHandler } from 'react';

export const handleStopPropagation: MouseEventHandler = (e) => e.stopPropagation();

export const stopPropagation =
  (handler: MouseEventHandler): MouseEventHandler =>
  (e) => {
    e.stopPropagation();
    handler(e);
  };

export const openInNewTab = (url: string): MouseEventHandler =>
  stopPropagation((e) => {
    if (e.button === 1) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  });
