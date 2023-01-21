import { styled, Tooltip, Typography } from '@mui/material';
import { USER_COLOR } from '~/constants/userColor.constant';
import { UserPreview } from '~/types';
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
  user: UserPreview;
  date: string;
}

const UserHeader = ({ user, date }: UserHeaderProps) => (
  <Container>
    <RouterNoPropagationLink to={`/ludzie/${user.username}`} title={`@${user.username}`}>
      <Avatar src={user.avatar || undefined} size={24} />
    </RouterNoPropagationLink>
    <RouterNoPropagationLink
      to={`/ludzie/${user.username}`}
      color={USER_COLOR.get(user.color)?.hex}
      title={`@${user.username}`}
    >
      <Typography variant='subtitle2' component='span'>
        {user.username}
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
