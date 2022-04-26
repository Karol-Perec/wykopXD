import { Fade, Modal } from '@mui/material';
import { ReactEventHandler } from 'react';
import * as S from './ImageViewer.styles';

interface ImageViewerProps {
  imageUrl: string;
  open: boolean;
  handleClose: ReactEventHandler;
}

const ImageViewer = ({ imageUrl, open, handleClose }: ImageViewerProps) => (
  <Modal open={open} onClose={handleClose} onBackdropClick={handleClose}>
    <Fade in={open}>
      <S.Container>
        <S.Image src={imageUrl} alt='' />
      </S.Container>
    </Fade>
  </Modal>
);

export default ImageViewer;
