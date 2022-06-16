import { LinearProgress, linearProgressClasses, styled } from '@mui/material';

export const Container = styled('div')({
  position: 'relative',
});

export const Label = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  top: 0,
  padding: theme.spacing(0.5),
  paddingLeft: theme.spacing(1),
}));

export const Statistics = styled('span')(({ theme }) => ({
  position: 'absolute',
  right: 0,
  top: 0,
  padding: theme.spacing(0.5),
  paddingRight: theme.spacing(1),
  display: 'flex',
  gap: theme.spacing(1),
}));

export const SurveyProgress = styled(LinearProgress, {
  shouldForwardProp: (prop) => prop !== 'highlight',
})<{ highlight: boolean }>(({ theme, highlight }) => ({
  marginTop: theme.spacing(1),
  height: 29,
  borderRadius: 10,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 10,
    backgroundColor: theme.palette.primary[highlight ? 'light' : 'dark'],
  },
}));
