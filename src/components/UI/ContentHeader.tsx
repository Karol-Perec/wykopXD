import { styled, Tooltip, Typography } from '@mui/material';
import { User } from 'types';
import { TEXT_SEPARATOR } from '../../constants/texts.constant';
import { USER_COLOR } from '../../constants/userColor.constat';
import { calculateAprroximatedAge } from '../../utils/dateUtils';
import Avatar from './Avatar';
import { RouterNoPropagationLink } from './CustomLinks';

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  paddingTop: theme.spacing(1.5),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  gap: theme.spacing(1),
  alignItems: 'center',
}));

interface ContentHeaderProps {
  user: User;
  date: string;
}

const ContentHeader = ({ user, date }: ContentHeaderProps) => (
  <Container>
    <RouterNoPropagationLink to={`/ludzie/${user.login}`}>
      <Avatar src={user.avatarUrl} size={24} />
    </RouterNoPropagationLink>
    <RouterNoPropagationLink to={`/ludzie/${user.login}`}>
      <Typography variant='subtitle2' component='span' color={USER_COLOR[user.status]}>
        {user.login}
      </Typography>
    </RouterNoPropagationLink>
    {TEXT_SEPARATOR}
    <Tooltip title={date}>
      <Typography variant='caption' component='span'>
        {calculateAprroximatedAge(date)}
      </Typography>
    </Tooltip>
  </Container>
);
export default ContentHeader;