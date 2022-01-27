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

const mapLinks = (links) =>
  links.map((l) => ({
    id: l.id,
    author: l.author,
    buryCount: l.bury_count,
    canVote: l.can_vote,
    commentsCount: l.comments_count,
    date: l.date,
    description: l.description,
    isHot: l.is_hot,
    plus18: l.plus18,
    preview: l.preview,
    relatedCount: l.related_count,
    sourceUrl: l.source_url,
    status: l.status,
    tags: l.tags,
    title: l.title,
    voteCount: l.vote_count,
  }));

module.exports = { mapEntries, mapLinks };
