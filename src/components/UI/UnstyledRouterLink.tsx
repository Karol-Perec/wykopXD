/* eslint-disable react/jsx-props-no-spreading */
import { Link, LinkProps } from 'react-router-dom';

const UnstyledRouterLink = ({ children, ...props }: LinkProps) => (
  <Link {...props} style={{ color: 'inherit', textDecoration: 'inherit' }}>
    {children}
  </Link>
);

export default UnstyledRouterLink;
