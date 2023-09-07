import { styled } from '@mui/material';

const Blockquote = styled('blockquote')(({ theme }) => ({
  borderLeft: `5px solid ${theme.palette.divider}`,
  paddingLeft: theme.spacing(2),
  margin: 0,
  color: theme.palette.text.secondary,
}));

export default Blockquote;
