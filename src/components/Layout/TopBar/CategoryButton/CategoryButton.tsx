import { MouseEventHandler, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ListItemText, Menu } from '@mui/material';
import { Sort as SortIcon } from '@mui/icons-material';
import ReactPortal from 'components/UI/ReactPortal';
import { CategoryOption } from 'types';
import CategoryDatePicker from './CategoryDatePicker';
import * as S from './CategoryButton.styles';

interface CategoryButtonProps {
  options: CategoryOption[];
  activeOption?: string;
  baseRoute: string;
}

const CategoryButton = ({ options = [], activeOption, baseRoute }: CategoryButtonProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenCategoriesMenu: MouseEventHandler<HTMLElement> = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  return (
    <ReactPortal wrapperId='category-button-wrapper'>
      <S.IconButton onClick={handleOpenCategoriesMenu} color='inherit'>
        <SortIcon />
      </S.IconButton>
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
            selected={activeOption === o.label}
            key={o.label}
          >
            <ListItemText>{o.label}</ListItemText>
            {o.datePick && (
              <CategoryDatePicker option={o} baseRoute={baseRoute} handleClose={handleClose} />
            )}
          </S.MenuItem>
        ))}
      </Menu>
    </ReactPortal>
  );
};

export default CategoryButton;
