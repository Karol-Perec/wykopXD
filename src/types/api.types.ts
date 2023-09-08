export interface WykopResponse<T> {
  data: T;
}

export interface WykopBody<T> {
  data: T;
}

export interface WykopCollection<T> extends WykopResponse<T[]> {
  pagination: {
    per_page: number;
    total: number;
  };
}
