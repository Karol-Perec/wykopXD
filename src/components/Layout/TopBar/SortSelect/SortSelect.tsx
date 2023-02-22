import { Sort as SortIcon } from '@mui/icons-material';
import { IconButton, ListItemText, Menu } from '@mui/material';
import { MouseEventHandler, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import ReactPortal from '~/components/UI/ReactPortal';
import { SortOption } from '~/types';
import SortDatePicker from './SortDatePicker';
import * as S from './SortSelect.styles';

interface SortSelectProps {
  options: SortOption[];
  activeOptionPath?: string;
  baseRoute: string;
}

const SortSelect = ({ options = [], activeOptionPath, baseRoute }: SortSelectProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenCategoriesMenu: MouseEventHandler<HTMLElement> = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  return (
    <ReactPortal wrapperId='sort-select-wrapper'>
      <IconButton onClick={handleOpenCategoriesMenu} color='inherit'>
        <SortIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {options.map((o) => (
          <S.MenuItem
            component={RouterLink}
            onClick={handleClose}
            to={`${baseRoute}/${o.path}`}
            selected={activeOptionPath === o.path}
            key={o.label}
          >
            <ListItemText>{o.label}</ListItemText>
            {o.datePick && (
              <SortDatePicker option={o} baseRoute={baseRoute} handleClose={handleClose} />
            )}
          </S.MenuItem>
        ))}
      </Menu>
    </ReactPortal>
  );
};

export default SortSelect;
