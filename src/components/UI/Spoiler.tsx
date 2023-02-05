import { styled } from '@mui/material';
import { MouseEvent, PropsWithChildren, useState } from 'react';

interface BlurContainerProps {
  showMessage: boolean;
}

// spolier = <section><button>
// <section data-v-0ce0459c="" class="content-spoiler">
//    <button data-v-0ce0459c="" data-action="" data-no-bubble="">Pokaż spoiler</button>
// </section>
export const BlurContainer = styled('span', {
  shouldForwardProp: (prop) => prop !== 'showMessage',
})<BlurContainerProps>(({ showMessage }) => ({
  display: 'inline-block',
  ...(!showMessage && {
    filter: 'blur(3px)',
    cursor: 'pointer',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
    a: {
      pointerEvents: 'none',
    },
  }),
}));

const Spoiler = ({ children }: PropsWithChildren) => {
  const [showMessage, setShowMessage] = useState(false);

  const showSpoiler = (event: MouseEvent) => {
    if (!showMessage) {
      event.stopPropagation();
      setShowMessage(true);
    }
  };

  return (
    <BlurContainer onClick={showSpoiler} showMessage={showMessage}>
      {children}
    </BlurContainer>
  );
};

export default Spoiler;
