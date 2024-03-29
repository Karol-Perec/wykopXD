export enum Route {
  ANY = '*',
  HOME = '/',
  UPCOMING = '/wykopalisko',
  HITS = '/hity',
  MIKROBLOG = '/mikroblog',
  MY_WYKOP = '/moj',
  LINK = '/link',
  ENTRY = '/wpis',
  // TAG_LINKS = '/tag/znaleziska/:tag',
  // TAG_ENTRIES = '/tag/wpisy/:tag',
  TAG = '/tag',
  USER = '/ludzie/:username',
  SETTINGS = '/ustawienia',
  APP_INFO = '/o-aplikacji',
  LOGIN = '/zaloguj',
  LOGIN_CALLBACK = '/zaloguj/callback',
}
