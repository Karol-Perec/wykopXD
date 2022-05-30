import { Typography } from '@mui/material';
import { RefCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'types';
import { openInNewTab } from 'utils/windowUtils';
import LinkMedia from '../../LinkMedia/LinkMedia';
import { Card } from '../../UI/Card';
import * as S from './LinkDetails.styles';

interface LinkDetailsProps {
  data: Link;
  listMode?: boolean;
  containerRef?: RefCallback<HTMLElement>;
}

const LinkDetails = ({ data, listMode, containerRef }: LinkDetailsProps) => {
  const { id, body, plus18, previewUrl, sourceUrl, title } = data;
  const navigate = useNavigate();

  const handleNavigateToLinkPage = () => {
    if (document.getSelection()?.isCollapsed) {
      navigate(`/link/${id}`);
    }
  };

  return (
    <Card
      ref={containerRef}
      onClick={listMode ? handleNavigateToLinkPage : undefined}
      onMouseUp={listMode ? openInNewTab(`/link/${id}`) : undefined}
      listMode={listMode}
    >
      <Typography variant='h2'>{title}</Typography>
      <LinkMedia
        sourceUrl={sourceUrl}
        imageUrl={previewUrl}
        linkTo={`/link/${id}`}
        previewQuality='lq'
        plus18={plus18}
      />
      <Typography variant='body1'>{body}</Typography>
    </Card>
  );
};

export default LinkDetails;
