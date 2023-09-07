import { Avatar as MuiAvatar, Badge, styled, AvatarProps } from '@mui/material';

interface CustomAvatarProps extends AvatarProps {
  size: number;
  showBadge?: boolean;
}

const StyledAvatar = styled(MuiAvatar)<CustomAvatarProps>(({ theme, size }) => ({
  backgroundColor: theme.palette.primary.light,
  width: size,
  height: size,
  ':hover': {
    cursor: 'pointer',
    filter: 'brightness(80%)',
    transition: 'filter 0.1s ease-out 0s',
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      content: '""',
    },
  },
}));

const CustomAvatar = ({ showBadge, ...avatarProps }: CustomAvatarProps) => {
  const avatar = <StyledAvatar alt='avatar' variant='rounded' {...avatarProps} />;

  return showBadge ? (
    <StyledBadge overlap='rectangular' anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant='dot'>
      {avatar}
    </StyledBadge>
  ) : (
    avatar
  );
};

export default CustomAvatar;
