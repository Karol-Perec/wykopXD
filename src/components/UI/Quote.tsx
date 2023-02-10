import { styled } from '@mui/material';
import { PropsWithChildren } from 'react';

export const StyledBlockquote = styled('blockquote')(({ theme }) => ({
  border: '1px dashed',
  borderRadius: 10,
  padding: theme.spacing(1),
  marginTop: 0,
  marginBottom: 0,
}));

const Blockquote = ({ children }: PropsWithChildren) => (
  <StyledBlockquote
    style={{
      border: '1px dashed',
      borderRadius: 10,
      padding: 5,
      marginTop: 0,
      marginBottom: 0,
    }}
  >
    {children}
  </StyledBlockquote>
);

export default Blockquote;
