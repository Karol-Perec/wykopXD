/* eslint-disable max-len */
export const OVERRIDEABLE_WYKOP_LINK_REGEX = /https?:\/\/(www\.)?wykop\.pl\/(wpis|link|ludzie)\/([0-9]+).+/;
export const URL_REGEX =
  /(https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=,]*))/;
export const NAMED_URL_SECTIONED_REGEX =
  /\[([^[\]\n]+)\]\((https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=,]*))\)/;
export const NAMED_URL_FULL_REGEX =
  /(\[(?:[^[\]\n]+)\]\((?:https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=,]*))\))/;
export const HASHTAG_REGEX = /(#[a-zA-Z0-9]{2,})/;
export const USERTAG_REGEX = /(@[a-zA-Z0-9_-]{4,})/;
export const CITE_REGEX = /(^>.+$)/;
export const SPOILER_REGEX = /(^!.+$)/;
export const CODE_REGEX = /(`(?:(?!`).)+`)/;
export const BOLD_REGEX = /(\*\*(?:(?!\*\*).)+\*\*)/;
export const ITALIC_REGEX = /(_(?:(?!_).)+_)/;
