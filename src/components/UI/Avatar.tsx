import { Avatar as MuiAvatar, styled } from '@mui/material';
import { MouseEventHandler } from 'react';

interface AvatarProps {
  size: number;
  src?: string;
  onClick?: MouseEventHandler;
}

const StyledAvatar = styled(MuiAvatar)<AvatarProps>(({ theme, size }) => ({
  backgroundColor: theme.palette.primary.light,
  width: size,
  height: size,
  ':hover': {
    cursor: 'pointer',
    filter: 'brightness(80%)',
    transition: 'filter 0.1s ease-out 0s',
  },
}));

const Avatar = ({ src, size, onClick }: AvatarProps) => (
  <StyledAvatar src={src} alt='avatar' variant='rounded' size={size} onClick={onClick} />
);

export default Avatar;
