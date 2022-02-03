enum Color {
  GREEN = 0,
  ORANGE = 1,
  RED = 2,
  ADMIN = 5, // ?
  BANNED = 1001, // ?
  DELETED = 1002, // gray overlined
  MEDIA = 2001, //  blue media
}

export interface Author {
  login: string;
  color: Color;
  avatar: string;
}
