import { MouseEventHandler } from 'react';
import { Avatar as MuiAvatar, styled } from '@mui/material';

interface AvatarProps {
  size: number;
  src?: string;
  onClick?: MouseEventHandler;
}

const StyledAvatar = styled(MuiAvatar)<AvatarProps>(({ theme, size }) => ({
  backgroundColor: theme.palette.primary.light,
  width: size,
  height: size,
  ':hover': { cursor: 'pointer' },
}));

const Avatar = ({ src, size, onClick }: AvatarProps) => (
  <StyledAvatar src={src} alt='avatar' variant='rounded' size={size} onClick={onClick} />
);

export default Avatar;
