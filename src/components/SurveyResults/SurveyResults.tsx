import { Typography } from '@mui/material';
import { Survey } from '~/types';
import SurveyAnswer from './SurveyAnswer/SurveyAnswer';
import * as S from './SurveyResults.styles';

interface SurveyResultsProps {
  survey: Survey;
}

const SurveyResults = ({ survey }: SurveyResultsProps) => (
  <S.Container>
    <Typography variant='h6' textAlign='center'>
      {survey.question}
    </Typography>
    {survey.answers.map((answer) => (
      <SurveyAnswer answer={answer} key={answer.id} isActive={survey.userAnswer === answer.id} />
    ))}
  </S.Container>
);

export default SurveyResults;
