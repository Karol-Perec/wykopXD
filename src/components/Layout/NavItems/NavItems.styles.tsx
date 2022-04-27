import { styled } from '@mui/material';
import { ReactComponent as WykopLogo } from 'assets/images/logo.svg';
import { ReactComponent as ShovelIcon } from 'assets/images/shovel.svg';

export const UpcomingIcon = styled(ShovelIcon)(({ theme }) => ({
  height: 20,
  width: 24,
  fill: theme.palette.action.active,
}));

export const MainIcon = styled(WykopLogo)(({ theme }) => ({
  height: 20,
  width: 24,
  fill: theme.palette.action.active,
}));

export const MikroblogIcon = styled(MainIcon)({
  transform: 'rotate(180deg)',
});
