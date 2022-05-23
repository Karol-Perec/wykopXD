// eslint-disable-next-line import/no-extraneous-dependencies
import {
  WykopEntry,
  WykopLink,
  WykopEmbedContent,
  WykopAuthor,
  WykopEntryComment,
  WykopLinkComment,
  Entry,
  Media,
  User,
  EntryComment,
  LinkComment,
  Link,
} from '../../../../types';

const WYKOP_DEFAULT_AVATAR_URL = 'https://www.wykop.pl/cdn/c3397992/avatar_def,q150.png';

const getOptimizedAvatarUrl = (originalUrl: string) => originalUrl?.replace(',q150.', ',q40.');

const mapMedia = (e: WykopEmbedContent): Media => ({
  type: e.source === 'gfycat.com' ? 'gfycat' : e.type,
  url: e.url,
  // e.source === 'gfycat.com'
  //   ? `https://thumbs.gfycat.com/${e.url.split('/').slice(-1)}-mobile.mp4`
  //   : e.url,
  previewUrl: e.preview,
  plus18: e.plus18,
  aspectRatio: e.ratio,
});

export const mapUser = (p: WykopAuthor): User => ({
  login: p.login,
  status: 1, // p.color,
  avatarUrl: p.avatar !== WYKOP_DEFAULT_AVATAR_URL ? getOptimizedAvatarUrl(p.avatar) : undefined,
  sex: p.sex,
});

const mapEntryComments = (comments: WykopEntryComment[]): EntryComment[] =>
  comments.map((c) => ({
    id: c.id,
    body: c.body,
    date: c.date,
    voteCountPlus: c.vote_count,
    user: mapUser(c.author),
  }));

const mapLinkComment = (c: WykopLinkComment): LinkComment => ({
  id: c.id,
  body: c.body,
  date: c.date,
  voteCountPlus: c.vote_count_plus,
  voteCountMinus: c.vote_count - c.vote_count_plus,
  user: mapUser(c.author),
  ...(c.id === c.parent_id && { responses: [] }),
});

const mapLinkComments = (comments: WykopLinkComment[]): LinkComment[] =>
  comments.reduce<LinkComment[]>((arr, comment) => {
    if (comment.id === comment.parent_id) {
      return [...arr, mapLinkComment(comment)];
    }
    const parentCommentIdx = arr.findIndex((c) => comment.parent_id === c.id);
    arr[parentCommentIdx].responses?.push(mapLinkComment(comment));
    return arr;
  }, []);

export const mapEntry = (e: WykopEntry): Entry => ({
  id: e.id,
  user: mapUser(e.author),
  body: e.body,
  date: e.date,
  voteCountPlus: e.vote_count,
  media: e.embed && mapMedia(e.embed),
  commentsCount: e.comments_count,
  comments: e.comments && mapEntryComments(e.comments),
});

export const mapLink = (l: WykopLink): Link => ({
  id: l.id,
  user: mapUser(l.author),
  body: l.description,
  voteCountPlus: l.vote_count,
  voteCountMinus: l.bury_count,
  commentsCount: l.comments_count,
  date: l.date,
  isHot: l.is_hot,
  plus18: l.plus18,
  previewUrl: l.preview,
  relatedCount: l.related_count,
  sourceUrl: l.source_url,
  title: l.title.replace(/&quot;/g, '"'),
  comments: l.comments && mapLinkComments(l.comments),
});
