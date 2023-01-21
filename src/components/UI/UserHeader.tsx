import { styled, Tooltip, Typography } from '@mui/material';
import { User } from '~/types';
import { calculateAprroximatedAge } from '~/utils/dateUtils';
import Avatar from './Avatar';
import { RouterNoPropagationLink } from './CustomLinks';
import { USER_COLOR } from '~/constants/userColor.constant';

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
      color={USER_COLOR[user.color]}
      title={`@${user.login}`}
    >
      <Typography variant='subtitle2' component='span'>
        {user.login}
      </Typography>
    </RouterNoPropagationLink>

    <Tooltip title={new Date(date).toLocaleString()}>
      <Typography variant='caption' component='span'>
        {calculateAprroximatedAge(date)}
      </Typography>
    </Tooltip>
  </Container>
);
export default UserHeader;
