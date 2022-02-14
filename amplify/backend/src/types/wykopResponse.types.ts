export interface WykopError {
  code: number;
  field: string;
  message_en: string;
  message_pl: string;
}

export interface WykopResponse<T> {
  data: T;
  pagination?: {
    prev?: string;
    next?: string;
  };
  error?: WykopError;
}
