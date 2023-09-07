import Blockquote from '~/components/UI/Blockquote';
import { ExternalNoPropagationLink, RouterNoPropagationLink } from '~/components/UI/CustomLinks';
import Spoiler from '~/components/UI/Spoiler';
import { ReactStringParser } from './ReactStringParser';
import {
  NAMED_URL_FULL_REGEX,
  NAMED_URL_SECTIONED_REGEX,
  OVERRIDEABLE_WYKOP_LINK_REGEX,
  SPOILER_REGEX,
  BOLD_REGEX,
  CITE_REGEX,
  CODE_REGEX,
  HASHTAG_REGEX,
  ITALIC_REGEX,
  URL_REGEX,
  USERTAG_REGEX,
} from './regex';

export const parseMarkdown = (text: string) => {
  if (!text) return null;

  return new ReactStringParser(text)
    .parse('\n', (_, idx) => <br key={`br-${idx}`} />)
    .parse(CITE_REGEX, (cite, key) => <Blockquote key={`quote-${key}`}>{cite.substring(1)}</Blockquote>)
    .parse(SPOILER_REGEX, (spoiler, key) => <Spoiler key={`spoiler-${key}`}>{spoiler.substring(1)}</Spoiler>)
    .parse(NAMED_URL_FULL_REGEX, (namedUrl, key) => {
      const urlMatch = namedUrl.match(NAMED_URL_SECTIONED_REGEX);

      if (!urlMatch || urlMatch.length < 3) return namedUrl;
      const [full, name, href] = urlMatch;
      return href.match(OVERRIDEABLE_WYKOP_LINK_REGEX) ? (
        <RouterNoPropagationLink to={href.split('wykop.pl')[1]} key={`${full}-${key}`}>
          {name}
        </RouterNoPropagationLink>
      ) : (
        <ExternalNoPropagationLink href={href} key={`${full}-${key}`}>
          {name}
        </ExternalNoPropagationLink>
      );
    })
    .parse(URL_REGEX, (href, key) =>
      href.match(OVERRIDEABLE_WYKOP_LINK_REGEX) ? (
        <RouterNoPropagationLink to={href.split('wykop.pl')[1]} key={`${href}-${key}`}>
          {href.replace('wykop.pl', window.location.host)}
        </RouterNoPropagationLink>
      ) : (
        <ExternalNoPropagationLink href={href} key={`${href}-${key}`}>
          {href}
        </ExternalNoPropagationLink>
      )
    )
    .parse(CODE_REGEX, (code, key) => <code key={`code-${key}`}>{code.substring(1, code.length - 1)}</code>)
    .parse(BOLD_REGEX, (bold, key) => <b key={`bold-${key}`}>{bold.substring(2, bold.length - 2)}</b>)
    .parse(ITALIC_REGEX, (italic, key) => <i key={`italic-${key}`}>{italic.substring(1, italic.length - 1)}</i>)
    .parse(HASHTAG_REGEX, (hashTag, key) => (
      <RouterNoPropagationLink to={`/tag/${hashTag.substring(1)}`} key={`${hashTag}-${key}`}>
        {hashTag}
      </RouterNoPropagationLink>
    ))
    .parse(USERTAG_REGEX, (userTag, key) => (
      <RouterNoPropagationLink to={`/ludzie/${userTag.substring(1)}`} key={`${userTag}-${key}`}>
        {userTag}
      </RouterNoPropagationLink>
    ))
    .getNodes();
};
