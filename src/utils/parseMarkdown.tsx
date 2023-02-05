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

type Node = ReactElement | string;

const parseTextNode = (
  text: string,
  splitter: RegExp,
  renderer: (match: string, index: number) => Node
): Node[] => {
  const result = text.split(splitter);
  if (result.length < 2) return result;
  let accLength = 0;

  return result.reduce<Node[]>((prev, curr, idx) => {
    const currAccLength = accLength + (curr?.length || 0);
    prev.push(idx % 2 ? renderer(text.substring(accLength, currAccLength), idx) : curr);

    accLength = currAccLength;
    return prev;
  }, []);
};

const parseNode = (
  node: ReactElement,
  splitter: RegExp,
  renderer: (match: string, index: number) => Node
): ReactElement => {
  if (typeof node === 'string') return <>{parseTextNode(node, splitter, renderer)}</>;
  if (!node.props.children) return node;

  return {
    ...node,
    props: {
      ...node.props,
      children:
        typeof node.props.children === 'string'
          ? parseTextNode(node.props.children, splitter, renderer)
          : Array.isArray(node.props.children)
          ? node.props.children.map((ch: ReactElement) => parseNode(ch, splitter, renderer))
          : parseNode(node.props.children, splitter, renderer),
    },
  };
};

class ReactStringParser {
  private nodes: Node[];

  constructor(text: string) {
    this.nodes = [text];
  }

  parse(splitter: string | RegExp, renderer: (match: string, index: number) => Node): this {
    const regExpSplitter = splitter instanceof RegExp ? splitter : new RegExp(`(${splitter})`);

    this.nodes = this.nodes
      .map((n) =>
        typeof n === 'string'
          ? parseTextNode(n, regExpSplitter, renderer)
          : parseNode(n, regExpSplitter, renderer)
      )
      .flat();

    return this;
  }

  getNodes() {
    return this.nodes;
  }
}

export const parseMarkdown = (text: string) => {
  if (!text) return null;

  return new ReactStringParser(text)
    .parse('\n', (_, idx) => <br key={`br${idx}`} />)
    .parse(CITE_REGEX, (cite, idx) => (
      <blockquote
        key={`cite${idx}`}
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
    .parse(SPOILER_REGEX, (spoiler, idx) => (
      <Spoiler key={`strong${idx}`}>{spoiler.substring(1)}</Spoiler>
    ))
    .parse(NAMED_URL_FULL_REGEX, (namedUrl, idx) => {
      const urlMatch = namedUrl.match(NAMED_URL_SECTIONED_REGEX);

      if (!urlMatch || urlMatch.length < 3) return namedUrl;
      const [full, name, href] = urlMatch;
      return href.match(OVERRIDEABLE_WYKOP_LINK_REGEX) ? (
        <RouterNoPropagationLink to={href.split('wykop.pl')[1]} key={full + idx}>
          {name}
        </RouterNoPropagationLink>
      ) : (
        <ExternalNoPropagationLink href={href} key={full + idx}>
          {name}
        </ExternalNoPropagationLink>
      );
    })
    .parse(URL_REGEX, (href, idx) =>
      href.match(OVERRIDEABLE_WYKOP_LINK_REGEX) ? (
        <RouterNoPropagationLink to={href.split('wykop.pl')[1]} key={href + idx}>
          {href.replace('wykop.pl', window.location.host)}
        </RouterNoPropagationLink>
      ) : (
        <ExternalNoPropagationLink href={href} key={href + idx}>
          {href}
        </ExternalNoPropagationLink>
      )
    )
    .parse(CODE_REGEX, (code, idx) => (
      <code key={`code${idx}`}>{code.substring(1, code.length - 1)}</code>
    ))
    .parse(BOLD_REGEX, (bold, idx) => (
      <b key={`bold${idx}`}>{bold.substring(2, bold.length - 2)}</b>
    ))
    .parse(ITALIC_REGEX, (italic, idx) => (
      <i key={`italic${idx}`}>{italic.substring(1, italic.length - 1)}</i>
    ))
    .parse(HASHTAG_REGEX, (hashTag, idx) => (
      <RouterNoPropagationLink to={`/tag/${hashTag.substring(1)}`} key={hashTag + idx}>
        {hashTag}
      </RouterNoPropagationLink>
    ))
    .parse(USERTAG_REGEX, (userTag, idx) => (
      <RouterNoPropagationLink to={`/ludzie/${userTag.substring(1)}`} key={userTag + idx}>
        {userTag}
      </RouterNoPropagationLink>
    ))
    .getNodes();
};
