import { Avatar as MuiAvatar, styled } from '@mui/material';

interface AvatarProps {
  url?: string;
  size: number;
}

const StyledAvatar = styled(MuiAvatar)<AvatarProps>(({ theme, size }) => ({
  backgroundColor: theme.palette.primary.light,
  width: size,
  height: size,
  // border: '1px solid #73AD21',
}));

const Avatar = ({ url, size }: AvatarProps) => (
  <StyledAvatar src={url} alt='avatar' variant='rounded' size={size} />
);

export default Avatar;
