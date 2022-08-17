import { CheckCircleOutline as UserVoteIcon } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { SurveyAnswer as Answer } from '~/types';
import * as S from './SurveyAnswer.styles';

interface SurveyAnswerProps {
  answer: Answer;
  isActive: boolean;
}

const SurveyAnswer = ({ answer, isActive }: SurveyAnswerProps) => (
  <S.Container>
    <S.SurveyProgress variant='determinate' value={answer.votePercentage} highlight={isActive} />
    <Typography component='div'>
      <S.Label>{answer.text}</S.Label>
      <S.Statistics>
        {isActive && <UserVoteIcon fontSize='small' />}
        {/* <span>{`${answer.voteCount} ${answer.voteCount === 1 ? 'głos' : 'głosów'} `}</span> */}
        {/* <span>[{answer.voteCount}]</span>
        <span>{TEXT_SEPARATOR}</span> */}
        <b>{answer.votePercentage.toFixed()}%</b>
      </S.Statistics>
    </Typography>
  </S.Container>
);

export default SurveyAnswer;
