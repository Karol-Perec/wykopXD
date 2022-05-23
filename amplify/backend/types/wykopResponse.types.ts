export interface WykopErrorResponse {
  data: null;
  error: {
    code: number;
    field: string;
    message_en: string;
    message_pl: string;
  };
}

export interface WykopPaginated {
  pagination: {
    prev?: string;
    next?: string;
  };
}

export interface WykopResponse<D, M = void> {
  data: D;
  meta: M;
}
