import { MouseEventHandler, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Sort as SortIcon } from '@mui/icons-material';
import { IconButton, Menu, MenuItem } from '@mui/material';
import ReactPortal from 'components/UI/ReactPortal';
import { SortOption } from 'types';

interface SortButtonProps {
  sortOptions: SortOption[];
  activeOption?: string;
}

const SortButton = ({ sortOptions = [], activeOption }: SortButtonProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick: MouseEventHandler<HTMLElement> = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  return (
    <ReactPortal wrapperId='sort-button-wrapper'>
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
        {sortOptions.map((o) => (
          <MenuItem
            onClick={handleClose}
            component={RouterLink}
            to={o.path}
            selected={activeOption === o.key}
            key={o.key}
          >
            {o.label}
          </MenuItem>
        ))}
      </Menu>
    </ReactPortal>
  );
};

export default SortButton;
