import { styled } from '@mui/material/styles';
import { ReactComponent as Logo } from '../../../../assets/images/logo.svg';

export const Container = styled('div')({
  display: 'inline-block',
  boxSizing: 'border-box',
  width: '100%',

  aspectRatio: '16 / 9',
  '@supports not (aspect-ratio: 16 / 9)': {
    '::before': {
      float: 'left',
      paddingTop: '56.25%',
      content: '""',
    },

    '::after': {
      display: 'block',
      content: '""',
      clear: 'both',
    },
  },

  '@media (min-width: 600px)': {
    width: 190,
  },
});

export const PreviewImg = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

// export const DefaultPreviewImg = styled(Logo).attrs((props) => ({
//   style: { fill: props.theme.ON_SURFACE_COLOR },
//   height: '150px',
//   width: '150px',
// }))`
//   display: inline-block;
//   width: 100%;
//   height: 100%;
// `;
