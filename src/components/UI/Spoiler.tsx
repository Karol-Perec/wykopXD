import { MouseEvent, ReactNode, useState } from 'react';
import { styled } from '@mui/material';

interface HideableSpoilerProps {
  showMessage: boolean;
}

export const HideableSpoiler = styled('span', {
  shouldForwardProp: (prop) => prop !== 'showMessage',
})<HideableSpoilerProps>(({ showMessage }) => ({
  filter: showMessage ? 'none' : 'blur(3px)',
  cursor: showMessage ? 'inherit' : 'pointer',
}));

interface SpoilerProps {
  children: ReactNode;
}

const Spoiler = ({ children }: SpoilerProps) => {
  const [showMessage, setShowMessage] = useState(false);

  const toggleSpoiler = (event: MouseEvent) => {
    if (!showMessage) {
      event.stopPropagation();
      setShowMessage(true);
    }
  };

  return (
    <HideableSpoiler onClick={toggleSpoiler} showMessage={showMessage}>
      {children}
    </HideableSpoiler>
  );
};

export default Spoiler;
