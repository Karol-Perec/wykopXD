import {
  WykopEntry,
  WykopLink,
  WykopEmbedContent,
  WykopAuthor,
  WykopEntryComment,
  WykopLinkComment,
} from '@wykop-types';
import { Entry, Media, User, EntryComment, LinkComment, Link } from '@wykopx-types';

const mapEntryComments = (comments: WykopEntryComment[]): EntryComment[] => {
  return comments.map((c) => ({
    id: c.id,
    body: c.body,
    date: c.date,
    voteCountPlus: c.vote_count,
    user: mapUser(c.author),
  }));
};

const mapLinkComments = (comments: WykopLinkComment[]): LinkComment[] => {
  return comments.reduce<LinkComment[]>((arr, comment) => {
    if (comment.id === comment.parent_id) {
      return [...arr, mapLinkComment(comment)];
    } else {
      const parentCommentIdx = arr.findIndex((c) => comment.parent_id === c.id);
      arr[parentCommentIdx].responses?.push(mapLinkComment(comment));
      return arr;
    }
  }, []);
};

const mapLinkComment = (c: WykopLinkComment): LinkComment => ({
  id: c.id,
  body: c.body,
  date: c.date,
  voteCountPlus: c.vote_count_plus,
  voteCountMinus: c.vote_count - c.vote_count_plus,
  user: mapUser(c.author),
  ...(c.id === c.parent_id && { responses: [] }),
});

const mapMedia = (e: WykopEmbedContent): Media => ({
  type: e.type,
  url: e.url,
  previewUrl: e.preview,
  // hqPreviewUrl: e.preview.replace('w104h74', 'w207h139'),
  plus18: e.plus18,
  ratio: e.ratio,
});

const mapUser = (p: WykopAuthor): User => ({
  login: p.login,
  status: 1, //p.color,
  avatarUrl: p.avatar,
  sex: p.sex,
});

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
  buryCount: l.bury_count,
  commentsCount: l.comments_count,
  date: l.date,
  isHot: l.is_hot,
  plus18: l.plus18,
  previewUrl: l.preview,
  relatedCount: l.related_count,
  sourceUrl: l.source_url,
  title: l.title,
  voteCount: l.vote_count,
  comments: l.comments && mapLinkComments(l.comments),
});
