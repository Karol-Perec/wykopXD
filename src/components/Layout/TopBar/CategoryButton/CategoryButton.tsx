import { MouseEventHandler, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { IconButton, Menu, MenuItem, TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Sort as SortIcon } from '@mui/icons-material';
import plLocale from 'date-fns/locale/pl';
import ReactPortal from 'components/UI/ReactPortal';
import { CategoryOption } from 'types';

interface CategoryButtonProps {
  options: CategoryOption[];
  activeOption?: string;
}

const CategoryButton = ({ options = [], activeOption }: CategoryButtonProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [value, setValue] = useState<Date | null>(new Date());

  const handleClick: MouseEventHandler<HTMLElement> = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  return (
    <ReactPortal wrapperId='sort-filter-button-wrapper'>
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
        {options.map((o) => (
          <MenuItem
            onClick={handleClose}
            // onClick={(e: any) => e.preventDefault()}
            component={RouterLink}
            to={o.path}
            selected={activeOption === o.label}
            key={o.label}
          >
            {o.datePick ? (
              <LocalizationProvider dateAdapter={AdapterDateFns} locale={plLocale}>
                <DatePicker
                  views={o.datePick}
                  minDate={new Date('2005-12-01')}
                  maxDate={new Date()}
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  renderInput={(params) => <TextField {...params} helperText={o.label} />}
                />
              </LocalizationProvider>
            ) : (
              o.label
            )}
          </MenuItem>
        ))}
      </Menu>
    </ReactPortal>
  );
};

export default CategoryButton;
