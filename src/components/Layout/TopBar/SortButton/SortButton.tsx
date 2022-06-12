import { Sort as SortIcon } from '@mui/icons-material';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';

const SortButton = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  return (
    <>
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
    </>
  );
};

export default SortButton;
