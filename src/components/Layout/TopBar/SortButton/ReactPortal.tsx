import { useState, useLayoutEffect, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

function createWrapperAndAppendToBody(wrapperId: string) {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
}

interface ReactPortalProps {
  wrapperId?: string;
}

// https://blog.logrocket.com/learn-react-portals-by-example/
// https://blog.logrocket.com/build-modal-with-react-portals/

const ReactPortal = ({
  children,
  wrapperId = 'react-portal-wrapper',
}: PropsWithChildren<ReactPortalProps>) => {
  const [mountContainer, setMountContainer] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    if (!element) {
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setMountContainer(element);
  }, [wrapperId]);

  if (mountContainer === null) return null;

  return createPortal(children, mountContainer);
};

export default ReactPortal;
