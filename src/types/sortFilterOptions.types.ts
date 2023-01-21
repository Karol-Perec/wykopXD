import { CalendarPickerView } from '@mui/x-date-pickers';

export interface CategoryOption {
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

export enum MikroblogCategory {
  NEW = 'najnowsze',
  ACTIVE = 'aktywne',
  HOT_6H = 'hot/ostatnie/6',
  HOT_12H = 'hot/ostatnie/12',
  HOT_24H = 'hot/ostatnie/24',
  // FAVOURITE = 'ulubione',
}

export enum UpcomingCategory {
  ACTIVE = 'aktywne',
  NEWEST = 'najnowsze',
  VOTED = 'wykopywane',
  COMMENTED = 'komentowane',
}
