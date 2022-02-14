import { Skeleton } from '@mui/material';
import * as S from './LinkAbstract.styles';

const LinkAbstractSkeleton = () => (
  <S.Container>
    <Skeleton variant='rectangular' width='100%' height={150} />
  </S.Container>
);

export default LinkAbstractSkeleton;
