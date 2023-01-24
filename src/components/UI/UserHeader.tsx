import { Box, Popover, styled, Tooltip, Typography, useTheme } from '@mui/material';
import { MouseEvent, useRef } from 'react';
import { USER_COLOR } from '~/constants/userColor.constant';
import useDebouncedState from '~/hooks/useDebouncedState';
import { UserPreview } from '~/types';
import { calculateAprroximatedAge } from '~/utils/dateUtils';
import { parseImageUrl } from '~/utils/mediaUtils';
import { handleStopPropagation } from '~/utils/windowUtils';
import CustomAvatar from './CustomAvatar';
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

const UserHeader = ({ user, date }: UserHeaderProps) => {
  const theme = useTheme();
  const [anchorEl, debouncedAnchorEl, setAnchorEl] = useDebouncedState<HTMLElement | null>(
    null,
    500
  );
  const userColor = USER_COLOR.get(user.color);

  const handlePopoverOpen = (event: MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handlePopoverClose = () => setAnchorEl(null);

  return (
    <Container>
      <RouterNoPropagationLink to={`/ludzie/${user.username}`}>
        <CustomAvatar
          src={parseImageUrl(user.avatar, 80)}
          size={24}
          showBadge={user.online}
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        />
      </RouterNoPropagationLink>
      <RouterNoPropagationLink
        to={`/ludzie/${user.username}`}
        color={theme.palette.mode === 'dark' ? userColor?.hex_dark : userColor?.hex}
      >
        <Typography
          variant='subtitle2'
          component='span'
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          {user.username}
        </Typography>
      </RouterNoPropagationLink>
      <Popover
        sx={{ pointerEvents: 'none' }}
        open={!!(anchorEl && debouncedAnchorEl)}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        onClose={handlePopoverClose}
        disableRestoreFocus
        onClick={handleStopPropagation}
        transitionDuration={{ appear: 5000, exit: 0 }}
      >
        <Box sx={{ p: 2 }}>
          <RouterNoPropagationLink to={`/ludzie/${user.username}`}>
            <CustomAvatar src={parseImageUrl(user.avatar, 80)} size={60} showBadge={user.online} />
          </RouterNoPropagationLink>
          <RouterNoPropagationLink
            to={`/ludzie/${user.username}`}
            color={theme.palette.mode === 'dark' ? userColor?.hex_dark : userColor?.hex}
          >
            <Typography variant='subtitle2' component='span'>
              {user.username}
            </Typography>
          </RouterNoPropagationLink>
          <Typography variant='subtitle2' component='div'>
            TODO HERE
          </Typography>
        </Box>
      </Popover>

      <Tooltip title={new Date(date).toLocaleString()}>
        <Typography variant='caption' component='span'>
          {calculateAprroximatedAge(date)}
        </Typography>
      </Tooltip>
    </Container>
  );
};
export default UserHeader;
