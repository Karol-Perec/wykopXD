import { CalendarPickerView } from '@mui/x-date-pickers';

export interface SortOption {
  path: string;
  label: string;
  sort?: string;
  lastUpdate?: number;
  datePick?: CalendarPickerView[];
}

export enum HitsCategory {
  POPULAR = 'popularne',
  DAY = 'dnia',
  WEEK = 'tygodnia',
  MONTH = 'miesiaca',
  YEAR = 'roku',
}
