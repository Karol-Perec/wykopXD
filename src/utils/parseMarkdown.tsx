/* eslint-disable no-use-before-define */
import { ReactElement } from 'react';
import { ExternalNoPropagationLink, RouterNoPropagationLink } from '~/components/UI/CustomLinks';
import Spoiler from '~/components/UI/Spoiler';
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

type Key = string | number | null;
type Node = ReactElement | string;
type Renderer = (match: string, key: Key) => Node;

const parseTextNode = (text: string, splitter: RegExp, renderer: Renderer, key: Key): Node[] => {
  const result = text.split(splitter);
  if (result.length < 2) return result;
  return result.map((n, idx) => (idx % 2 ? renderer(n, `${key}-${idx}`) : n));
};

const parseNode = (node: Node, splitter: RegExp, renderer: Renderer, key: Key): Node[] | Node =>
  typeof node === 'string'
    ? parseTextNode(node, splitter, renderer, key)
    : parseElementNode(node, splitter, renderer, key);

const parseNodes = (nodes: Node[], splitter: RegExp, renderer: Renderer, key: Key): Node[] =>
  nodes.map((n, idx) => parseNode(n, splitter, renderer, `${key}-${idx}`)).flat();

const parseElementNode = (
  element: ReactElement,
  splitter: RegExp,
  renderer: Renderer,
  key: Key
): ReactElement => {
  const { children }: { children: Node | Node[] } = element.props;
  if (!children) return element;

  return {
    ...element,
    props: {
      ...element.props,
      children: Array.isArray(children)
        ? parseNodes(children, splitter, renderer, key)
        : parseNode(children, splitter, renderer, key),
    },
  };
};

class ReactStringParser {
  private nodes: Node[];

  constructor(text: string) {
    this.nodes = [text];
  }

  getNodes() {
    return this.nodes;
  }

  parse(splitter: string | RegExp, renderer: Renderer): this {
    const regExpSplitter = splitter instanceof RegExp ? splitter : new RegExp(`(${splitter})`);
    this.nodes = parseNodes(this.nodes, regExpSplitter, renderer, '');
    return this;
  }
}

export const parseMarkdown = (text: string) => {
  if (!text) return null;

  return new ReactStringParser(text)
    .parse('\n', (_, idx) => <br key={`br-${idx}`} />)
    .parse(CITE_REGEX, (cite, key) => (
      <blockquote
        key={`blockquote-${key}`}
        style={{
          border: '1px dashed',
          borderRadius: 10,
          padding: 5,
          marginTop: 0,
          marginBottom: 0,
        }}
      >
        {cite.substring(1)}
      </blockquote>
    ))
    .parse(SPOILER_REGEX, (spoiler, key) => (
      <Spoiler key={`spoiler-${key}`}>{spoiler.substring(1)}</Spoiler>
    ))
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
    .parse(CODE_REGEX, (code, key) => (
      <code key={`code-${key}`}>{code.substring(1, code.length - 1)}</code>
    ))
    .parse(BOLD_REGEX, (bold, key) => (
      <b key={`bold-${key}`}>{bold.substring(2, bold.length - 2)}</b>
    ))
    .parse(ITALIC_REGEX, (italic, key) => (
      <i key={`italic-${key}`}>{italic.substring(1, italic.length - 1)}</i>
    ))
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
