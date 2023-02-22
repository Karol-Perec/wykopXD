import { styled } from '@mui/material';
import { PropsWithChildren } from 'react';

export const StyledBlockquote = styled('blockquote')(({ theme }) => ({
  borderLeft: `5px solid ${theme.palette.divider}`,
  paddingLeft: theme.spacing(2),
  margin: [theme.spacing(1), 0, 0, 0].join(' '),
  color: theme.palette.text.disabled,
}));

const Blockquote = ({ children }: PropsWithChildren) => (
  <StyledBlockquote>{children}</StyledBlockquote>
);

export default Blockquote;
