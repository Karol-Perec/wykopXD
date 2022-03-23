import { styled } from '@mui/material/styles';

interface ContainerProps {
  aspectRatio?: number;
  expandedVideo: boolean;
}

export const VideoWrapper = styled('div', {
  shouldForwardProp: (prop) => !['aspectRatio', 'expandedVideo'].includes(String(prop)),
})<ContainerProps>(({ aspectRatio, expandedVideo }) => ({
  width: '100%',
  aspectRatio: expandedVideo && aspectRatio ? String(1 / aspectRatio) : '16 / 9',
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
