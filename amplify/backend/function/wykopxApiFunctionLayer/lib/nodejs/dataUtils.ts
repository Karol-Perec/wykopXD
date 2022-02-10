import { WykopEntry, WykopLink, WykopEmbedContent, WykopAuthor, WykopEntryComment } from '@wykop-types';
import { Entry, Media, User, Comment } from '@wykopx-types';

const mapComments = (comments: WykopEntryComment[]): Comment[] =>
  comments.reduce<Comment[]>((arr, comment) => {
    if (comment.id === comment.parent_id) {
      return [...arr, mapComment(comment)];
    } else {
      const parentCommentIdx = arr.findIndex((c) => comment.parent_id === c.id);
      arr[parentCommentIdx].responses?.push(mapComment(comment));
      return arr;
    }
  }, []);

const mapComment = (c: WykopEntryComment): Comment => ({
  id: c.id,
  body: c.body,
  date: c.date,
  dislikeCount: 0,
  likeCount: c.vote_count,
  user: mapUser(c.author),
  responses: [],
});

const mapMedia = (e?: WykopEmbedContent): Media | undefined => {
  if (!e) return undefined;
  return {
    type: e.type,
    url: e.url,
    previewUrl: e.preview,
    hqPreviewUrl: e.preview.replace('w104h74', 'w207h139'),
    plus18: e.plus18,
    ratio: e.ratio,
  };
};

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
  likeCount: e.vote_count,
  media: mapMedia(e.embed),
  commentsCount: e.comments_count,
  comments: mapComments(e.comments),
});

export const mapLink = (l: WykopLink, withComments: boolean = false) => ({
  id: l.id,
  author: l.author,
  buryCount: l.bury_count,
  canVote: l.can_vote,
  commentsCount: l.comments_count,
  date: l.date,
  description: l.description,
  userFavorite: l.user_favorite,
  isHot: l.is_hot,
  plus18: l.plus18,
  preview: l.preview,
  relatedCount: l.related_count,
  sourceUrl: l.source_url,
  status: l.status,
  tags: l.tags,
  title: l.title,
  userVote: l.user_vote,
  voteCount: l.vote_count,
  // ...(withComments && { comments: mapComments(l.comments) }),
});
