import { LinkProps, styled, Link as MuiLink } from '@mui/material';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { handleStopPropagation } from '../../utils/windowUtils';

export const UnstyledRouterLink = styled(RouterLink)({
  color: 'inherit',
  textDecoration: 'inherit',
});

export const ExternalNoPropagationLink = ({
  href,
  children,
}: Pick<LinkProps, 'href' | 'children'>) => (
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
}: Pick<RouterLinkProps, 'to' | 'children' | 'color'>) => (
  <MuiLink
    to={to}
    onClick={handleStopPropagation}
    onMouseUp={handleStopPropagation}
    component={RouterLink}
    underline='hover'
    color={color}
    textOverflow='ellipsis'
  >
    {children}
  </MuiLink>
);
