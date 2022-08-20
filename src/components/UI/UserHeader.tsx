import { styled, Typography } from '@mui/material';
import { TEXT_SEPARATOR } from '~/constants/texts.constant';
import { USER_COLOR } from '~/constants/userColor.constant';
import { User } from '~/types';
import { calculateAprroximatedAge } from '~/utils/dateUtils';
import Avatar from './Avatar';
import { RouterNoPropagationLink } from './CustomLinks';

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  padding: theme.spacing(1.5, 2, 0, 2),
  gap: theme.spacing(1),
  alignItems: 'center',
}));

interface UserHeaderProps {
  user: User;
  date: string;
}

const UserHeader = ({ user, date }: UserHeaderProps) => (
  <Container>
    <RouterNoPropagationLink to={`/ludzie/${user.login}`} title={`@${user.login}`}>
      <Avatar src={user.avatarUrl} size={24} />
    </RouterNoPropagationLink>
    <RouterNoPropagationLink
      to={`/ludzie/${user.login}`}
      color={USER_COLOR[user.status]}
      title={`@${user.login}`}
    >
      <Typography variant='subtitle2' component='span'>
        {user.login}
      </Typography>
    </RouterNoPropagationLink>
    {TEXT_SEPARATOR}
    <Typography variant='caption' component='span'>
      {calculateAprroximatedAge(date)}
    </Typography>
  </Container>
);
export default UserHeader;
