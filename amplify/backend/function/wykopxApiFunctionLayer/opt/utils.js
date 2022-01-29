const mapEntries = (entries) =>
  entries?.map((e) => ({
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
    comments: e.comments?.map((c) => ({
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

const mapLinks = (links) => links.map(mapLink);

const mapLink = (l, withComments = false) => ({
  id: l.id,
  author: l.author,
  blocked: l.blocked,
  canVote: l.can_vote,
  date: l.date,
  favourite: l.favourite,
  linkId: l.link_id,
  parentId: l.parentId,
  plus18: l.plus18,
  preview: l.preview,
  relatedCount: l.related_count,
  sourceUrl: l.source_url,
  status: l.status,
  tags: l.tags,
  title: l.title,
  userVote: l.user_vote,
  voteCount: l.vote_count,
  voteCountPlus: l.vote_count_plus,
  ...(withComments && { comments: mapComments(l.comments) }),
});

const mapComments = (comments) =>
  comments?.map((c) => ({
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

module.exports = { mapEntries, mapLinks, mapLink };
