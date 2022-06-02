import { Typography } from '@mui/material';
import { RefCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'types';
import { openInNewTab } from 'utils/windowUtils';
import LinkMedia from '../../LinkMedia/LinkMedia';
import { Card } from '../../UI/Card';

interface LinkDetailsProps {
  data: Link;
  listMode?: boolean;
  containerRef?: RefCallback<HTMLElement>;
}

const LinkDetails = ({ data, listMode, containerRef }: LinkDetailsProps) => {
  const { id, body, plus18, previewUrl, sourceUrl, title } = data;
  const navigate = useNavigate();

  const handleNavigateToLink = listMode
    ? () => {
        if (document.getSelection()?.isCollapsed) {
          navigate(`/link/${id}`);
        }
      }
    : undefined;

  const handleOpenLinkInNewTab = listMode ? openInNewTab(`/link/${id}`) : undefined;

  return (
    <Card
      ref={containerRef}
      onClick={handleNavigateToLink}
      onMouseUp={handleOpenLinkInNewTab}
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
