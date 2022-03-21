import { LinkProps, styled, Link } from '@mui/material';
import { MouseEventHandler } from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

export const UnstyledRouterLink = styled(RouterLink)({
  color: 'inherit',
  textDecoration: 'inherit',
});

const stopPropagation: MouseEventHandler<HTMLElement> = (e) => e.stopPropagation();

export const ExternalNoPropagationLink = ({
  href,
  children,
}: Pick<LinkProps, 'href' | 'children'>) => (
  <Link href={href} onClick={stopPropagation} onMouseUp={stopPropagation} underline='hover'>
    {children}
  </Link>
);

export const RouterNoPropagationLink = ({
  to,
  children,
}: Pick<RouterLinkProps, 'to' | 'children'>) => (
  <Link
    to={to}
    onClick={stopPropagation}
    onMouseUp={stopPropagation}
    component={RouterLink}
    underline='hover'
  >
    {children}
  </Link>
);
