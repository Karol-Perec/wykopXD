import { CalendarPickerView } from '@mui/x-date-pickers';

export interface SortOption {
  path: string;
  label: string;
  value: string;
  datePick?: CalendarPickerView[];
}

export enum HitsCategory {
  POPULAR = 'popularne',
  DAY = 'dnia',
  WEEK = 'tygodnia',
  MONTH = 'miesiaca',
  YEAR = 'roku',
}

export enum HomePageSort {
  NEW = 'najnowsze',
  ACTIVE = 'aktywne',
}

export enum MikroblogSort {
  NEW = 'najnowsze',
  ACTIVE = 'aktywne',
  HOT_2H = 'gorace/2',
  HOT_6H = 'gorace/6',
  HOT_12H = 'gorace/12',
  HOT_24H = 'gorace/24',
  // FAVOURITE = 'ulubione',
}

export enum UpcomingCategory {
  ACTIVE = 'aktywne',
  NEWEST = 'najnowsze',
  VOTED = 'wykopywane',
  COMMENTED = 'komentowane',
}
