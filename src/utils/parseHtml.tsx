/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
/* eslint-disable react/no-array-index-key */
import { Fragment } from 'react';
import { ExternalNoPropagationLink, RouterNoPropagationLink } from '~/components/UI/CustomLinks';
import Spoiler from '~/components/UI/Spoiler';
import { SPACE_CHAR } from '~/constants/texts.constant';

export const availableWykopPathsRegex = /https?:\/\/(www\.)?wykop\.pl\/(wpis|link|ludzie)\/([0-9]+).+/;

const encodeUtf8 = (message: string) => {
  const query = new URLSearchParams(message);
  return Array.from(query)?.[0]?.join(SPACE_CHAR);
};

const parseTextNode = (text: string | null) => {
  if (!text || text === '\\n') return null;
  if (text.endsWith('#') || text.endsWith('@')) return text.slice(0, -1);
  return text;
};

const parseSpoilerText = (text: string | null) =>
  text
    ?.split(SPACE_CHAR)
    .map((word, idx) => {
      if (word.startsWith('#')) {
        return [
          <RouterNoPropagationLink to={`/tag/${word.substring(1)}`} key={idx}>
            {word}
          </RouterNoPropagationLink>,
          SPACE_CHAR,
        ];
      }
      if (word.startsWith('@')) {
        return [
          <RouterNoPropagationLink to={`/ludzie/${word.substring(1)}`} key={idx}>
            {word}
          </RouterNoPropagationLink>,
          SPACE_CHAR,
        ];
      }
      if (word.startsWith('http')) {
        return [
          word.match(availableWykopPathsRegex) ? (
            <RouterNoPropagationLink to={word.split('wykop.pl')[1]} key={idx}>
              {word.replace('wykop.pl', window.location.host)}
            </RouterNoPropagationLink>
          ) : (
            <ExternalNoPropagationLink href={word} key={idx}>
              {word}
            </ExternalNoPropagationLink>
          ),
          SPACE_CHAR,
        ];
      }
      if (word.endsWith('\n')) return [word, <br key={idx} />];
      return word;
    })
    .flat()
    .reduce<(string | JSX.Element)[]>((arr, node) => {
      if (typeof node === 'string') {
        const lastNode = arr[arr.length - 1];
        if (typeof lastNode === 'string') {
          arr[arr.length - 1] = `${lastNode} ${node}`;
          return arr;
        }
      }
      arr.push(node);
      return arr;
    }, []);

const parseElementNode = (node: ChildNode) => {
  switch (node.nodeName) {
    case 'BR':
      return <br />;
    case 'CITE':
      return (
        <cite>
          {node.childNodes.length ? parseNodes(node.childNodes) : parseTextNode(node.textContent)}
        </cite>
      );
    case 'STRONG':
      return (
        <strong>
          {node.childNodes.length ? parseNodes(node.childNodes) : parseTextNode(node.textContent)}
        </strong>
      );
    case 'EM':
      return (
        <em>
          {node.childNodes.length ? parseNodes(node.childNodes) : parseTextNode(node.textContent)}
        </em>
      );
    case 'A': {
      const a = node as HTMLAnchorElement;
      if (a.href.endsWith(`#${a.textContent}`)) {
        return (
          <RouterNoPropagationLink to={`/tag/${node.textContent}`}>
            {`#${node.textContent}`}
          </RouterNoPropagationLink>
        );
      }
      if (a.href.endsWith(`@${a.textContent}`)) {
        return (
          <RouterNoPropagationLink to={`/ludzie/${node.textContent}`}>
            {`@${node.textContent}`}
          </RouterNoPropagationLink>
        );
      }
      if (a.href.startsWith('spoiler:')) {
        return <Spoiler>{parseSpoilerText(encodeUtf8(a.pathname))}</Spoiler>;
      }
      if (a.href.startsWith('http')) {
        return a.href.match(availableWykopPathsRegex) ? (
          <RouterNoPropagationLink to={a.href.split('wykop.pl')[1]}>
            {a.textContent?.replace('wykop.pl', window.location.host)}
          </RouterNoPropagationLink>
        ) : (
          <ExternalNoPropagationLink href={a.href}>{a.textContent}</ExternalNoPropagationLink>
        );
      }
      return null;
    }
    default:
      return null;
  }
};

const parseNodes = (nodes: NodeListOf<ChildNode>) =>
  Array.from(nodes).map((node, idx) => (
    <Fragment key={idx}>
      {node.nodeType === node.TEXT_NODE ? parseTextNode(node.textContent) : parseElementNode(node)}
    </Fragment>
  ));

export const parseHtml = (text: string) => {
  if (!text) return null;

  const parser = new DOMParser();
  const parsedText = parser.parseFromString(text, 'text/html');

  return parseNodes(parsedText.body.childNodes);
};
