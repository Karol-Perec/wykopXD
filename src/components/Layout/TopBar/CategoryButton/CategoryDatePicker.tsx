import { ListItemIcon } from '@mui/material';
import { CalendarPickerView, DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import plLocale from 'date-fns/locale/pl';
import { ReactElement, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CategoryOption } from 'types';
import { handleStopPropagation, stopPropagation } from '~/utils/windowUtils';
import * as S from './CategoryButton.styles';

interface DateMenuItemContentProps {
  option: CategoryOption;
  baseRoute: string;
  handleClose: () => void;
}

const CategoryDatePicker = ({ option, baseRoute, handleClose }: DateMenuItemContentProps) => {
  const { year, month } = useParams<{ year: string; month: string }>();
  const [date, setDate] = useState<Date | null>(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    const initDate = new Date();
    if (month && option.datePick?.includes('month')) initDate.setMonth(+month - 1);
    if (year && option.datePick?.includes('year')) initDate.setFullYear(+year);
    setDate(initDate);
  }, [month, option.datePick, year]);

  const handleSetDateParams = (newDate: Date | null, route: string, pick: CalendarPickerView[]) => {
    handleClose();
    if (!newDate) return navigate('/');
    navigate(
      `${route}${pick
        .map((calendar) => {
          if (calendar === 'year') return `/${newDate.getFullYear()}`;
          if (calendar === 'month') return `/${newDate.getMonth() + 1}`;
          if (calendar === 'day') return `/${newDate.getDate()}`;
          return '';
        })
        .reverse()
        .join('')}`
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={plLocale}>
      <DatePicker
        views={option.datePick}
        minDate={new Date('2005-12-01')}
        maxDate={new Date()}
        value={date}
        onAccept={(newDate) =>
          handleSetDateParams(newDate, `${baseRoute}/${option.path}`, option.datePick!)
        }
        onChange={setDate}
        desktopModeMediaQuery=''
        componentsProps={{
          desktopPaper: { onClick: handleStopPropagation, onMouseDown: handleStopPropagation },
          dialog: { onClick: handleStopPropagation, onMouseDown: handleStopPropagation },
        }}
        renderInput={(params) => {
          const endAndorment = params.InputProps?.endAdornment as ReactElement;
          return (
            <S.CalendarIconButton
              component={ListItemIcon}
              onClick={stopPropagation((e) => {
                e.preventDefault();
                endAndorment.props.children.props.onClick();
              })}
              onMouseDown={handleStopPropagation}
              ref={params.inputRef}
            >
              {endAndorment.props.children.props.children}
            </S.CalendarIconButton>
          );
        }}
      />
    </LocalizationProvider>
  );
};

export default CategoryDatePicker;
