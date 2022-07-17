import { MouseEventHandler, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { IconButton, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { CalendarPickerView } from '@mui/x-date-pickers';
import { Sort as SortIcon } from '@mui/icons-material';
import plLocale from 'date-fns/locale/pl';
import ReactPortal from 'components/UI/ReactPortal';
import { CategoryOption } from 'types';
import { stopPropagation } from 'utils/windowUtils';

interface CategoryButtonProps {
  options: CategoryOption[];
  activeOption?: string;
  baseRoute: string;
}

const CategoryButton = ({ options = [], activeOption, baseRoute }: CategoryButtonProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [date, setDate] = useState<Date | null>(new Date());
  const navigate = useNavigate();

  const handleClick: MouseEventHandler<HTMLElement> = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const handleSetDateParams = (newDate: Date | null, route: string, pick: CalendarPickerView[]) => {
    console.log(
      `${route}${pick
        .reverse()
        .map((calendar) => {
          if (calendar === 'year') return `/${date?.getFullYear()}`;
          if (calendar === 'month') return `/${date?.getMonth()}`;
          if (calendar === 'day') return `/${date?.getDate()}`;
          return '';
        })
        .join('')}`
    );

    // setDate(newDate);
    handleClose();
    navigate('/');
    navigate(
      `${route}${pick
        .reverse()
        .map((calendar) => {
          if (calendar === 'year') return `/${date?.getFullYear()}`;
          if (calendar === 'month') return `/${date?.getMonth()}`;
          if (calendar === 'day') return `/${date?.getDate()}`;
          return '';
        })
        .join('')}`
    );
  };

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
            component={RouterLink}
            to={`${baseRoute}/${o.path}`}
            selected={activeOption === o.label}
            key={o.label}
          >
            {o.datePick ? (
              <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={plLocale}>
                <DatePicker
                  views={o.datePick}
                  minDate={new Date('2005-12-01')}
                  maxDate={new Date()}
                  value={date}
                  onAccept={(newDate) =>
                    handleSetDateParams(newDate, `${baseRoute}/${o.path}`, o.datePick!)
                  }
                  onChange={(e) => setDate(e)}
                  renderInput={({ inputRef, InputProps }) => (
                    <>
                      <ListItemText ref={inputRef}>{o.label}</ListItemText>
                      <ListItemIcon
                        onClick={stopPropagation((e) => e.preventDefault())}
                        style={{ justifyContent: 'end' }}
                      >
                        {InputProps?.endAdornment}
                      </ListItemIcon>
                    </>
                  )}
                />
              </LocalizationProvider>
            ) : (
              <ListItemText>{o.label}</ListItemText>
            )}
          </MenuItem>
        ))}
        {/* {options.map((o) => (
          <MenuItem
            onClick={handleClose}
            // onClick={(e: any) => e.preventDefault()}
            component={RouterLink}
            to={`${baseRoute}/${o.path}`}
            selected={activeOption === o.label}
            key={o.label}
          >
            {o.datePick ? (
              <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={plLocale}>
                <DatePicker
                  views={o.datePick}
                  minDate={new Date('2005-12-01')}
                  maxDate={new Date()}
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                  renderInput={() => (
                    <>
                      <ListItemText>{o.label}</ListItemText>
                      <ListItemIcon style={{ justifyContent: 'end' }}>
                        <CalendarIcon fontSize='small' />
                      </ListItemIcon>
                    </>
                  )}
                />
              </LocalizationProvider>
            ) : (
              <ListItemText>{o.label}</ListItemText>
            )}
          </MenuItem>
        ))} */}
      </Menu>
    </ReactPortal>
  );
};

export default CategoryButton;
