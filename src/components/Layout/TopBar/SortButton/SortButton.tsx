import { useState } from 'react';
import { useHref, useLocation } from 'react-router-dom';
import { Sort as SortIcon } from '@mui/icons-material';
import { IconButton, Menu, MenuItem } from '@mui/material';
import ReactPortal from './ReactPortal';

interface SortButtonProps {
  options?: string[];
  activeOption?: string;
}

const SortButton = ({ options = [], activeOption }: SortButtonProps) => {
  const xd = useLocation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  console.log(xd);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  return (
    <ReactPortal wrapperId='react-portal-modal-container'>
      <IconButton onClick={handleClick} color='inherit'>
        <SortIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem onClick={handleClose}>Item 1</MenuItem>
        <MenuItem onClick={handleClose}>Item 2</MenuItem>
        <MenuItem onClick={handleClose}>Item 3</MenuItem>
      </Menu>
    </ReactPortal>
  );
};

export default SortButton;
