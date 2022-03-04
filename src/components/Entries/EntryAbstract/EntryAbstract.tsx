import { Typography, Avatar, Link } from '@mui/material';
import Media from 'components/Media/Media';
import { RefCallback } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Entry } from 'types';
import { calculateAprroximatedAge } from '../../../utils/dateUtils';
import Spoiler from '../../UI/Spoiler';
import * as S from './EntryAbstract.styles';

interface EntryAbstractProps {
  entry: Entry;
  containerRef?: RefCallback<HTMLElement>;
}

const encodeUtf8Message = (message: string) => {
  const query = new URLSearchParams(message);
  return Array.from(query).join();
};

const parseNode = (node: ChildNode) => {
  if (node.nodeType === node.TEXT_NODE) {
    if (node.textContent === '#') return null;
    if (node) return node.textContent;
  }

  switch (node.nodeName) {
    case 'BR':
      return <br />;
    case 'A': {
      const linkNode = node as HTMLLinkElement;
      if (linkNode.href.endsWith(`#${linkNode.textContent}`)) {
        return (
          <RouterLink to={`/tag/${node.textContent}`} onClick={(e) => e.stopPropagation()}>
            #{node.textContent}
          </RouterLink>
        );
      }
      if (linkNode.href.startsWith('spoiler:')) {
        return <Spoiler>{encodeUtf8Message(linkNode.href.replace('spoiler:', ''))}</Spoiler>;
      }
      if (linkNode.href.startsWith('http')) {
        return (
          <Link href={linkNode.href} onClick={(e) => e.stopPropagation()}>
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

const parseCommentHtmlText = (text: string) => {
  if (!text) {
    return null;
  }
  const parser = new DOMParser();
  const parsedText = parser.parseFromString(text, 'text/html');
  console.log(parsedText.body.childNodes);

  // const textWithTweakedAnchorElements = parsedText?.map?.((el) => {
  //   if (el.type === 'a') {
  //     if (el.props.href.match(/(?:s|^)@.+(?:s|$)/g)) {
  //       return (
  //         <Link key={el.key} to={`/ludzie/${el.props.href.substring(1)}`}>
  //           {el.props.children}
  //         </Link>
  //       );
  //     }
  //     if (el.props.href.match(/(?:s|^)spoiler:.+(?:s|$)/g)) {
  //       return <div>Spoiler xD</div>; // <Spoiler key={el.key}>{el.props.href}</Spoiler>;
  //     }
  //   }
  //   return el;
  // });

  return Array.from(parsedText.body.childNodes).map((node) => parseNode(node));
};

const EntryAbstract = ({ entry, containerRef }: EntryAbstractProps) => {
  const { media, user, body, id, date } = entry;
  const navigate = useNavigate();

  console.log(parseCommentHtmlText(body));

  return (
    <S.Card
      ref={containerRef}
      onClick={() => navigate(`/entry/${id}`)}
      onMouseDown={(e) => {
        if (e.button === 1) {
          window.open(`/entry/${id}`, '_blank', 'noopener,noreferrer');
        }
      }}
    >
      <S.UserSection>
        <Avatar alt={user.login} src={user.avatarUrl} variant='rounded' />
        <div>
          <Typography variant='subtitle1'>{user.login}</Typography>
          <Typography>{calculateAprroximatedAge(date)}</Typography>
        </div>
      </S.UserSection>
      <S.ContentSection>
        <Typography variant='body1'>{parseCommentHtmlText(body)}</Typography>
        {media && (
          <Media
            sourceUrl={media.url}
            previewUrl={media.previewUrl}
            linkTo={`/entry/${id}`}
            previewQuality='lq'
          />
        )}
      </S.ContentSection>
    </S.Card>
  );
};

export default EntryAbstract;
