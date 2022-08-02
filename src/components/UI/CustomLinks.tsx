import { LinkProps as MuiLinkProps, styled, Link as MuiLink } from '@mui/material';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { handleStopPropagation } from 'utils/windowUtils';

export const UnstyledRouterLink = styled(RouterLink)({
  color: 'inherit',
  textDecoration: 'inherit',
});

export const ExternalNoPropagationLink = ({
  href,
  title,
  children,
}: Pick<MuiLinkProps, 'href' | 'children' | 'title'>) => (
  <MuiLink
    href={href}
    onClick={handleStopPropagation}
    onMouseUp={handleStopPropagation}
    underline='hover'
    title={title}
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
  state,
}: Pick<RouterLinkProps, 'to' | 'children' | 'color' | 'title' | 'state'> &
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
    state={state}
  >
    {children}
  </MuiLink>
);
