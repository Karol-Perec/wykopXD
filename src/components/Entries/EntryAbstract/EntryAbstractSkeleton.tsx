import { Skeleton } from '@mui/material';
import * as S from './EntryAbstract.styles';

const EntryAbstractSkeleton = () => (
  <S.Card>
    <Skeleton variant='rectangular' width='100%' height={150} />
  </S.Card>
);

export default EntryAbstractSkeleton;
