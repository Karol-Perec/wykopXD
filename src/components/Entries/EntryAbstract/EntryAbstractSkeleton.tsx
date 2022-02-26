import { Skeleton } from '@mui/material';
import * as S from './EntryAbstract.styles';

const EntryAbstractSkeleton = () => (
  <S.CardContainer>
    <Skeleton variant='rectangular' width='100%' height={150} />
  </S.CardContainer>
);

export default EntryAbstractSkeleton;
