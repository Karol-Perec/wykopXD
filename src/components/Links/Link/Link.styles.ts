import { styled } from '@mui/material';

export const Statistics = styled('div')({
  display: 'flex',
  justifyContent: 'space-evenly',
});

export const TextContentContainer = styled('div')({
  flexGrow: 1,
  width: 300,
});

export const ContentContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexFlow: 'wrap',
  flexDirection: 'row-reverse',
  justifyContent: 'right',

  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(6),
  },
}));

export const MediaContainer = styled('div', { shouldForwardProp: (prop) => prop !== 'listMode' })<{
  listMode?: boolean;
}>(({ listMode }) => ({
  width: '100%',
  transition: 'width 0.3s ease-in-out',

  // aspectRatio: '16 / 9',
  // '@supports not (aspect-ratio: 16 / 9)': {
  //   '::before': {
  //     float: 'left',
  //     paddingTop: '56.25%',
  //     content: '""',
  //   },

  //   '::after': {
  //     display: 'block',
  //     content: '""',
  //     clear: 'both',
  //   },
  // },

  // '@media (max-width: 599px)': {
  //   height: 100,
  //   '*': {
  //     height: '100%',
  //   },
  // },

  '@media (min-width: 600px)': {
    ...(listMode && { minWidth: 180, width: 180 }),
  },
}));
