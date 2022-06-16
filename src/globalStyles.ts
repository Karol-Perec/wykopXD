import { GlobalStylesProps } from '@mui/material';

export const globalStyles: GlobalStylesProps['styles'] = ({ palette }) => ({
  'html, body, #root': {
    height: '100%',
    margin: 0,
  },
  body: {
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    overflowY: 'scroll',
    backgroundColor: palette.background.default,
  },
});
