import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { LinkProps as MuiLinkProps, styled, Link as MuiLink } from '@mui/material';
import { handleStopPropagation } from 'utils/windowUtils';

export const UnstyledRouterLink = styled(RouterLink)({
  color: 'inherit',
  textDecoration: 'inherit',
});

export const ExternalNoPropagationLink = ({
  href,
  children,
}: Pick<MuiLinkProps, 'href' | 'children'>) => (
  <MuiLink
    href={href}
    onClick={handleStopPropagation}
    onMouseUp={handleStopPropagation}
    underline='hover'
  >
    {children}
  </MuiLink>
);

export const RouterNoPropagationLink = ({
  to,
  children,
  color,
  title,
  underline,
}: Pick<RouterLinkProps, 'to' | 'children' | 'color' | 'title'> &
  Pick<MuiLinkProps, 'underline'>) => (
  <MuiLink
    to={to}
    onClick={handleStopPropagation}
    onMouseUp={handleStopPropagation}
    component={RouterLink}
    underline={underline || 'hover'}
    color={color}
    textOverflow='ellipsis'
    title={title}
  >
    {children}
  </MuiLink>
);
