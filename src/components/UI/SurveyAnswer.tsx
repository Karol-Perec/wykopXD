import { LinearProgress, styled, linearProgressClasses, Typography } from '@mui/material';
import { SurveyAnswer as Answer } from 'types';

const Container = styled('div')(({ theme }) => ({
  position: 'relative',
}));

const Label = styled('div')(({ theme }) => ({
  textAlign: 'center',
  position: 'absolute',
  left: 0,
  top: 0,
  paddingLeft: theme.spacing(1),
}));

const Statistics = styled('div')(({ theme }) => ({
  textAlign: 'center',
  position: 'absolute',
  right: 0,
  top: 0,
  paddingRight: theme.spacing(1),
}));

export const SurveyProgress = styled(LinearProgress, {
  shouldForwardProp: (prop) => prop !== 'highlight',
})<{ highlight: boolean }>(({ theme, highlight }) => ({
  marginTop: theme.spacing(1),
  height: 25,
  borderRadius: 10,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 10,
    backgroundColor: theme.palette.primary[highlight ? 'light' : 'dark'],
  },
}));

interface SurveyAnswerProps {
  answer: Answer;
  isActive: boolean;
}

const SurveyAnswer = ({ answer, isActive }: SurveyAnswerProps) => {
  let xd;

  return (
    <Container>
      <SurveyProgress variant='determinate' value={answer.votePercentage} highlight={isActive} />
      <Typography variant='caption'>
        <Label>{answer.text}</Label>
        <Statistics>{answer.votePercentage.toFixed()}%</Statistics>
      </Typography>
    </Container>
  );
};

export default SurveyAnswer;
