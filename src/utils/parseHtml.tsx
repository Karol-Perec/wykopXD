import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Spoiler from '../components/UI/Spoiler';

const encodeUtf8 = (message: string) => {
  const query = new URLSearchParams(message);
  return Array.from(query).join();
};

const parseText = (text: string | null) => {
  if (!text || text === '\\n') return null;
  if (text.endsWith('#') || text.endsWith('@')) return text.slice(0, -1);
  return text;
};

const parseSpoilerText = (text: string | null) =>
  text?.split(' ').map((word) => {
    if (word.startsWith('#')) {
      return (
        <Link
          to={`/tag/${word.substring(1)}`}
          onClick={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
          component={RouterLink}
          underline='hover'
        >
          {word}
        </Link>
      );
    }
    if (word.startsWith('@')) {
      return (
        <Link
          to={`/ludzie/${word.substring(1)}`}
          onClick={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
          component={RouterLink}
          underline='hover'
        >
          {word}
        </Link>
      );
    }
    if (word.startsWith('http')) {
      return (
        <Link
          href={word}
          onClick={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
          underline='hover'
        >
          {word}
        </Link>
      );
    }
    return `${word} `;
  });

const parseElementNode = (node: ChildNode) => {
  switch (node.nodeName) {
    case 'BR':
      return <br />;
    case 'A': {
      const linkNode = node as HTMLLinkElement;
      if (linkNode.href.endsWith(`#${linkNode.textContent}`)) {
        return (
          <Link
            to={`/tag/${node.textContent}`}
            onClick={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            component={RouterLink}
            underline='hover'
          >
            #{node.textContent}
          </Link>
        );
      }
      if (linkNode.href.endsWith(`@${linkNode.textContent}`)) {
        return (
          <Link
            to={`/ludzie/${node.textContent}`}
            onClick={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            component={RouterLink}
            underline='hover'
          >
            @{node.textContent}
          </Link>
        );
      }
      if (linkNode.href.startsWith('spoiler:')) {
        return (
          <Spoiler>
            {parseSpoilerText(parseText(encodeUtf8(linkNode.href.replace('spoiler:', ''))))}
          </Spoiler>
        );
      }
      if (linkNode.href.startsWith('http')) {
        return (
          <Link
            href={linkNode.href}
            onClick={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            underline='hover'
          >
            {linkNode.textContent}
          </Link>
        );
      }
      return null;
    }
    default:
      return null;
  }
};

const parseNode = (node: ChildNode) => {
  if (node.nodeType === node.TEXT_NODE) {
    return parseText(node.textContent);
  }
  return parseElementNode(node);
};

export const parseHtml = (text: string) => {
  if (!text) {
    return null;
  }
  const parser = new DOMParser();
  const parsedText = parser.parseFromString(text, 'text/html');

  return Array.from(parsedText.body.childNodes).map((node) => parseNode(node));
};
