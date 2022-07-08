import { useState, useLayoutEffect, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

interface ReactPortalProps {
  wrapperId: string;
}

const ReactPortal = ({ children, wrapperId }: PropsWithChildren<ReactPortalProps>) => {
  const [mountContainer, setMountContainer] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const element = document.getElementById(wrapperId);
    if (element) setMountContainer(element);
  }, [wrapperId]);

  if (mountContainer === null) return null;

  return createPortal(children, mountContainer);
};

export default ReactPortal;
