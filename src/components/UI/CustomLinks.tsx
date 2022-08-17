import { LinkProps as MuiLinkProps, Link as MuiLink, styled } from '@mui/material';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { handleStopPropagation } from '~/utils/windowUtils';

const StyledMuiLink = styled(MuiLink)({
  wordBreak: 'break-word',
}) as typeof MuiLink;

export const ExternalNoPropagationLink = ({
  href,
  title,
  color,
  underline = 'hover',
  children,
}: Pick<MuiLinkProps, 'href' | 'children' | 'title' | 'underline' | 'color'>) => (
  <StyledMuiLink
    href={href}
    onClick={handleStopPropagation}
    onMouseUp={handleStopPropagation}
    underline={underline}
    color={color}
    title={title}
  >
    {children}
  </StyledMuiLink>
);

export const RouterNoPropagationLink = ({
  to,
  title,
  color,
  underline = 'hover',
  state,
  children,
}: Pick<RouterLinkProps, 'to' | 'children' | 'color' | 'title' | 'state'> &
  Pick<MuiLinkProps, 'underline'>) => (
  <StyledMuiLink
    component={RouterLink}
    to={to}
    onClick={handleStopPropagation}
    onMouseUp={handleStopPropagation}
    underline={underline}
    color={color}
    title={title}
    state={state}
  >
    {children}
  </StyledMuiLink>
);
