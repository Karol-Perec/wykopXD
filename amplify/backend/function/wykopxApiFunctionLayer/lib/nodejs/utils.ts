import { WykopLink } from '../../../types/wykopLink.types';

export const mapEntries = (entries: any) =>
  entries?.map((e: any) => ({
    id: e.id,
    author: e.author,
    blocked: e.blocked,
    body: e.body,
    commentsCount: e.comments_count,
    date: e.date,
    embed: e.embed,
    favourite: e.favourite,
    status: 'visible',
    userVote: e.user_vote,
    voteCount: e.vote_count,
    comments: e.comments?.map((c: any) => ({
      id: c.id,
      author: c.author,
      date: c.date,
      body: c.body,
      blocked: c.blocked,
      favourite: c.favourite,
      voteCount: c.vote_count,
      status: c.status,
      userVote: c.user_vote,
    })),
  }));

export const mapLinks = (links: any) => links.map(mapLink, false);

export const mapLink = (l: WykopLink, withComments) => ({
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
  ...(withComments && { comments: mapComments(l.comments) }),
});

export const mapComments = (comments: any) =>
  comments?.map((c: any) => ({
    id: c.id,
    author: c.author,
    blocked: c.blocked,
    body: c.body,
    canVote: c.can_vote,
    date: c.date,
    preview: c.preview,
    relatedCount: c.related_count,
    sourceUrl: c.source_url,
    status: c.status,
    tags: c.tags,
    title: c.title,
    voteCount: c.vote_count,
  }));
