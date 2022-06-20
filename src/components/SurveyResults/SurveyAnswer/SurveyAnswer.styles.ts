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

  // border: highlight ? '1px solid #bbb' : undefined,
  
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'dark' ? 800 : 200],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 10,
    backgroundColor: theme.palette.primary[theme.palette.mode],
  },
}));
