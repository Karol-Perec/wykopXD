import { styled } from '@mui/material/styles';

interface ContainerProps {
  ratio?: number;
  expandedVideo: boolean;
}

export const VideoWrapper = styled('div', {
  shouldForwardProp: (prop) => !['ratio', 'expandedVideo'].includes(String(prop)),
})<ContainerProps>(({ ratio, expandedVideo }) => ({
  width: '100%',
  aspectRatio: expandedVideo && ratio ? String(1 / ratio) : '16 / 9',
  '@supports not (aspect-ratio: 16 / 9)': {
    '::before': {
      float: 'left',
      paddingTop: '56.25%',
      content: '""',
    },
    '::after': {
      display: 'block',
      content: '""',
      clear: 'both',
    },
  },
}));

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  borderRadius: 10,

  maxHeight: 550,
  [theme.breakpoints.up('sm')]: {
    marginRight: theme.spacing(2),
    maxHeight: 650,
    overflow: 'hidden',
  },
}));
