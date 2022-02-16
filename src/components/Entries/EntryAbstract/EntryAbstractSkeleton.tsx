import { Skeleton } from '@mui/material';
import * as S from './EntryAbstract.styles';

const EntryAbstractSkeleton = () => (
  <S.Container>
    <Skeleton variant='rectangular' width='100%' height={150} />
  </S.Container>
);

export default EntryAbstractSkeleton;
