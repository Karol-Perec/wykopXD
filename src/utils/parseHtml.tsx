/* eslint-disable no-use-before-define */
/* eslint-disable react/no-array-index-key */
import { Fragment } from 'react';
import { ExternalNoPropagationLink, RouterNoPropagationLink } from 'components/UI/CustomLinks';
import Spoiler from 'components/UI/Spoiler';

const encodeUtf8 = (message: string) => {
  const query = new URLSearchParams(message);
  return Array.from(query)?.[0].join(' ');
};

const parseTextNode = (text: string | null) => {
  if (!text || text === '\\n') return null;
  if (text.endsWith('#') || text.endsWith('@')) return text.slice(0, -1);
  return text;
};

const parseSpoilerText = (text: string | null) =>
  text?.split(' ').map((word, idx) => {
    if (word.startsWith('#')) {
      return (
        <Fragment key={idx}>
          <RouterNoPropagationLink to={`/tag/${word.substring(1)}`}>{word}</RouterNoPropagationLink>
        </Fragment>
      );
    }
    if (word.startsWith('@')) {
      return (
        <Fragment key={idx}>
          <RouterNoPropagationLink to={`/ludzie/${word.substring(1)}`}>
            {word}
          </RouterNoPropagationLink>
        </Fragment>
      );
    }
    if (word.startsWith('http')) {
      return (
        <Fragment key={idx}>
          <ExternalNoPropagationLink href={word}>{word}</ExternalNoPropagationLink>
        </Fragment>
      );
    }
    return `${word} `;
  });

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
      const linkNode = node as HTMLLinkElement;
      if (linkNode.href.endsWith(`#${linkNode.textContent}`)) {
        return (
          <RouterNoPropagationLink to={`/tag/${node.textContent}`}>
            {`#${node.textContent}`}
          </RouterNoPropagationLink>
        );
      }
      if (linkNode.href.endsWith(`@${linkNode.textContent}`)) {
        return (
          <RouterNoPropagationLink to={`/ludzie/${node.textContent}`}>
            {`@${node.textContent}`}
          </RouterNoPropagationLink>
        );
      }
      if (linkNode.href.startsWith('spoiler:')) {
        return (
          <Spoiler>{parseSpoilerText(encodeUtf8(linkNode.href.replace('spoiler:', '')))}</Spoiler>
        );
      }
      if (linkNode.href.startsWith('http')) {
        return (
          <ExternalNoPropagationLink href={linkNode.href}>
            {linkNode.textContent}
          </ExternalNoPropagationLink>
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
