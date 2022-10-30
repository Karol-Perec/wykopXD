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
  Comment,
  ExtendedComment,
  Link,
  MediaType,
  WykopSurvey,
  Survey,
  WykopProfile,
  UserFull,
} from '../../../../types';

const WYKOP_DEFAULT_AVATAR_URL = 'https://www.wykop.pl/cdn/c3397992/avatar_def,q150.png';

const mapMediaType = (e: WykopEmbedContent): MediaType => {
  if (e.source === 'gfycat.com') return 'gfycat';
  if (e.animated && e.type === 'image') return 'gif';
  return e.type;
};

const mapMedia = (e: WykopEmbedContent): Media => {
  const type = mapMediaType(e);

  return {
    type,
    url: type === 'gif' ? e.url.replace('.jpg', '.gif') : e.url,
    previewUrl: e.preview,
    plus18: e.plus18,
    ratio: e.ratio,
  };
};

export const mapUser = (p: WykopAuthor, hqAvatar = false): User => ({
  login: p.login,
  status: p.color,
  avatarUrl:
    p.avatar !== WYKOP_DEFAULT_AVATAR_URL
      ? p.avatar.replace(',q150.', hqAvatar ? ',q60.' : ',q40.')
      : undefined,
  sex: p.sex,
});

export const mapUserFull = (p: WykopProfile, hqAvatar = false): UserFull => ({
  login: p.login,
  status: p.color,
  avatarUrl:
    p.avatar !== WYKOP_DEFAULT_AVATAR_URL
      ? p.avatar.replace(',q150.', hqAvatar ? ',q60.' : ',q40.')
      : undefined,
  sex: p.sex,
  about: p.about,
  backgroundUrl: p.background,
  commentsCount: p.comments_count,
  diggsCount: p.diggs,
  entriesCount: p.entries,
  entriesCommentsCount: p.entries_comments,
  followersCount: p.followers,
  followingCount: p.following,
  isBlocked: p.is_blocked,
  isObserved: p.is_observed,
  isVerified: p.is_verified,
  linksAddedCount: p.links_added_count,
  linksPublishedCount: p.links_published_count,
  rank: p.rank,
  registeredAt: p.signup_at,
});

const mapComment = (c: WykopEntryComment | WykopLinkComment): Comment => ({
  id: c.id,
  body: c.body,
  date: c.date.replace(' ', 'T'),
  voteCountPlus: c.vote_count,
  user: mapUser(c.author),
  media: c.embed && mapMedia(c.embed),
});

const mapExtendedComment = (c: WykopLinkComment): ExtendedComment => ({
  ...mapComment(c),
  voteCountMinus: c.vote_count - c.vote_count_plus,
  responses: c.id === c.parent_id ? [] : undefined,
});

const mapExtendedComments = (comments: WykopLinkComment[]): ExtendedComment[] =>
  comments.reduce<ExtendedComment[]>((acc, comment) => {
    if (comment.id === comment.parent_id) {
      acc.push(mapExtendedComment(comment));
      return acc;
    }

    const parentCommentIdx = acc.findIndex((parent) => comment.parent_id === parent.id);
    acc[parentCommentIdx].responses!.push(mapExtendedComment(comment));

    return acc;
  }, []);

const mapSurvey = (s: WykopSurvey): Survey => ({
  question: s.question,
  answers: s.answers.map((a) => ({
    id: a.id,
    text: a.answer,
    voteCount: a.count,
    votePercentage: a.percentage,
  })),
  userAnswer: s.user_answer,
});

export const mapEntry = (e: WykopEntry, skipReducedCommentList = false): Entry => ({
  id: e.id,
  user: mapUser(e.author),
  body: e.body,
  date: e.date.replace(' ', 'T'),
  voteCountPlus: e.vote_count,
  media: e.embed && mapMedia(e.embed),
  commentsCount: e.comments_count,
  survey: e.survey && mapSurvey(e.survey),
  comments:
    e.comments?.length && (!skipReducedCommentList || e.comments_count < 3)
      ? e.comments.map((c) => mapComment(c))
      : undefined,
});

export const mapLink = (l: WykopLink): Link => ({
  id: l.id,
  user: mapUser(l.author),
  body: l.description.replace(/&quot;/g, '"'),
  voteCountPlus: l.vote_count,
  voteCountMinus: l.bury_count,
  commentsCount: l.comments_count,
  date: l.date.replace(' ', 'T'),
  isHot: l.is_hot,
  plus18: l.plus18,
  previewUrl: l.preview,
  relatedCount: l.related_count,
  sourceUrl: l.source_url,
  title: l.title.replace(/&quot;/g, '"'),
  comments: l.comments?.length ? mapExtendedComments(l.comments) : undefined,
});
