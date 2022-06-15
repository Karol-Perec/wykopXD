import { LinkProps, styled, Link } from '@mui/material';
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
  <Link
    href={href}
    onClick={handleStopPropagation}
    onMouseUp={handleStopPropagation}
    underline='hover'
  >
    {children}
  </Link>
);

export const RouterNoPropagationLink = ({
  to,
  children,
}: Pick<RouterLinkProps, 'to' | 'children'>) => (
  <Link
    to={to}
    onClick={handleStopPropagation}
    onMouseUp={handleStopPropagation}
    component={RouterLink}
    underline='hover'
    textOverflow='ellipsis'
  >
    {children}
  </Link>
);
