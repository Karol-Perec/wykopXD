import {
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import { Box } from '@mui/system';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Logo } from '../../Logo/Logo';
import { Link, NavLink } from 'react-router-dom';
import { TravelExplore, Whatshot } from '@mui/icons-material';
import * as S from './SideDrawer.styles';
import { NavItems } from './NavItems/NavItems';

interface SideDrawerProps {
  open: boolean;
  onBackdropClick: any;
}

export const SideDrawer = ({ open, onBackdropClick }: SideDrawerProps) => {
  return (
    <Drawer open={open} onClose={onBackdropClick}>
      <Box>
        <ListItemIcon>
          <S.WykopMainLogoContainer>
            <Link to='/'>
              <Logo />
            </Link>
          </S.WykopMainLogoContainer>
        </ListItemIcon>
        <Divider />
        <NavItems />
        <Divider />
      </Box>
    </Drawer>
  );
};
