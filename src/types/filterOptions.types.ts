export interface SortOption {
  key: string;
  path: string;
  label: string;
  fetchValue: string;
}

export enum HitsPeriod {
  POPULAR = 'popular',
  DAY = 'day',
  WEEK = 'week',
  MONTH = 'month',
  YEAR = 'year',
}

export enum MikroblogCategory {
  NEW = 'najnowsze',
  ACTIVE = 'aktywne',
  HOT = 'hot',
  FAVOURITE = 'ulubione',
}
